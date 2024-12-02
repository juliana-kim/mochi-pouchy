import { useCallback, useMemo } from "react";

import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import { ChainTypes } from "@src/apis/dto/blockchainDTO";
import { getWalletFT, getWalletNFT } from "@src/apis/wallet";
import NFTImage from "@src/components/atoms/NFTImage";
import useGetChainInfo from "@src/hooks/useGetChainInfo";
import { queryKeys } from "@src/libs/react-query";
import { colors } from "@src/styles/colors";
import { typography } from "@src/styles/typography";
import { getRandomTokenImage } from "@src/utils/utils";

export type AssetCardType = {
  type: "NFT" | "TOKEN";
};

export default function AssetCard({ type }: AssetCardType) {
  const { getChainData } = useGetChainInfo();

  const { data: nftData, isFetched: nftFetched } = useQuery({
    queryKey: queryKeys.getWalletNFT,
    queryFn: getWalletNFT,
    enabled: type === "NFT",
  });

  const { data: ftData, isFetched: ftFetched } = useQuery({
    queryKey: queryKeys.getWalletFT,
    queryFn: getWalletFT,
    enabled: type === "TOKEN",
  });

  const assetCount = useMemo(() => {
    if (type === "NFT" && nftFetched && nftData?.nfts.length)
      return nftData?.nfts.length;
    else if (type === "TOKEN" && ftFetched && ftData?.ft_list.length)
      return ftData.ft_list.length;
  }, [ftFetched, nftFetched, nftData?.nfts, ftData?.ft_list]);

  const getTokenImage = useCallback((chain: ChainTypes) => {
    const symbolSource = getChainData(chain, "symbolSource");
    if (!symbolSource) return getRandomTokenImage();
    return symbolSource;
  }, []);

  return (
    <CardWrapper>
      <TypeText>{`내 ${type}`}</TypeText>
      <CountText>{`${assetCount} 개`}</CountText>
      {type === "NFT" && nftData && (
        <AssetImageWrapper>
          <NFTImage
            styles={{ width: "24px", height: "24px" }}
            token_uri={nftData?.nfts[2].token_uri}
          />
          <NFTImage
            styles={{ width: "32px", height: "32px" }}
            token_uri={nftData?.nfts[1].token_uri}
          />
          <NFTImage
            styles={{ width: "40px", height: "40px" }}
            token_uri={nftData?.nfts[0].token_uri}
          />
        </AssetImageWrapper>
      )}
      {type === "TOKEN" && ftData && (
        <AssetImageWrapper>
          <TokenImage src={getTokenImage("polygon")} />
          <TokenImage src={getTokenImage("ethereum")} />
          <TokenImage src={getTokenImage("kaia")} />
        </AssetImageWrapper>
      )}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${colors.default.Sky900};
  border-radius: 12px;
`;

const TypeText = styled.span`
  ${typography.K_12M};
  color: ${colors.default.Gray300};
`;

const CountText = styled.span`
  ${typography.K_16M};
  color: ${colors.default.Black};
`;

const AssetImageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const TokenImage = styled.img`
  width: 40px;
  height: 40px;
`;
