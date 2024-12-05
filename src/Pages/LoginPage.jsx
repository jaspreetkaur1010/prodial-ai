import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logos/white-bg-horizontal.png";

export default function LoginPage(){
   
    const handleContinueWithEmail = () => {
        alert('Click on continue with google to continue');
    };

    const handleContinueWithSAML = () => {
        alert('Click on continue with google to continue');
    };

    return (
    <div className="flex items-center justify-center h-screen bg-white">
        <div className='w-1/2 hidden h-screen lg:flex bg-blue-primary'>
            images/videos go here 
        </div>
        <div className="lg:w-1/2 py-28 flex items-center justify-center h-screen bg-white rounded-lg ">
            <div className='sm:w-3/5 max-w-96 sm:max-w-full flex flex-col justify-center p-6 lg:p-2 pb-0'>
                {/* Logo Section */}
                <div className="flex justify-center">
                    <img  className="h-36" src={logo} alt="prodigalAI"/>
                </div>

                {/* Header Section */}
                <h1 className="text-2xl font-semibold text-center mb-2">Welcome to Prodigal AI</h1>
                <p className="text-center text-sm text-gray-600 mb-4">
                Use your <span className="font-semibold">work email</span> for a better experience
                </p>

                {/* Email Input */}
                <div className="mb-4">
                    <h2 className='text-xs font-semibold py-2'>Work email</h2>
                    <label htmlFor="email" className="sr-only">Work email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Type your work email..."
                        className="w-full text-xs px-4 py-2 border bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary focus:bg-white"
                    />
                </div>

                {/* Continue with Email Button */}
                <button
                onClick={handleContinueWithEmail}
                className="w-full text-sm py-2 mb-2 text-white bg-blue-primary rounded-lg hover:bg-blue-secondary"
                >
                    Continue with email
                </button>

                {/* Forgot Password Link */}
                <div className="text-center">
                    <a href="#" className="text-sm text-blue-primary hover:underline">Forgot password?</a>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-between my-7">
                    <hr className="w-full border-gray-300" />
                    <span className="px-4 text-sm text-gray-500">or</span>
                    <hr className="w-full border-gray-300" />
                </div>

                {/* Continue with Google Button */}
                <Link to="/">
                <button className="w-full text-xs font-bold py-2 mb-2 text-gray-700 bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100">
                    <i className="fa-brands fa-google"></i>
                    Continue with Google
                </button>
                </Link>

                {/* Continue with SAML SSO Button */}
                <button
                onClick={handleContinueWithSAML}
                className="w-full text-xs font-bold py-2 mb-4 text-gray-700 bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100"
                >
                    <i className="fa-regular fa-user"></i>
                    Continue with SAML SSO
                </button>

                {/* Terms and Privacy Notice */}
                <p className="text-xs text-center text-gray-500">
                    By signing up to the Synthesia platform you understand and agree with our{' '}
                    <a href="#" className="text-blue-primary hover:underline">Customer Terms of Service</a> and{' '}
                    <a href="#" className="text-blue-primary hover:underline">Privacy Policy</a>.
                </p>

                {/* Contact Support */}
                <p className="text-xs text-center text-gray-500 mt-4">
                    Having trouble? Contact us at{' '}
                    <a href="mailto:support@synthesia.io" className="text-blue-primary hover:underline">support@synthesia.io</a>
                </p>
            </div>
      </div>
    </div>
  );
};

