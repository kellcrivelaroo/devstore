'use client'
import { Search as SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

const Search = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const q = searchParams.get('q') || ''

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (query) router.push(`/search?q=${query}`)
  }

  return (
    <form
      className="flex w-[320px] items-center gap-3 rounded-full bg-input px-5 py-3 border"
      onSubmit={handleSearch}
    >
      <SearchIcon className="w-5 h-5 text-zinc-500" />

      <input
        name="q"
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none"
        defaultValue={q}
        required
      />
    </form>
  )
}

export default Search
