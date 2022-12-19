import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppHeader } from ".";
import { removeFromCart } from "../../app/cartSlice";

export default function MyCart() {
  const cartItems = useSelector((state) => state.cart.value);
  return (
    <div className="flex flex-col ">
      <AppHeader />
      <div className="flex flex-row mt-20  justify-center  ">
        {/* checkoutlist */}
        <div className="w-full md:w-2/3  border ">
          <h1 className="text-2xl font-semibold p-5 bg-slate-50 ">My Cart</h1>

          {/* checkout product */}
          {cartItems.map((e) => (
            <CartItem props={e} key={e.id} />
          ))}
        </div>
        <div className=" w-1/4  text-2xl  ">
          <div className="flex flex-col px-5 text-slate-400 py-3 space-y-3 sticky top-20 border">
            <h1 className="text-2xl font-semibold text-black  ">Total</h1>
            <p className="text-lg">Cart total</p>
            <p className="text-lg">Discount</p>
            <p className="text-lg">Delivery charge</p>
            <button className="bg-pink-500 p-2 font-semibold text-white ">
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartItem({ props }) {
  const { id, title, description, image, price } = props;
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  return (
    <div className="grid-cols-5 grid items-center px-10 border-b justify-center">
      <img
        src={image}
        alt="product_image"
        className="w-28 h-52 object-contain"
      />
      <div className="col-span-3 mx-5  space-y-2 ">
        <p className="text-2xl line-clamp-1">{title}</p>
        <p className="text-base line-clamp-2">{description}</p>
        <h1 className="text-2xl font-semibold py-2">
          ${(price * quantity).toFixed(2)}{" "}
          <span className="line-through text-base text-slate-500 font-normal">
            {(price + price * 0.36).toFixed(2)}
          </span>
        </h1>
      </div>
      <div className="flex flex-col w-40 space-y-2 ">
        <div className="flex  text-white text-3xl bg-pink-500">
          <button
            className=" px-3 font-semibold "
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
          <h1 className="px-5 py bg-white text-pink-500 border flex-1 text-center">
            {quantity}
          </h1>
          <button
            disabled={quantity == 1}
            className={` px-3 font-semibold ${
              quantity == 1 && "bg-slate-200 cursor-not-allowed"
            } `}
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </button>
        </div>
        <button
          className="bg-slate-800 p-2 font-semibold text-white"
          onClick={() => dispatch(removeFromCart({ id }))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
