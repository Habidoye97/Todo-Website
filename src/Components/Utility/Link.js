import React from 'react'


const Link = ({className, children, goingTo}) => {
  return (
    <a href={goingTo} className={className}>
      {children}
    </a>
  )
}

export default Link
