const initialState={
    data:[]
}
const Reducer=(state=initialState, action)=>{
    switch(action.type){
        case 'SAVE_LIST':
            console.log(action);
            return {data:[...action.data]};
        case 'REMOVE':
            console.log(action);
            return {data:[...state.data.filter(x=>x.id!==action.id)]}
        default:
            return {user:{}}
    }
}
export default Reducer;