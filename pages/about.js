import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const About = () => {
  return (
    <div>
      <PageTitle title='Sobre nós'/>
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