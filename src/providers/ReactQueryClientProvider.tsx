import {ReactNode} from "react";
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";
import {PersistQueryClientProvider} from "@tanstack/react-query-persist-client";
import {queryClient} from "@src/libs/react-query.ts";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export default function ReactQueryClientProvider({
  children,
}: {children: ReactNode}) {
  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  })

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  )
}