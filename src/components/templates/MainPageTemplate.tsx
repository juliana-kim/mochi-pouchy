import NavigationTab from "@components/molecules/NavigationTab.tsx";
import styled from "@emotion/styled";
import Header from "@src/components/organisms/Header.tsx";
import { colors } from "@src/styles/colors";

export default function MainPageTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageWrapper>
      <Header />
      {children}
      <NavigationTab />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.default.White};
`;
