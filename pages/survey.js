import React, { useState } from 'react'
import Link from 'next/link'

const Survey = () => {
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    whatsapp: '',
  })
  const save = async () => {
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
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
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
        <input type='text' className='bg-blue-100 p-4 block shadow my-2 rounded' placeholder='Nome Sobrenome' onChange={onChange} name='name' value={form.name} />
        
        <label className='font-bold'>E-mail::</label>
        <input type='text' className='bg-blue-100 p-4 block shadow my-2 rounded' placeholder='seu_email@email.com' onChange={onChange} name='email' value={form.email} />
        
        <label className='font-bold'>Whatsapp:</label>
        <input type='text' className='bg-blue-100 p-4 block shadow my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='whatsapp' value={form.whatsapp} />

        <button onClick={save} className='bg-blue-400 px-9 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Salvar</button>
        <pre>
          {JSON.stringify(form, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default Survey