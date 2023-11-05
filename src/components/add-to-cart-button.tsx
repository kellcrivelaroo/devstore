'use client'
import { useCart } from '@/app/contexts/cart-context'

interface AddToCartButtonProps {
  productId: number
}

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const { addToCart } = useCart()
  const handleClick = () => addToCart(productId)

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}

export default AddToCartButton
