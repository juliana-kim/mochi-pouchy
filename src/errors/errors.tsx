import {ReactNode} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {queryClient} from "@src/libs/react-query.ts";


interface CustomError {
  status?: number
  statusText?: string
  data: { code?: number }
}

type ErrorType = Error | CustomError

interface ErrorControlInterface {
  error: ErrorType
}

function ErrorControl({error}: ErrorControlInterface) {
  const getErrorCode = () => {
    if(!!error && typeof error === 'object' && 'data' in error) {
      return error.data.code ?? error.status
    }
    return null
  }

  const errorCode = getErrorCode()

  return (
    <div>
      ERROR!! {errorCode}
    </div>
  )

}

function resetQueries() {
  queryClient
    .getQueryCache()
    .getAll()
    .filter(({state}) => state.status !== 'success')
    .forEach(({ queryKey }) => {
      queryClient.resetQueries({queryKey, exact: true}).then(() => console.log('reset completed'))
     })
}

export default function GlobalErrorBoundary({
  children
}: {children: ReactNode}) {
  return (
    <ErrorBoundary FallbackComponent={ErrorControl} onReset={resetQueries} >
      {children}
    </ErrorBoundary>
  )
}