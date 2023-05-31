import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
const Search = () => {
  return<>
<div className="searchDiv grid gap-4 bg-greyIsh rounded-[10px] p-[3rem]">
  <form action="">
    <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-4 shadow-lg shadow-greyIsh-700">

        <div className='flex gap-2 items-center'>
        <AiOutlineSearch className='text-[25px] icon'/>
        <input type="text" className='bg-transparent text-blue-700 focus:outline-none w-[100%]' placeholder='Search Job Here....'/>
        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
        </div>

        <div className='flex gap-2 items-center'>
        <BsHouseDoor className='text-[25px] icon'/>
        <input type="text" className='bg-transparent text-blue-700 focus:outline-none w-[100%]' placeholder='Search by company...'/>
        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
        </div>

        <div className='flex gap-2 items-center'>
        <CiLocationOn className='text-[25px] icon'/>
        <input type="text" className='bg-transparent text-blue-700 focus:outline-none w-[100%]' placeholder='Search by location...'/>
        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
        </div>
    <button className='bg-blueColor h-full p-2 px-6 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>
    </div>
  </form>


  <div className="SecDiv flex itmes-center gap-10 justify-center">
    
  <div className="singleSerch flex items-center gap-2">
  <label htmlFor="relevance " className='text-[#808080] font-semibold '> Sert by:</label>
  <select name='' id='relevance' className="form-select bg-white rounded-[3px] px-4 py-1">
    <option value="">Relevance</option>
    <option value="">Inclusive</option>
    <option value="">Starts with</option>
    <option value="">Contains</option>
  </select>
  </div>

  <div className="singleSerch flex items-center gap-2">
  <label htmlFor="type " className='text-[#808080] font-semibold '> Tpye</label>
  <select name='' id='type' className="form-select bg-white rounded-[3px] px-4 py-1">
    <option value="">Full-time</option>
    <option value="">Remote</option>
    <option value="">Contract</option>
    <option value="">Part-time</option>
  </select>
  </div>

  <div className="singleSerch flex items-center gap-2">
  <label htmlFor="level" className='text-[#808080] font-semibold '>Level:</label>
  <select name='' id='level' className="form-select bg-white rounded-[3px] px-4 py-1">
    <option value="">Senior</option>
    <option value="">Reginner</option>
    <option value="">Intermediate</option>
    <option value="">Advocate</option>
  </select>
  </div>
  <span className='text-[#a1a1a1]'>Clear All</span>
  </div>
</div>
  </>
}

export default Search