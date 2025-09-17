import { motion } from "framer-motion";
import { Building2, HeartPulse, ShieldCheck, CheckCircle } from "lucide-react";

const StatsAndFeatures = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Stats Cards - Compact and in one row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center justify-center text-center"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="p-2.5 bg-blue-50 rounded-full mb-3">
                <HeartPulse className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">25+</h3>
              <p className="text-sm text-gray-600">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center justify-center text-center"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="p-2.5 bg-green-50 rounded-full mb-3">
                <Building2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">100+</h3>
              <p className="text-sm text-gray-600">Healthcare Projects</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center justify-center text-center"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="p-2.5 bg-purple-50 rounded-full mb-3">
                <ShieldCheck className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">100%</h3>
              <p className="text-sm text-gray-600">Compliance Success</p>
            </div>
          </motion.div>
        </div>

        {/* Features - Compact Grid */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Our Approach to Healthcare Excellence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-all">
              <div className="p-1.5 bg-blue-50 rounded-md flex-shrink-0">
                <CheckCircle className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 text-sm">End-to-End Solutions</h3>
                <p className="text-xs text-gray-500 mt-0.5">Complete healthcare facility development from concept to commissioning</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-all">
              <div className="p-1.5 bg-green-50 rounded-md flex-shrink-0">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 text-sm">Patient-Centric Design</h3>
                <p className="text-xs text-gray-500 mt-0.5">Healing environments prioritizing patient comfort and care</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-all">
              <div className="p-1.5 bg-purple-50 rounded-md flex-shrink-0">
                <CheckCircle className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 text-sm">Operational Excellence</h3>
                <p className="text-xs text-gray-500 mt-0.5">Efficient workflows for sustainable healthcare delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndFeatures;
