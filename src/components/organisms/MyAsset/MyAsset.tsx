import styled from "@emotion/styled";
import AssetCard from "@src/components/molecules/AssetCard/AssetCard";

export default function MyAsset() {
  return (
    <MyAssetWrapper>
      <AssetCard type="NFT" />
      <AssetCard type="TOKEN" />
    </MyAssetWrapper>
  );
}

const MyAssetWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 16px 24px;
  gap: 8px;
  display: flex;
`;
