import React from 'react'
import BottomNav from '../Components/shared/BottomNav'
import Greetings from '../Components/home/Greetings'
import MiniCard from '../Components/home/MiniCard'
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrders from '../Components/home/RecentOrders';
import PopularDishes from '../Components/home/PopularDishes';

function Home() {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
        {/* left */}
        <div className='flex-[3]'>
            <Greetings/>
            <div className='flex items-center w-full gap-3 px-8 mt-8'>
                <MiniCard title="Total Earnings" icon={<BsCashCoin/>} number={512} footerNum={1.6}/>
                <MiniCard title="In Progress" icon={<GrInProgress/>} number={16} footerNum={1.6}/>

            </div>
            <RecentOrders/>
        </div>

        {/* right */}
        <div className='flex-[2] '>
            <PopularDishes/>

        </div>
        <BottomNav/>
        
    </section>
  )
}

export default Home