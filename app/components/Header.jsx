import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='logo'>
                <Link href='/'>
                    Asutosh Panda
                </Link>
            </div>
            <div className='links'>
                <Link href='/about'>About</Link>
                <Link href='/about/exp'>Experience</Link>
                <Link href='/github/projects'>Projects</Link>
            </div>
        </div>

    </header>
  )
}

export default Header