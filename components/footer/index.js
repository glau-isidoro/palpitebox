import React from 'react'

const Footer = () => {
  return (
    <div className='bg-indigo-900 p-4'>
      <div className='container mx-auto text-center text-xs font-bold text-white'>
        Projeto desenvolvido por Gláucia Isidoro /{' '}
        <a className='hover:underline' href='https://www.linkedin.com/in/glauciaisidoro/'>Linkedin</a> /{' '}
        <a className='hover:underline' href='https://github.com/glau-isidoro'>Github</a>
        <div className='mt-4'>
          <img className='inline p-3' src='/logo_semana_fsm.png' alt='logo do curso semana fullstack master' width="200" height="300" />
          <img className='inline p-3' src='/logo_devpleno.png' alt='logo devpleno' width="200" height="300" />
        </div>
      </div>
    </div>
  )
}

export default Footer