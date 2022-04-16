import React from "react";

function linkArr(e_data){
    let contents = []

    for (let i = 0; i < e_data.items.length; i++){
        console.log(e_data.links[i])
        contents.push(<div>
            <a href={e_data.links[i]}>
                {e_data.items[i]}
            </a>
        </div>)
    }
    return contents

}

function dateArr(e_data){
    let contents = []
    const options = {month: 'long', day: 'numeric'}

    for (let i = 0; i < e_data.items.length; i++){
        contents.push(<div>
            {new Intl.DateTimeFormat('en-US',options).format(e_data.items[i])}
        </div>)
    }
    return contents
}

function genArr(e_data){
    let contents = []
    for (let i = 0; i < e_data.items.length; i++){
        contents.push(<div>
            {e_data.items[i]}
        </div>)
    }
    return contents
}

function ScheduleComp({className, e_data}){
    let contents
    if (className === 'schedule-name'){
        contents = linkArr(e_data)
    }
    else if (className === 'schedule-date'){
        contents = dateArr(e_data)
    }
    else contents = genArr(e_data)


    return(<div className={className} >
        {contents}
    </div>)
}

export default ScheduleComp