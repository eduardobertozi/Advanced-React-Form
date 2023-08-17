import { Suspense } from 'react'
import { Card } from '@/components/ui/Card'
import { Check, Rocket, X } from 'lucide-react'
import CustomImage from '@/components/ui/Image'
import UserForm from '@/components/User/UserForm'

export default async function Home() {
  return (
    <main className='flex flex-col gap-12 items-center w-full min-h-screen bg-zinc-950 p-12'>
      

      {/* Composition pattern examples*/}
      <Card.Root>
        <Card.Icon icon={Rocket} />
        <Card.Content title='Seja bem vindo' description='Este é um componente composto' />
        <Card.Actions>
          <Card.Action variant='danger'>{<X />}</Card.Action>
          <Card.Action variant='success'>{<Check />}</Card.Action>
        </Card.Actions>
      </Card.Root>

      <UserForm />

    </main>
  )
}
