import CartProduct from "../../components/CartProduct";
import Header from "../../components/Header";
import { useStateValue } from "../../components/StateProvider";
import SubTotal from "../../components/Subtotal";

function Cart() {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket);
  return (
  <div>
      <Header/>

      <div className="mt-[100px] pl-[20px] w-full">
          <div className="flex flex-col md:flex-row justify-between mr-4 w-[95%] md:h-[200px] h-[400px]">
                <img className="w-[100%] md:w-[60%]  object-cover" src="https://image.freepik.com/free-vector/black-friday-sale-shopping-cart-banner-with-text-space_1017-28049.jpg" alt="" />
                <SubTotal/>
          </div>
      
          {basket.map((item, index)=>(
           <CartProduct key={index} id={item?.id} image={item?.image} price={item?.price} rating={item?.rating} name={item?.title}/>
          ))}
      </div>
  </div>
  );
}

export default Cart;
