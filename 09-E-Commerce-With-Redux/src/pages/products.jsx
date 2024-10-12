import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        (async function () {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setApiData(data);
        })()
    }, [])
    return (
        <>
            <h1 className="text-center text-4xl underline my-8">Products</h1>
            <div className="flex flex-wrap gap-4 justify-center mb-16">
                {apiData && apiData.map(item => {
                    return <div key={item.id} className="flex flex-col gap-8 items-center border border-[black] w-64 h-64 p-2">
                        <h1 className="text-center">{item.title.slice(0, 11) + "..."}</h1>
                        <img src={item.image} alt="Image" className="w-24 h-24" />
                        <button className="bg-slate-700 text-white px-3 py-2 border rounded-xl"><Link to={`/singleProduct/${item.id}`}>View More</Link></button>
                    </div>
                })}
            </div>
        </>
    )
}