import { useContext } from 'react';
import Layout from './../../components/layout/Layout';
import myContext from '../../context/data/myContext';

const Home = () => {
  const context = useContext(myContext)
  console.log(context)
  const {state, color} = context
  console.log(state.name)
  return (
    <Layout>
      <h1>
        Name: {state.name}
      </h1>
        Color: {color}
    </Layout>
  )
}

export default Home