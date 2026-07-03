import React, { useRef } from "react";

const ResultCard = (props) => {
  const videoRef = useRef(null)

  const handleEnter = () => {
    videoRef.current?.play()
  }

  const handleLeave = () => {
    videoRef.current?.pause()
  }
  return (
    // <div className="relative mb-7 w-80 break-inside-avoid rounded-xl overflow-hidden group">
    //   {/* MEDIA */}
    //   {props.item.type === "photo" && (
    //     <img
    //       src={props.item.src}
    //       alt={props.item.title}
    //       className="w-full h-auto  object-cover transition-transform duration-300 group-hover:scale-105"
    //     />
    //   )}

    //   {props.item.type === "video" && (
    //     <video
    //       src={props.item.src}
    //       autoPlay
    //       muted
    //       loop
    //       className="w-full h-auto object-cover"
    //     />
    //   )}

    //   {/* OVERLAY */}
    //   <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    //   {/* TITLE */}
    //   <div className="absolute bottom-0 w-full px-3 py-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //     {props.item.title}
    //   </div>
    // </div>


    <div className='relative mb-7 w-80 break-inside-avoid rounded-xl overflow-hidden group'>
            <a href={props.item.url} target="_blank">{props.item.type=='photo'? <img loading="eager"  className=' w-full h-auto  object-contain   transition-transform duration-300 group-hover:scale-105' src={props.item.src}/> :''}</a>
            <a href={props.item.url} target="_blank">{props.item.type=='video'? <video ref={videoRef} onMouseOver={handleEnter} onMouseOut={handleLeave} className='rounded object-cover object-center h-auto w-full' playsInline muted loop src={props.item.src}></video> :''}</a>
        <div  className='text-white  '>
            <h1 id='title' className="w-full px-2 py-2 capitalize absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{props.item.title}</h1>
          </div>
        </div>
    


    // <div className='bg-red-400 relative w-80 h-80'>
    //     <div className='h-full '>
    //         {props.item.type=='photo'? <img className='rounded object-cover object-center h-full w-full' src={props.item.src}/> :''}
    //         {props.item.type=='video'? <video className='rounded object-cover object-center h-full w-full' autoPlay muted loop src={props.item.src}></video> :''}
    //     </div>
    //     <div id='title' className='text-white w-full px-2 py-2 capitalize absolute bottom-0'>{props.item.title}</div>
    // </div>
  );
};

export default ResultCard;
