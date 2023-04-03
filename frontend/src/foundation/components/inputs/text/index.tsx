import { SetStateAction, useEffect, useState } from "react";

type InputTextProps = {
  placeholder: string;
  InitialValue?: string;
}

function InputText({ placeholder, InitialValue }: InputTextProps) {

  const [state, setState] = useState("")

  useEffect(() => {
    if (!InitialValue) return
    setState(state => InitialValue)
  }, [InitialValue])


  return (
    <>
      <div className="relative z-0 mb-6 w-full group flex">

        <input type="text" onChange={(e) => {setState(oldValue => e.target.value)}} className="block py-2.5 px-0 w-full text-sm text-black-500 bg-transparent border-none appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={state} required />

        <label className="absolute text-sm text-black-600 font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{placeholder}</label>
      </div>
    </>
  )
}

export default InputText