import React, { useState } from 'react'

function Carousel({images}) {

const [curentIndex, setCurrentIndex]=useState(0)

const handlenext =()=>{
    setCurrentIndex((prevIndex)=>(prevIndex+1)% images.length)
}

const handleprev=()=>{
    setCurrentIndex((prevIndex)=>prevIndex===0? images.length-1:prevIndex-1)
}

  return (
    <div>
      
    </div>
  )
}

export default Carousel
