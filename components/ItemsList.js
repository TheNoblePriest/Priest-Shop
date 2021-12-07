import { BadgeCheckIcon, ArrowCircleDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Item from "./Item";
function ItemsList({ title, ItemInfo }) {
  return (
    <div className="w-full my-2 bg-gray-50">
      {title && (
        <div className="flex justify-between mx-3 bg-gray-50 p-2 shadow-lg rounded-md">
          <p className="text-[20px] text-gray-600 font-bold">{title}</p>
          <ArrowCircleDownIcon className="w-5 h-5 cursor-pointer" />
        </div>
      )}

      <div className=" overflow-x-scroll scrollbar-hide w-[99%] ">
        <div className="flex w-[2200px] md:w-[200%] lg:w-[200%] overflow-x-hidden   m-2 justify-start items-center">
          {ItemInfo.map((item) => (
            <Link href={`/product/${item.id}`}>
              <Item
                id={item.id}
                Pname={item.Pname}
                price={item.price}
                imgUrl={item.imgUrl}
                rating={item.rating}
                des={item.des}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemsList;
