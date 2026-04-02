import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div>
            <h1>ISMT Chat</h1>
        </div>

        <div>
            <div>
                <a href="/Home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <button>Chat page</button>
        </div>
    </header>
  )
}

export default Navbar