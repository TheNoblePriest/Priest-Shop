import { BadgeCheckIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useStateValue } from "../components/StateProvider";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { sendProduct } from "../src/features/product/productSlice";
import Link from "next/link";

function Item({ imgUrl, Pname, id, rating, price, des }) {
  const [{ basket }, dispatch1] = useStateValue();
  const router = useRouter();
  const dispatch = useDispatch();

  console.log(basket);
  const addToBasket = () => {
    dispatch1({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: Pname,
        image: imgUrl,
        price: price,
        rating: rating,
      },
    });
  };

  const productPage = () => {
    dispatch(
      sendProduct({
        pId: id,
        pName: Pname,
        pImage: imgUrl,
        pRating: rating,
        pPrice: price,
        pDescription: des,
      })
    );

    router.push({
      pathname: `/product/${id}`,
    });
  };

  return (
    <div
      key={id}
      className="flex m-2 lg:m-2 p-2 justify-center items-start border border-gray-300 flex-col min-w-[150px] md:min-w-[200px] sm:w-36 md:w-36 h-48 md:h-60 shadow-xl rounded-lg cursor-pointer"
    >
      <Link href={`/product/${id}`}>
        <img
          onClick={productPage}
          src={imgUrl}
          className="w-full h-[50%] rounded-lg"
          alt="..."
        />
      </Link>

      <div>
        <p className="text-xs w-full font-bold text-green-700">{Pname}</p>
        <div className="flex justify-start  items-start w-full text-green-700 ">
          <p className="text-[10px] sm:text-[13px] font-medium  text-gray-400">
            {rating}⭐️{" "}
          </p>
          <div className="flex justify-start  items-start">
            <BadgeCheckIcon className="w-4 h-4 mx-1" />
            <p className="text-[12px] w-full font-bold">Assured</p>
          </div>
        </div>
        <p className="text-sm font-bold text-gray-700">$ {price}</p>
        <p className="text-[12px] font-semibold hidden lg:inline-block  text-gray-500">
          Free Home Dilvery
        </p>
      </div>
      <div className="my-2 flex justify-center items-center">
        <button
          onClick={addToBasket}
          className="bg-blue-500 flex items-center justify-center rounded-md text-white text-[13px] p-1 mx-1"
        >
          {" "}
          <ShoppingCartIcon className="w-4 h-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
