import React from 'react'
import {assets} from "../../assets/assets"
import "./icon.css"


const Icon = ({ asset, alt, text }) => {
  return (
    <>
        <img src={assets[asset]} alt={ alt + " Icon"} />
        <p>{text}</p>
    </>
  )
}

export default Icon