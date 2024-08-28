"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      price: 0,
      rate: process.env.NEXT_PUBLIC_VAT_RATE,
      vat: 0,
      total: 0,
    },
  });

  const price = watch("price");
  const rate = watch("rate");

  React.useEffect(() => {
    if (price && rate) {
      const vatAmount = (price * rate) / 100;
      const total = price + vatAmount;
      setValue("vat", vatAmount.toFixed(2));
      setValue("total", total.toFixed(2));
    }
  }, [price, rate, setValue]);

  return (
    <div>
      <h1>VAT Calculator</h1>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Price:</label>
              </td>
              <td>
                <input
                  type="number"
                  step="0.01"
                  {...register("price", { valueAsNumber: true })}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>VAT Rate (%):</label>
              </td>
              <td>
                <input
                  type="number"
                  step="0.1"
                  {...register("rate", { valueAsNumber: true })}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>VAT Amount:</label>
              </td>
              <td>
                <input type="text" {...register("vat")} readOnly />
              </td>
            </tr>
            <tr>
              <td>
                <label>Total Price:</label>
              </td>
              <td>
                <input type="text" {...register("total")} readOnly />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" value="Calculate" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
