import React, { useState } from 'react'

function Menu() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`menu-main ${open ? "menu-open" : "menu-closed"}`} onClick={() => {setOpen(!open)}}>
      This is the menu

    </div>
  )
}

export default Menu