import React from 'react'

export const NavButton = props => {
  return (
    <a href="#" onClick={()=>props.buttonAction(props.redirectPage)}>{props.buttonText}</a>
  )
}
