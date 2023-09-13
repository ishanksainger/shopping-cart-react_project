import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from 'react-hot-toast';

const Product = (props) => {
  const {post} =props;
  const {cart}=useSelector((state)=> state)

  const dispatch=useDispatch();

  const addtoCart=()=>{
    dispatch(add(post));
    toast.success("Item added to Cart");
  }
  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }
  return <div className=" group flex flex-col items-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]">
    <div>
      <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</h1>
    </div>
    <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
    </div>
    <div className="h-[180px]">
      <img src={post.image} alt=""  className="h-full w-full"/>
    </div>
    <div className=" flex justify-between gap-12 items-center w-full mt-5">

    <div>
      <p className=" text-green-600 font-semibold">${post.price}</p>
    </div>
      {
        cart.some((item)=> item.id===post.id) ? (<button onClick={removeFromCart} className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 
        ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide">Remove Item</button>) : (<button onClick={addtoCart} className="group-hover:bg-gray-700 group-hover:text-white 
        transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide">Add to Cart</button>)
      }
    </div>
  </div>;
};

export default Product;
