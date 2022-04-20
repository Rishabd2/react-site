import React, {useState, useEffect} from "react";
import axios from "axios";
import ScheduleComp from './ScheduleComp'
let backend_url = 'https://expo-backend-site.herokuapp.com'
// let backend_url = 'http://192.168.86.59:3002'
const calendar_id = 'c_i75tp7crnophbv9fnen57nebio@group.calendar.google.com'

function parseEvents(events){
  let names = []
  let dates = []
  let locs = []
  let links = []
  const cur_date = new Date()
  for(let idx in events){
    
    let event = events[idx]
    if(event.description){
      const e_date = new Date(event.start.dateTime)
      const description_match =  event.description.includes("#SITE")
      const future_event = e_date >= cur_date
      if(description_match){
      
        names.push(event.summary)
        dates.push(e_date)
        locs.push(event.location.split(',')[0])
        links.push(event.htmlLink)
      }
    }
    
    
  }
  return {names, dates, locs, links}
}

function Schedule(props){

  const [events, setEvents] = useState(null)
  const [calURL, setCalURL] = useState(null)
  useEffect(() =>{
    axios.get(backend_url + '/api/cal/'+calendar_id).then(resp =>{
      setCalURL("https://calendar.google.com/calendar/embed?src="+ calendar_id)
      setEvents(resp.data.items)
    } 
    )
    
  },[])

  if (!events ) return (<div id="loading-schedule" className="loading"></div>);

  const {names, dates, locs, links} = parseEvents(events)
  let comp_contents = []

  for(let i = 0; i < names.length; i++){
    comp_contents.push(<ScheduleComp key={i} name={names[i]} date={dates[i]} loc={locs[i]} link={links[i]} />)
  }

  return(
          <>
    <div className="schedule-container">
      {comp_contents}
    </div>
    <a href={calURL}><img id="calendar-icon" src="./images/calendar_simple.png" ></img></a>
    </>
    )
    
}

export default Schedule