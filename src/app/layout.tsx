import {SessionProvider} from 'next-auth/react'

export default function RootLayout({
  Component,
  pageProps: {session, ...pageProps},
}) {
  console.log('------------ _app.tsx file is working!!!!')
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
