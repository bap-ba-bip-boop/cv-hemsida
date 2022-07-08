import React from 'react'

export const ITStuffComponent = props => {
  return (
    <div key ={props.CategoryName}>
      <p>{props.CategoryName}</p>
      {props.items.map(item => <span key={item}>{item}, </span>)} 
    </div>
  )
}
