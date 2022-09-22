import React from 'react'

export const ITStuffComponent = props => {
  return (
    <div className='categoryContainer' key ={props.CategoryName}>
      <h3 className='categoryContainerTitle'>{props.CategoryName}</h3>
      {props.items.map( (item,i) =>  i+1===props.items.length ? <span key={item}>{item}</span> : <span key={item}>{item}, </span>
      )}
    </div>
  )
}
