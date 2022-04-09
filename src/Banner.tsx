import React from "react";

type BannerProps = {
    emoji?: string,
    title: string, 
    subtitle: string
}

const Banner = function(props:BannerProps){
    return (
    <div className="title-banner ">
        {props.emoji ? <img className='title-image' src={props.emoji}></img> : <></>}
        <h1 className="title py-5 text-center text-light display-1">{props.title}</h1>
        <h5 className="sub-title py-5 text-center text-light">{props.subtitle}</h5>
    </div>
    )
}

export default Banner;