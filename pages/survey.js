import react from 'react'
import Link from 'next/link'

const Survey = () => {
  return (
    <div className='pt-10'>
      <h1 className='text-center font-bold text-xl'>Críticas e Sugestões</h1>
      <p className='mt-6 mb-6 text-center'>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Seu nome:</label>
        <input type='text' className='bg-blue-100 p-4 block shadow-inner my-2 rounded' />
      </div>
    </div>
  )
}

export default Survey