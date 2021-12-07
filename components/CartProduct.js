import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useStateValue } from "./StateProvider";
function CartProduct({image, id, name, rating, price}) {

    const [{basket}, dispatch] = useStateValue();
    const RemoveFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        });
    }
  return (
    <div key={id} className="flex p-2 m-1 md:m-3 flex-col md:flex-row justify-start items-center  rounded-lg bg-gray-100 w-[90%] md:w-[70%] shadow-lg">
      <div className="flex justify-around items-center p-3 rounded-lg">
          <img className="w-[200px] h-[150px] object-cover rounded-lg" src={image} alt="..."/>
      </div>
      <div className="flex-1">
          <p className="text-[26px] font-bold ">{name}</p>
          <p className="text-[14px] font-semibold ">This Product is good for the home</p>
          <p className="text-[16px] flex font-semibold "> 
          {
                        Array({rating}).fill().map((_)=>(
                            <p>⭐️</p>
                        ))
        }</p>
          <p className="text-[14px] font-semibold ">$ {price}</p>
          <p className="text-[18px] font-semibold ">Free Home Delivery</p>
          
      </div>
      <div className="my-2  flex justify-center items-center">
        <button
          onClick={RemoveFromBasket}
          className="bg-yellow-500 font-semibold flex items-center justify-center rounded-md text-white text-[13px] p-2 mx-1"
        >
          {" "}
          <ShoppingCartIcon className="w-4 h-4 " /> Remove From Cart
        </button>
      </div>
  </div>
  );
}

export default CartProduct;
