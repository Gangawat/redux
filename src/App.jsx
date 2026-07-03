import React, { useEffect, useState } from "react";
import { fetchPhotos, fetchVideos } from "./apii/apiKeys";
import SearchBar from "./commponents/SearchBar";
import Tabs from "./commponents/Tabs";
import ResultGrid from "./commponents/ResultGrid";
import { setBgResults, setBgImage, setResults } from "./redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [bg, setBg] = useState("null");
  const [fade, setFade] = useState(false);
  const dispatch = useDispatch();
  const { results, query, activeTab, bgImage, bgResults } = useSelector(
    (store) => store.search
  );
  
  useEffect(() => {
    if (!query) return
  
    let index = 0
    let intervalId
  
    const start = () => {
      if(activeTab === 'videos') return 
      intervalId = setInterval(() => {
        setFade(true)
  
        setTimeout(() => {
          dispatch(setBgImage(results[index].src))
          index = (index + 1) % results.length
          setFade(false)
        }, 300)
      }, 10000)
    }
  
    start()
    return () => clearInterval(intervalId)
  }, [results,query, activeTab])
  // useEffect(
  //   function () {
  //     if (!query) return;
  //     const getData = async () => {
  //       let data, bgImg;
  //       if (activeTab == "photos") {
  //         let response = await fetchPhotos(query);
  //         data = response.data.results.map((item) => ({
  //           id: item.id,
  //           thumbnail: item.urls.full,
  //           type: "photo",
  //         }));
  //       }
  //       dispatch(setBgResults(data));
  //       let bgIndex = 0;
  //       let intervalId = setInterval(() => {
  //         setFade(true); // start fade out

  //         setTimeout(() => {
  //           dispatch(setBgImage(data[bgIndex].thumbnail));

  //           bgIndex++;

  //           if (bgIndex === data.length) {
  //             clearInterval(intervalId);
  //           }

  //           setFade(false); // fade back in
  //         }, 100); // fade duration
  //       }, 10000);
  //     };
  //     getData();
  //   },[query])

  return (
    // id='resultGrid'
    <div className="relative w-full bg-linear-to- min-h-screen">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat
      transition-all duration-1000 ease-in-out will-change-transform will-change-opacity overflow-x-hidden
      ${fade ? "opacity-0 blur-md" : "opacity-100 scale-100 blur-0"}`}
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
        }}
      />
      {/* BLUR + DARK OVERLAY */}
      <div className="absolute inset-0 backdrop-blur-sm "></div>
      <div className=" relative z-20">
        <SearchBar />
        {results.length>0 ? <Tabs />: ""}
        <ResultGrid />
      </div>
    </div>
  );
};

export default App;
