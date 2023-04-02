import { ReactNode } from "react";

type ButtonPrimaryProps = {
  children: ReactNode
  optionalClass?: string
}

const ButtonPrimary = ({ children, optionalClass }: ButtonPrimaryProps) => {
  return (
    <button
      className={"py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " + optionalClass}>
      {children}
    </button>
  );
};

export default ButtonPrimary;