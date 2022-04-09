import React from 'react';
import Event from './Event'

type TimelineEvent = {
    text: string,
    date: Date,
    eventMarker?: string
}

  type YearProps = {
    year: number, 
    events: TimelineEvent[]; 
}

  

const Year = (props:YearProps) => {
    return (
        <div className='year-section container'>
            <h1 className='year-heading display-4 pt-5'>
                <b>{props.year}</b>
            </h1>
            <div className='years-events'>
                {
                props.events.map((el: TimelineEvent, ind: number) => {
                    let eventSide: 'left' | 'right' = ind % 2 == 0 ? 'right' : 'left';
                    return <Event eventSide={eventSide} year={el.date.getFullYear()} index={ind} month={el.date.getMonth()} description={el.text} eventMarker={el.eventMarker} />
                })}
            </div>
        </div>
    )
}

export default Year; 