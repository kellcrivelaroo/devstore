import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar'
import Link from 'next/link'

const Account = () => {
  return (
    <Link href="/" className="flex items-center gap-2 hover:underline">
      <span className="text-sm">Account</span>
      <Avatar className="h-8 w-8">
        <AvatarImage
          src="https://github.com/kellcrivelaroo.png"
          alt="@kellcrivelaro"
          width={32}
          height={32}
        />
        <AvatarFallback>KC</AvatarFallback>
      </Avatar>
    </Link>
  )
}

export default Account
