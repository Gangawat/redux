import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPhotos, fetchVideos } from "../apii/apiKeys"
import { setError, setLoading, setResults, setClearResults } from "../redux/searchSlice"
import ResultCard from "./ResultCard"

const ResultGrid = () => {
    const [pg, setPg] = useState(1)
    const dispatch = useDispatch()
    const {query, activeTab, results,  loading, error} = useSelector((store)=>store.search)
    useEffect(()=>{
        if(!query) return
        dispatch(setClearResults())
    }, [query, activeTab])
    useEffect(function (){
        if(!query) return
        const getData = async () =>{
        try {
            
            let data 
            if(activeTab == 'photos'){
                dispatch(setLoading(true))
                let response = await fetchPhotos(query,pg)
                data = response.data.results.map((item)=>({
                    id: item.id,
                    title: item.alt_description,
                    thumbnail: item.urls.small,
                    src: item.urls.full,
                    url:item.links.html,
                    type: 'photo'
                    
                }))
                dispatch(setLoading(false))
                console.log(pg)
            }
            if(activeTab == 'videos'){
                dispatch(setLoading(true))
                let response = await fetchVideos(query,pg)
                data = response.data.videos.map((item)=>({
                    id:item.id,
                    thumbnail: item.image,
                    src: item.video_files[Array.length].link,
                    url:item.url,
                    type: 'video',
                }))
                console.log(data)
                dispatch(setLoading(false))
                console.log(pg)
            }
            dispatch(setResults([...data]))
        } catch (err) {
            dispatch(setError(err.message))
        }
    }
    console.log(query)
    getData()
    },[query, activeTab, pg])
    const handleScroll = () =>{
        if(
            document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight
        ){
            setPg(prev => prev + 1)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
        return()=> window.removeEventListener("scroll", handleScroll)
    },[])
    if(error){
        return <h1>Error</h1>
    }
  return (

    <div className="columns-1 sm:columns-2 lg:wrap-break-word md:wrap-break-word md:columns-3 lg:columns-5 gap-4 px-6">
    {results.map(item => (
        <ResultCard key={item.id} item={item} />
    ))}
    {loading && (
    <div className="bg-white rounded-xl w-auto p-3">
        <h1 className="text-3xl">Loading...</h1>
    </div>
  )}
</div>
    // <div className="flex gap-x-15 gap-y-8 justify-start flex-wrap h-full px-10">
    //   {results.map((item,idx)=>{
    //     return <div key={idx} >
    //         <a href={item.url} target="_blank"><ResultCard item={item}/></a>
    //     </div>
    //   })}
    // </div>
  )
}

export default ResultGrid
