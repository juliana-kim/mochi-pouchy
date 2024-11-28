import { GetWalletFTResponse, GetWalletNFTsResponse } from "@src/apis/dto/walletDTO"
import { axiosInstance } from "."

export async function getWalletFT() {
    return await axiosInstance
        .get<GetWalletFTResponse>("/api/wallet/ft")
        .then(res => res.data)
}


export const getWalletNFT = async () => {
    return await axiosInstance
        .get<GetWalletNFTsResponse>("/api/wallet/nft")
        .then(res => res.data)
}
