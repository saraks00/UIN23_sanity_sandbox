export default {
    title: 'Produkter',
    name: 'products',
    type: 'document',
    fields: [
        {
            title: 'Produktnavn',
            name: 'product_title',
            type: 'string',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'URL-tittel',
            options: {
                source: 'product_title',
                slugify: input => input.toLowerCase().replace((/\s+/g,/[^\w-]+/g), '-').slice(0, 150)
            }
        },
        {
            title: 'Pris',
            name: 'product_price',
            type: 'number'
        },
        {
            title: 'Lagerstatus',
            name: 'product_quantity',
            type: 'number'
        },
        {
            title: 'Bilde',
            name: 'product_image',
            type: 'image'
        },
        {
            title: 'Kategori',
            name: 'category',
            type: 'reference',
            to: [{type: 'categories'}]
        }
    ]
}