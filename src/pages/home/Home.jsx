import { useContext } from "react";
import Testimonial from "../../components/Testimonial/Testimonial";
import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/heroSection/HeroSection";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Layout from "./../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const Home = () => {
  const { mode } = useContext(myContext);

  mode === "light"
    ? (document.body.style.backgroundColor = "white")
    : (document.body.style.backgroundColor = "rgb(17, 24, 39)")
  ;

  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
