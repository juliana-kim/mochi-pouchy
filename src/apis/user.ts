import { axiosInstance } from "@src/apis/index.ts";
import { GetUserLoginResponse, GetUserResponse } from "./dto/userDTO";

export async function getUserLogin() : Promise<{isLogin: boolean}> {
  return axiosInstance
    .get<GetUserLoginResponse>("api/user/login")
    .then(res => res.data);
}

export const getUser = ({id}:{id:number}) => {
    return axiosInstance
      .get<GetUserResponse>("/api/user/" + id)
      .then(res => res.data);
}