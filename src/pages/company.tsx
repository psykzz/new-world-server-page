import React from "react";

const DISCORD = "https://discord.gg/3yyvGksBdU";

const CompanyRedirect = () => {
  React.useEffect(() => {
    window.location.href = DISCORD;
  }, [])
  return (
    <>
      <meta
        http-equiv="refresh"
        content={`0; URL=${DISCORD}`}
      />
      <link rel="canonical" href={DISCORD}></link>
    </>
  )
}
export default CompanyRedirect
