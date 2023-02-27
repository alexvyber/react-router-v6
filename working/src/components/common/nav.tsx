import { css } from "@emotion/css"
import React from "react"
import { NavLink, Link } from "react-router-dom"

const NavStyles = css`
  margin-bottom: 15px;
  a {
    padding: 6px 12px;
    text-decoration: none;
    border-radius: 4px;
    &.active {
      color: #646cff;
      border: 2px solid #535bf2;
    }
  }
`

const Nav = () => {
  return (
    <nav className={NavStyles}>
      <NavLink
        to="/"
        className={({ isActive, isPending }) => {
          if (isActive) return "active"
          if (isPending) return "PENDING"
          return undefined
        }}
        end>
        Products
      </NavLink>

      <NavLink
        to="/admin"
        className={({ isActive, isPending }) => {
          if (isActive) return "active"
          if (isPending) return "PENDING"
          return undefined
        }}>
        Admin
      </NavLink>
    </nav>
  )
}

export default Nav
