import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";

import CoinIcon from "@styles/assets/coin-gray.svg";
import CoinSelectedIcon from "@styles/assets/coin-selected.svg";
import HomeIcon from "@styles/assets/home-gray.svg";
import HomeSelectedIcon from "@styles/assets/home.svg";
import NFTIcon from "@styles/assets/nft-gray.svg";
import NFTSelectedIcon from "@styles/assets/nft-selected.svg";
import { colors } from "@styles/colors.ts";
import { typography } from "@styles/typography.ts";
import { ReactElement, useEffect, useMemo, useState } from "react";

interface TabItemsInterface {
  id: number;
  label: string;
  icon: ReactElement;
  selectedIcon: ReactElement;
  pathname: string;
}

export default function NavigationTab() {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState<number>(0);

  const TabItems: TabItemsInterface[] = useMemo(
    () => [
      {
        id: 0,
        label: "HOME",
        icon: <TabImage src={HomeIcon} alt="Token" />,
        selectedIcon: <TabImage src={HomeSelectedIcon} alt={"Home selected"} />,
        pathname: "/",
      },
      {
        id: 1,
        label: "TOKEN",
        icon: <TabImage src={CoinIcon} alt="Token" />,
        selectedIcon: (
          <TabImage src={CoinSelectedIcon} alt={"Token selected"} />
        ),
        pathname: "/token",
      },
      {
        id: 2,
        label: "NFT",
        icon: <TabImage src={NFTIcon} alt="Token" />,
        selectedIcon: <TabImage src={NFTSelectedIcon} alt={"NFT selected"} />,
        pathname: "/nft",
      },
    ],
    []
  );

  useEffect(() => {
    TabItems.forEach((tab) => {
      if (location.pathname === tab.pathname) {
        setSelectedId(tab.id);
      }
    });
  }, [TabItems, location.pathname]);

  return (
    <NavigationTabWrapper>
      {TabItems.map(
        ({ id, label, icon, selectedIcon, pathname }: TabItemsInterface) => {
          return (
            <TabItem
              key={id}
              onClick={() => {
                window.scrollTo(0, 0);
                if (location.pathname !== pathname) {
                  navigate(pathname);
                }
              }}
              selected={selectedId === id}>
              {selectedId === id ? selectedIcon : icon}
              {label}
            </TabItem>
          );
        }
      )}
    </NavigationTabWrapper>
  );
}

const NavigationTabWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: auto;
  z-index: 30;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom);
  border-top: 1px solid ${colors.default.Black_a40};
  background: ${colors.default.White};
`;

const TabItem = styled.div<{ selected?: boolean }>`
  height: 56px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 4px 4px;
  ${typography.K_12M};
  gap: 2px;

  ${({ selected }) => {
    if (selected) {
      return `
          color: ${colors.default.Gray100};
          background: ${colors.default.White};
          border: 1px solid ${colors.default.Gray500};
          border-top: none;
          transform: translateY(-2px);
        `;
    }

    return `
        color: ${colors.default.Gray500};
        background: ${colors.default.White_a70};
        transition: all 0.3s ease;
      `;
  }}
  :first-of-type {
    border-left: unset;
  }
  :last-of-type {
    border-right: unset;
  }
`;

const TabImage = styled.img`
  width: 30px;
  height: 30px;
`;
