import axios from "axios"
import { useEffect, useRef, useState } from "react"

import { ApiCustomerEnum } from "@/infra/utils/Global/env"
import useGetIp from "@/infra/utils/Hooks/useGetIp"
import Popup from "../../foundation/components/popup"
import HomeSection from "@/infra/components/patterns/sections/home"
import { useAppContext } from "@/infra/utils/Hooks/useAppContext"


type UserToken = {
  token: string
}

function Home() {
  const inputTokenRef = useRef<HTMLInputElement>(null)
  const userIp = useGetIp();
  const [data, setData] = useState<UserToken>();
  const [popUpVisibility, setPopUpVisibility] = useState<boolean>(true)
  const { state } = useAppContext();

  useEffect(() => {
    if (userIp) {
      try {
        async function fetchData() {
          const response = await axios.get<UserToken>(`${ApiCustomerEnum.new}${userIp}`);
          setData(response.data);
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
    if (!data) return;
    state.token = data.token;
  }, [data, inputTokenRef]);


  return (
    <>
      {popUpVisibility && <Popup />}
      {!popUpVisibility && <HomeSection />}
    </>
  )
}

export default Home
