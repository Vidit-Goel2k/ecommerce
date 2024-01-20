import { useContext } from "react"
import myContext from '../../../context/myContext';


const UpdateProduct = () => {

    const context = useContext(myContext)
    const {products, setProducts, updateProduct} = context


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProducts(prevProducts => ({
        ...prevProducts,
        [name]: value
        }));
    };

    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                            value={products.title}
                            onChange={handleInputChange} 
                            />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                            value={products.price}
                            onChange={handleInputChange} 
                            />
                    </div>
                    <div>
                        <input type="text"
                            name='imageUrl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                            value={products.imageUrl}
                            onChange={handleInputChange} 
                            />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                            value={products.category}
                            onChange={handleInputChange} 
                            />
                    </div>
                    <div>
                       <textarea 
                            cols="30" 
                            rows="10" 
                            name='description'
                            value={products.description}
                            onChange={handleInputChange} 
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product description'
                        >

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                            onClick={updateProduct}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Update Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct