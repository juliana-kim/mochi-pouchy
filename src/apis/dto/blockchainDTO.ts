export type ChainTypes = 'kaia' | 'ethereum' | 'polygon' | 'bora'
export type TokenStandardType = 'kip17' | 'kip37' | 'erc721' | 'erc1155'
export type BadgeTypes = 'registered' | 'blocked' | 'collected'
// export type PendingTxTypes = 'ft' | 'nft' | 'contract_execution'
// export type PendingStatusTypes = 'basic' | 'boost' | 'cancel'
// export type CountResetIntervalTypes = 'daily' | 'weekly' | 'monthly' | 'none'
// export type DisplayTypes = 'hidden' | 'visible' | 'owned' | 'custom'

export enum Network {
    ETHEREUM = 1,
    ROPSTEN = 3,
    GOERLI = 5,
    POLYGON = 137,
    MUMBAI = 80001,
    CYPRESS = 8217,
    BAOBAB = 1001,
    BORA = 77001,
    BORA_TESTNET = 99001,
}


interface NFTAttributeInterface {
    trait_type?: string
    display_type?: string
    value?: string | number
    max_value?: string | number
}

interface NFTLocalizationInterface {
    uri?: string
    default?: string
    locales?: string[]
}

export interface NFTMetadataInterface {
    name?: string
    description?: string
    image?: string
    image_data?: string
    image_hash?: string
    image_hires_url?: string
    image_hires_hash?: string
    external_url?: string
    external_link?: string
    animation_url?: string
    animation_hash?: string
    animation_hires_url?: string
    animation_hires_hash?: string
    youtube_url?: string
    background_color?: string
    backgroundColor?: string
    total_supply_api?: string
    max_supply?: number
    sendable?: boolean
    send_friend_only?: boolean
    hashtags?: string[]
    group_name?: string
    group_icon?: string
    attributes?: NFTAttributeInterface[]
    localization?: NFTLocalizationInterface
    has_secure_metadata?: boolean
    status_url?: string
    bar_code?: string
    qr_code?: string
    custom_links?: {
      display_name: string
      value: string
    }[]
    venue?: string
    issuer?: string
    date_format?: string
    activation_date?: string
    expiration_date?: string
    seller?: string
  }