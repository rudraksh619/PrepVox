import { isauthenticated } from '@/lib/action/auth.action'
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const AuthLayout = async ({children} : {children:ReactNode}) => {

  const isAuthenticated = await isauthenticated();

  if(isAuthenticated)
  {
    redirect('/')
  }

  return (
    <div className="auth-layout">
      {children}
    </div>
  )
}

export default AuthLayout
