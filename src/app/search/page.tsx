import { prisma } from "@/lib/db/prisma"
import ProductCard from "../components/ProductCard"

interface SearchPageProps {
    searchParams: {query: string}
}

export function generateMetadata({searchParams: {query}}: SearchPageProps) {
    return {
        title: `Search: ${query} - Konespo`
    };
}


export default async function SearchPage({searchParams: {query}}: SearchPageProps) {
    const products = await prisma.product.findMany({
        where: {
            OR: [
                {name: {contains: query,mode: "insensitive"}}, // Shift + Alt + UpArrow for duplicating the current line up or use downarrow for duplicating it down
                {description: {contains: query,mode: "insensitive"}},
            
            ]
        },
        orderBy: {id: "desc"}
    })

    if(products.length === 0) {
        return <div className="text-center">No products found</div>
    }

    return (
        <div className = "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map(product => (
                <ProductCard product = {product} key = {product.id} /> 
            ))}
        </div>
    )
}