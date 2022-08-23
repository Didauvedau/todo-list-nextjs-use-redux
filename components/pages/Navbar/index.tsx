import React from 'react'
import { Drawer, Button } from 'antd'
import Link from 'next/link'

const NavComponent: React.FC = () => {
  return (
    <div className="container py-2">
      <nav className="navbar d-flex justify-content-evenly px-3">
        <div className="nav-menu">
          <Link href="/">
            <a>HOME</a>
          </Link>
        </div>
        <div className="nav-menu">
          <Link href="/post">
            <a>POST</a>
          </Link>
        </div>
        <div className="nav-menu">
          <Link href="/count">
            <a>COUNT</a>
          </Link>
        </div>
        <div className="nav-menu">
          <Link href="/todo">
            <a>TODO LIST</a>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavComponent
