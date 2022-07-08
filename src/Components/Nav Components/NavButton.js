import React from 'react'

export const NavButton = props => {
  return (
    <a className='navButton' href="#" onClick={()=>props.buttonAction(props.redirectPage)}>{props.buttonText}</a>
  )
}
