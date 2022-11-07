
import { useState } from "react";

import { Routes, Route, Link, Navigate } from "react-router-dom";


import Home from "../Home";
import About from "../About";
import Gallery from "../Gallery";
import Signup from "../Signup";
import Login from "../Login";


const Navbar = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [isSignup, setIsSignup] = useState(false);


    return (
        <div className="page">
            <nav>  {
                (isLogin) ?
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/about`}>About</Link></li>
                        <li><Link to={`/gallery`}>Gallery</Link></li>
                        <li
                            onClick={() => {
                                setIsLogin(!isLogin)
                            }}>
                            <Link to={`/`}>Logout</Link></li>
                    </ul>
                    :
                    <ul>
                        {(isSignup) ?
                            <li
                                onClick={() => {
                                    setIsSignup(!isSignup)
                                }}>
                                <Link to={`/`}>Signup</Link></li>
                            :
                            <li
                                onClick={() => {
                                    setIsSignup(!isSignup)
                                }}>
                                <Link to={`/login`}>Already have an account</Link></li>
                        }
                    </ul>

            }
            </nav>

            {
                (isLogin) ?

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="*" element={<Navigate to={`/`} replace={true} />} />
                    </Routes>

                    :


                    (!isSignup) ?

                        <Routes>

                            <Route path="/" element={<Signup
                                setState={setIsSignup}
                                state={isSignup}
                            />}
                            />

                            <Route path="*" element={<Navigate to={`/`} replace={true} />} />

                        </Routes>

                        :

                        <Routes>
                            <Route path="/" element={<Login
                                setState={setIsLogin}
                                state={isLogin}
                            />}
                            />

                            <Route path="*" element={<Navigate to={`/`} replace={true} />} />
                        </Routes>

            }

        </div>
    );

};

export default Navbar;