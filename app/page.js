import React from 'react'
import Link from 'next/link'


const Homepage = () => {
  return (
    <div>
      <h1>It's Asutosh Panda</h1>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/about/exp'>Experience</Link>
        </li>
      </ul>
    </div>
  )
}

export default Homepage