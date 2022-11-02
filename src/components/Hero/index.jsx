import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"

import * as styles from "./hero.module.css"

const worldDataEndpoint =
  "https://nwdb.info/server-status/servers_24h.json?worldId=cf6abf55af2a"

const parseServerData = data => {
  const [
    connectionCountMax,
    connectionCount,
    queueCount,
    queueTime,
    worldName,
    worldSetName,
    region,
    status,
    active,
    worldId,
  ] = data
  return {
    connectionCountMax,
    connectionCount,
    queueCount,
    queueTime,
    worldName,
    worldSetName,
    region,
    status,
    active,
    worldId,
  }
}

export const Hero = () => {
  const [serverData, setServerData] = React.useState({})

  React.useEffect(() => {
    fetch(worldDataEndpoint)
      .then(res => res.json())
      .then(data => data.success && data.data.servers[0])
      .then(parseServerData)
      .then(setServerData)
  }, [])

  const serverStatus = React.useMemo(() => {
    // Unable to get data from server
    if (serverData.status === undefined) {
      return null
    }

    // Server is down
    if (serverData.status === 4) {
      return <h4 className="subheader">Server Maintenance</h4>
    }

    // Check if we have a queue and contruct the queue message
    const hasQueue = serverData.queueCount > 0
    const onlineStatus = `${serverData.connectionCount} / ${serverData.connectionCountMax} Online`
    return (
      <>
        <h4 className="subheader">{onlineStatus}</h4>
        {hasQueue && (
          <h5 className="subheader">~ {serverData.queueCount} in queue</h5>
        )}
      </>
    )
  }, [serverData])

  return (
    <div className={styles.content}>
      <Helmet>
        <link rel="prefetch" href={worldDataEndpoint} as="fetch" />
      </Helmet>
      <h3>New World</h3>
      <h1>{serverData.worldName}</h1>
      {serverStatus}
      {/*<Link className={styles.discord} to="/discord">
        Join Discord
      </Link>*/}
    </div>
  )
}
