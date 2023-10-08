import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left mb-8">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                       <div className="flex gap-2 mt-3">
                       <input type="checkbox" name="terms" id="terms" />
                        <p>Accept our terms and conditions</p>
                       </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-green-400 text-white">Register</button>
                    </div>
                    <p>Already have an account? Please <Link to="/login"><span className="text-green-400">Login</span></Link></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;