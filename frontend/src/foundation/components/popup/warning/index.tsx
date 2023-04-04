import { BiError } from "react-icons/bi"



function WarningsPopUp({ text }: { text: string }) {
  return (
    <>
      <div className={ text && "transition-transform animate-fade-warning" + " flex  items-center gap-[5px] right-0 bg-white-300 p-[15px] w-auto fixed top-[10%] rounded-md text-black-600 border-yellow-500 translate-x-[350px] border-[1px]" }>
        <BiError fontSize={20} />
        {text}
      </div>
    </>
  )
}

export default WarningsPopUp