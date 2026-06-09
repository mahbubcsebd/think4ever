'use client';

import { motion } from 'framer-motion';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function WhoIsItFor() {
  return (
    <SplitSection
      id="who-is-it-for"
      watermarkText="CHOOSE"
      leftTitle="Who is it for"
      bottomContent={
        <div className="w-full mt-12 pb-20 flex flex-col gap-16 relative z-10 max-w-5xl mx-auto">
          {/* Scrollable Table view */}
          <div className="w-full overflow-x-auto rounded-xl border border-zinc-200/60 bg-white/70 backdrop-blur-sm shadow-xl">
            <table className="w-full min-w-[750px] border-collapse text-left">
              <thead>
                <tr className="bg-gradient-to-r from-[#07A7E1]/5 to-[#093cad]/5 border-b border-zinc-200/60">
                  <th className="p-6 text-sm font-bold text-[#09090D] tracking-wider uppercase md:whitespace-nowrap whitespace-normal w-1/4 text-center">With Think4Ever you can</th>
                  <th className="p-6 text-sm font-bold text-[#09090D] tracking-wider uppercase md:whitespace-nowrap whitespace-normal w-5/12 text-center">Use cases</th>
                  <th className="p-6 text-sm font-bold text-[#09090D] tracking-wider uppercase md:whitespace-nowrap whitespace-normal w-1/3 text-center">Who can use Think4Ever</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/60">
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-6 text-[15px] font-bold align-top"><GradientText>Build</GradientText></td>
                  <td className="p-6 text-[14px] text-zinc-600 font-medium leading-relaxed align-top">New applications, workflows, systems</td>
                  <td className="p-6 text-[14px] text-zinc-500 font-normal leading-relaxed align-top">Developers, founders, product teams</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-6 text-[15px] font-bold align-top"><GradientText>Extend</GradientText></td>
                  <td className="p-6 text-[14px] text-zinc-600 font-medium leading-relaxed align-top">Integration with or enhancement of existing systems</td>
                  <td className="p-6 text-[14px] text-zinc-500 font-normal leading-relaxed align-top">Engineering teams</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-6 text-[15px] font-bold align-top"><GradientText>Modernize</GradientText></td>
                  <td className="p-6 text-[14px] text-zinc-600 font-medium leading-relaxed align-top">Legacy re-factor or transformation</td>
                  <td className="p-6 text-[14px] text-zinc-500 font-normal leading-relaxed align-top">Enterprise architects, CTOs, Distinguished Engineers, Tech Leads</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-6 text-[15px] font-bold align-top"><GradientText>Co-Develop</GradientText></td>
                  <td className="p-6 text-[14px] text-zinc-600 font-medium leading-relaxed align-top">Architect and Design in Think Platform and use your favorite tool to develop the code.</td>
                  <td className="p-6 text-[14px] text-zinc-500 font-normal leading-relaxed align-top">Corporations and Developers already using or familiar with other tools.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Subtext Scenario Details */}
          <div className="mt-8 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[#09090D] tracking-tight border-b border-zinc-100 pb-3">
              Co-Develop Scenarios
            </h3>
            <ol className="flex flex-col divide-y divide-zinc-100/80">
              {[
                { title: 'Use T4E only', desc: 'Do everything inside Think4Ever and complete your SDLC.' },
                { title: 'Use T4E to design and manage', desc: 'Processes, flows, roles, etc., and develop in other tools such as Claude Code/Codex/Other-Dev tools.' },
                { title: 'A Hybrid approach', desc: 'Mix both Think4Ever and Third-party tools as needed. Agents can work together to build your System.' },
                { title: 'Think API', desc: 'Third-party developers can build new solutions integrated with T4E Platform.' },
                { title: 'Corporations use T4E API', desc: 'To integrate their internal process with their existing agents.' },
              ].map((item, idx) => (
                <li key={idx} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 hover:bg-zinc-50/40 transition-colors rounded-lg px-4 -mx-4">
                  <div className="flex items-center gap-4 shrink-0 sm:w-[260px]">
                    <span className="text-[14px] font-mono font-semibold text-[#89A4C4] shrink-0">
                      0{idx + 1}
                    </span>
                    <h4 className="text-[15px] font-bold text-zinc-800 leading-none">{item.title}</h4>
                  </div>
                  <p className="text-[14px] text-zinc-500 leading-relaxed pl-8 sm:pl-0 sm:pt-0.5 flex-1">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[28px] sm:text-[40px] md:text-[54px] lg:text-[60px] font-bold text-[#09090D] leading-[1.1] tracking-tight"
        >
          T4E Platform is built for <GradientText>everyone.</GradientText>
        </motion.h2>
      </div>
    </SplitSection>
  );
}
