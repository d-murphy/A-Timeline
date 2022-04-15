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
        <p className="sub-title py-5 text-center text-light">
            I liked this <a className="text-light" href="https://www.recurse.com/10-years">timeline</a> created by the Recurse Center.  
            I've tried my best to recreate it to learn some of the css at work.  Here's the <a  className="text-light" href="https://github.com/d-murphy/A-Timeline">repository</a>.
        </p>
    </div>
    )
}

export default Banner;