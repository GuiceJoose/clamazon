import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { FiXCircle } from "react-icons/fi";
import CheckoutForm from "../components/CheckoutForm";

function CartPage() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const handleChangeQuantity = (item, value) => {
    const quantity = Number(value);
    if (quantity === 0) {
      dispatch({ type: "CART_REMOVE_ITEM", payload: item });
    } else {
      dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
    }
  };
  const handleRemoveItem = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-4 text-xl">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Your cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-5 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.slug}
                    className="border-b grid grid-cols-[minmax(auto,175px)_auto]"
                  >
                    <td>
                      <Link
                        className="flex items-center"
                        href={`/product/${item.slug}`}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={175}
                          height={175}
                        ></Image>
                      </Link>
                    </td>
                    <td className="mx-4 flex flex-col">
                      <p>
                        {item.name} - ${item.price}
                      </p>
                      <input
                        className="w-10"
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) =>
                          handleChangeQuantity(item, e.target.value)
                        }
                      />
                      <button onClick={() => handleRemoveItem(item)}>
                        <FiXCircle className="h-5 w-5"></FiXCircle>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="basic-card p-5 md:col-span-2">
            <ul>
              <li>
                <div className="text-xl">
                  Subtotal ({cartItems.reduce((a, b) => a + b.quantity, 0)}) : $
                  {cartItems.reduce((a, b) => a + b.quantity * b.price, 0)}
                </div>
              </li>
              <li>
                <CheckoutForm
                  checkoutTotal={cartItems.reduce(
                    (a, b) => a + b.quantity * b.price,
                    0
                  )}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
