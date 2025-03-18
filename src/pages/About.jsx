import { Link } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon, Building, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        About Us
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-lg text-gray-700 mb-4"
      >
        Welcome to <span className="font-semibold text-blue-600">BlueSky Estate</span>, your trusted partner in premium real estate. We specialize in offering top-tier properties in Mumbai at the best deals, ensuring luxury, comfort, and value for our clients.
      </motion.p>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-lg text-gray-700 mb-4"
      >
        Our team of experienced real estate professionals is dedicated to helping you find the perfect home or investment opportunity. Whether you're looking for a luxury apartment, a spacious villa, or a high-end commercial space, we have an exclusive collection to meet your needs.
      </motion.p>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-lg text-gray-700 mb-4"
      >
        At <span className="font-semibold text-blue-600">BlueSky Estate</span>, we believe in transparency, integrity, and customer satisfaction. Our mission is to make your property buying experience smooth and rewarding.
      </motion.p>

      {/* Why Choose Us */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md mt-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose BlueSky Estate</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing exceptional service and finding the perfect property for our clients.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <HomeIcon size={28} className="text-blue-600" />, title: "Extensive Listings", description: "Browse our comprehensive selection of properties to find your perfect match." },
              { icon: <Building size={28} className="text-blue-600" />, title: "Expert Agents", description: "Our team of experienced professionals is dedicated to helping you every step of the way." },
              { icon: <Star size={28} className="text-blue-600" />, title: "Personalized Service", description: "We tailor our approach to meet your specific needs and preferences." }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mt-12"
      >
        <h3 className="text-2xl font-semibold text-gray-900">Find Your Dream Property Today!</h3>
        <p className="text-gray-600 mt-2">Get in touch with us and explore the best real estate deals in Mumbai.</p>
        <Link
          to="/contact"
          className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          Contact Us <ArrowRight className="inline ml-2" size={20} />
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUs;