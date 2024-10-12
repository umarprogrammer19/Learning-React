import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../config/redux/reducers/cartSlice"

export default function Cart() {
    const selector = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const removeProductFromCart = (index) => {
        dispatch(removeFromCart(index));
    }
    return (
        <>
            {selector.length > 0 ? selector.map((item, index) => {
                return <div className="border border-[black] w-88 mx-8 md:mx-32 p-4 flex flex-col gap-4 my-8" key={index}>
                    <p>{item.product.category}</p>
                    <h1>{item.product.title}</h1>
                    <p>{item.product.description}</p>
                    <img src={item.product.image} alt="Img" className="w-40 h-40" />
                    <p>Price: {item.product.price}$</p>
                    <p>Rating: {item.product.rating.rate}</p>
                    <p>Remaining: {item.product.rating.count}</p>
                    <button onClick={() => removeProductFromCart(index)} className="bg-slate-700 text-white px-3 py-1 border rounded-xl w-28 h-10">Remove</button>
                </div>
            }) : <h1 className="text-center">No Items In The Cart</h1>}
        </>
    );
};