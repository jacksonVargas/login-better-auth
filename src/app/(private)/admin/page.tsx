import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { ButtonSignOut } from '@/components/button-signout'


export default async function Admin() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!session) {
    redirect('/login')
  }


  return (
    <main className="w-full min-h-screen grid place-items-center p-5">
      <div className="text-center space-y-4">
        <h3 className="text-3xl ">Seja bem vindo {session.user.name}</h3>
        <ButtonSignOut />
      </div>
    </main>
  )
}