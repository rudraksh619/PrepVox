import { Button } from '@/components/ui/button'
import Link from 'next/dist/client/link'
import React from 'react'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
const page = () => {
  return (
    <>

    <section className='card-cta'>
      <div className='flex flex-col max-w-lg gap-6'>
        <h2>Get Interview-Ready with AI-Powered Mock Interview</h2>
      <p>Practice on real interview question & get instant feedback</p>
      
      <Button asChild className='btn-primary max-sm:w-full'>
        <Link href = "/interview">Start InterView</Link>
      </Button>
      </div>

      <Image src="/robot.png" alt="robot" width={400} height = {400} className = "max-sm:hidden" />
    </section>

    <section className='flex gap-4 flex-col mt-6 '>
      <h2>Your Interviews</h2>
      <div className='interviews-section'>
        {dummyInterviews.map((interview)=>(
          <InterviewCard {...interview} key={interview.id}/>
        ))}
      </div>
    </section>
 

     <section className='flex flex-col gap-6 mt-6'>
      <h2>Take an Interview</h2>
      <div className="interviews-section">
         {dummyInterviews.map((interview)=>(
          <InterviewCard {...interview} key={interview.id}/>
        ))}
      </div>
     </section>

    </>
  )
}

export default page
