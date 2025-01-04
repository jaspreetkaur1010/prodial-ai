import React from 'react';

function BookDemo() {
  return (
    <div className="lg:flex px-4 py-6 lg:px-24 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Left Section */}
      <div className="lg:w-1/2 lg:text-left space-y-6">
        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900">
          Book Your <span className="bg-gradient-to-br from-blue-secondary via-blue-secondary to-white text-transparent bg-clip-text">Free</span> Prodigal AI Demo
        </h2>
        <p className="pt-4 text-md font-medium text-blue-primary">WHAT TO EXPECT:</p>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-lg">&#10003;</span>
            <p className="text-gray-700">A personalized walkthrough of our AI tools and solutions.</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-lg">&#10003;</span>
            <p className="text-gray-700">Real success stories from businesses like yours.</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-lg">&#10003;</span>
            <p className="text-gray-700">Tailored pricing and deployment insights for your needs.</p>
          </li>
        </ul>
        <div className="space-x-4 pt-4">
            <div> <p className='text-gray-600 pl-4 text-sm'>Trusted by Industry Leaders Worldwide</p></div>
            <ul className="flex items-center justify-center md:justify-start space-x-12 font-bold text-6xl">
                <li><p><i className="fa-brands fa-stripe"></i></p></li>
                <li><p><i className="fa-brands fa-wix"></i></p></li>
                <li><p><i className="fa-brands fa-apple-pay"></i></p></li>
                <li><p><i className="fa-brands fa-ebay"></i></p></li>
                <li><p><i className="fa-brands fa-cpanel"></i></p></li>
            </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mx-36 bg-white p-8 rounded-lg shadow-lg space-y-6">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Work email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex items-center space-x-3">
            <select
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="text"
            placeholder="Job title"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg p-3 font-semibold hover:bg-blue-600">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookDemo;
