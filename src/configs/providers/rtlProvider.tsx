import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

export default function RtlProvider({
  children,
}: {
  children: JSX.Element
}): JSX.Element {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  })

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>
}

