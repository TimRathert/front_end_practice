import React, { useState } from 'react'
import SubMenu from './SubMenu'

function Menu(props) {
  const [open, setOpen] = useState(false)
  

  return (
    <div className={`menu-main ${open ? "menu-open" : "menu-closed"}`} >
      <div className={'menu-title'} onClick={() => {setOpen(!open)}}>{ open ? 'Hide' : 'Show'}</div>
      <SubMenu />
      <SubMenu />
      <SubMenu />
      <SubMenu />
    </div>
  )
}

export default Menu