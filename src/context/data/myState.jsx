import { useEffect, useState } from "react";
import myContext from "./myContext";
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { toast } from "react-toastify";
import { fireDb } from '../../firebase/firebaseConfig';

const MyState = (props) => {

  const [mode, setMode] = useState("dark");
  const [loading, setLoading] = useState(false)

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  // **************************** Add Product Section ***************

  const addProductHandler = async () => {
    if(products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDb, 'products')
    setLoading(true)
    try {
      await addDoc(productRef, products)
      toast.success("Product Added Successfully")
      getProductData()
      closeModal()
      setLoading(false)  
    } 
    catch (error) {
      console.log(error)
      setLoading(false)
    }
    setProducts("")
  }

  const [product, setProduct] = useState([])

  // **************Get Product ************

  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDb, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        setLoading(false);
      });
      return () => data;      
    } 
    catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData()
  }, [])

  return(
    <myContext.Provider value={{mode, toggleMode, loading, setLoading, products, setProducts, addProductHandler}}>
        {props.children}
    </myContext.Provider>
  ) 
};

export default MyState;
