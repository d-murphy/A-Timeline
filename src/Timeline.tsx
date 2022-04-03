import React from 'react';
import getTimeline from './Data';

type TimelineProps = {
  id: number;
};

function Timeline(props:TimelineProps) {
    const timelineData = getTimeline(props.id);
    const groupByYear = manipTimelineData(timelineData); 
    console.log('checking1', groupByYear)
    console.log('checking2', Object.values(groupByYear))
    const events = Object.values(groupByYear).map((year:YearGroup) => {
       
      return  <div className='year-section'>
                <div className='year-heading'>
                  {year.year}
                </div>
                <div className='years-events'>
                  {
                    year.events.map( (el:TimelineEvent, ind:number) => {
                      let eventSectionNameWithSide:string = ind % 2 == 0 ? 'event-section-right' : 'event-section-left'; 
                      return  <div key={`${year.year}-${ind}`} className={eventSectionNameWithSide}>
                                <div className='event-marker'>{el.eventMarker ? <img className='event-marker-image' src={el.eventMarker}/> : <div className='event-marker-no-image'></div>}</div>
                                <div className='event-header'>{el.date.getMonth()+1}</div>
                                <div className='event-body'>{el.text}</div>
                              </div>
                  })}
                </div>
              </div>

//        return <li key={ind}>Text: {el.text}; happened on  {el.date.getMonth()+1}/{el.date.getFullYear()}</li>
    })
    return <ul>{events}</ul>
}

export default Timeline

type TimelineEvent = {
  text: string, 
  date: Date, 
  eventMarker?: string
}

type GroupByYear = {
  [index: number] : YearGroup;
}

type YearGroup = {
  year: number,
  events: TimelineEvent[]
}


function manipTimelineData(timelineData: TimelineEvent[]): GroupByYear{
  timelineData = timelineData.sort((a,b) => a.date < b.date ? -1 : 1)
  const groupByYear:GroupByYear = {}; 
  timelineData.forEach(el => {
    if(!groupByYear[el.date.getFullYear()]){
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