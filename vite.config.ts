import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { default as tsconfigPaths } from 'vite-tsconfig-paths'
import {viteMockServe} from "vite-plugin-mock";
/**
 * TODO
 *  - .env 설정 추가
 *  - svg설정 추가(viteSVGR plugin)
 *  - sourcemap dev환경에서 생성
 *  - mock server 설정
 * */
// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react'
      }),
      tsconfigPaths(),
      viteMockServe({
        mockPath: "mocks",
        enable: command === 'serve'
      })
    ],
  }

})
