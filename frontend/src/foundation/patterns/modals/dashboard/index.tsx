import ButtonPrimary from "@/foundation/components/buttons/buttonPrimary"
import InputText from "@/foundation/components/inputs/text"
import Logo, { LogoSizing } from "@/foundation/components/logo"
import WarningsPopUp from "@/foundation/components/popup/warning"
import { useAppContext } from "@/infra/utils/Hooks/useAppContext"
import { useState } from "react"
import { FaCopy } from "react-icons/fa"
import warninhSong from "@public/assets/songs/warning.mp3"
import InstanceCreate from "../intanceCreate"
import { useAPI } from "@/infra/utils/Global/api"
import InstanceSelectModal from "../InstanceSelectModal"

type DashboardProps = {
  handlerDashboard(): void
  userInfos?: {
    token?: string,
    requests?: number,
    instances?: []
  }
}

export type InstanceProps = {
  id: string
  instanceName: string
}


function Dashboard({ handlerDashboard, userInfos }: DashboardProps) {

  const { state } = useAppContext()
  const [dashboardTemplates, setDashboardTemplates] = useState(false)
  const [warningsPopUpText, setWarningsPopUpText] = useState("")
  const [createInstanceModal, setCreateInstanceModal] = useState(false)
  const [selectInstanceModal, setSelectInstanceModal] = useState(false)
  const [instances, setInstances] = useState<InstanceProps[]>()
  const [templateName, setTemplateName] = useState("")
  const templatesList = ["News", "Products", "Songs"]


  function closeDashboard() {
    state.dashboard = false
  }

  function handlerDashboardTemplates() {
    setDashboardTemplates(!dashboardTemplates)
  }
  function copyUrl() {
    navigator.clipboard.writeText(`${state.api_url}${state.token}`)
    document.getElementById("copyUrl")?.classList.add("copy-url-success")
    setTimeout(() => {
      document.getElementById("copyUrl")?.classList.remove("copy-url-success")
    }, 100);
  }

  function handlerWarningsPopUpText(text: string) {
    setWarningsPopUpText(text)
    const audio = new Audio(warninhSong)
    audio.volume = .1
    audio.play()
    setTimeout(() => {
      setWarningsPopUpText("")
    }, 3500);
  }

  function getInstances() {
    if (!userInfos?.instances?.length || userInfos.instances.length < 0) {
      handlerWarningsPopUpText("voce não tem instancias")
      setCreateInstanceModal(true)
      return
    }

    return userInfos.instances
  }

  async function getTemplates(template: string) {
    setTemplateName(template.toLowerCase())
    const instancesList = getInstances()
    if (instancesList) {
      setInstances(instancesList)
      setSelectInstanceModal(!selectInstanceModal)
    }
  }

  return (
    <div className="flex backdrop-blur-[2px] overflow-hidden bg-black-600 bg-opacity-[.5] absolute top-0 left-0 z-50 items-center justify-center h-screen w-[100%]">
      {/* <!-- Main modal --> */}
      <div className="w-full h-full max-w-3xl md:h-auto">
        {/* <!-- Modal content --> */}
        <div className=" bg-white rounded-md bg-white-500 shadow-sm">
          {/* <!-- Modal header --> */}
          <div className="flex items-baseline justify-between p-4 border-b rounded-t ">

            <div className="flex items-baseline w-[55%] gap-3">
              <InputText InitialValue={`${state.api_url}${state.token}`} placeholder="Your Url" />
              <FaCopy id="copyUrl" size={15} onClick={copyUrl} />
            </div>

            <div className="flex gap-1 relative">
              <div className="flex flex-col gap-2">
                <a onClick={handlerDashboardTemplates}>
                  <ButtonPrimary optionalClass="py-1 px-7 lg:py-2 lg:px-8 bg-orange-500">
                    Templates
                  </ButtonPrimary>
                </a>

                <ul className={"absolute translate-y-14 py-2 gap-2 flex flex-col w-[80%] text-center bg-black-500 rounded-md mt-1 text-sm text-white-300 "
                  + (dashboardTemplates ? "animate-fade-in opacity-1" : "opacity-0")}>

                  {

                    templatesList.map((templateName) => {
                      return (
                        <li
                          onClick={() => getTemplates(templateName)}
                          className="py-3 cursor-pointer hover:text-orange-500"
                          key={templateName}
                        >
                          {templateName}
                        </li>
                      )
                    })

                  }

                </ul>
              </div>

              <button type="button" onClick={handlerDashboard} className="text-black-600 bg-transparent hover:bg-gray-200 hover:text-black-600 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
          </div>

          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-black-500 ">
              Your access token to AurionCrud API has been generated successfully! Please note that it has a validity of 12 hours or it can be revoked if you reach the limit of 150 requests.
            </p>
            <p className="text-base leading-relaxed text-black-500 ">
              We have a very useful feature for you: templates. With them, it is possible to propagate existing data in your instance quickly and easily. We have templates available for various types of data, such as music, news, and products, for example. To see the full list of available templates, simply click on templates.
            </p>
            <p className="text-base leading-relaxed text-black-500 ">
              This feature is especially useful for users who work with a lot of repetitive data or who want to create similar instances from an existing template. Be sure to try out the templates feature on our AurionCrud API and make your data management even more efficient!
            </p>
          </div>

          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
            <Logo sizing={LogoSizing.small} />
          </div>
        </div>
      </div>


      {createInstanceModal && <InstanceCreate
        setCreateInstanceModal={() => setCreateInstanceModal(!createInstanceModal)}
        handlerWarningsPopUpText={() => handlerWarningsPopUpText("Dados propagados com sucesso")}
        templateName={templateName}
      />
      }

      {selectInstanceModal && <InstanceSelectModal
        setSelectInstanceModal={() => {
          handlerDashboardTemplates()
          setSelectInstanceModal(!selectInstanceModal)
        }}
        handlerWarningsPopUpText={() => {
          handlerDashboardTemplates()
          handlerWarningsPopUpText("Dados propagados com sucesso")
        }}
        templateName={templateName}
        instances={instances}
      />
      }

      {warningsPopUpText && <WarningsPopUp text={warningsPopUpText} />}
    </div>

  )
}

export default Dashboard