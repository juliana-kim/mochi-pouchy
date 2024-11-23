import {axiosInstance} from "@src/apis/index.ts";

export async function getUserLogin() : Promise<{isLogin: boolean}> {
  return axiosInstance
    .get<{ isLogin:boolean }>("api/user/login")
    .then(res => res.data);
}

export const getUser = ({id}:{id:number}) => {
    return axiosInstance
      .get<{ id: number, name: string, email: string, ca: string }>("/api/user/" + id)
      .then(res => res.data);
}