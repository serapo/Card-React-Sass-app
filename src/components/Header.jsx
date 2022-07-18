import React from 'react'
import headerStyle from '../scss/header.module.scss'; 

const Header = () => {
  return (
 
    <header>
      <h1 className={headerStyle['title']}>REACT SASS</h1>
    </header>
    
  )
}

export default Header;