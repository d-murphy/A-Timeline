import React from 'react';
import getTimeline from './Data';

type TimelineProps = {
  id: number;
};

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function Timeline(props: TimelineProps) {
  const timelineData = getTimeline(props.id);
  const groupByYear = manipTimelineData(timelineData.events);
  const events = Object.values(groupByYear).map((year: YearGroup) => {

    return <div className='year-section container'>
      <h1 className='year-heading display-4 pt-4'>
        <b>{year.year}</b>
      </h1>
      <div className='year-timeline'></div>
      <div className='year-timeline-filled'></div>
      <div className='years-events'>
        {
          year.events.map((el: TimelineEvent, ind: number) => {
            let eventSectionNameWithSide: string = ind % 2 == 0 ? 'event-section-right' : 'event-section-left';
            return <div key={`${year.year}-${ind}`} className={`${eventSectionNameWithSide} event `}>
              <div className='event-marker '>{el.eventMarker ? <img className='event-marker-image' src={el.eventMarker} /> : <div className='event-marker-no-image'></div>}</div>
              <div className=''>
                <div className='event-header'>{monthNames[el.date.getMonth()]}</div>
                <div className='event-body p-2 '>{el.text}</div>
              </div>
            </div>
          })}
      </div>
    </div>

    //        return <li key={ind}>Text: {el.text}; happened on  {el.date.getMonth()+1}/{el.date.getFullYear()}</li>
  })
  return <div className=''>
    <div className="title-banner ">
      {timelineData.emoji ? <img className='title-image' src={timelineData.emoji}></img> : <></>}
      <h1 className="title py-5 text-center text-light display-1">{timelineData.title}</h1>
      <h5 className="sub-title py-5 text-center text-light">{timelineData.subtitle}</h5>
    </div>
    {events}
  </div>
}

export default Timeline

type TimelineEvent = {
  text: string,
  date: Date,
  eventMarker?: string
}

type GroupByYear = {
  [index: number]: YearGroup;
}

type YearGroup = {
  year: number,
  events: TimelineEvent[]
}


function manipTimelineData(timelineData: TimelineEvent[]): GroupByYear {
  timelineData = timelineData.sort((a, b) => a.date < b.date ? -1 : 1)
  const groupByYear: GroupByYear = {};
  timelineData.forEach(el => {
    if (!groupByYear[el.date.getFullYear()]) {
      groupByYear[el.date.getFullYear()] = {
        year: el.date.getFullYear(),
        events: [el]
      }
    } else {
      groupByYear[el.date.getFullYear()].events.push(el)
    }
  })
  return groupByYear;
}