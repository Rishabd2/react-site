import React from "react";

function ScheduleComp({name, date, loc, link}){
    const options = {month: 'short', day: 'numeric'}
    let date_str = new Intl.DateTimeFormat('en-US', options).format(date)
    let d_spl = date_str.split(" ")
    if (d_spl[1].length == 1){
        date_str = d_spl[0] + " 0"+d_spl[1]
    }
    return (<a href={link}>
        <div className="schedule-component">
            <div className="schedule-name">{name}</div>
            <div className="schedule-date">{date_str}</div>
            <div className="schedule-location">{loc}</div>
        </div>
    </a>)
}

export default ScheduleComp