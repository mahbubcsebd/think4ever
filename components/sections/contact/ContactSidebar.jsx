'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const ContactSidebar = () => {
  return (
    <div className="w-full lg:w-[360px] space-y-6">
      {/* Office Information */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="bg-white border border-gray-100 rounded-md p-6 shadow-sm"
      >
        <h3 className="text-[15px] font-bold text-[#1f2937] mb-6">
          Office Information
        </h3>
        <div className="space-y-6">
          <div className="flex gap-3 items-start group">
            <div className="h-8 w-8 shrink-0 rounded-md bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-[#5c67f2] transition-colors mt-0.5">
              <MapPin size={16} />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-gray-900 leading-none">
                Headquarters
              </h4>
              <p className="text-[11px] text-gray-500 leading-relaxed mt-1.5 font-bold">
                161 Bay Street, 27th Floor
                <br />
                Toronto, ON M5J2S1
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start group">
            <div className="h-8 w-8 shrink-0 rounded-md bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-[#5c67f2] transition-colors mt-0.5">
              <Mail size={16} />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-gray-900 leading-none">
                Email
              </h4>
              <p className="text-[11px] text-gray-500 mt-1.5 font-bold">
                info@think4ever.com
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Help Card */}
      {/* <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="bg-[#f5f8ff] border border-[#dbeafe] rounded-md p-6 flex flex-col items-center"
      >
        <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 text-[#5c67f2]">
          <MessageCircle size={20} strokeWidth={2.5} />
        </div>
        <h4 className="font-bold text-[#1f2937] text-[15px] mb-1.5 tracking-tight">Need Immediate Help?</h4>
        <p className="text-center text-[11px] text-gray-400 mb-5 leading-relaxed font-bold">
          Chat with our team in real-time. Average response time under 2 minutes.
        </p>
        <Button className="w-full h-10 bg-[#093cad] hover:bg-[#072f85] text-white font-bold font-sans rounded-md text-[12px] flex items-center justify-center gap-2 transition-all shadow-sm shadow-blue-500/20">
          <MessageSquare size={14} />
          Start Live Chat
        </Button>
      </motion.div> */}
    </div>
  );
};

export default ContactSidebar;
