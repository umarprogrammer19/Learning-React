import { useEffect, useState } from "react";

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
            <h1 className="text-center text-3xl underline mb-8">Products</h1>
            <div className="flex flex-wrap gap-4 justify-center mb-16">
                {apiData && apiData.map(item => {
                    return <div key={item.id} className="flex flex-col gap-4 items-center border border-[black] w-64 h-64 p-2">
                        <h1 className="text-center">{item.title.slice(0,11) + "..."}</h1>
                        <img src={item.image} alt="Image" className="w-24 h-24" />
                    </div>
                })}
            </div>
        </>
    )
}