import React from 'react'
import UserForm from '@/components/User/UserForm'

const FormPage = () => {  
  return (
    <div className='flex items-center justify-center w-full h-screen bg-zinc-950'>
      <div className='w-sm bg-zinc-50 rounded-xl px-8 py-12'>
        <UserForm />
      </div>
    </div>
  )
}

export default FormPage