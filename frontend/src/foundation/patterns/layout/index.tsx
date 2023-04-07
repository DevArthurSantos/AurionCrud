import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";

export type LayoutProps = {
  children: ReactNode
}




const Layout = ({ children }: LayoutProps) => {
  
  return (
    <div className='font-poppins bg-gray-800'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;