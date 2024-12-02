export default [
  {
    url: "/api/wallet/ft",
    method: "get",
    response: () => {
        return {
            code: 200,
            ft_list: dummyFTList.ft_list,
            total_amount_krw: dummyFTList.total_amount_krw
        }
    }
  }, {
    url: "/api/wallet/nft",
    method: "get",
    response: () => {
        return {
            code: 200,
            collections: dummyNFTList.collections,
            nfts: dummyNFTList.nfts,
        }
    }
  }
  
]

// dummy data
const dummyFTList = {
    "ft_list": [
        {
            "balance": "6.110526",
            "prev_balance": "6.110526",
            "value": {
            "value": 1625.4061772189427,
            "prev_value": 1639.1373396125496,
            "value_change": -13.731162393606837
            },
            "price": {
            "price": 266.0010246612064,
            "percent_change": -0.837706643718605,
            "status": "success",
            "closing_price": 268.24815729653216
            },
            "ft_common": {
            "chain": "klaytn",
            "contract_address": "0x0000000000000000000000000000000000000000",
            "name": "클레이인줄                  ??????",
            "symbol": "KLAY",
            "symbol_img": "https://media.klipwallet.com/token_icon/klay_klip.svg",
            "badge": "blocked",
            "decimals": 18,
            "developer": "dev"
            }
        },
        {
            "balance": "0.123622833322809731",
            "prev_balance": "0.123622833322809731",
            "value": {
            "value": 386111.02885748615,
            "prev_value": 384510.56764690595,
            "value_change": 1600.4612105801934
            },
            "price": {
            "price": 3123298.653487863,
            "percent_change": 0.41623334837702153,
            "status": "success",
            "closing_price": 3110352.3298390512
            },
            "ft_common": {
            "chain": "ethereum",
            "contract_address": "0x0000000000000000000000000000000000000000",
            "name": "Ethereum",
            "symbol": "ETH",
            "symbol_img": "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
            "badge": "registered",
            "decimals": 18,
            "developer": "developer",
            "official_site": "https://www.ethereum.org/",
            "minter_name_map": "{}"
            }
        },
        {
            "balance": "2.1",
            "prev_balance": "2.1",
            "value": {
            "value": 2280.7250121357997,
            "prev_value": 2228.472295793936,
            "value_change": 52.25271634186356
            },
            "price": {
            "price": 1086.059529588476,
            "percent_change": 2.3447774711171534,
            "status": "success",
            "closing_price": 1061.177283711398
            },
            "ft_common": {
            "chain": "polygon",
            "contract_address": "0x0000000000000000000000000000000000000000",
            "name": "Matic Token",
            "symbol": "MATIC",
            "symbol_img": "https://klip-media.dev.klaytn.com/token_icon/1031-240x240_1.png",
            "badge": "registered",
            "decimals": 18,
            "official_site": "https://polygon.technology",
            "minter_name_map": "{}"
            }
        },
        {
            "balance": "5678",
            "prev_balance": "5678",
            "value": {
            "value": 700983.1680000001,
            "prev_value": 0,
            "value_change": 700983.1680000001
            },
            "price": {
            "price": 123.456,
            "percent_change": 1.234,
            "status": "success",
            "closing_price": 0
            },
            "ft_common": {
            "chain": "ethereum",
            "contract_address": "0xedb29487ee30e897512ca5a8baa849bb80f4d6e4",
            "name": "worldcoins.bond",
            "symbol": "Visit  worldcoins.bond   to claim rewards",
            "symbol_img": "https://s2.coinmarketcap.com/static/img/coins/64x64/627.png",
            "badge": "collected",
            "decimals": 0
            }
        },
        {
            "balance": "6666666",
            "prev_balance": "6666666",
            "value": {
            "value": 823039917.696,
            "prev_value": 0,
            "value_change": 823039917.696
            },
            "price": {
            "price": 123.456,
            "percent_change": 1.234,
            "status": "success",
            "closing_price": 0
            },
            "ft_common": {
            "chain": "ethereum",
            "contract_address": "0x38d9639da06f7a726caf40c2e1010ac88517a085",
            "name": "VanityTron.io",
            "symbol": "VanityTron.io",
            "symbol_img": "https://s2.coinmarketcap.com/static/img/coins/64x64/824.png",
            "badge": "collected",
            "decimals": 0
            }
        },
        {
            "balance": "66666",
            "prev_balance": "66666",
            "value": {
            "value": 8230317.696,
            "prev_value": 0,
            "value_change": 8230317.696
            },
            "price": {
            "price": 123.456,
            "percent_change": 1.234,
            "status": "success",
            "closing_price": 0
            },
            "ft_common": {
            "chain": "ethereum",
            "contract_address": "0x54fa517f05e11ffa87f4b22ae87d91cec0c2d7e1",
            "name": "RareTron.io",
            "symbol": "RareTron.io",
            "symbol_img": "https://s2.coinmarketcap.com/static/img/coins/64x64/977.png",
            "badge": "collected",
            "decimals": 0
            }
        },
        {
            "balance": "888888",
            "prev_balance": "888888",
            "value": {
            "value": 109738556.928,
            "prev_value": 0,
            "value_change": 109738556.928
            },
            "price": {
            "price": 123.456,
            "percent_change": 1.234,
            "status": "success",
            "closing_price": 0
            },
            "ft_common": {
            "chain": "ethereum",
            "contract_address": "0x1b809925ba90c541d895d19f0b7d70ee281a987f",
            "name": "VanityTRX.org",
            "symbol": "VanityTRX.org",
            "symbol_img": "https://s2.coinmarketcap.com/static/img/coins/64x64/345.png",
            "badge": "collected",
            "decimals": 0
            }
        },
        {
            "balance": "0.00001",
            "prev_balance": "0.00001",
            "value": {
            "value": 0.0012345600000000002,
            "prev_value": 0,
            "value_change": 0.0012345600000000002
            },
            "price": {
            "price": 123.456,
            "percent_change": 1.234,
            "status": "success",
            "closing_price": 0
            },
            "ft_common": {
            "chain": "klaytn",
            "contract_address": "0x9a8d41a4cb5f8ff42954d7a667a7a84a55a3cec8",
            "name": "SummerToken",
            "symbol": "JUN",
            "symbol_img": "https://kas-static.qa.klaytn.com/kct/icon/Hintchain.svg",
            "badge": "registered",
            "decimals": 18,
            "developer": "그라운드 X",
            "official_site": "https://www.groundx.xyz/",
            "bapp_id": 8
            }
        },
        {
            "balance": "10",
            "prev_balance": "0.00001",
            "value": {
            "value": 0.0012345600000000002,
            "prev_value": 0,
            "value_change": 0.0012345600000000002
            },
            "price": {
            "price": 123.456,
            "percent_change": 1.234,
            "status": "success",
            "closing_price": 0
            },
            "ft_common": {
            "chain": "klaytn",
            "contract_address": "0x02cbe46fb8a1f579254a9b485788f2d86cad51aa",
            "name": "보라 (mainnet)",
            "symbol": "BORA",
            "symbol_img": "",
            "badge": "blocked",
            "decimals": 18,
            "developer": "메타보라"
            }
        }
    ],
    "total_amount_krw": "942099792.6492814009924000002"
}

  const dummyNFTList = {
    "nfts": [
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xa9a95c5fef43830d5d67156a2582a2e793acb465",
            "token_id": "10005800031448",
            "received_at": 1729569953,
            "sender": "0x39d8f11d4079fb75c9840ffb758fc221413fed3e",
            "token_uri": "https://media.klipwallet.com/drops/metadata/metadata_1000580003.json",
            "tx_hash": "0x2a2897da240fd10ff9d21a98b5797d3fb28ed6b4277f0045b8212619ebecd603",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0x9ed16a79ff3b5fede32c8303cc2192edd1810594",
            "token_id": "2010",
            "received_at": 1716797735,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://metadata-store.klaytnapi.com/44096b02-b10b-a9bc-5db4-fd603de71931/4c0709c8-817c-4848-9a6c-fe078adca070.json",
            "tx_hash": "0xc304e3683383de9f23b46a69450ef9f26c7a9a27250a9278ef16c48160e5caf9",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0x586ced32248fba0b87fa432af715b78daabe33c5",
            "token_id": "1000012",
            "received_at": 1710467017,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://metadata-store.klaytnapi.com/f3e2ae63-ea72-a3da-64ba-0227f1dc1fe0/e32b3d22-d74c-27dd-c29b-6647a094ce0e.json",
            "tx_hash": "0x79a7f6dc34700731bce88afb51bcc0319e48842083137c35aee2ff3371e2f024",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "polygon",
            "token_type": "nft",
            "token_standard": "erc721",
            "balance": "1",
            "contract_address": "0xeb11e0fe5f955e01962c970c63f0a8d2cb1630f1",
            "token_id": "63",
            "received_at": 1707203083,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "ipfs://QmfR8WRYBjxRceCWY5iqS5Fj6eSMdoQHKnPrbXTYAT4BHc/metadata.json",
            "tx_hash": "0x51f1e08cf8b3c887aa1e18756f9533724d62ce77dc44cd0f05b2482275e903ae",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xa9a95c5fef43830d5d67156a2582a2e793acb465",
            "token_id": "40000210051",
            "received_at": 1700441879,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://media.klipwallet.com/drops/metadata/metadata_4000021.json",
            "tx_hash": "0x1021dab8621a1529facedd82596a68e1df81f95255283c4524d9a74ed3ddd37a",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xa9a95c5fef43830d5d67156a2582a2e793acb465",
            "token_id": "45000050010",
            "received_at": 1698635059,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://media.klipwallet.com/drops/metadata/metadata_4500005.json",
            "tx_hash": "0xe55b3b429bd6a675dd93cce8ffc5f3bc3b4f19f5dd37a44a8a5825b8a449d9e0",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xa9a95c5fef43830d5d67156a2582a2e793acb465",
            "token_id": "10007200071654",
            "received_at": 1694092285,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://media.klipwallet.com/drops/metadata/metadata_1000720007.json",
            "tx_hash": "0xdb81ebf497b3af0be7444137e98017c3789daa685ec83e05e043e86c994e28b9",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xa9a95c5fef43830d5d67156a2582a2e793acb465",
            "token_id": "9999900730036",
            "received_at": 1693453504,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://media.klipwallet.com/drops/metadata/metadata_999990073.json",
            "tx_hash": "0x8309058ad8457c08de193a443a869bafa766ff3a88ac1e5f359b7514476796bc",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xa9a95c5fef43830d5d67156a2582a2e793acb465",
            "token_id": "9999900740032",
            "received_at": 1693453406,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://media.klipwallet.com/drops/metadata/metadata_999990074.json",
            "tx_hash": "0xdd3d8ef0e1ce4468fa4a5d1178a3835e329a7d1f9f9a37f52a74ff8b4c455262",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "polygon",
            "token_type": "nft",
            "token_standard": "erc721",
            "balance": "1",
            "contract_address": "0xa693bad49a1e1cf140a54965d4485f56d991e276",
            "token_id": "5975",
            "received_at": 1684723574,
            "sender": "0xee4c04647a770b9efdc44b632f74a42e10aab25c",
            "token_uri": "https://ipfs.io/ipfs/bafkreigdb6rlgxdq6vhvnyrbkskz4fnekzhd2cfu7rhbr7lii3jgwu2ckm",
            "tx_hash": "0x6188cecca6480f5e2af670f8ca417048661fd20d0f983bd9ba1cce473c7992e3",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0x3a1028e054be6a738c85a5793f656f56990c6862",
            "token_id": "1268",
            "received_at": 1678439617,
            "sender": "0x9a4044b0d9ea7aeb3bec28665d141089703196e8",
            "token_uri": "https://media.klipwallet.com/card_asset/163632/322ef233-8a66-4e30-b5e8-316ed9c579e1.json",
            "tx_hash": "0xd876af74fd19ea51716ad40b18097238267f25405014be2d80855eff16bb431d",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xa9a95c5fef43830d5d67156a2582a2e793acb465",
            "token_id": "10004700042239",
            "received_at": 1675299430,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://media.klipwallet.com/drops/metadata/metadata_1000470004.json",
            "tx_hash": "0x24dd2589b8e78e538d4179bf9fa6031bb81b9d84e6650426083eed8ff6aec125",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0x73c1c73d2bd25434b9eaf59af620b67102adbacb",
            "token_id": "777",
            "received_at": 1675228580,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://s3.ap-northeast-2.amazonaws.com/ovilinest.metadata.release/ovili/nft/metadata/14",
            "tx_hash": "0xf767810e625698e39bc4176617921f8b9b4773973889906be282175c7a2e3364",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xa84cb2207cb80f8af82c44f7f41f804323f86289",
            "token_id": "166812",
            "received_at": 1672041267,
            "sender": "0xd1e6dc284e918078aa2bb514de250a49b11d30c5",
            "token_uri": "https://nftcdn.dcinside.co.kr/json/166812.json",
            "tx_hash": "0x57e8051f6389c090f3c4bead8be6a0cfd8df7839101b466caab59d61eb60ca4d",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0x201a8198a1994b646694395c6ac82e4e47438297",
            "token_id": "181",
            "received_at": 1671417072,
            "sender": "0x9a4044b0d9ea7aeb3bec28665d141089703196e8",
            "token_uri": "https://media.klipwallet.com/temp_eventcard/bomb",
            "tx_hash": "0x130103d0cabfa8849866de768b8c089dc9037bc09ef557be228a6bd6ef43d2c7",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0x4f3457899108c7ae7aeea8c99c4c2ee6b8efc4e6",
            "token_id": "4",
            "received_at": 1646228896,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "",
            "tx_hash": "0x081693ebc03459b3e4e929d597178f21f142287bb8857ec9ef2b5a4bb1ff59d1",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0x93dd4a0b32b1e6495ec943d541a6f52e3cbcb834",
            "token_id": "15",
            "received_at": 1634018917,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://media.klipwallet.com/card_asset/1273907/9aedda3e-59ee-4f99-9ec5-a26a1d14a277.json",
            "tx_hash": "0x4d1b568fa512a2848956f13eeca1a1b7f680e4d7ab32939e94526d838dbf65c3",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xa9a95c5fef43830d5d67156a2582a2e793acb465",
            "token_id": "100010691",
            "received_at": 1627430800,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://media.klipwallet.com/drops/metadata/metadata_10001.json",
            "tx_hash": "0x501598f2aebea06361145335405db98df9c2435156c07438f099a5ed2c3478cd",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0x087459a4733c689616ff31515fa9b555493954e2",
            "token_id": "7410436",
            "received_at": 1624424314,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "",
            "tx_hash": "0x226016b276d2e49ba6ede35fbdd59947cafd2610663ca3813a54fcfd1b7aaa3d",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xb26e09db6656b998d2913f13870e06c151c37900",
            "token_id": "978103",
            "received_at": 1623638067,
            "sender": "0x4530173b3593fb39d48525eb55a42e51ef9c85d5",
            "token_uri": "https://media.klipwallet.com/card_asset/98/a197ddeb-6383-4848-a47e-b4ac78ba3482.json",
            "tx_hash": "0x407573be08405b8673152edb85c9b5a4b352d8002ed348e62e6929d815390e6a",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xda12517a852d4fd8ab92ad6a8f479def047e795f",
            "token_id": "310",
            "received_at": 1620005694,
            "sender": "0x88482b9c778cd178ed39d036c3c0b40cb4c8553d",
            "token_uri": "https://media.klipwallet.com/card_asset/957607/6c5b86b4-a0a6-4e98-83c7-0ac23adea3ef.json",
            "tx_hash": "0xbf0f8520be8333c56319a3e22fc0c9a4114c247c94351db3dad1f49b6e6a9e9e",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xda12517a852d4fd8ab92ad6a8f479def047e795f",
            "token_id": "213",
            "received_at": 1620005526,
            "sender": "0x88482b9c778cd178ed39d036c3c0b40cb4c8553d",
            "token_uri": "https://media.klipwallet.com/card_asset/957607/31fd7da0-968f-46c9-8899-7fa46b0c3d10.json",
            "tx_hash": "0xeed9318b3c11863dcfa19d17685efde4c51b0d79295226d9ab379cf562327844",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xda12517a852d4fd8ab92ad6a8f479def047e795f",
            "token_id": "116",
            "received_at": 1620005285,
            "sender": "0x88482b9c778cd178ed39d036c3c0b40cb4c8553d",
            "token_uri": "https://media.klipwallet.com/card_asset/957607/42d74ee1-202b-416f-a252-6e83374b9233.json",
            "tx_hash": "0x4aecdadfad0412612d8509e8c03b7f0956194b97f5379e9a26bdade83768bdd3",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xd307d6a43afa6635427358b3c21bfc095cbb1bf6",
            "token_id": "1078054740945",
            "received_at": 1617847948,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://klip-nft-test.s3.ap-northeast-2.amazonaws.com/0xfb0111e3d1.json",
            "tx_hash": "0x854070e6a47cd9b4454a0d1ab788a4d638e0e242d84db8809bf51c63154424df",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xd307d6a43afa6635427358b3c21bfc095cbb1bf6",
            "token_id": "239569330203",
            "received_at": 1617693729,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://klip-nft-test.s3.ap-northeast-2.amazonaws.com/0x37c771e01b.json",
            "tx_hash": "0xae0d0a299782df9fb53bd54bd4397aa3833d7ec1725fbc001aa2aaf2bdd47707",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xd307d6a43afa6635427358b3c21bfc095cbb1bf6",
            "token_id": "389406153930",
            "received_at": 1617690363,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://klip-nft-test.s3.ap-northeast-2.amazonaws.com/0x5aaa6a5cca.json",
            "tx_hash": "0xd366357fa6f2ef8c38166d1f4511f5d14790db2eb1fa888796d2e49731a3801b",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xd307d6a43afa6635427358b3c21bfc095cbb1bf6",
            "token_id": "386097220944",
            "received_at": 1617685165,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://klip-nft-test.s3.ap-northeast-2.amazonaws.com/0x59e5300d50.json",
            "tx_hash": "0x9b568ca03fe1b38703bacb6d79c1508ea1beef2b81c4755ce328beacb1f2e6c2",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xd307d6a43afa6635427358b3c21bfc095cbb1bf6",
            "token_id": "966736497163",
            "received_at": 1617685084,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://klip-nft-test.s3.ap-northeast-2.amazonaws.com/0xe115fc4a0b.json",
            "tx_hash": "0x1fc2d26896812fcf9aa8cae6883820f7c6a993086a84356b9385e605d5d2a778",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xd307d6a43afa6635427358b3c21bfc095cbb1bf6",
            "token_id": "1072851185657",
            "received_at": 1617684615,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://klip-nft-test.s3.ap-northeast-2.amazonaws.com/0xf9cae9eff9.json",
            "tx_hash": "0xff775329e35c51f9a62b780d3bfb8f399fbc089658142a8a9cf50e66394f2ddd",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xb879a6b9b91d6ddb637f8b28ea845f9c59931b97",
            "token_id": "2775",
            "received_at": 1600152992,
            "sender": "0xbe881c9d929fadfffbece0147c1a01da56a4c5f4",
            "token_uri": "https://media.klipwallet.com/card_asset/175713/e81afb35-f448-425b-86e1-5e672a3ef867.json",
            "tx_hash": "0x5784865935b072211402073e637a4746bf4ea8fd40d470a295309398a6eb7a67",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0xb26e09db6656b998d2913f13870e06c151c37900",
            "token_id": "198475",
            "received_at": 1599809020,
            "sender": "0x0000000000000000000000000000000000000000",
            "token_uri": "https://media.klipwallet.com/card_asset/98/6d566d4b-e5c2-457c-a7cb-e1f61515a70b.json",
            "tx_hash": "0x31665018c9eb7bcc2ffdc4de3bde9b87c3482a3ecba6f6471833c52f83695425",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        },
        {
            "chain": "klaytn",
            "token_type": "nft",
            "token_standard": "kip17",
            "balance": "1",
            "contract_address": "0x56f14d510a395e028316e22f7356a473caa7f07f",
            "token_id": "594",
            "received_at": 1599439179,
            "sender": "0xa00a74b3e9f6e982a7b7873b27cf465112d262ad",
            "token_uri": "https://media.klipwallet.com/card_asset/168201/f45f5b10-cc5a-4284-890f-df3f97f3da40.json",
            "tx_hash": "0xffa141da54187390f9788d8fd398ac8ec538bd53f52e8c45c39c82d6997f9ac2",
            "owner": "0x571e29939dfdd62cd60a7e931a3eaa79e11cef48"
        }
    ],
    "collections": [
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0x201a8198a1994b646694395c6ac82e4e47438297",
            "name": "Klip Launch Event Card",
            "name_eng": "",
            "badge": "collected"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0xd307d6a43afa6635427358b3c21bfc095cbb1bf6",
            "name": "GroundX KREW",
            "name_eng": "",
            "image": "https://media.klipwallet.com/bapp_icon/icon_gxkrew_1024x1024.png",
            "badge": "registered",
            "content": "GroundX 크루 발행 NFT",
            "bapp_id": 49,
            "minter_name_map": "{}"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0xa9a95c5fef43830d5d67156a2582a2e793acb465",
            "name": "Klip Drops",
            "name_eng": "",
            "image": "https://media.klipwallet.com/token_icon/icon_KlipDrops_1024x1024.jpg",
            "badge": "registered",
            "bapp_id": 65,
            "minter_name_map": "{}"
        },
        {
            "chain": "polygon",
            "token_standard": "erc721",
            "contract_address": "0xeb11e0fe5f955e01962c970c63f0a8d2cb1630f1",
            "name": "MCM Friends Journey",
            "name_eng": "",
            "image": "https://media.klipwallet.com/token_icon/icon_mcm_1024x1024.jpg",
            "badge": "registered",
            "content": "The MCM Friends Journey",
            "developer": "MCM Korea",
            "official_site": "https://kr.mcmworldwide.com/",
            "minter_name_map": "{}"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0x3a1028e054be6a738c85a5793f656f56990c6862",
            "name": "Klip NFT Test",
            "name_eng": "",
            "image": "https://media.klipwallet.com/bapp_icon/icon_klipnfttest_1024x1024.jpg",
            "badge": "registered",
            "content": "Klip 발행 카드 테스트",
            "developer": "GroundX",
            "bapp_id": 18,
            "minter_name_map": "{\"0xfCBf609591CA225ee06f69d2D93A8D458BCd5625\":\"Klip NFT Test\"}"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0x73c1c73d2bd25434b9eaf59af620b67102adbacb",
            "name": "BMFT",
            "name_eng": "",
            "badge": "collected"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0x93dd4a0b32b1e6495ec943d541a6f52e3cbcb834",
            "name": "NFT From Jason",
            "name_eng": "",
            "image": "https://media.klipwallet.com/bapp_icon/icon_NFTFromJason_1024x1024.jpg",
            "badge": "registered",
            "content": "제이슨의 특별한 선물",
            "developer": "GroundX",
            "bapp_id": 87,
            "minter_name_map": "{\"0x8bD8098F04CA3bEE304a3dD8b446C5CddC524C8a\":\"NFT From Jason\"}"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0xda12517a852d4fd8ab92ad6a8f479def047e795f",
            "name": "GroundX",
            "name_eng": "",
            "image": "https://media.klipwallet.com/bapp_icon/icon_groundx_1024x1024.png",
            "badge": "registered",
            "content": "GroundX 발행 NFT",
            "bapp_id": 53,
            "minter_name_map": "{\"0x88482b9c778Cd178ED39d036C3C0B40cb4C8553d\":\"GroundX\"}"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0x087459a4733c689616ff31515fa9b555493954e2",
            "name": "KhalidCoin",
            "name_eng": "",
            "badge": "collected"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0xb26e09db6656b998d2913f13870e06c151c37900",
            "name": "Klip",
            "name_eng": "",
            "image": "https://media.klipwallet.com/bapp_icon/icon_klip_1024x1024.png",
            "badge": "registered",
            "content": "내 손안의 디지털 지갑",
            "bapp_id": 1,
            "minter_name_map": "{\"0xa2138c038bcf725f3f8ed95c809014c38af5d25f\":\"Klip\", \"0x4530173B3593Fb39D48525eB55A42E51ef9c85d5\":\"Klip\"}"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0xb879a6b9b91d6ddb637f8b28ea845f9c59931b97",
            "name": "현대카드",
            "name_eng": "",
            "image": "https://media.klipwallet.com/bapp_icon/icon_hyundaicard_1024x1024.jpg",
            "badge": "registered",
            "content": "Digital Hyundai Card",
            "bapp_id": 26,
            "minter_name_map": "{\"0xbe881c9D929fADFfFbeCE0147c1A01Da56A4c5F4\":\"현대카드\"}"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0x56f14d510a395e028316e22f7356a473caa7f07f",
            "name": "굿네이버스",
            "name_eng": "",
            "image": "https://media.klipwallet.com/bapp_icon/icon_goodneighbors_1024x1024.png",
            "badge": "registered",
            "content": "국제구호개발 NGO",
            "bapp_id": 23,
            "minter_name_map": "{\"0xA00a74b3E9f6E982a7B7873B27CF465112d262aD\":\"굿네이버스\"}"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0x9ed16a79ff3b5fede32c8303cc2192edd1810594",
            "name": "보스토끼",
            "name_eng": "",
            "image": "https://media.klipwallet.com/token_icon/BTK_거꾸로로고.jpg",
            "badge": "registered",
            "content": "이노션 사이드 프로젝트",
            "developer": "농업회사법인 한강주조 주식회사",
            "official_site": "https://bossttokki.innocean.com/",
            "minter_name_map": "{}"
        },
        {
            "chain": "polygon",
            "token_standard": "erc721",
            "contract_address": "0xa693bad49a1e1cf140a54965d4485f56d991e276",
            "name": "GOTAS.SOCIAL",
            "name_eng": "",
            "badge": "collected"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0x4f3457899108c7ae7aeea8c99c4c2ee6b8efc4e6",
            "name": "DonationMarket",
            "name_eng": "",
            "badge": "collected"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0x586ced32248fba0b87fa432af715b78daabe33c5",
            "name": "클립 패스",
            "name_eng": "",
            "image": "https://media.klipwallet.com/token_icon/img_AppIcon_Klippass_1024px.jpg",
            "badge": "registered",
            "content": " 멤버와 소통이 필요한 모두를 위해",
            "developer": " GroundX",
            "official_site": "https://www.klippass.com",
            "minter_name_map": "{}"
        },
        {
            "chain": "klaytn",
            "token_standard": "kip17",
            "contract_address": "0xa84cb2207cb80f8af82c44f7f41f804323f86289",
            "name": "Gaejuki",
            "name_eng": "",
            "image": "https://media.klipwallet.com/token_icon/icon_dcinside_1024x1024.jpg",
            "badge": "registered",
            "content": "국내 최대 커뮤니티 포털",
            "developer": "디시인사이드",
            "bapp_id": 218,
            "minter_name_map": "{}"
        }
    ],
    "cursor": "",
}