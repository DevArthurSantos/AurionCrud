import Logo, { LogoSizing } from "../logo";


function Popup() {
  return (
    <>
      <div className="animate-fade-in-out opacity-0 text-black-600 bg-white-300 h-screen w-full flex items-center justify-center">
        
        <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
          <p className="text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">
            <Logo sizing={LogoSizing.big} />
          </p>
          <p className="mt-2 text-xl leading-relaxed text-center text-gray-200">
            Developing your ideas with technology.
          </p>
          <p className="mt-2 text-xl leading-relaxed text-center text-gray-200">
            Simplifying your path to success.
          </p>
        </div>

      </div>
    </>)
}

export default Popup;