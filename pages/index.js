import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <h1>Palpite Box</h1>
      <div>
        <Link href='/about'>
          <a> Sobre </a>
        </Link>
        <Link href='/contact'>
          <a> Contato </a>
        </Link>
        <Link href='/survey'>
          <a> pesquisa </a>
        </Link>
      </div>
    </div>
  )
}

export default Index