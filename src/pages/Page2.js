import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
function Page2() {
    const letters=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const storeData=useSelector(state=>state.data)
    const [letter, setLetter]=useState('')
  return (
    <div>
        <button onClick={()=>setLetter('')} className='btn btn-primary'>Clear Filter</button>
        <div style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
        {
            letters.map(l=><div style={{padding:10, cursor:'pointer', color:l===letter ? '#c00' : null, fontSize:l===letter ? '24px' : null}} onClick={()=>setLetter(l)}>{l}</div>)
        }
        </div>
        <div className='row'>
        {
            storeData && storeData.filter(x=>letter==='' || x.first_name.split('')[0]===letter).map(x=><div className='col-sm-6' style={{marginBottom:20}}><Card profile={x} /></div>)
        }
        </div>
    </div>
  )
}

export default Page2