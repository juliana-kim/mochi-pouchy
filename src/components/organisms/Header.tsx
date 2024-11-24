import {Link} from "react-router-dom";
import HomeImage from '@styles/assets/home.svg'
import QRCodeImage from '@styles/assets/qr-code.svg'
import styled from "@emotion/styled";
import {colors} from "@styles/colors.ts";

export default function Header() {
  return (
    <HeaderWrapper>
      <HomeLink to={'/'}>
        <HomeImg src={HomeImage} alt={"Button to go home"}/>
      </HomeLink>
      <Title>Mochi Pouchy</Title>
      <QRButton>
        <QRImg src={QRCodeImage} alt="Turn on camera to scan QRCode"/>
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
`

const QRImg = styled.img`
    width: 100%;
    height: 100%;
`