import { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import Link from "next/link";

import { fetchProduct, getItems } from "../../app/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function StoreFront({ data }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(data));
  }, []);

  return (
    <div className="flex flex-col w-full items-center  bg-gray-0">
      {/* header */}
      <AppHeader />

      {/* main content */}
      <div className="mb-20"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4">
        {data.map((e) => (
          <Link href={`/store/product/${e.id}`}>
            <div className="flex flex-col border hover:scale-105 bg-white hover:bg-slate-100 cursor-pointer  justify-center items-start  p-3  border-slate-100">
              <img
                src={e.image}
                alt="product image"
                className="w-full object-contain h-60 "
              />
              <h1 className="text-xl font-base ">{e.title}</h1>
              <h1 className="text-sm line-clamp-2 py-1 font-base ">
                {e.description}
              </h1>
              <h1 className="text-sm font-semibold flex flex-row text-blue-500">
                {[...Array(Math.floor(e.rating.rate))].map((e, i) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}{" "}
                ( {e.rating.count})
              </h1>
              <div className="my-auto"></div>

              <h1 className="text-2xl font-semibold py-2">
                ${e.price}{" "}
                <span className="line-through text-base text-slate-500 font-normal">
                  {(e.price + e.price * 0.36).toFixed(2)}
                </span>
              </h1>

              <h1 className="text-sm text-slate-400">
                10% Off on Select Cards
              </h1>
              <h1 className="text-sm text-slate-800 font-semibold">
                Delivery within 2 days
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

/*
{
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: { rate: 3.9, count: 120 }
}
*/

export function AppHeader() {
  const data = useSelector((state) => state.productList.value);

  const items = useSelector((state) => state.cart.value);

  const [selectedProduct, setSelectedProduct] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="flex space-x-5 items-center w-full  fixed z-20 shadow-sm justify-between md:justify-around bg-white">
      {/* left side */}
      <Link href={"/store"}>
        <blockquote class="text-2xl font-semibold italic text-center text-slate-900 cursor-pointer">
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 mx-2 relative inline-block">
            <span class="relative text-white">BuyZone</span>
          </span>
          .com
        </blockquote>
      </Link>
      {/* center */}
      {/* ____________________________________ */}

      <div className="w-1/2 hidden  md:flex  border">
        <Combobox
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e)}
        >
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            className="w-full py-2 px-5  outline-none focus:ring-1 focus:ring-pink-500"
            placeholder="Search..."
            type="text"
            autoComplete="off"
          />
          <Combobox.Options className="absolute top-14 w-1/2 ">
            {query === ""
              ? data.id
              : data
                  .filter((item) => {
                    return item.title
                      .toLowerCase()
                      .includes(query.toLowerCase());
                  })
                  .splice(0, 8)
                  .map((item) => (
                    <Link href={`/store/product/${item.id}`}>
                      <Combobox.Option
                        key={item.id}
                        value={item.title}
                        // className="bg-white shadow-lg p-2 hover:bg-slate-50 active cursor-pointer"
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 bg-white shadow-lg ${
                            active
                              ? "bg-slate-200 text-slate-900"
                              : "text-gray-900"
                          }`
                        }
                      >
                        {item.title}
                      </Combobox.Option>
                    </Link>
                  ))}
          </Combobox.Options>
        </Combobox>
        {selectedProduct.length < 1 ? (
          <></>
        ) : (
          <button
            onClick={() => setSelectedProduct("")}
            className="text-slate-800 flex p-2 bg-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        <div className="py-2 px-3 bg-pink-500 text-white hover:bg-pink-600 focus:ring-1 focus:ring-pink-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        {/* wishlist */}
        <Link href={"/store/my-cart"}>
          <div className="flex relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <h1 className="text-lg font-semibold mx-1 hidden lg:inline">
              Wishlist
            </h1>
            <h1 className="text-xs rounded-full px-1 text-white -right-2 md:ml-4 font-semibold  absolute bg-pink-500">
              {0}
            </h1>
          </div>
        </Link>
        {/* Cart */}
        <Link href={"/store/my-cart"}>
          <div className="flex relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <h1 className="text-lg font-semibold mx-1 hidden lg:inline">
              My Cart
            </h1>
            <h1 className="text-xs rounded-full px-1 text-white -right-2 md:ml-4 font-semibold  absolute bg-pink-500">
              {items.length}
            </h1>
          </div>
        </Link>

        {/* Login */}
        <Link href={"/counter"}>
          <div className="flex p-5 hover:bg-pink-500 hover:text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>

            <h1 className="text-lg font-semibold mx-1">Login</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}






/*
{
  id: 1,
  title: 'Redmi 10A (Slate Grey, 3GB RAM, 32GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster',
  brand:Redmi,
  price: 109.95,
  description: '
  Camera: 13MP Rear Camera | 5MP Front Camera
Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio
Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed
Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity
Memory, Storage & SIM:3GB RAM | 32GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)',
  category: "smartphone",
  image: 'https://m.media-amazon.com/images/I/41VcqwZ-O8L._SX300_SY300_QL70_FMwebp_.jpg',
  rating: { rate: 4.2, count: 5487 }
}
*/