'use client'
import { useCart } from '@/app/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'

const Cart = () => {
  const { items } = useCart()
  const productsCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">{`Cart (${productsCount})`}</span>
    </div>
  )
}

export default Cart
