import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";

import {getUserLogin} from "@src/apis/user.ts";
import {queryKeys} from "@src/libs/react-query.ts";
import MainPageTemplate from "@src/components/templates/MainPageTemplate.tsx";

export default function HomePage() {
  const [isLogin, setIsLogin] = useState<string>('NO');

  const { data: userLoginData, isFetched } = useQuery({
    queryFn: getUserLogin,
    queryKey: queryKeys.getUser,
  })

  useEffect(() => {
    if(isFetched && userLoginData) {
      console.log('userLoginData: ', userLoginData.isLogin)
      setIsLogin(userLoginData.isLogin ? 'Yes' : 'No')
    }
  },[userLoginData, isFetched])

  return (
    <MainPageTemplate>
      <p>
        Home!
      </p>
      {isFetched && userLoginData && <p>
        User Login: {isLogin}
      </p>}
    </MainPageTemplate>
  )
}