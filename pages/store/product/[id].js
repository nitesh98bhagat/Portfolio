import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppHeader } from "..";
import { addToCart, removeFromCart } from "../../../app/cartSlice";

export default function ProductPage({ data }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.productList.value);

  const [isProductInTheCart, setIsProductInTheCart] = useState(false);

  const handelAddToCart = () => {
    if (isProductInTheCart) {
      dispatch(addToCart(data));
      setIsProductInTheCart(false);
    } else {
      dispatch(removeFromCart({ id: data.id }));
      setIsProductInTheCart(true);
    }
  };

  useEffect(() => {
    const itemIndex = items.findIndex((e) => e.id === data.id);

    if (itemIndex >= 0) {
      // product is in cart
      setIsProductInTheCart(true);
    } else {
      setIsProductInTheCart(false);
    }
  }, []);

  return (
    <div className="flex-col flex">
      <AppHeader />
      <div className="mb-16"></div>
      <div className="flex flex-row w-full px-20 py-10">
        <div className="">
          <img src={data.image} alt="image" className="w-96 object-contain" />
        </div>
        <div className="flex-1 py-5 px-16 space-y-3">
          <h1 className="text-3xl">{data.title}</h1>
          <h1 className="text-lg text-slate-800 font-semibold">
            {data.category}
          </h1>
          <h1 className="text-base">{data.description}</h1>
          <h1 className="text-xl font-semibold flex flex-row text-blue-500">
            {[...Array(Math.floor(data.rating.rate))].map((e, i) => (
              <svg
              key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}{" "}
            ( {data.rating.count})
          </h1>
          <div className="my-auto"></div>

          <h1 className="text-4xl font-semibold py-2">
            ${data.price}{" "}
            <span className="line-through text-2xl text-slate-500 font-normal">
              {(data.price + data.price * 0.36).toFixed(2)}
            </span>
          </h1>

          <h1 className="text-lg text-slate-400">10% Off on Select Cards</h1>
          <h1 className="text-lg text-slate-800 font-semibold">
            Delivery within 2 days
          </h1>
          <div className="flex space-x-4">
            {" "}
            <button
              onClick={handelAddToCart}
              className={`bg-pink-500 p-2 font-semibold text-white`}
            >
              {isProductInTheCart ? "Add to Cart" : "Remove"}
            </button>
            <button className="bg-slate-800 p-2 font-semibold text-white">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.query.id}`
  );
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
