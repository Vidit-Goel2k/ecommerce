import Filter from '../../components/filter/Filter';
import HeroSection from '../../components/heroSection/HeroSection';
import ProductCard from '../../components/productCard/ProductCard';
import Layout from './../../components/layout/Layout';


const Home = () => {
  
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
    </Layout>
  )
}

export default Home