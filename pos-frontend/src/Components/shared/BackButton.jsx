import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";

function BackButton() {
    const navigate = useNavigate();
  return (
    <button onClick={()=>navigate(-1)} className='bg-[#025cca] p-3 text-white text-xl font-bold rounded-full'>
        <IoArrowBackOutline/>
    </button>
  )
}

export default BackButton