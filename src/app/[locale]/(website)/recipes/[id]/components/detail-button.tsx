'use client'
import { Button } from "@/components/ui/button"
import { Heart, Share2, ShoppingCart } from "lucide-react"
import { useTranslations } from "next-intl";
import { ReactNode, useCallback } from "react"

type ButtonType = 'cart' | 'wishlist' | 'share';

interface DetailButtonProps {
  type: ButtonType;
  variant?: 'default' | 'ghost' | 'outline'
}
const DetailButton = ({ type, variant = 'outline' }: DetailButtonProps) => {
  const t = useTranslations('detail');

  const components: Record<string, {
    icon: ReactNode,
    label: string,
    action: () => void,
  }> = {
    cart: {
      icon: <ShoppingCart className="mr-2 h-4 w-4" />,
      label: t('cart'),
      action: useCallback(() => { }, []),
    },
    wishlist: {
      icon: <Heart className="mr-2 h-4 w-4" />,
      label: t('wishlist'),
      action: useCallback(() => { }, [])
    },
    share: {
      icon: <Share2 className="mr-2 h-4 w-4" />,
      label: t('share'),
      action: useCallback(() => { }, [])
    },
  }

  return (
    <Button variant={variant} onClick={components[type].action}>
      {components[type].icon}
      {components[type].label}
    </Button>
  )
}

export default DetailButton;
