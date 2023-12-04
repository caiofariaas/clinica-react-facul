import NavBar from '@/components/navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='bg-[#222]'>
      <Head />

      <body className='bg-[#222]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
