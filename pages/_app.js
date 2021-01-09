import React from 'react'
import '../css/styles.css'


const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <h1 className='bg-pink-500 p-8'>MyAPP</h1>
      <Component {...pageProps}></Component>
    </div>
  )
}

export default MyApp