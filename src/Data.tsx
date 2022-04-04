const TIMELINE_DATA_SOURCE = 'mock'

const getTimeline = function (id:number) : TimelineInstance {
    if(TIMELINE_DATA_SOURCE == 'mock'){
        return getMockData(id); 
    } else {
        console.log('live data not yet defined - returning empty object')
        return {title: '', subtitle:'', events: []}; 
    }
}

export default getTimeline

type TimelineEvent = {
    text: string, 
    date: Date, 
    eventMarker?: string
}

type TimelineInstance = {
    title: string, 
    subtitle: string, 
    emoji?: string, 
    events: TimelineEvent[]
}

function getMockData(id:number) : TimelineInstance {

    interface timelineLookup { [key: number]: TimelineInstance; }

    const timelines: timelineLookup = {
        1: {
            title: 'My first timeline', 
            subtitle: 'Check out this cool timeline interface.',
            events: [
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
            ]
        },
        2: {            
            title: 'My first timeline', 
            subtitle: 'Check out this cool timeline interface.',
            events: [
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
    }
    return timelines[id];
}