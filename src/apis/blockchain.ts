import { axiosInstance } from ".";
import { NFTMetadataInterface } from "./dto/blockchainDTO";

export async function getMetadata(uri: string) {
    try {
        console.log('>>>uri', uri)
        const metadataURI = uri.startsWith("ipfs://") ? uri.replace("ipfs://", "https://ipfs.io/ipfs/") : uri

        const response = await axiosInstance.get<NFTMetadataInterface>(metadataURI)
        return response.data    
    } catch (error) {
        console.error('Error fetching metadata', error)
    }
    
}