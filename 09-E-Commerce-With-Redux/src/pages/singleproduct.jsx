import { useParams } from "react-router-dom"

export default function SingleProduct() {
    const params = useParams();
    console.log(params.id);
    
    return (
        <>
            <h1 className="text-2xl underline my-8 text-center">Single Product</h1>
        </>
    )
}