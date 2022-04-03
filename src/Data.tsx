const TIMELINE_DATA_SOURCE = 'mock'

type TimelineEvent = {
    text: string, 
    date: Date, 
    eventMarker?: string
}

const getTimeline = function (id:number) : TimelineEvent[] {
    if(TIMELINE_DATA_SOURCE == 'mock'){
        return getMockData(id); 
    } else {
        console.log('live data not yet defined - returning empty array')
        return []; 
    }
}

export default getTimeline

function getMockData(id:number) : TimelineEvent[] {

    interface timelineLookup { [key: number]: TimelineEvent[]; }

    const timelines: timelineLookup = {
        1: [
            {
                text: 'here is the first event in the timeline', 
                date: new Date('1/4/2015')
            }, 
            {
                text: 'here is the second event in the timeline', 
                date: new Date('3/4/2015')
            }, 
            {
                text: 'here is the third event in the timeline', 
                date: new Date('3/4/2016')
            }, 
            {
                text: 'another event', 
                date: new Date('3/10/2016')
            }, 
            {
                text: 'The FINAL event', 
                date: new Date('4/10/2016')
            }
        ],
        2: [
            {
                text: 'In the beginning', 
                date: new Date('1/4/2015')
            }, 
            {
                text: 'This is the second thing to take place.', 
                date: new Date('3/4/2015')
            }, 
            {
                text: 'This is the second thing to take place.', 
                date: new Date('3/4/2016')
            }
        ]
    }
    return timelines[id];
}