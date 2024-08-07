'use client'

import React from 'react';


const Login = () => {
    
    const handleGoogleSignIn = async (e) => {
        // Redirect to Flask backend for Google Sign-In
        e.preventDefault();
        
        try {
            window.location.href = "https://simpleflask-tjm4lrussq-uc.a.run.app/login";
        } catch (err) {
            console.log(err);
        }
    };

    return ( 
        <div className="flex items-center justify-center h-screen bg-transparent background-image">
            <div className="text-center bg-transparent">
                
                    <h1 className="text-white text-4xl md:text-6xl font-bold pb-6 md:pb-10">
                        Join Us Today!
                    </h1>
                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-lg px-5 py-2.5 inline-flex items-center"
                    >
                        <svg
                            className="mr-2 -ml-1 w-6 h-6"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="google"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 488 512"
                        >
                            <path
                                fill="currentColor"
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                            ></path>
                        </svg>
                        Sign in with Google
                    </button>
                
            </div>
        </div>
    );
}

export default Login;
