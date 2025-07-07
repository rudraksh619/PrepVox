import React from 'react'
import { getTechLogos } from '@/lib/utils';
import Image from 'next/image';
const ShowTechIcon = async ({techStack} : TechIconProps) => {


  const tech_icon = await getTechLogos(techStack);
  
  
  return (
    <div className='flex flex-row gap-2'>
      
     {tech_icon.slice(0,3).map(({tech,url},index) =>(

     <div className={`group flex-center relative group bg-dark-300 p-2 rounded-full ${index>=1 && '-ml-5'}`} key={tech}>
      <span className='tech-tooltip'>{tech}</span>
      <Image src = {url} alt = {tech} width = {20}
       height= {20} />
     </div>

     )
     )}
    </div>
  )
}

export default ShowTechIcon


