import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faça seu login'
} 

// Componentes
import { LoginForm } from './_components/login-form'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Login() {
  return (
    <main className="w-full min-h-screen grid place-items-center p-5">
      <Card className="w-full max-w-100 mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Faça seu Login</CardTitle>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  )
}