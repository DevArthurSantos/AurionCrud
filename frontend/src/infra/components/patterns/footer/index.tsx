import { FaInstagram, FaDiscord, FaGithub } from "react-icons/fa"
import Logo from "@/foundation/components/logo";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-10 pb-10">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Logo />
          <p className="mb-4">
            <strong className="font-medium">AurionCrud</strong> It is one of the <strong>AurionGrup</strong> tools to assist in the performance and productivity of the
            your project.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <a href="https://github.com/DevArthurSantos" target="_blank" className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FaGithub className="h-6 w-6 cursor-pointer" />
            </a>
            <a href="https://discord.gg/BPwWTdGNu3" target="_blank" className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FaDiscord className="h-6 w-6 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/dev.arthurs" target="_blank" className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FaInstagram className="h-6 w-6 cursor-pointer" />
            </a>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - AurionGrup</p>
        </div>

        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Prices</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Donations
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;