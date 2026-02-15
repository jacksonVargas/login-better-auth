import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="w-full h-screen grid place-items-center px-5">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Erro 404</h1>
        <p className="text-zinc-500 mb-5">Página não encontrada</p>
        <Link
          className="py-2 px-5 md:text-sm bg-black hover:bg-blue-500 text-white rounded"
          href="/login"
        >
          Voltar
        </Link>
      </div>
    </div>
  )
}
