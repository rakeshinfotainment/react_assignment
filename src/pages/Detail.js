import React from 'react'
function Detail(props) {
  return (
    <>
    <h3>Details</h3>
    {props.data.first_name}
    </>
  )
}

export default Detail