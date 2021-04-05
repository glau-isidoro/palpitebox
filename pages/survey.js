import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Survey = () => {
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    whatsapp: '',
    rate: 0,
    opinion: ''
  })
  const rateValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [success, setSuccess] = useState(false)
  const [savedResponse, setResponse] = useState({})
  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setResponse(data)
      setSuccess(true)
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
      <PageTitle title='Pesquisa'/>
      <h1 className='text-center font-bold text-xl'>Críticas e Sugestões</h1>
      <p className='mt-6 mb-6 text-center'>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      { !success && <div className='w-1/3 mx-auto mb-6'>
        <label className='font-bold'>Seu nome:</label>
        <input type='text' className='bg-blue-100 p-4 block shadow my-2 rounded' placeholder='Nome e Sobrenome' onChange={onChange} name='name' value={form.name} />
        
        <label className='font-bold'>E-mail::</label>
        <input type='text' className='bg-blue-100 p-4 block shadow my-2 rounded' placeholder='seu_email@email.com' onChange={onChange} name='email' value={form.email} />
        
        <label className='font-bold'>Whatsapp:</label>
        <input type='text' className='bg-blue-100 p-4 block shadow my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='whatsapp' value={form.whatsapp} />


        <label className='font-bold'>Conte sua opinião, crítica ou sugestão:</label>
        <input type='text' className='bg-blue-100 p-4 block shadow my-2 rounded' placeholder='...' onChange={onChange} name='opinion' value={form.opinion} />
        
        <label className='font-bold'>Qual nota você dá pra esse estabelecimento?</label>
        <div className='flex'>
          { rateValues.map(value => {
            return (
              <label className='block w-1/12 text-center'>
                {value} <br/>
                <input type='radio' name='rate' value={value} onChange={onChange}></input>
              </label>)
            })
          }
        </div>

        <button onClick={save} className='bg-blue-400 px-9 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Salvar</button>
      </div> }
      { success && <div className='w-1/2 mx-auto mb-6'>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por compartilhar sua opinião conosco!</p>
        {
          savedResponse.showCoupon && <div className='text-center border p-4 mb-4'>
            Seu cupom: <br/>
            <span className='font-bold text-2xl'>{savedResponse.cupom}</span>
          </div>
        }
        {
          savedResponse.showCoupon && <div className='text-center border p-4'>
            <span className='font-bold block mb-2'>{savedResponse.promo}</span>
            <span className='italic'>Salve o código e utilize na sua próxima compra</span>
          </div>
        }
      </div>}
    </div>
  )
}

export default Survey