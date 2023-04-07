import ButtonOutline from "@/foundation/components/buttons/buttonOutline"
import { useAPI } from "@/infra/utils/Global/api"
import { useAppContext } from "@/infra/utils/Hooks/useAppContext"
import { useState } from "react"
import { InstanceProps } from "../dashboard"


type InstanceCreateProps = {
  setSelectInstanceModal(): void
  handlerWarningsPopUpText(): void
  templateName: string
  instances: InstanceProps[] | undefined
}

function InstanceSelectModal({ setSelectInstanceModal, handlerWarningsPopUpText, templateName, instances }: InstanceCreateProps) {

  const { state } = useAppContext()
  const api = new useAPI()

  async function setTempalte(token: string, instanceID: string, templateName: string) {

    api.setTEMPLATE({ token, instanceID, templateName }).then(() => {
      document.getElementById("createInstance")?.classList.remove("copy-url-success")
      setSelectInstanceModal()
      handlerWarningsPopUpText()
    }).catch((error: any) => {
      console.error(error)
    })

  }


  return (
    <div id="createInstance" className="flex absolute top-0 left-0 z-50 items-center justify-center h-screen w-[100%]">

      <div className="flex items-center justify-center flex-col gap-10 bg-white-300 p-[15px] w-auto h-auto text-center rounded-md shadow-md text-black-600">

        <div className="flex items-center w-full justify-between font-bold gap-10">
          <p>Click to select the desired instance</p>
          <button type="button"
            onClick={setSelectInstanceModal}
            className="text-black-600 hover:text-orange-500 ml-auto">
            <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <ul className="w-[80%] gap-3 flex flex-col text-sm text-black-600 font-bold border-black-600 border-[1px] rounded-sm">
          <p className="border-b-[1px] p-2">Your instances</p>
          {

            instances?.map((instance: InstanceProps) => {
              return (

                <li onClick={() => {
                  setTempalte(state.token, instance.id, templateName)
                }}
                  className="cursor-pointer hover:text-orange-500 font-medium"
                  key={instance.instanceName}
                >
                  {instance.instanceName}
                </li>
              )
            })

          }

        </ul>

      </div>
    </div>

  )
}

export default InstanceSelectModal