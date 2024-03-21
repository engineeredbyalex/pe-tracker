// importing layout
import Layout from '../../components/Layout'
//import useSession
import { useSession } from 'next-auth/react'
// import useState
import { useState } from 'react'

export default function account() {
  const{data:session} = useSession()
  console.log(session)

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-center bg-purple-200 px-3 py-3 text-purple-500 rounded-lg'>
          <h3>Hello, {session?.user?.name}</h3>
          <div className='flex flex-col items-center justify-center mt-10'>
            <h2>User Data:</h2>
            <h3>User Name : {session?.user?.name}</h3>
            <h3>Email Adress : {session?.user?.email}</h3>
          </div>
     </div>
      </div>
    </Layout>
  )
}