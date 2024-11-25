import styled from "@emotion/styled";
import {colors} from "@styles/colors.ts";

export default function HorizontalDivider() {
  return (
    <DividerWrapper>
      <InnerLine />
    </DividerWrapper>
  )
}

const DividerWrapper = styled.div`
  width: 100%;
  border: 0;
  padding: 24px 0;
`

const InnerLine = styled.div`
  height: 0;
  border-top: 1px solid ${colors.default.Gray100};
`