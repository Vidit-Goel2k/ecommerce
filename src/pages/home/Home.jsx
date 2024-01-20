import { useContext } from "react";
import Testimonial from "../../components/Testimonial/Testimonial";
import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/heroSection/HeroSection";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Layout from "./../../components/layout/Layout";
import myContext from "../../context/myContext";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import { Link } from "react-router-dom";

const Home = () => {
 
  // const dispatch = useDispatch()
  // const cartItem = useSelector(state => state.cart)

  // console.log(cartItem)

  // const addCart = () => {
  //   dispatch(addToCart('shirt'))
  // }

  // const deleteCart = () => {
  //   dispatch(deleteFromCart('shirt'))
  // }
  
  const { mode } = useContext(myContext);

  mode === "light"
    ? (document.body.style.backgroundColor = "white")
    : (document.body.style.backgroundColor = "rgb(17, 24, 39)")
  ;

  return (
    <Layout>
      {/* <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>delete</button>
      </div> */}
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
