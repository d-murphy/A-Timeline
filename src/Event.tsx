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
    return (
        <div key={`${props.year}-${props.index}`} className={`event-section-${props.eventSide} event `}>
            <div className='event-marker '>
                {props.eventMarker ? <img className='event-marker-image' src={props.eventMarker} /> : <div className='event-marker-no-image'></div>}
            </div>
            <div className='event-body'>
                <div className={`event-header event-header-${props.eventSide}`}>{monthNames[props.month]}</div>
                <div className='event-body p-2 '>{props.description}</div>
            </div>
        </div>
    )

}

export default Event