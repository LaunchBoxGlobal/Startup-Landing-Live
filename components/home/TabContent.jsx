import { FileText, ShieldCheck, User } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";

const TabContent = ({ tabs, activeTab }) => {
  return (
    <div className="w-full lg:w-2/3">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 0.3 }}
          className="bg-white relative z-20 rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 h-full flex flex-col"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-2.5 bg-[#ef4444] text-white rounded-xl shadow-inner shadow-red-600/20">
              {React.createElement(tabs[activeTab].icon, {
                size: 24,
                strokeWidth: 2.5,
              })}
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight">
              {tabs[activeTab].content.heading}
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-10">
            <div className="lg:w-3/5 text-gray-500 font-medium leading-relaxed">
              <p>{tabs[activeTab].content.text}</p>
            </div>

            {/* Decorative Illustration for Tab 1, or generic for others */}
            <div className="lg:w-2/5 flex items-center justify-center relative">
              <div className="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-red-100/50 rounded-full blur-xl scale-125"></div>
                <div className="w-16 h-16 bg-[#ef4444] rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 z-10 text-white relative">
                  <ShieldCheck size={32} strokeWidth={2.5} />
                  {/* Floating dots/icons */}
                  <div className="absolute -top-4 -left-4 w-6 h-6 bg-white rounded-full shadow border-2 border-red-50 flex items-center justify-center text-red-500 text-[10px]">
                    <FileText size={12} />
                  </div>
                  <div className="absolute -bottom-2 -right-6 w-8 h-8 bg-white rounded-full shadow border-2 border-red-50 flex items-center justify-center text-red-500">
                    <User size={14} />
                  </div>
                  <div className="absolute -top-6 -right-2 w-5 h-5 bg-white rounded-full shadow border-2 border-red-50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {tabs[activeTab].content.features.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center p-4 bg-gray-50/50 rounded-2xl border border-gray-100/50"
              >
                <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-[#ef4444] mb-3">
                  <feature.icon size={18} />
                </div>
                <span className="text-[0.8rem] font-bold text-gray-700 leading-tight">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {/* Commitment Box */}
          <div className="mt-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50/30 rounded-2xl"></div>
            <div className="relative p-6 border border-red-100 rounded-2xl">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#ef4444] uppercase tracking-wider mb-3">
                <ShieldCheck size={14} />
                <span>OUR COMMITMENT</span>
              </div>
              <p className="text-gray-900 font-medium text-[0.95rem] leading-relaxed mb-4">
                {tabs[activeTab].content.commitment.text}
              </p>
              <div className="inline-flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-full border border-red-100 text-xs font-bold text-gray-700 shadow-sm">
                <span className="text-green-500">✓</span>
                <span>{tabs[activeTab].content.commitment.badge}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabContent;
