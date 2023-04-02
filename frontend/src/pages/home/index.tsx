import axios from "axios"

import Layout from "@/infra/components/patterns/layout"
import { ApiCustomerEnum } from "@/infra/utils/Global/env"
import useGetIp from "@/infra/utils/Hooks/useGetIp"
import { useEffect, useRef, useState } from "react"
import Popup from "../../foundation/components/popup"
import Hero from "@/infra/components/patterns/sections/hero"
import Feature from "@/infra/components/patterns/sections/feature"


type UserToken = {
  token: string
}

function Home() {
  const inputTokenRef = useRef<HTMLInputElement>(null)
  const userIp = useGetIp();
  const [data, setData] = useState<UserToken>();
  const [popUpVisibility, setPopUpVisibility] = useState<boolean>(true)

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
    }, 3799);

  }, [])

  useEffect(() => {
    console.log(data)
  }, [data, inputTokenRef]);


  return (
    <>
      {popUpVisibility && <Popup />}
      {!popUpVisibility &&
        <>
          <Layout>
            <Hero />
            <Feature />
          </Layout>
        </>
      }
    </>
  )
}

export default Home
