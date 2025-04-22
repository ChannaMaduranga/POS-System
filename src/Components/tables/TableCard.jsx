import React ,{useState,useEffect} from 'react'
import { getRandomBG } from '../../utils'
import { useNavigate } from 'react-router-dom';



function TableCard({key, name, status, initials,seats}) {
    const navigate = useNavigate();
    const handleClick = ()=>{
        if(status==="Booked") return;
        navigate('/menu');
    }
  

    return (
        <div onClick={handleClick} key={key} className='w-[300px] bg-[#262626] hover:bg-[#1c1c1c] p-5 rounded-lg cursor-pointer'>
            <div className='flex items-center justify-between px-1'>
                <h1 className='text-[#f5f5f5] text-xl font-semibold'>{name}</h1>
                <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "text-white bg-[#664a04]"} px-2 py-1 rounded-lg`}>{status}</p>
            </div>
            <div className='flex items-center justify-center my-5'>
                <h1 className={`${getRandomBG()}  text-white rounded-full p-5 text-xl`}>{initials}</h1>
            </div>
            <p className='text-[#ababab] text-xs'>Seats: <span className='text-[#f5f5f5]'>{seats}</span></p>
        </div>
    )
}

export default TableCard