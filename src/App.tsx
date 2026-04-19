/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, Linkedin, Briefcase, Sparkles, Gamepad2, Blocks, LineChart, Target, Twitter, Github } from "lucide-react";

export default function App() {
  
  const interests = [
    { name: "Executive & Startup Coaching", icon: <Target className="w-5 h-5" /> },
    { name: "VC, CVC & Angel Investing", icon: <LineChart className="w-5 h-5" /> },
    { name: "Technology", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Startups & Entrepreneurship", icon: <ArrowUpRight className="w-5 h-5" /> },
    { name: "Gaming", icon: <Gamepad2 className="w-5 h-5" /> },
    { name: "Web3", icon: <Blocks className="w-5 h-5" /> }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] lg:flex selection:bg-[#E0E0E0] selection:text-[#0A0A0A] font-sans relative overflow-x-hidden">
      
      {/* Top Nav (from the theme) */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-6 md:px-12 lg:px-[60px] py-6 md:py-10 z-50 pointer-events-none">
        <div className="font-extrabold text-[16px] md:text-[18px] tracking-[0.1em] uppercase text-[#FFFFFF]">SELCUK ERGIN</div>
        <div className="flex items-center gap-5 md:gap-6 pointer-events-auto">
          <a href="https://twitter.com/selcukergin" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-[#E0E0E0] transition-colors" aria-label="Twitter">
            <Twitter className="w-[18px] h-[18px]" />
          </a>
          <a href="https://github.com/selcukergin" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-[#E0E0E0] transition-colors" aria-label="GitHub">
            <Github className="w-[18px] h-[18px]" />
          </a>
          <a href="https://tr.linkedin.com/in/selcukergin" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-[#E0E0E0] transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-[18px] h-[18px]" />
          </a>
        </div>
      </nav>

      {/* Decorative center line */}
      <div className="fixed left-0 top-1/2 w-full h-[1px] bg-white/[0.05] pointer-events-none z-0 hidden lg:block" />

      {/* Left Column - Fixed Header */}
      <section className="lg:w-[55%] lg:fixed min-h-[90svh] lg:h-screen px-6 md:px-12 lg:px-[60px] pt-32 pb-16 lg:py-0 flex flex-col justify-center relative z-10 w-full pointer-events-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[100%] relative z-10"
        >
          <span className="text-[12px] md:text-[14px] uppercase tracking-[0.4em] text-[#666666] mb-[20px] ml-1 md:ml-2 block">
            Executive & Tech Strategist
          </span>
          
          <h1 className="text-[#E0E0E0] text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[7.5vw] xl:text-[130px] font-black leading-[0.85] tracking-[-0.04em] uppercase mb-8">
            SELÇUK<br />ERGIN
          </h1>
          
          <p className="text-[#666666] text-[14px] md:text-[15px] leading-[1.6] max-w-sm ml-1 md:ml-2 mb-8 md:mb-10">
            Consultant, Investor, and Coach. I provide executive and startup coaching, while actively engaging in <strong className="text-[#E0E0E0] font-bold">VC, CVC, and Angel</strong> ecosystems to shape the future at <strong className="text-[#E0E0E0] font-bold">Boza</strong>.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-[20px] flex-wrap ml-1 md:ml-2 relative z-10"
        >
          <a 
            href="https://tr.linkedin.com/in/selcukergin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto justify-center px-[24px] py-[14px] md:py-[12px] border border-[#E0E0E0] text-[#E0E0E0] text-[11px] uppercase tracking-[0.1em] font-medium hover:bg-[#E0E0E0] hover:text-[#0A0A0A] transition-all flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            <span>Read my blog</span>
          </a>
        </motion.div>

        {/* Footer-like element from the theme */}
        <div className="relative lg:absolute bottom-auto lg:bottom-[40px] left-0 lg:left-[60px] right-0 lg:right-[60px] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 md:gap-4 mt-16 md:mt-12 lg:mt-0">
          <div className="text-[#666666] text-[11px] tracking-[0.05em] max-w-full sm:max-w-[250px] leading-[1.6]">
            Crafting the future of digital ecosystems through strategy and leadership.
          </div>
          <div className="text-[10px] uppercase tracking-[0.1em] flex items-center gap-[8px] text-[#FFFFFF]">
            <div className="w-[6px] h-[6px] shrink-0 bg-[#00FF00] rounded-full shadow-[0_0_10px_#00FF00]"></div>
            Available in Istanbul
          </div>
        </div>
      </section>

      {/* Right Column - Scrolling Content */}
      <section className="lg:w-[45%] w-full lg:ml-[55%] px-6 md:px-12 lg:pl-10 lg:pr-[60px] pb-16 pt-8 md:pt-16 lg:py-[120px] xl:py-[150px] flex flex-col gap-6 md:gap-[30px] border-t border-white/[0.05] lg:border-t-0 relative z-10 bg-[#0A0A0A] lg:bg-transparent">
        
        {/* About Module */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.02] lg:bg-white/[0.03] border border-white/[0.05] lg:border-white/[0.1] p-6 sm:p-8 lg:p-[40px] rounded-[4px] backdrop-blur-[10px]"
        >
          <h2 className="text-[20px] md:text-[24px] font-normal leading-[1.4] text-[#EEE] mb-[20px]">"I transform complex technological challenges into sustainable business growth."</h2>
          <p className="text-[#666666] text-[14px] md:text-[15px] leading-[1.6] mb-5">
            I’m Selçuk. Currently based in Istanbul, working as a consultant and coach at Boza.
          </p>
          <p className="text-[#666666] text-[14px] md:text-[15px] leading-[1.6]">
            My journey is driven by a deep fascination with how technology reshapes industries. I specialize in <strong className="text-[#E0E0E0] font-medium">executive coaching</strong> and <strong className="text-[#E0E0E0] font-medium">startup coaching</strong>. I'm deeply integrated into the investment landscape—partnering with <strong className="text-[#E0E0E0] font-medium">VCs, CVCs (Corporate Venture Capital), and Angel Networks</strong>. Whether it's guiding early-stage startups to scale or exploring new developments in gaming and web3 ecosystems, I focus on bridging visionary ideas with smart capital.
          </p>
        </motion.div>

        {/* Interests & Expertise Module */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.02] lg:bg-white/[0.03] border border-white/[0.05] lg:border-white/[0.1] p-6 sm:p-8 lg:p-[40px] rounded-[4px] backdrop-blur-[10px]"
        >
          <h2 className="text-[20px] md:text-[24px] font-normal leading-[1.4] text-[#EEE] mb-[24px] md:mb-[30px]">Core Interests</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[16px] md:gap-[20px]">
            {interests.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 text-[#666666]"
              >
                <div className="text-[#E0E0E0] shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-[14px] md:text-[15px] leading-[1.6]">{item.name}</h3>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Work / Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.02] lg:bg-white/[0.03] border border-white/[0.05] lg:border-white/[0.1] p-6 sm:p-8 lg:p-[40px] rounded-[4px] backdrop-blur-[10px] group relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-[16px] md:mb-[20px]">
             <span className="text-[14px] md:text-[15px] text-[#666666] leading-[1.6]">Current Position</span>
          </div>
          <h3 className="font-bold text-[20px] md:text-[24px] leading-[1.4] text-[#EEE] mb-[8px] md:mb-[10px]">Boza</h3>
          <p className="text-[#666666] text-[14px] md:text-[15px] leading-[1.6] mb-[24px] md:mb-[30px]">Consultant, VC & Executive Coach</p>

          <a href="https://about.me/selcuke" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-[24px] py-[14px] md:py-[12px] bg-[#E0E0E0] text-[#0A0A0A] text-[11px] uppercase tracking-[0.1em] font-bold hover:bg-white transition-all inline-block">
            View Source (About.me)
          </a>
        </motion.div>

      </section>
    </main>
  );
}
