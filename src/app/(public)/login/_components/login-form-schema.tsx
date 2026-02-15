import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.email('Email inválido'),
  password: z.string().nonempty('Campo senha é obrigatória').min(8, 'Senha deve ter no minímo 8 caracteres')
})

export type LoginSchema = z.infer<typeof loginSchema>

export function useLoginSchema() {
  return useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
}