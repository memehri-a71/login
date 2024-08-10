

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function RQProvider({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
