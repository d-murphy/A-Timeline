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
    eventMarker?: number
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
            title: 'A timeline', 
            subtitle: 'Check out this cool timeline interface.',
            events: [
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('1/4/2015'),
                    eventMarker: 9200
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('1/3/2015'),
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('3/4/2016'),
                    eventMarker: 128507
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('3/10/2016')
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('4/10/2016')
                },                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('1/4/2017')
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('3/4/2017'),
                    eventMarker: 9748
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('3/4/2017')
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('3/10/2017'),
                    eventMarker: 9918
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('4/10/2018'),
                    eventMarker: 127824
                },
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('1/4/2015')
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('3/4/2015'),
                    eventMarker: 127853
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('3/4/2016')
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('3/10/2016')
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('4/10/2016'),
                    eventMarker: 127875
                },                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('1/4/2017')
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('3/4/2017'),
                    eventMarker: 127912
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('3/4/2017')
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('3/10/2017')
                }, 
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('4/10/2018')
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
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in eros ut justo accumsan rutrum id sed est. Vestibulum tincidunt, neque fermentum dignissim sodales, metus lorem', 
                    date: new Date('3/4/2016')
                }
            ]
        }
    }
    return timelines[id];
}