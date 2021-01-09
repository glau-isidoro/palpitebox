import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <div>
        <Link href='/'>
          <a>home</a>
        </Link>
      </div>
    </div>
  )
}

export default About