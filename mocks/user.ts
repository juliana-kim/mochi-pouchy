export default [
  {
    url: "/api/user/login",
    method: "get",
    response: () => {
      return {
        code: 200,
        isLogin: true
      }
    }
  },
  {
    url: "/api/user/:id",
    method: "get",
    response: ({ query }: { query: { id: number } }) => {
      const user = { id: query.id, name: "Juliana", email: "test@gmail.com", ca: "0xa195be68bd37ebccb056279dc3d236faa6f23673" };
      return {
        code: 200,
        user
      }
    }
  }
]