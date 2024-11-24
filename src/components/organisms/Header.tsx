import {Link} from "react-router-dom";
import styled from "@emotion/styled";

import HomeImage from '@styles/assets/home.svg'
import QRCodeImage from '@styles/assets/qr-code.svg'
import {colors} from "@styles/colors.ts";

export default function Header() {
  return (
    <HeaderWrapper>
      <HomeLink to={'/'}>
        <HomeImg src={HomeImage} alt={"Button to go home"}/>
      </HomeLink>
      <Title>Mochi Pouchy</Title>
      <QRButton>
        <QRImg src={QRCodeImage} alt="Turn on camera to scan QRCode" onClick={() => console.log('Todo: turn on camera to scan QR Code')}/>
      </QRButton>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: space-around;
  align-items: center;
  padding: 8px 12px;
  background-color: ${colors.default.GreenHeader};
`

const HomeLink = styled(Link)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: transparent;
  :hover {
      background-color: ${colors.default.Green500};
  }
  cursor: pointer;
  transition: background-color 0.3s ease; /* 부드러운 전환 효과 */
  :active {
      background-color: ${colors.default.Green};
  }
`

const HomeImg = styled.img`
  width: 100%;
  height: 100%;
`

const Title = styled.span`
  font-size: large;
  color: #f47070;
  flex-grow: 1;
  text-align: center;
`

const QRButton = styled.button`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: unset;
    border-radius: 4px;
    background-color: transparent;
    :hover {
        background-color: ${colors.default.Green500};
        border-color: transparent;
    }
    cursor: pointer;
    transition: background-color 0.3s ease; /* 부드러운 전환 효과 */
    :active {
        background-color: ${colors.default.Green};
    }
`

const QRImg = styled.img`
    width: 100%;
    height: 100%;
`