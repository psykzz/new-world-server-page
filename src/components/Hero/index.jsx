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

  console.log(serverData)

  const maintenance = serverData.status === 4
  const onlineStatus = `${serverData.connectionCount} / ${serverData.connectionCountMax} Online`
  const queue =
    serverData.queueCount > 0 ? `~ ${serverData.queueCount} in queue` : null

  const serverStatus = maintenance ? (
    <h4 className="subheader">Server Maintenance</h4>
  ) : (
    <>
      <h4 className="subheader">{onlineStatus}</h4>
      {queue && <h5 className="subheader">{queue}</h5>}
    </>
  )

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
