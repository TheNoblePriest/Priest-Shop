import Header from "../../components/Header";
import { ShoppingCartIcon, RewindIcon } from "@heroicons/react/outline";
import { useStateValue } from "../../components/StateProvider";
import ItemsList from "../../components/ItemsList";
import { ItemInfo } from "../../components/Body";
import { useSelector } from "react-redux";
import {
  selectPDescription,
  selectPId,
  selectPImage,
  selectPName,
  selectPPice,
  selectPRating,
} from "../../src/features/product/productSlice";
import { useRouter } from "next/router";

function Product() {
  const [{ basket }, dispatch1] = useStateValue();
  const router = useRouter();

  const pId = useSelector(selectPId);
  const pName = useSelector(selectPName);
  const pImage = useSelector(selectPImage);
  const pRating = useSelector(selectPRating);
  const pPrice = useSelector(selectPPice);
  const pDescription = useSelector(selectPDescription);

  const addToBasket = () => {
    dispatch1({
      type: "ADD_TO_BASKET",
      item: {
        id: pId,
        title: pName,
        image: pImage,
        price: pPrice,
        rating: pRating,
      },
    });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row mt-20 p-4 h-[80%] mb-[300px] md:mb-0 md:h-[40%] justify-start items-center">
        <div className="m-4">
          <img
            className="w-[400px] md:w-[800px] h-[200px] md:h-[500px] rounded-lg border object-contain border-gray-300 shadow-xl"
            src={pImage}
            alt=""
          />
        </div>
        <div className="m-4 flex flex-col justify-start items-start h-[200px] md:h-[500px]">
          <p className="text-[35px] p-1 font-bold">{pName}</p>
          <p className="text-[20px] p-1 font-semibold text-gray-600">
            Newly Brand in the Market
          </p>
          <p className="text-[22px] flex p-1 font-semibold">
            {Array(pRating)
              .fill()
              .map((_) => (
                <p> ⭐️ </p>
              ))}
          </p>
          <div className="w-[350px]">

          <p className=" font-semibold text-[14px] p-2">{pDescription}</p>
          </div>
          <p className="text-[20px] p-1 font-semibold">$ {pPrice}</p>
          <div>
            <button
              onClick={addToBasket}
              className="bg-blue-500 flex  w-full items-center justify-center rounded-md text-white text-[13px] p-2 mx-3 my-4"
            >
              {" "}
              <ShoppingCartIcon className="w-4 mx-2 h-4 " /> Add to Cart
            </button>

            <button
              onClick={()=>router.push('/')}
              className="bg-blue-500 flex  w-full items-center justify-center rounded-md text-white text-[13px] p-2 mx-3 my-4"
            >
              
              <RewindIcon className="w-4 h-4 mx-2" /> Back to Home
            </button>
          </div>
        </div>
      </div>
      <ItemsList title="See More Products" ItemInfo={ItemInfo} />
    </div>
  );
}

export default Product;
