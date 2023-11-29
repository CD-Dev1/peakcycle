import { defineField, defineType } from "sanity"
export const product = {
    name: "product",
    title: "Products",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"
        }),
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name"
            }
        },
        {
            name: "images",
            title:"Images",
            type:"array",
            of:[{type: 'image'}]
        },
        {
            name: "brand",
            title: "Brand",
            type: "array",
            of:[{type: 'string'}]
        },
        {
            name: "style",
            title: "Style",
            type: "array",
            of:[{type: 'string'}]
        },
        {
            name: "suspension",
            title: "Suspension",
            type: "array",
            of:[{type: 'string'}]
        },
        {
            name: "model",
            title: "Model",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "gears",
            title: "Gears",
            type: "string"
        },
        {
            name: "size",
            title: "Size",
            type: "array",
            of:[{type: 'string'}]
        },
        {
            name: "wheelsize",
            title: "Wheel Size",
            type: "array",
            of:[{type: 'string'}]
        },
        {
            name: "year",
            title: "Year",
            type: "number"
        },
        {
            name: "additionalinfo",
            title: "Additional Info",
            type: "string"
        },
        {
            name: "price",
            title: "Price",
            type: "array",
            of:[{type: 'number'}]
        }
        
    ]
}
