import { BadgeTypes, ChainTypes, TokenStandardType } from "./blockchainDTO"

export interface FTCommonInterface {
    badge: BadgeTypes
    bapp_id?: number
    blocked_reason?: string
    chain: ChainTypes
    contract_address: string
    decimals: number
    developer?: string
    minter_name_map?: string // 주소를 민터 이름으로 변환
    name: string
    official_site?: string
    symbol: string
    symbol_img: string
}

export interface FTPriceInterface {
    percent_change?: number
    price?: number
    status?: 'success' | 'failed' | 'not supported'
}

export interface SubscriptionFTInterface {
    balance: string
    ft_common: FTCommonInterface
    price?: FTPriceInterface
}

export interface GetWalletFTResponse { 
    ft_list: SubscriptionFTInterface[]
    total_amount_krw: string
}

export interface NFTCollectionInterface {
    chain: ChainTypes
    contract_address: string
    name: string
    name_eng: string
    image?: string
    badge: BadgeTypes
    blocked_reason?: string
    content?: string
    developer?: string
    official_site?: string
    bapp_id?: number
    minter_name_map?: string
    count?: number
    token_standard: TokenStandardType
  }
  
  export type TokenType = 'nft' | 'mt'
  
  export interface NFTInterface {
    chain: ChainTypes
    contract_address: string
    owner: string
    token_id: string
    received_at: number
    sender: string
    sender_kakao_id?: string
    token_uri: string
    transaction_hash: string
    tx_hash: string
    balance?: string
    token_type: TokenType
    token_standard: TokenStandardType
  }

export interface GetWalletNFTParams {
    chain: ChainTypes
    contractAddress: string
    tokenId: string
  }
  
  export interface GetWalletCollectionsParams {
    chain: ChainTypes
  }
  
  export interface GetWalletNFTResponse {
    nft: NFTInterface
  }
  
  export interface GetWalletCollectionsResponse {
    collections: NFTCollectionInterface[]
    count: number // 해당 체인의 전체 NFT 개수 반환
  }
  
  export interface GetWalletNFTsParams {
    contract_address?: string
    size?: number
  }
  
  export interface GetWalletNFTsResponse {
    nfts: NFTInterface[]
    collections: NFTCollectionInterface[]
    cursor: string
  }
  
  export interface GetWalletCollectionParams {
    chain: ChainTypes
    contract_address: string[]
  }
  
  export interface GetWalletCollectionResponse {
    collection: NFTCollectionInterface[]
  }
  