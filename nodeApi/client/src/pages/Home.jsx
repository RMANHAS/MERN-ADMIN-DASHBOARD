import React from 'react'
import Layout from '../layout/Layout'
import { useAuth } from '../context/auth'

export default function Home() {
  const [auth,setAuth]=useAuth()
  return (
    <Layout>
       <h1>this is hahahhahahhahah</h1>
       <pre>
        {JSON.stringify(auth,null,4)}
       </pre>
        </Layout>
  )
}
