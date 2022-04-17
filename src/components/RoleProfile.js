import React from 'react'

function RoleProfile({title, persons}){
    let contents = []

    for (let idx in persons){
        let img_tag
        let link_wrap

        let img_url

        if(persons[idx].photo_src){
            img_url = "./team-profile/" + persons[idx].photo_src
        }
        else{
            img_url = "./team-profile/default-profile.png"
        }

        img_tag = <img className='person-img' src={img_url}></img>
        if("linkedin_url" in persons[idx]){
            link_wrap = <a href={persons[idx].linkedin_url}>{img_tag}</a>
        }
        else link_wrap = img_tag
        contents.push(<div className='person-container'>
            {link_wrap}
            <div className='person-title'>
                {persons[idx].name}
            </div>
            </div>)
    }
    return(
    <>
    <div className='role-title'>{title}</div>
    <div className='role-container'>
        {contents}
    </div>
    </>
    )
}

export default RoleProfile