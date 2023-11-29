"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const filters = [
  {
    id: "style",
    name: "Style",
    options: [
      { value: "Mountain Bike", label: "Mountain Bike" },
      { value: "Hybrid", label: "Hybrid" },
      { value: "road", label: "Road" },
      { value: "gravel", label: "Gravel" },
      { value: "electric", label: "Electric" },
    ],
  },
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "GT", label: "GT" },
      { value: "Carrera", label: "Carrera" },
      { value: "Orbea", label: "Orbea" },
      { value: "Boardman", label: "Boardman" },
      { value: "cube", label: "Cube" },
      { value: "trek", label: "Trek" },
    ],
  },
  {
    id: "suspension",
    name: "Suspension",
    options: [
      { value: "Hardtail", label: "Front" },
      { value: "full", label: "Full" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "XS", label: "X-Small" },
      { value: "Small", label: "Small" },
      { value: "SM", label: "Small-Medium" },
      { value: "Medium", label: "Medium" },
      { value: "Medium-Large", label: "Medium-Large" },
      { value: "Large", label: "Large" },
      { value: "XL", label: "X-Large" },
    ],
  },
  {
    id: "wheelsize",
    name: "Wheel Size",
    options: [
      { value: "kids", label: "Kids" },
      { value: "26", label: "26" },
      { value: "27.5", label: "27.5" },
      { value: "29", label: "29" },
      { value: "700", label: "700c" },
    ],
  },

]

export function ProductFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchValues = Array.from(searchParams.entries())

  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
               {section.name}{" "}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400"></span>
                {searchParams.get(section.id)?.toString() ? `(${searchParams.get(section.id)?.toString()})`: ""}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox id={`filter-${section.id}-${optionIdx}`} 
                    checked = {searchValues.some(([key, value]) => key === section.id && value === option.value.toString())}
                    
                    onClick={(event) => { 
                    
                      const params = new URLSearchParams(searchParams.toString())
                      const checked = event.currentTarget.dataset.state === "checked"
                      checked ? params.delete(section.id) : params.set(section.id, option.value.toString())
                      router.replace(`/?${params.toString()}`)
                    }} />
                   
                    <label 
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                     {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
