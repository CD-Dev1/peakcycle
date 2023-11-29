import { Image } from "sanity"

interface InventoryProduct {
  
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  name: string,
  images: Image[]
  brand: string[]
  style: string[]
  size: string[]
  suspension: string[]
  model: string
  year: number
  additionalinfo: string
  wheelsize:string[]
  price: number[]
  currency: string
  gears: string
  description: string
  
}

export const inventory: InventoryProduct[] = [
  
 
]
