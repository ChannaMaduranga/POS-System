import React, { useState } from 'react'
import { menus } from '../../constants'
import { GrRadialSelected } from "react-icons/gr";
import { getRandomBG } from '../../utils';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/slices/cartSlice';

function MenuContainer() {
    const [selected, setSelected] = useState(menus[0]);
    const [itemId, setItemId] = useState();
    const dispatch = useDispatch();

    const [itemCount, setItemCount] = useState(0);

    const increment = (id) => {
        setItemId(id);
        if (itemCount >= 10) return;
        setItemCount((prev) => prev + 1);
    }
    const decrement = (id) => {
        setItemId(id);
        if (itemCount <= 0) return;
        setItemCount((prev) => prev - 1);
    }

    const handleAddToCart =(item)=>{
        if(itemCount===0) return;

        const {name, price}=item;
        const newObj = {id: new Date(), name, pricePerQuantity: price, quantity: itemCount, price: price * itemCount};

        dispatch(addItems(newObj));
        setItemCount(0);
    }
    return (
        <>

            <div className=' grid grid-cols-4 px-10 py-4 gap-4 w-[100%]'>
                {
                    menus.map((menu) => {
                        return (
                            <div key={menu.id} className={`${menu.bgColor} flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer `}
                                style={{ backgroundColor: menu.bgColor }}
                                onClick={() => {setSelected(menu);
                                    setItemId(0);
                                    setItemCount(0);
                                }}>
                                <div className='flex items-center justify-between w-full'>
                                    <h1 className='text-[#f5f5f5] text-lg font-semibold'>{menu.icon} {menu.name}</h1>
                                    {selected.id === menu.id && <GrRadialSelected className='text-white' size={20} />}
                                </div>
                                <p className='text-[#ababab] text-sm font-semibold'>{menu.items.length} Items</p>
                            </div>
                        )
                    })
                }

            </div>
            <hr className='border-[#2a2a2a] border-t-2 mt-4' />

            <div className=' grid grid-cols-4 px-10 py-4 gap-4 w-[100%]'>
                {
                    selected?.items.map((item) => {
                        return (
                            <div key={item.id} className={` flex flex-col items-start justify-between p-4 rounded-lg h-[140px] cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a]`}>
                                <div className='flex items-center justify-between w-full'>
                                    <h1 className='text-[#f5f5f5] text-lg font-semibold'>{item.name}</h1>
                                    <button onClick={()=> handleAddToCart(item)} className='bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg cursor-pointer'><FaShoppingCart/></button>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <p className='text-white text-xl font-bold'>Rs {item.price}</p>

                                    <div className='flex items-center justify-between rounded-lg py-3 px-4 bg-[#1f1f1f] gap-6'>
                                        <button
                                            onClick={()=>decrement(item.id)} 
                                            className='text-yellow-500 text-2xl'>&minus;</button>
                                        <span className='text-white '>{itemId == item.id ? itemCount : "0"}</span>
                                        <button
                                            onClick={()=> increment(item.id)} 
                                            className='text-yellow-500 text-2xl'>&#43;</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default MenuContainer