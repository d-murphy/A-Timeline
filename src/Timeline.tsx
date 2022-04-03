import React from 'react';
import getTimeline from './Data';

type TimelineProps = {
  id: number;
};

function Timeline(props:TimelineProps) {
    const timelineData = getTimeline(props.id);
    const events = timelineData.map(el => {
        return <li>Text: {el.text}; will appear on the {el.side}</li>
    })
    return <ul>{events}</ul>
}

export default Timeline