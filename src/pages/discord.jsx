import React from "react"

const DiscordRedirect = () => {
  React.useEffect(() => {
    window.location.href = "https://discord.gg/wg8ybKYzKK"
  }, [])
  return (
    <>
      <meta
        http-equiv="refresh"
        content="0; URL=https://discord.gg/wg8ybKYzKK"
      />
      <link rel="canonical" href="https://discord.gg/wg8ybKYzKK"></link>
    </>
  )
}
export default DiscordRedirect
