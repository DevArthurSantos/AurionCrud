import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function newClient(req: NextApiRequest, res: NextApiResponse){
  try {
    const { query } = req
    const response = await axios.get(`https://aurioncrudbackend.vercel.app/api/v1/customer/my/${query.token}`);
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ message: error})
  }

}
