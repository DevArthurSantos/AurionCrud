import ButtonOutline from "@/foundation/components/buttons/buttonOutline"
import { InstanceOptions, useAPI } from "@/infra/utils/Global/api"
import { useAppContext } from "@/infra/utils/Hooks/useAppContext"
import { useState } from "react"


type InstanceCreateProps = {
  setCreateInstanceModal(): void
  handlerWarningsPopUpText(): void
  templateName: string
}
function InstanceCreate({ setCreateInstanceModal, handlerWarningsPopUpText, templateName }: InstanceCreateProps) {

  const { state } = useAppContext()
  const [instanceName, setInstanceName] = useState("")
  const api = new useAPI()

  async function createInstance() {
    return await api.getINSTANCE({ option: InstanceOptions.new, token: state.token, instanceName })
  }

  async function setTempalte(token: string, instanceID: string, templateName: string) {

    document.getElementById("createInstance")?.classList.remove("copy-url-success")

    handlerWarningsPopUpText()

    return await api.setTEMPLATE({ token, instanceID, templateName })

  }

  async function createAndSetTempalte() {
    setCreateInstanceModal()
    const instance = await createInstance()
    document.getElementById("createInstance")?.classList.add("copy-url-success")

    return setTempalte(state.token, String(instance?.instance_id), String(templateName))
  }


  return (
    <div id="createInstance" className="flex absolute top-0 left-0 z-50 items-center justify-center h-screen w-[100%]">

      <div className="flex items-center justify-center flex-col gap-10 bg-white-300 p-[15px] w-auto h-auto text-center rounded-md shadow-md text-black-600">

        <div className="flex items-center w-full justify-between font-bold gap-10">
          <p>Create an instance to hold the data</p>
          <button type="button"
            onClick={setCreateInstanceModal}
            className="text-black-600 hover:text-orange-500 ml-auto">
            <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <input type="text"
          onChange={e => setInstanceName(() => e.target.value)}
          value={instanceName}
          className="w-full outline-none bg-transparent border-b-[1px] border-x-black-600 placeholder:text-black-600 font-semibold"
          placeholder="New instance name" />


        <a onClick={createAndSetTempalte}>
          <ButtonOutline>
            Create
          </ButtonOutline>
        </a>
      </div>
    </div>

  )
}

export default InstanceCreate