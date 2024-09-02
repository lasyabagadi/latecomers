import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

export default function Header() {
  return (
    <>
    
    
    <div class="sb-nav-fixed">
       
       <Topbar/>
       <div id="layoutSidenav">

         <Sidebar/>
    </>
  )
}
