import { ReactNode } from "react";

type ButtonPrimaryProps = {
  children: ReactNode
  optionalClass?: string
  id?: string
}

function ButtonPrimary({ children, id = "", optionalClass }: ButtonPrimaryProps) {
  
  const defaultStyled = "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg hover:shadow-orange-md transition-all outline-none"

  return (
    <button id={id}
      className={optionalClass ? `${optionalClass} ${defaultStyled}` : defaultStyled}>
      {children}
    </button>
  );
};

export default ButtonPrimary;