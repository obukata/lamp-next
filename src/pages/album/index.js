import Layout from '@/components/layout'
import { SessionProvider } from 'next-auth/react'

export default function Album() {
  return (
    <Layout>
      <SessionProvider>
        Albumページ
      </SessionProvider>
    </Layout>
  )
}
