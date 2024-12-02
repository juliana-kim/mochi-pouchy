import { Interpolation, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { getMetadata } from "@src/apis/blockchain";
import { queryKeys } from "@src/libs/react-query";

import nftError from "@styles/assets/nftError.svg";
import { useQuery } from "@tanstack/react-query";

export interface NFTImageInterface {
  token_uri?: string;
  styles: Interpolation<Theme>;
}

export default function NFTImage({ token_uri, styles }: NFTImageInterface) {
  const { data: metaData } = useQuery({
    queryKey: queryKeys.getMetadata(token_uri as string),
    queryFn: () => getMetadata(token_uri as string),
  });

  return (
    <StyledDivWrapper css={styles}>
      <StyledImg
        src={metaData?.image}
        onError={(e) => (e.currentTarget.src = nftError)}
      />
    </StyledDivWrapper>
  );
}

const StyledDivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;
