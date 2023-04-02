import { FaGlobe } from "react-icons/fa"
import { SiDiscord, SiGithub } from "react-icons/si"

function Social() {

  function discordClick() {
    window.open("https://discord.gg/BPwWTdGNu3");
  }
  function siteClick() {
    // router.push("/")
  }
  function gitHubClick() {
    window.open("https://github.com/AurionGroup");
  }

  return (
    <>
      <SiGithub title="Github" className="cursor-pointer text-2xl" color="white" onClick={gitHubClick} />
      <FaGlobe title="Home" className="cursor-pointer text-2xl" color="white" onClick={siteClick} />
      <SiDiscord title="Discord" className="cursor-pointer text-2xl" color="white" onClick={discordClick} />
    </>
  )
}

export default Social;