'use client'

// Hooks
import { useState } from 'react'
import Link from 'next/link'
import { useRegisterSchema } from './register-form-schema'
import { RegisterSchema } from './register-form-schema'
import { authClient } from '@/lib/auth-client'
import { toast } from 'react-toastify'

// Componentes
import {
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { email } from 'zod'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'

export function RegisterForm() {
  const form = useRegisterSchema()
  const [loading, setLoading] = useState(false)

  async function handleRegister(data: RegisterSchema) {
    await authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password
      },
      {
        onRequest: (ctx) => {
          setLoading(true)
        },
        onSuccess: (ctx) => {
          setLoading(false)
          redirect('/admin')
        },
        onError: (ctx) => {
          console.log(ctx.error.code)

          const code = ctx.error.code

          switch (code) {
            case 'USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL':
              toast.error('Email já está em uso')
              break
          }

          setLoading(false)
        }
      }
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu nome</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Seu nome" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Seu email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sua senha</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Sua senha" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading} className="w-full cursor-pointer">
          {loading ? 'Carregando' : 'Cadastrar'}
        </Button>

        <p className="text-sm text-zinc-500">
          Já possui uma conta?{' '}
          <Link className="text-blue-500 hover:underline" href="/login">
            Entrar
          </Link>
        </p>

        <div className="w-full flex justify-center items-center gap-2">
          <div className="flex-1 border"></div>
          <p className="text-zinc-500">OU</p>
          <div className="flex-1 border"></div>
        </div>

        <div className="grid gap-2">
          <Button
            type="button"
            onClick={async () => {
              await authClient.signIn.social({ provider: 'github', callbackURL: '/admin' })
            }}
          >
            Github
          </Button>
        </div>
      </form>
    </Form>
  )
}
