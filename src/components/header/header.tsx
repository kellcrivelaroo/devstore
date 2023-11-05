import { Separator } from '@ui/separator'

import Link from 'next/link'
import Account from './account'
import Cart from './cart'
import Search from './search'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-black text-white">
          devstore
        </Link>

        <Search />
      </div>

      <div className="flex items-center gap-4">
        <Cart />
        <Separator orientation="vertical" className="bg-border w-px h-4" />
        <Account />
      </div>
    </div>
  )
}

export default Header
