import { useEffect, useState } from "react";
import myContext from "./myContext";
import { Timestamp, addDoc, collection, deleteDoc, onSnapshot, orderBy, query, setDoc, doc, getDocs } from 'firebase/firestore';
import { toast } from "react-toastify";
import { fireDb } from '../firebase/firebaseConfig';

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
    title: '',
    price: '',
    imageUrl: '',
    category: '',
    description: '',
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
      // closeModal()
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

  const editHandle = (item) => {
    setProducts(item)
  }
  // update product
  const updateProduct = async () => {
    setLoading(true)
    try {
      await setDoc(doc(fireDb, "products", products.id), products);
      toast.success("Product Updated successfully")
      getProductData();
      setLoading(false)
      window.location.href = '/dashboard'
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setProducts("")
  }

  const deleteProduct = async (item) => {

    try {
      setLoading(true)
      await deleteDoc(doc(fireDb, "products", item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false)
    }
  }  


  // orders
  const [order, setOrder] = useState([])

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDb, 'orders'))
      const ordersArray = []
      result.forEach((doc) => {
        ordersArray.push(doc.data())
        setLoading(false)
      })
      setOrder(ordersArray)
      console.log(ordersArray)
      setLoading(false)
    } 
    catch (error) {
      console.log(error)
      setLoading(false)  
    }
  }

  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDb, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        console.log("doc")
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData()
    getOrderData()
    getUserData()
  }, [])

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')

  return(
    <myContext.Provider value={{mode, toggleMode, loading, setLoading, product, products, setProducts, addProductHandler, editHandle, deleteProduct, updateProduct, order, user, searchkey, setSearchkey,filterType, setFilterType, filterPrice, setFilterPrice}}>
      {props.children}
    </myContext.Provider>
  ) 
};

export default MyState;
