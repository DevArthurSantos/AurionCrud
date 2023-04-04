import axios from "axios"

export enum CustomerOptions {
  new = "new",
  my = "my"
}
export enum InstanceOptions {
  new = "new",
  erase = "erase",
  scrap = "scrape"
}
export type userInfos = {
  token: string,
  requests: number,
  instances: []
}

export type CustomerProps = {
  ip?: string
  token?: string
  option: CustomerOptions
}
export type GetInstanceProps = {
  instanceName?: string
  token?: string
  option: InstanceOptions
}

export type NewInstanceProps = {
  id: string,
  instance_id: string,
  customer_token: string
}

export type FragmentProps = {
  ip?: string
  token?: string
}
export type TemplateProps = {
  token: string,
  instanceID: string,
  templateName: string
}

export class useAPI {

  private URL_API = "https://aurioncrud.vercel.app/api/v1"
  private API_CUSTOMER = "https://aurioncrud.vercel.app/api/v1/customer"
  private API_INSTANCE = "https://aurioncrud.vercel.app/api/v1/instance"
  private API_FRAGMENT = "https://aurioncrud.vercel.app/api/v1/fragment"
  private API_TEMPLATE = "https://aurioncrud.vercel.app/api/v1/template"
  constructor() {

  }


  async getCUSTOMER({ token, ip, option }: CustomerProps) {

    if (option === CustomerOptions.new) {
      const response = await axios.get<userInfos>(`${this.API_CUSTOMER}/new/${ip}`);
      return response.data
    }
    if (option === CustomerOptions.my) {
      const response = await axios.get<userInfos>(`${this.API_CUSTOMER}/my/${token}`);
      return response.data
    }


  }
  async getINSTANCE({ token, instanceName, option }: GetInstanceProps) {
    if (option === InstanceOptions.new) {
      const response = await axios.get<NewInstanceProps>(`${this.API_INSTANCE}/${token}/new/${instanceName}`);
      return response.data
    }

    if (option === InstanceOptions.erase) {
      const response = await axios.get<NewInstanceProps>(`${this.API_INSTANCE}/${token}/erase/${instanceName}`);
      return response.data
    }

    if (option === InstanceOptions.scrap) {
      const response = await axios.get<NewInstanceProps>(`${this.API_INSTANCE}/${token}/scrap/${instanceName}`);
      return response.data
    }
  }
  async getFRAGMENT({ token, ip }: FragmentProps) {
  }
  async setTEMPLATE({ token, instanceID, templateName }: TemplateProps) {
    console.log(token, instanceID, templateName)
    const response = await axios.put(`${this.API_TEMPLATE}/${token}/${instanceID}/${templateName}`);
    return
  }


}

export default new useAPI();