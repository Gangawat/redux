import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/searchSlice'

const Tabs = () => {
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)
    const tabs = ['photos', 'videos']
  return (
    <div className='flex gap-5  px-10 py-5 '>
        {tabs.map((elem,idx)=>{
            return <button key={idx} 
            className={`${(activeTab == elem ? 'bg-blue-600': 'bg-gray-500')} active:scale-95 text-white transition-colors cursor-pointer  px-5 py-2 rounded capitalize`}
            onClick={()=>{dispatch(setActiveTab(elem))}}
            >
                {elem}
            </button>
        })}
    </div>
  )
}

export default Tabs
