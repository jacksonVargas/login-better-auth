import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faça seu cadastro'
}

// Componentes
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { RegisterForm } from './_components/register-form'

export default function Register() {
  return (
    <main className="w-full min-h-screen grid place-items-center p-5">
      <Card className="w-full max-w-100 mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Faça seu Cadastro</CardTitle>
        </CardHeader>

        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </main>
  )
}
