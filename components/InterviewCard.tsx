import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image';
import { interviewCovers ,mappings } from '@/constants';
import { getRandomInterviewCover } from '@/lib/utils';
const InterviewCard = ({interviewId , userId , role , type, techstack,createdAt}: InterviewCardProps) => {

const feedback = null as Feedback | null;
const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
    
const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');


return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96'>
      <div className='card-interview'>
        
        <div className='absolute top-0 right-0 w-fit
         px-6 py-2 rounded-bl-lg  bg-light-600 '>
         <p>{normalizedType}</p>
        </div>
        
        <Image src = {getRandomInterviewCover()} alt="Interview-cover" 
        width = {80} height = {80} className='rounded-full size-[90px] object-fit' />
       
       <h3 className='capitalize mt-4'>
        {role} Interview
       </h3>

       <div className='flex gap-5'>
        <div className='flex '>
             <Image src = "/calendar.svg" alt='calender'
       height={22} width={22}/>
        <p>
            {formattedDate}
        </p>
        </div>

        <div className='flex'>
            
        <Image src = "/star.svg" alt='star' width={22} height={22} />

        <p>{feedback?.totalScore || '---'}/100</p>
        </div>
      

        
       </div>

      </div>
    </div>
  )
}

export default InterviewCard
