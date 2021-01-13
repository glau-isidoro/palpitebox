import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapperup}>
        <div className={styles.container}>
          <img className='mx-auto' src='/logo_palpitebox.png' alt='palpitebox' width="100" height="130" />
        </div>
      </div>
      <div className={styles.wrapperdown}>
        <Link href='/about'>
          <a className='px-2 hover:underline'>Sobre</a>
        </Link>
        <Link href='/contact'>
          <a className='px-2 hover:underline'>Contato</a>
        </Link>
        <Link href='/survey'>
          <a className='px-2 hover:underline'>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Header