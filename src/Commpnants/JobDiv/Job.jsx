import React from 'react'

import {BiTimeFive} from 'react-icons/bi'
import logo1 from '../../aessts/logo(1).jpeg'
import logo2 from '../../aessts/logo(2).png'
import logo3 from '../../aessts/logo(3).png'
import logo4 from '../../aessts/logo(4).png'
import logo5 from '../../aessts/logo(5).png'
import logo6 from '../../aessts/logo(6).jpg'
import logo7 from '../../aessts/logo(7).jpeg'
// import logo7 from '../../aessts/logo(7).png'

const Job = () => {

  const Data = [
    {
    id:1,
    image:logo1,
    title:"Web Developer",
    time:"Now",
    location:"Canada",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium!",
    company:"Novac Linus Co."
  },
    {
    id:2,
    image:logo2,
    title:"UI Designer",
    time:"14Hrs",
    location:"Machester",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium!",
    company:"Liquid Accessments"
  },
    {
    id:3,
    image:logo3,
    title:"Software Eng",
    time:"10Hrs",
    location:"Austria",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium!",
    company:"Web Tech Agency"
  },
    {
    id:4,
    image:logo4,
    title:"UI/Ux Designer",
    time:"11Hrs",
    location:"Germany",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium!",
    company:"Govemment"
  },
    {
    id:5,
    image:logo5,
    title:"Product Designer",
    time:"Now",
    location:"Manchester",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium!",
    company:"Newcastle"
  },
    {
    id:6,
    image:logo6,
    title:"Researcher",
    time:"5H",
    location:"Norway",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium!",
    company:"Nin Co."
  },
    {
    id:7,
    image:logo7,
    title:"Lead Developer",
    time:"15H",
    location:"Leeds",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium!",
    company:"Nimeloi - UK"
  },
    {
    id:8,
    image:logo7,
    title:"Data Scientist",
    time:"2H",
    location:"Turkey",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium!",
    company:"Name And Sans"
  },
]
  return <div>
    <div className="jobContainer flex gap-10 justify-center flex-wrap itmes-center py-10 " >
    {
      Data.map(({id,image,title,time,location,desc,company}) => {
        return   <div key={id} className="   group   group/item singleJob w-[250px] p-[20px]  hover:bg-blue-700  rounded-[10px] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg ">
        <span className='flex justify-between items-center gap-4 '>
          <h1 className='text-[16px] font-semibold text-textColor '>{title}</h1>
          {/* group-hover:text-white */}
          <span className='flex itmes-center text-[#ccc] gap-1'>
            <BiTimeFive/> {time}
          </span>
        </span>
        <h6 className='text-[#ccc]'>{location}</h6>
        <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>
        <div className="company flex items-center gap-3">
          <img src={image} alt="Company logo" className='h-8'/>
          <span className='text-[14px] py-[1rem] block group-hover:text-white '>{company}</span>
        </div>
        <button  className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor  '>
   Apply Now
        </button>
      </div>
      })
    }
    </div>
  </div>
  
}

export default Job