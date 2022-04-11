import React from 'react';
import getTimeline from './Data';
import Event from './Event'; 
import Year from './Year'; 
import Banner from './Banner'

type TimelineProps = {
  id: number;
};

function Timeline(props: TimelineProps) {
  const timelineData = getTimeline(props.id);
  const groupByYear = manipTimelineData(timelineData.events);

  const [scrollType, setScrollType] = React.useState('-small-page')

  const handleScroll = () => {
      const position = window.pageYOffset;
      document.documentElement.style.setProperty('--scroll-height', `${position}`);

      var body = document.body,
      html = document.documentElement;
      var height = Math.max( body.scrollHeight, body.offsetHeight, 
                      html.clientHeight, html.scrollHeight, html.offsetHeight );
      document.documentElement.style.setProperty('--page-height', `${height}`);
      let scrollTypeName = height < 1250 ? 'ytf-x-small-page' : 
        height < 1750 ? 'ytf-small-page' : 
        height < 2500 ? 'ytf-medium-page' : 'ytf-large-page'; 
      setScrollType(scrollTypeName); 
  };
  
  React.useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          console.log('useEffect event listener is being removed.')
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const events = Object.values(groupByYear).map((year: YearGroup) => {
    return <Year year={year.year} events={year.events}/>
  })
  return (
    <div className='big-bottom-padding'>
      <Banner title={timelineData.title} subtitle={timelineData.subtitle}/>
      <div className='year-timeline'></div>
      <div className={`year-timeline-filled ${scrollType}`}></div>
      {events}
    </div>
  )
}

export default Timeline


type GroupByYear = {
  [index: number]: YearGroup;
}

type TimelineEvent = {
  text: string,
  date: Date,
  eventMarker?: string
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