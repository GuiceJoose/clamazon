import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutProgress from "../components/CheckoutProgress";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";

function PaymentPage() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <Layout title="Review Order">
      <CheckoutProgress currentStep={2}></CheckoutProgress>
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
                      {item.name} ({item.quantity}) - $
                      {item.price * item.quantity}
                    </p>
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
              ></CheckoutForm>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default PaymentPage;
