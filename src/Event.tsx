import React from 'react';

type EventProps = {
    eventSide: 'left' | 'right', 
    year:number, 
    index:number, 
    month:number, 
    description:string, 
    eventMarker?:string
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Event = function(props:EventProps): JSX.Element {
    if(props.eventSide == 'left'){
        return (
            <div key={`${props.year}-${props.index}`} className={`event-section-${props.eventSide} event `}>
                <div className='event-body'>
                    <div className={`event-header event-header-${props.eventSide}`}>{monthNames[props.month]}</div>
                    <div className='event-body p-2 '>{props.description}</div>
                </div>
                <div className={`event-marker-${props.eventSide}`}>
                    {props.eventMarker ? <img className={`event-marker-image-${props.eventSide}`} src={props.eventMarker} /> : <span className={`event-marker-no-image-${props.eventSide}`}>&#9632;</span>}
                </div>
            </div>
        )    
    } else {
        return (
            <div key={`${props.year}-${props.index}`} className={`event-section-${props.eventSide} event `}>
                <div className={`event-marker-${props.eventSide}`}>
                    {props.eventMarker ? <img className={`event-marker-image-${props.eventSide}`} src={props.eventMarker} /> : <span className={`event-marker-no-image-${props.eventSide}`}>&#9632;</span>}
                </div>
                <div className='event-body'>
                    <div className={`event-header event-header-${props.eventSide}`}>{monthNames[props.month]}</div>
                    <div className='event-body p-2 '>{props.description}</div>
                </div>
            </div>
        )            
    }

}

export default Event