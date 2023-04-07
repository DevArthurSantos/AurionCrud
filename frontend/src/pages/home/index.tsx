import { useEffect, useRef, useState } from "react"

import { CustomerOptions, useAPI } from "@/infra/utils/Global/api"
import useGetIp from "@/infra/utils/Hooks/useGetIp"
import Popup from "@foundation/components/popup"
import HomeSection from "@foundation/patterns/sections/home"
import { useAppContext } from "@/infra/utils/Hooks/useAppContext"

type token = {
  token?: string
}

function Home() {
  const inputtokenRef = useRef<HTMLInputElement>(null)
  const userIp = useGetIp();
  const [token, settoken] = useState<token>();
  const [popUpVisibility, setPopUpVisibility] = useState<boolean>(true)
  const { state } = useAppContext();

  const API = new useAPI()

  useEffect(() => {
    if (userIp) {
      try {
        async function fetchData() {
          const data = await API.getCUSTOMER({ ip: userIp, option: CustomerOptions.new })
          settoken(data)
        }
        fetchData();
      } catch (e) {

      }
    }
  }, [userIp]);

  useEffect(() => {

    setTimeout(() => {
      setPopUpVisibility(!popUpVisibility)
    }, 4100);

  }, [])

  useEffect(() => {
    if (!token) return;
    state.token = String(token.token);
  }, [token, inputtokenRef]);


  return (
    <>
      {popUpVisibility && <Popup />}
      {!popUpVisibility && <HomeSection />}
    </>
  )
}

export default Home
