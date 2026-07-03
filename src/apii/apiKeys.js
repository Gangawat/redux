import axios from 'axios'
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

export async function fetchPhotos(query,page,per_page=10){
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        params: {query, page, per_page},
        headers: {Authorization: `Client-ID ${UNSPLASH_KEY}`}
    })
    return response
}
export async function fetchVideos(query,page,per_page=15){
    const response = await axios.get('https://api.pexels.com/v1/videos/search',{
        params: {query, page, per_page},
        headers: {Authorization:PEXELS_KEY}
    })
    return response
    // console.log(response)
}