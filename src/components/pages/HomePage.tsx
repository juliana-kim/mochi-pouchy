import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { getUserLogin } from "@src/apis/user.ts";
import MainPageTemplate from "@src/components/templates/MainPageTemplate.tsx";
import { queryKeys } from "@src/libs/react-query.ts";

import styled from "@emotion/styled";
import { colors } from "@src/styles/colors";
import { typography } from "@src/styles/typography";
import ArrowRight from "@styles/assets/arrow_right.svg";
import MyAsset from "../organisms/MyAsset/MyAsset";

export default function HomePage() {
  const [isLogin, setIsLogin] = useState<string>("NO");

  const { data: userLoginData, isFetched } = useQuery({
    queryFn: getUserLogin,
    queryKey: queryKeys.getUser,
  });

  useEffect(() => {
    if (isFetched && userLoginData) {
      console.log("userLoginData: ", userLoginData.isLogin);
      setIsLogin(userLoginData.isLogin ? "Yes" : "No");
    }
  }, [userLoginData, isFetched]);

  return (
    <MainPageTemplate>
      <NoticeWrapper>
        <EventBadge>이벤트</EventBadge>
        <EventTitle>Join the renual celebration event!</EventTitle>
        <NavigateButton>
          <img src={ArrowRight} alt="go to event page" />
        </NavigateButton>
      </NoticeWrapper>
      <MyAsset />
    </MainPageTemplate>
  );
}

const NoticeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
`;

const EventBadge = styled.span`
  background-color: ${colors.default.Black};
  padding: 6px 8px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  ${typography.K_12M};
  color: ${colors.default.White};
`;

const EventTitle = styled.span`
  flex: 1;
  ${typography.K_14M};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${colors.default.Gray};
`;

const NavigateButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
