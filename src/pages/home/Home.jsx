import { useContext } from "react";
import Testimonial from "../../components/testimonial/Testimonial";
import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/heroSection/HeroSection";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Layout from "../../components/layout/Layout";
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
      {/* <div className="flex justify-center gap-5">
        <button className='p-5 bg-gray-300 ' onClick={()=> addCart()}>add</button>
        <button className='p-5 bg-gray-300 ' onClick={()=> deleteCart()}>delete</button>
      </div> */}
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center mb-4 -mt-10">
        <Link to={'/allproducts'}>
          <button className='px-5 py-2 bg-gray-300 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
