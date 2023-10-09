import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react"
import swal from 'sweetalert';
import { BsEyeFill, BsEyeSlashFill, BsGoogle } from "react-icons/bs"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const { signIn } = useContext(AuthContext)
    const { logInWithGoogle } = useContext(AuthContext)
    const handleLogInWithGoogle = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleSignIn = (e) => {
        e.preventDefault()
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                swal("Thank You!", "You Logged In Successfully!", "success");
            })
            .catch(error => {
                // console.error(error);
                swal("Oh!", `${error.message}`, "error");
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-8">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <div className="relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={(e) => setPassword(e.target.value)} type={show ? 'text' : 'password'} placeholder="Password" name="password" className="input input-bordered w-full" required />
                                <span className="absolute -ml-6 mt-4" onClick={() => setShow(!show)}>{show ? <BsEyeSlashFill></BsEyeSlashFill> : <BsEyeFill></BsEyeFill>}</span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="flex gap-2 mt-3">
                                <input type="checkbox" name="terms" id="terms" required/>
                                <label htmlFor="terms">Accept our <a href=""> Terms and Conditions</a></label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleSignIn} className="btn bg-green-400 text-white">Login</button>
                        </div>
                        <p>Do not have an account? Please <Link to="/register"><span className="text-green-400">Register</span></Link></p>
                    </form>
                    <div className="relative w-full -mt-8 flex justify-center items-center">
                    <button onClick={handleLogInWithGoogle} className="border w-5/6 m-5 py-1 rounded-xl">Sign In With Google</button>
                    <p className="-ml-48 absolute"><BsGoogle></BsGoogle></p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;