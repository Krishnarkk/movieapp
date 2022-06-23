import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id}=useParams();
  return (
    <div>
     <h1>Single movie {id}</h1>
    </div>
  )
}

export default Detail