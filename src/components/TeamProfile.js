import React from 'react'
import profiles_orig from '../team-profiles.json'
import RoleProfile from './RoleProfile'

function TeamProfile(props){
   let profiles = JSON.parse(JSON.stringify(profiles_orig))
   let contents = []

   for(let role in profiles){
       contents.push(<RoleProfile title={profiles[role].pretty_name} persons={profiles[role].persons} />)
   }

   return(<>
   <h2 id='content_header'>Meet the Team</h2>
   <div className='team-container'>
       {contents}
   </div>
   </>)

}

export default TeamProfile