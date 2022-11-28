import React, { useState } from 'react'

function SubMenu(props) {
    const [subMenuOpen, setSubMenuOpen] = useState(false)
    const SubMenuOptions = () => {
        return (
            <>
                <div className={`sub-menu-item`}>Item 1</div>
                <div className={`sub-menu-item`}>Item 2</div>
                <div className={`sub-menu-item`}>Item 3</div>
                <div className={`sub-menu-item`}>Item 4</div>
            </>
        )
    }
  return (
   
    <div className={`menu-item ${subMenuOpen ? "sub-menu-open" : "menu-closed"}`} onClick={() => {setSubMenuOpen(!subMenuOpen)}}>Menu item
        { subMenuOpen ? SubMenuOptions() : '' }
    </div>
    
    
  )
}

export default SubMenu