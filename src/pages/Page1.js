import React, {useState, useReducer} from 'react'
import { useDispatch } from 'react-redux'
const reducerFunction=(state={data:[], page:1}, action)=>{
    switch(action.type){
        case 'ADD_LIST':
            console.log(action)
            return {data:[...action.data], page:state.page};
        case 'PAGE_CHANGE':
            console.log(state, action)
            return {page:action.page}
        default:
            return state
    }
}
function Page1() {
    const [list, setList]=useReducer(reducerFunction, {data:[], page:1})
    const [checkList, setCheckList]=useState([]);
    const [search, setSearch]=useState('');
    //const storeData=useSelector((state)=>state.data)
    const dispatch=useDispatch()
    const fetchList = () => {
        fetch('https://reqres.in/api/users?page='+list.page)
        .then(res=>res.json())
        .then(data=>{console.log(data);setList({type: "ADD_LIST", data:data.data})})
      }
      const saveList=()=>{
        let data=list.data.filter(x=>checkList.includes(x.id))
        dispatch({type:'SAVE_LIST', data:data})
      }
    const updateChecked=(id, status)=>{
        console.log(id, status);
        (status) ?
        setCheckList(chklist=>[...chklist, id])
        : setCheckList(chklist=>[...chklist.filter(x=>x!==id)])
    }
    const showList=()=>{
        return(
            <div>
                <input class="form-control" type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
            <table className='table table-bordered table-striped'>
        <thead style={{backgroundColor:'#123', color:'#fff', position:'sticky', top: 0 }}>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Avatar</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {
        list.data.filter(x=>search==='' || x.first_name.search(search)>=0).map(x=><tr key={x.id}><td>{x.first_name}</td><td>{x.last_name}</td><td>{x.email}</td><td><img src={x.avatar} height="100" alt="Avatar" /></td><td><input type="checkbox" onChange={(e)=>updateChecked(x.id, e.target.checked)}  /></td></tr>)
        }
        </tbody>
    </table>
    </div>
    )
    }
  return (
    <>
    <div className='container'>Get data from page: <input type="number" style={{width:50}} value={list.page} onChange={(e)=>setList({type: "PAGE_CHANGE", page:e.target.value})} /> <button onClick={()=>fetchList()} className='btn btn-sm btn-primary'>Go</button><button style={{float:'right'}} onClick={()=>saveList()} className='btn btn-sm btn-primary'>Save Selected</button></div>
    <div style={{height: '60vh', width:'80vw', margin:'auto', marginTop: 50, overflow:'scroll'}}>
        {
            list.data && list.data.length>0 ? showList() : <div className='alert alert-info'>Data not available! Please enter page no and click on Go to fetch data.</div>
        }
        
    </div>
    </>
  )
}

export default Page1