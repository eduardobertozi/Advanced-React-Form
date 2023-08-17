import Link from 'next/link'
import CustomImage from '@/components/ui/Image'
import { Suspense } from 'react'
import { Card } from '@/components/ui/Card'
import { Check, Rocket, X } from 'lucide-react'

export default async function Home() {
  return (
    <main>
      <header>
        <nav>
          <ul className='flex items-start gap-4'>
            <li><Link href="/atividades">Teste de link</Link></li>
            <li><Link href="/form">Formulário</Link></li>
          </ul>
        </nav>
      </header>

      <Suspense>
        <CustomImage
          width={100}
          height={100}
          quality={90}
          src="https://drive.google.com/uc?id=1uAClEgOSe4ISd_lhx5TCIf59Hl0Dz72c"
          alt="Banner"
        />
      </Suspense>

      <Card.Root>
        <Card.Icon icon={Rocket} />
        <Card.Content title='Seja bem vindo' description='Este é um componente composto' />
        <Card.Actions>
          <Card.Action variant='danger'>{<X />}</Card.Action>
          <Card.Action variant='success'>{<Check />}</Card.Action>
        </Card.Actions>
      </Card.Root>
    </main>
  )
}
