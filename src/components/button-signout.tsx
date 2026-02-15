'use client'

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

export function ButtonSignOut() {
  const router = useRouter()

  return (
    <Button
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.replace('/login')
            }
          }
        })
      }}
    >
      Sair da conta
    </Button>
  )
}
