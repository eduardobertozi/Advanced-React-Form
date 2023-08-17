'use client'

import React from 'react'
import BaseButton from '../ui/Button'
import { useForm, useFieldArray, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../ui/Form'
import { XCircle } from 'lucide-react'

const MAX_FILE_SIZE = 5 * 1024 * 1024
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const createUserSchema = z.object({
  name: z.string()
    .nonempty('Campo obrigatório')
    .transform(name => {
      return name.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),

  email: z.string()
    .nonempty('Campo obrigatório')
    .email('E-mail inválido')
    .refine(email => {
      return email.endsWith('gmail.com')
    }, 'O email deve ser gmail.com'),

  password: z.string()
    .nonempty('Campo obrigatório')
    .min(6, 'A senha deve ter pelo menos 6 caracteres'),

  techs: z.array(z.object({
    title: z.string().nonempty('O título é obrigatório'),
    knowledge: z.coerce.number().min(1, 'Mínimo é 1').max(100, 'Máximo é 100'),
  })).min(1, {
    message: 'Insira pelo menos 2 tecnologias'
  }),

  avatar: z.instanceof(FileList)
    .refine((files) => !!files.item(0), "A imagem de perfil é obrigatória")
    .refine((files) => files.item(0)!.size <= MAX_FILE_SIZE, `Tamanho máximo de 5MB`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files.item(0)!.type),
      "Formato de imagem inválido"
    ).transform(files => {
      return files.item(0)!
    }),
})    

type createUserFormData = z.infer<typeof createUserSchema>

/* -------------Component--------------- */
const UserForm = () => { 
  const createUserForm = useForm<createUserFormData>({
    resolver: zodResolver<any>(createUserSchema),
  })

  const { 
    handleSubmit,
    formState: { isSubmitting },
    control
  } = createUserForm

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'techs',
  })

  const makeUser = (data: createUserFormData) => {
    console.log(data)
  }

  const addNewTech = () => {
    if (fields.length < 4) {
      append({ title: '', knowledge: 0 })
    }
  }
  
  return (
    <div className='w-full max-w-sm'>
      <FormProvider {...createUserForm}>
        <Form.Root 
          onSubmit={handleSubmit(makeUser)}
        >
          <Form.Field>
            <Form.Label htmlFor='name'>
              Nome
            </Form.Label>

            <Form.Input type="text" name='name' />
            
            <Form.ErrorMessage field='name' />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor='email'>
              Email
            </Form.Label>

            <Form.Input type="email" name='email' />
            
            <Form.ErrorMessage field='email' />
          </Form.Field>
          
          <Form.Field>
            <Form.Label htmlFor='password'>
              Senha
            </Form.Label>

            <Form.Input type="password" name='password' />
            
            <Form.ErrorMessage field='password' />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor='avatar'>
              Avatar
            </Form.Label>

            <Form.Input type="file" name='avatar' required />
            
            <Form.ErrorMessage field='avatar' />
          </Form.Field>

          <Form.Field>
            <Form.Label className='flex items-center justify-between'>
              Tecnologias

              <button 
                type='button'
                onClick={addNewTech}
                className='text-violet-500 text-sm'
                disabled={fields.length >= 4}
              >
                Add
              </button>
            </Form.Label>

            <hr className='my-2'/>

            {fields.map((field, index) => {            
              const titleField = `techs.${index}.title`
              const knowledgeField = `techs.${index}.knowledge`

              return (
                <Form.Field key={field.id}>
                  <div className='flex gap-2 items-center'>
                    <Form.Input type='text' name={titleField} className='flex-1' />
                    <Form.Input type='number' name={knowledgeField} className='w-1/4'/>

                    <button
                      type='button'
                      onClick={() => remove(index)}
                      className='text-red-500'
                    >
                      <XCircle size={14} />
                    </button>
                  </div>
                  <Form.ErrorMessage field={titleField} />
                </Form.Field>  
              )
            })}
          </Form.Field>

          <BaseButton 
            type='submit'
            disabled={isSubmitting}
            className='w-1/3 bg-violet-500 hover:bg-violet-600'
          >
            Enviar
          </BaseButton>
        </Form.Root>
      </FormProvider>
    </div>
  )
}

export default UserForm