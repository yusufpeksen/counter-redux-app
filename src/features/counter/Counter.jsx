import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { increment , decrement , reset , incrementSpecialAmount , decrementSpecialAmount} from './counterSlice'
import {AiFillPlusCircle , AiFillMinusCircle} from 'react-icons/ai'
import {BiReset} from 'react-icons/bi'
import { useState } from 'react'

const Counter = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

    const [specialAmount , setSpecialAmount] = useState(0)

    const numberValue =  Number(specialAmount) || 0



  return (
    <div className='w-[700px] h-[500px] bg-[#BFB29E] rounded-[25px] flex items-center justify-center flex-col'>
        <div className='text-[48px] text-white px-[20px] rounded-[10px] bg-[#DADDB1]'>{count}</div>
        <div className='flex mt-[55px] gap-5'>
            <div onClick={() => dispatch(increment())}>
                <AiFillPlusCircle className='text-[50px] cursor-pointer transition-colors duration-500 hover:text-white'></AiFillPlusCircle>
            </div>
            <div onClick={() => dispatch(decrement())}>
                <AiFillMinusCircle className='text-[50px] cursor-pointer transition-colors duration-500 hover:text-white'></AiFillMinusCircle>
            </div>
            <div onClick={() => dispatch(reset())}>
                <BiReset className='text-[50px] cursor-pointer transition-colors duration-500 hover:text-white'></BiReset>
            </div>
        </div>
        <div className='mt-[40px] flex items-center gap-5'>
            <input value={specialAmount} onChange={(e) => setSpecialAmount(e.target.value)} className='rounded-[10px] text-center outline-none h-[30px] w-[200px]' placeholder='Increment Amount'></input>
            <div onClick={() => dispatch(incrementSpecialAmount(numberValue))}>
                <AiFillPlusCircle className='text-[40px] cursor-pointer transition-colors duration-500 hover:text-white'></AiFillPlusCircle>
            </div>
            <div onClick={() => dispatch(decrementSpecialAmount(numberValue))}>
                <AiFillMinusCircle className='text-[40px] cursor-pointer transition-colors duration-500 hover:text-white'></AiFillMinusCircle>
            </div>
        </div>
    </div>
  )
}

export default Counter
