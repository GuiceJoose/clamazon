import React from "react";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import CheckoutProgress from "../components/CheckoutProgress";

function ShipppingPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter();

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("zipCode", shippingAddress.zipCode);
  }, [setValue, shippingAddress]);

  const onSubmit = ({ fullName, address, city, zipCode }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, address, city, zipCode },
    });

    router.push("/payment");
  };

  return (
    <Layout title="Shipping Information">
      <CheckoutProgress currentStep={0} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register("fullName", {
              required: "Please enter your full name",
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            className="w-full"
            id="address"
            {...register("address", {
              required: "Please enter your shipping address",
              minLength: {
                value: 3,
                message: "Your address must be at least three characters long",
              },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            className="w-full"
            id="city"
            {...register("city", {
              required: "Please enter a city",
            })}
          />
          {errors.city && (
            <div className="text-red-500 ">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="zipCode">ZIP Code</label>
          <input
            className="w-full"
            id="zipCode"
            {...register("zipCode", {
              required: "Please enter a ZIP code",
            })}
          />
          {errors.zipCode && (
            <div className="text-red-500 ">{errors.zipCode.message}</div>
          )}
        </div>

        <div className="mb-4">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
}

export default ShipppingPage;
