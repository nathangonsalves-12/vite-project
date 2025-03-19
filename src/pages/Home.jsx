import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Home as HomeIcon, Building, Star } from 'lucide-react'
import { useAuth0 } from "@auth0/auth0-react";


export default function Home() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Home With BlueSky Estate</h1>
            <p className="text-xl mb-8 text-blue-100">Discover the perfect property that fits your lifestyle and budget from our extensive listings.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/properties" className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition">
                Browse Properties
              </Link>
              {!isAuthenticated && (
              <button 
               onClick={() => loginWithRedirect()} 
                className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
              Sign In
             </button>
)}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-3xl"></div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Featured Properties</h2>
            <Link to="/properties" className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition">
              View All Properties <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-56 bg-gray-200 relative">
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">For Sale</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">2BHK Flat</h3>
                <p className="text-gray-600 mb-4">hirandani park,powai</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold text-xl">₹ 1.5 Cr</span>
                  <div className="flex text-sm text-gray-500">
                    <span className="mr-3">2 beds</span>
                    <span>2 baths</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-56 bg-gray-200 relative">
                <div className="absolute top-3 left-3 bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">For low interest rate</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">3BHK Flat</h3>
                <p className="text-gray-600 mb-4">andheri east,mumbai</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold text-xl">₹ 2.5 Cr</span>
                  <div className="flex text-sm text-gray-500">
                    <span className="mr-3">3 beds</span>
                    <span>3 baths</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-56 bg-gray-200 relative">
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">For Sale</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">4BHK Flat</h3>
                <p className="text-gray-600 mb-4">jogeshwari east,mumbai</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold text-xl">₹ 3.5 Cr</span>
                  <div className="flex text-sm text-gray-500">
                    <span className="mr-3">4 beds</span>
                    <span>2.5 baths</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose BlueSky Estate</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We're committed to providing exceptional service and finding the perfect property for our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Extensive Listings</h3>
              <p className="text-gray-600">Browse our comprehensive selection of properties to find your perfect match.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Agents</h3>
              <p className="text-gray-600">Our team of experienced professionals is dedicated to helping you every step of the way.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
              <p className="text-gray-600">We tailor our approach to meet your specific needs and preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Start your property search today or contact our team for personalized assistance.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/properties" className="px-8 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition">
              Search Properties
            </Link>
            <Link to="/sign-in" className="px-8 py-3 border border-white rounded-lg font-medium hover:bg-blue-800 transition">
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
