import { AppContext } from "@/infra/context";
import { useContext } from "react";



export function useAppContext() {

  const context = useContext(AppContext)

  return context
}