import { ChainTypes } from "@src/apis/dto/blockchainDTO"

import icNetworkBora from "@styles/assets/ic_networkBora.svg"
import icNetworkEthereum from "@styles/assets/ic_networkEthereum.svg"
import icNetworkKaia from '@styles/assets/ic_networkKaia.svg'
import icNetworkPolygon from "@styles/assets/ic_networkPolygon.svg"
import { ReactElement } from "react"

interface ChainDataInterface {
    mainnetExplorerUrl: string
    testnetExplorerUrl?: string
    // icon: ReactElement
    symbolSource:  string
    symbol: string
    name: ReactElement | string
    decimals: number
}

// 체인 별 공통 필수 정보
export const chainDataObj: Record<ChainTypes, ChainDataInterface> = {
    ['kaia']: {
        mainnetExplorerUrl: 'https://klaytnscope.com',
        testnetExplorerUrl: 'https://baobab.klaytnscope.com',
        // icon: IcNetworkKaia,
        symbolSource:  icNetworkKaia,
        symbol: 'KLAY',
        name: '클레이튼',
        decimals: 18,
    },
    ['ethereum']: {
        mainnetExplorerUrl: 'https://etherscan.io',
        testnetExplorerUrl: 'https://goerli.etherscan.io',
        // icon: IcNetworkEthereum,
        symbolSource: icNetworkEthereum,
        symbol: 'ETH',
        name: '이더리움',
        decimals: 18,
    },
    ['polygon']: {
        mainnetExplorerUrl: 'https://polygonscan.com',
        // icon: IcNetworkPolygon,
        symbolSource: icNetworkPolygon,
        symbol: 'MATIC',
        name: '폴리곤',
        decimals: 18,
    },
    ['bora']: {
        mainnetExplorerUrl: 'https://scope.boraportal.com',
        testnetExplorerUrl: 'https://scope.boraportal.cc',
        // icon: IcNetworkBora,
        symbolSource: icNetworkBora,
        symbol: 'BORA',
        name: '보라',
        decimals: 18,
    },
} as const

export default function useGetChainInfo() {
    function getChainData<K extends keyof ChainDataInterface> (chain: ChainTypes, key: K){
        const data = chainDataObj[chain]
        
        if(!data) return null

        return data[key]
    }

    return {getChainData}
}