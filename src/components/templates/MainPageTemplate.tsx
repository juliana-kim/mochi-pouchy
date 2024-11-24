import Header from "@src/components/organisms/Header.tsx";
import styled from "@emotion/styled";

export default function MainPageTemplate({children}: {children: React.ReactNode}  ) {
  return (
    <PageWrapper>
      <Header/>
      {children}
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`