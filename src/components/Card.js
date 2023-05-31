import React from 'react'
import {useDispatch} from 'react-redux'

function Card({profile}) {
  const dispatch=useDispatch()
  return (
    <div style={{display:'flex',justifyContent:'space-around', padding:'1.5rem', width:'30rem', height:'15rem', border:'3px #ccc solid'}}>
        <div style={{width:'12rem', float:'left'}}>
        <span>{`${profile.first_name} ${profile.last_name}`}</span>
        <div>{profile.email}</div>
        <br />
        <button className='btn btn-lg btn-primary' onClick={()=>dispatch({type:'REMOVE', id:profile.id})}>Delete</button>
        </div>
        <div style={{width:'10rem', float:'right'}}>
            <img src={profile.avatar} height='100' alt='Avatar' style={{border:'1px #ccc solid'}} />
        </div>
    </div>
  )
}

export default Card