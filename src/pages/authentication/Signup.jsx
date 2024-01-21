import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import myContext from "../../context/myContext"
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, fireDb } from "../../firebase/firebaseConfig"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import Loader from "../../components/loader/Loader"

const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const context = useContext(myContext)
    const {loading, setLoading} = context

    const signup = async () => {
        setLoading(true)
        if(name === "" || email === "" || password === ""){
            return toast.error("All fields are required")
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);
            if (users && users.user && users.user.uid) {
                const user = {
                    name: name,
                    uid: users.user.uid,
                    email: users.user.email,
                    time: Timestamp.now()
                };
                console.log(user)
          
              const userRef = collection(fireDb, "users");
              await addDoc(userRef, user);
              toast.success("Signup Successful");
          
              setName("");
              setEmail("");
              setPassword("");
            } else {
              toast.error("User creation failed"); // Handle the case where user creation didn't provide a valid UID.
            }
          } catch (err) {
            console.error(err);
          } finally {
            setLoading(false);
          }
          

    }

    return (
        <div className='flex items-center justify-center h-screen '>
            {loading && <Loader />}
            <div className='px-10 py-10 bg-gray-800 rounded-xl'>
                <div className="">
                    <h1 className='mb-4 text-xl font-bold text-center text-white'>Signup</h1>
                </div>
                <div>
                    <input 
                        type="text"
                        name='name'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                        type="email"
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div className='flex justify-center mb-3 '>
                    <button
                        className='w-full px-2 py-2 font-bold text-white bg-red-500 rounded-lg '
                        onClick={signup}
                    >
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Already have an account <Link className='font-bold text-red-500 ' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup