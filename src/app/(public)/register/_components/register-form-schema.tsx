import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const registerSchema = z.object({
  name: z.string().nonempty('Campo nome é obrigatório'),
  email: z.email('Email inválido'),
  password: z.string().nonempty('Campo senha é obrigatória').min(8, 'Senha deve ter no minímo 8 caracteres'),
})

export type RegisterSchema = z.infer<typeof registerSchema>

export function useRegisterSchema() {
  return useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })
}