import React from 'react'
import BottomNav from '../Components/shared/BottomNav'
import BackButton from '../Components/shared/BackButton'
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from '../Components/menu/MenuContainer';


import CustomerInfo from '../Components/menu/CustomerInfo';
import CartItem from '../Components/menu/CartItem';
import Bill from '../Components/menu/Bill';

function Menu() {
    return (
        <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
            {/* left */}
            <div className='flex-[3]'>
                <div className='flex items-center justify-between px-10 py-4'>
                    <div className='flex items-center gap-4'>
                        <BackButton />
                        <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Menu</h1>
                    </div>
                    <div className='flex items-center justify-around gap-4'>
                        <div className='flex items-center gap-3 cursor-pointer'>
                            <MdRestaurantMenu className='text-[#f5f5f5] text-4xl' />
                            <div className='flex flex-col items-start'>
                                <h1 className='text-md text-[#f5f5f5] font-semibold tracking-wide'> Customer Name</h1>
                                <p className='text-xs text-[#ababab] font-medium'>Table No: 2</p>
                            </div>
                        </div>

                    </div>
                </div>
                <MenuContainer />
            </div>

            {/* right */}
            <div className='flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[850px] rounded-lg pt-2'>
                {/* customer info */}
                <CustomerInfo />
                <hr className='border-[#2a2a2a] border-t-2' />

                {/* cart item */}
                <CartItem />
                <hr className='border-[#2a2a2a] border-t-2' />

                {/* Bills */}
                <Bill />
            </div>



            <BottomNav />
        </section>

    )
}

export default Menu