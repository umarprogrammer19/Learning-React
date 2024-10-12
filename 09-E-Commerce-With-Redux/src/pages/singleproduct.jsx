import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function SingleProduct() {
    const params = useParams();

    const [products, setProducts] = useState(null);
    useEffect(() => {
        (async function () {
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
            const data = await response.json();
            setProducts(data);
            console.log(data);
        })()
    })

    return (
        <>
            <h1 className="text-2xl underline my-8 text-center">Single Product</h1>
            {products && <div className="border border-[black] w-88 mx-8 md:mx-32 p-4 flex flex-col gap-4">
                <p>{products.category}</p>
                <h1>{products.title}</h1>
                <p>{products.description}</p>
                <img src={products.image} alt="Img" className="w-40 h-40" />
                <p>Price: {products.price}$</p>
                <p>Rating: {products.rating.rate}</p>
                <p>Remaining: {products.rating.count}</p>
                <button className="bg-slate-700 text-white px-3 py-1 border rounded-xl w-28 h-10">Add To Cart</button>
            </div>}
        </>
    )
}