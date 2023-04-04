import { createContext } from "react";

export const INITIAL_STATE = {
  token: "",
  dashboard: false,
  api_url: "https://aurioncrudbackend.vercel.app/api/v1/"
}

export const AppContext = createContext({
  state: INITIAL_STATE
})