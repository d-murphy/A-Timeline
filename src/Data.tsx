const TIMELINE_DATA_SOURCE = 'mock'

type TimelineEvent = {
    text: string, 
    position: number,
    side: string
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
                side: 'left',
                position: 1,
                text: 'here is the first event in the timeline'
            }, 
            {
                side: 'right', 
                position: 2,
                text: 'here is the second event in the timeline'
            }
        ],
        2: [
            {
                side: 'right', 
                position: 1,
                text: 'In the beginning'
            }, 
            {
                side: 'right', 
                position: 2, 
                text: 'This is the second thing to take place.'
            }
        ]
    }
    return timelines[id];
}