import { Link } from "gatsby"
import React from "react"

import * as styles from "./hero.module.css"

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
    fetch("https://nwdb.info/server-status/servers.json?worldId=3f1cd819f97e")
      .then(res => res.json())
      .then(data => data.success && data.data.servers[0])
      .then(parseServerData)
      .then(setServerData)
  }, [])

  const serverStatus = React.useMemo(() => {
    // Unable to get data from server
    if(serverData.status === undefined) {
      return null;
    }

    // Server is down
    if (serverData.status === 4) { 
      return <h4 className="subheader">Server Maintenance</h4>;
    }

    // Check if we have a queue and contruct the queue message
    const hasQueue = serverData.queueCount > 0;
    const onlineStatus = `${serverData.connectionCount} / ${serverData.connectionCountMax} Online`
    return <>
        <h4 className="subheader">{onlineStatus}</h4>
        {hasQueue && <h5 className="subheader">~ {serverData.queueCount} in queue</h5>}
      </>;
  }, [serverData]);

  return (
    <div className={styles.content}>
      <h3>New World</h3>
      <h1>Ishtakar</h1>
      {serverStatus}
      <Link className={styles.discord} to="/discord">
        Join Discord
      </Link>
    </div>
  )
}
