import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"

interface Props {
  searchParams: {
    date?: string,
    price?: string,
    style?: string,
    brand?: string,
    size?: string,
    wheelsize?: string,
    search?: string,
    suspension?: string
  
  }
}

export default async function Page({ searchParams} : Props) {
  const {date = "desc", price, style, brand, size, wheelsize, search, suspension} = searchParams
  const priceOrder = searchParams.price ? `| order(price${searchParams.price})`: ""
  const dateOrder = searchParams.date ? `| order(_createdAt${searchParams.date})` : ""
  const order = `${priceOrder}${dateOrder}`
  const productFilter = `_type == "product"`
  const styleFilter = style ? `&&"${style}" in style` : ""
  const brandFilter = brand ? `&&"${brand}" in brand` : ""
  const sizeFilter = size ? `&& "${size}" in size` : ""
  const wheelFilter = wheelsize ? `&&"${wheelsize}" in wheelsize` : ""
  const susFilter = suspension ? `&&"${suspension}" in suspension` : ""

  const searchFilter = search ? `&& name match "${search}"` : ""

  

  const filter = `*[${productFilter}${styleFilter}${brandFilter}${sizeFilter}${wheelFilter}${searchFilter}${susFilter}]`
  const products = await client.fetch<SanityProduct[]>(groq`${filter} ${order}{
    _id,
    _createdAt,
    name,
    images,
    price,
    brand,
    wheelsize,
    size,
    gears,
    description,
    suspension,
    "slug": slug.current
  }`)
  console.log(products)
  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">{siteConfig.name}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">{siteConfig.description}</p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} result{products.length === 1 ? "" : "s"} 
            </h1>
            <ProductSort />
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10", products.length > 0 ? 'lg:grid-cols-4': 'lg:grid-cols-[1fr_3fr]')}>
              <div className="hidden lg:block">{/* Product filters */}
              <ProductFilters /></div>
              {/* Product grid */}
              < ProductGrid products={products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
