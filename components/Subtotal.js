import React from "react";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../components/reducer";
import { ShoppingCartIcon } from "@heroicons/react/outline";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="bg-gray-100 py-1 md:py-4 w-[80%] rounded-lg border md:w-[50%] lg:w-[30%] h-[240px] md:h-[200px]">
      <div className="p-2 flex flex-col justify-start items-start">
        <p className="p-2 text-[20px] font-bold">
          ( Subtotal {basket.length} items ) : $
          <strong>{`${getBasketTotal(basket)}`}</strong>
        </p>
        <small className="p-2 text-[20px] font-semibold">
          <input type="checkbox" /> This order contains
        </small>
        <div />

        <button className="bg-yellow-500 flex items-center justify-center rounded-md text-white text-[13px] p-2 mx-1">
          {" "}
          <ShoppingCartIcon className="w-4 h-4 " /> Processed to Checkout
        </button>
      </div>
    </div>
  );
}

export default SubTotal;
