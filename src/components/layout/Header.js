import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/login">Login</Link> |
            <Link style={linkStyle} to="/signup"> Sign Up</Link> |
            <Link style={linkStyle} to="/"> Home</Link> |
            <Link style={linkStyle} to="/completed"> Completed</Link> |
            <Link style={linkStyle} to="/deleted"> Deleted</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}