"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  product: SanityProduct
}

export function ProductInfo({product}: Props) {
 

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      
    

      <div className="mt-6">
        <h3 className="sr-only">Brand</h3>
        <div className="space-y-6 text-base">Brand: <strong>{product.brand}</strong></div>
      </div>
      <div className="mt-6">
        <h3 className="sr-only">Model</h3>
        <div className="space-y-6 text-base">Model: <strong>{product.model}</strong></div>
      </div> <div className="mt-6">
        <h3 className="sr-only">Style</h3>
        <div className="space-y-6 text-base">Style: <strong>{product.style}</strong></div>
      </div>
      <div className="mt-6">
        <h3 className="sr-only">Wheel Size</h3>
        <div className="space-y-6 text-base">Wheel Size: <strong>{product.wheelsize}</strong></div>
      </div> <div className="mt-6">
        <h3 className="sr-only">Gears</h3>
        <div className="space-y-6 text-base">Gears: <strong>{product.gears}</strong></div>
      </div>
      <div className="mt-6">
        <p>
          Size: <strong>{product.size}</strong>
        </p>

      <div className="mt-6">
        <p>
          Additional Info: <strong>{product.description}</strong>
        </p>
        
        <div className="mt-6">
        <h2 className="sr-only">Product information</h2>
        <p className="text-base tracking-tight">Price: <strong> £{product.price}</strong></p>
      </div>
        {[].map((size) => (
          <Button key={size} variant="default" className="mr-2 mt-4">
            Size
          </Button>
        ))}
      </div>

      <form className="mt-6">
        
      </form>
    </div>
    </div>
  )
}
