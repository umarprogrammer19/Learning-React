import { useEffect } from "react"

export default function Products() {

    useEffect(() => {
        (async function () {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data);
        })()
    }, [])
    return (
        <>
            <h1 className="text-center text-3xl underline">Products</h1>
        </>
    )
}