import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { setQuery } from "../redux/searchSlice";
const SearchBar = () => {
    const dispatch = useDispatch()
    const searchText = useSelector((state) => state.search.value)
    const [search, setSearch] = useState('')
    function submitHandler(e){
        e.preventDefault()
        dispatch(setQuery(search))
        setSearch('')
    }
  return (
    <div className=''>
      <form 
      onSubmit={(e)=>{submitHandler(e)}}
      className='flex justify-center gap-10 p-10'
      >
        <input autoFocus type="text" placeholder='Search....'
        value={search}
        onChange={(e)=>{
            setSearch(e.target.value)
        }}
        className='border-black border-2 rounded-3xl px-5 py-2 w-1/2 outline-none backdrop-blur-sm'
       />
        <button className='cursor-pointer  active:scale-95 active:bg-blue-300 py-2 px-5 rounded'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
