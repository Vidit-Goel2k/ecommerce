import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import myContext from './../../context/data/myContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { toast } from "react-toastify";
import Loader from './../../components/loader/Loader';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const context = useContext(myContext)
    const {loading, setLoading} = context

    const login = async () => {
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword( auth , email, password)
            localStorage.setItem('user', JSON.stringify(result))
            toast.success('Logged In Successfully', {
                position:"top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick:true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            })

            window.location.href='/'
            setLoading(false)

        } catch (err) {
            toast.error('Sigin Failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setLoading(false);
        }
    }

    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <Loader /> }
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                </div>
                <div>
                    <input
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={login}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'
                    >
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Dont have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login