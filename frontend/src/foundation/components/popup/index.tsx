import Logo, { LogoSizing } from "../logo";


function Popup() {
  return (
    <>
      <div className="animate-fade-in opacity-0 text-black-600 flex justify-center bg-white-300 items-end text-center sm:block">
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>
        <div className="inline-block text-left rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="bg-red items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
            <div className="grid grid-cols-1">
              <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
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
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default Popup;