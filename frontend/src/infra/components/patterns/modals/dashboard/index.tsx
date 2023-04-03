import ButtonPrimary from "@/foundation/components/buttons/buttonPrimary"
import InputText from "@/foundation/components/inputs/text"
import Logo, { LogoSizing } from "@/foundation/components/logo"
import { useAppContext } from "@/infra/utils/Hooks/useAppContext"
import { useState } from "react"
import { FaCopy } from "react-icons/fa"


type DashboardProps = {
  handlerDashboard(): void
}

function Dashboard({ handlerDashboard }: DashboardProps) {

  const { state } = useAppContext()
  const [dashboardTemplates, setDashboardTemplates] = useState(false)

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

  return (
    <div className="flex absolute top-0 left-0 z-50 items-center justify-center h-screen w-[100%]">
      {/* <!-- Main modal --> */}
      <div tabIndex={-1} className="p-2 bg-white-500 overflow-x-hidden overflow-y-auto md:inset-0">
        <div className=" w-full h-full max-w-3xl md:h-auto">
          {/* <!-- Modal content --> */}
          <div className=" bg-white rounded-lg shadow">
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
                    <li className="py-3 cursor-pointer hover:text-orange-500" >
                      Songs
                    </li>
                    <li className="py-3 cursor-pointer hover:text-orange-500" >
                      News
                    </li>
                    <li className="py-3 cursor-pointer hover:text-orange-500" >
                      Products
                    </li>
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
      </div>

    </div>
  )
}

export default Dashboard