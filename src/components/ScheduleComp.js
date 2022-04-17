import React from "react";

function linkWrapper(contents, links){
    let new_contents = []

    for (let i = 0; i < contents.length; i++){
        new_contents.push(<div>
            <a href={links[i]}>
                {contents[i]}
            </a>
        </div>)
    }
    return new_contents

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
    
    if (className === 'schedule-date'){
        contents = dateArr(e_data)
    }
    else contents = genArr(e_data)

    if ("links" in e_data) contents = linkWrapper(contents, e_data.links)


    return(<div className={className} >
        {contents}
    </div>)
}

export default ScheduleComp