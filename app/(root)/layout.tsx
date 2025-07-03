import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const RootLayout = ({children} :{children :ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link className='flex gap-3' href="/">
          <Image src='/logo.svg' alt = "logo"  width={38} height={32} />
        <h1 className={`text-2xl font-bold`}>PrepVox</h1>
        </Link>
        
        
      </nav>
      {children}
    </div>
  )
}


export default RootLayout

