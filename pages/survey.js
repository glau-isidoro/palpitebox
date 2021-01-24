import react from 'react'
import Link from 'next/link'

const Survey = () => {
  const save = async () => {
    const form = {
      name: 'joana',
      email: 'joana@email',
      whatsapp: '1100000',
      cupom: 'cupomcupom',
      promo: 'pramocinha'
    }
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json
      console.log(data)
    } catch (err) {
      console.log(err)
    }

  }
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
        <button onClick={save} className='bg-blue-400 px-9 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Salvar</button>
      </div>
    </div>
  )
}

export default Survey