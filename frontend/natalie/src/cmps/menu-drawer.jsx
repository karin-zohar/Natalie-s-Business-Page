
import { useState, useEffect } from 'react'
import SlDrawer from '@shoelace-style/shoelace/dist/react/drawer'
import { setDefaultAnimation } from '@shoelace-style/shoelace/dist/utilities/animation-registry.js'
import {AppNav} from './app-nav'

export function MenuDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SlDrawer 
        dir="rtl"
        className="menu-drawer"
        label="תפריט" 
        open={open}
        onSlAfterHide={() => setOpen(false)}
        placement="start"
        style={{ '--size': '70vw'}}>
        <AppNav setOpen={setOpen}/>
      </SlDrawer>

      <button className="toggle-menu" onClick={() => setOpen(true)} ></button>
    </>
  );
}
