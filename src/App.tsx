import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Skull, TrendingDown, Flame, BookOpen, Quote, Trees, Factory, Link as LinkIcon, User } from 'lucide-react';

// --- VISUAL COMPONENTS (DATA CARDS) ---

const EnvironmentalData = () => (
  <div className="bg-white/5 border border-red-500/30 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group hover:border-red-500/60 transition-colors">
    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
      <Trees size={120} />
    </div>
    <h4 className="text-red-500 font-mono text-xs tracking-widest mb-4">SIMULATION DATA: FOREST COVER</h4>
    <div className="space-y-6 relative z-10">
      <div>
        <div className="flex justify-between text-sm mb-1 text-slate-400">
          <span>1750 (Agrarian)</span>
          <span>95%</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: '95%' }} 
            transition={{ duration: 1, delay: 0.5 }} 
            className="h-full bg-emerald-500/50" 
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm mb-1 text-slate-400">
          <span>1850 (Industrial)</span>
          <span className="text-red-500 font-bold">0%</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full w-0 bg-red-500" /> 
        </div>
      </div>
    </div>
    <div className="mt-8 text-xs text-red-400 font-mono bg-red-950/30 p-2 rounded border border-red-900/50">
      CRITICAL ECOLOGICAL FAILURE DETECTED
    </div>
  </div>
);

const HealthData = () => (
  <div className="bg-red-950/10 border border-red-500/30 p-8 rounded-2xl relative">
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-red-500/20 p-3 rounded-full">
        <Skull className="text-red-500" size={32} />
      </div>
      <div>
        <h4 className="text-white font-bold text-xl">Life Expectancy</h4>
        <p className="text-red-400 text-xs font-mono">URBAN VS RURAL (1840)</p>
      </div>
    </div>
    <div className="flex items-end gap-4 h-48 border-b border-white/10 pb-2">
      <div className="w-1/2 bg-slate-700/50 rounded-t-lg relative group h-[80%]">
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-slate-300 font-bold">45</span>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-slate-400">RURAL</span>
      </div>
      <div className="w-1/2 bg-red-600 rounded-t-lg relative group h-[45%]">
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-red-500 font-bold text-2xl">26</span>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white font-bold">URBAN</span>
      </div>
    </div>
    <p className="mt-4 text-sm text-slate-400 italic">
      "A child born in Liverpool had a lower life expectancy than a soldier in a war zone."
    </p>
  </div>
);

const SocietyData = () => (
  <div className="grid gap-4">
    <div className="bg-emerald-900/10 border border-emerald-500/20 p-6 rounded-xl opacity-50">
      <div className="flex justify-between items-center mb-2">
        <span className="text-emerald-400 font-bold">Cottage Industry</span>
        <Trees size={16} className="text-emerald-600"/>
      </div>
      <ul className="text-xs text-slate-400 space-y-2">
        <li>• Worker owns tools</li>
        <li>• Flexible hours</li>
        <li>• Family autonomy</li>
      </ul>
    </div>
    <div className="flex justify-center">
      <TrendingDown className="text-red-500" />
    </div>
    <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-bold">Factory System</span>
        <Factory size={16} className="text-red-500"/>
      </div>
      <ul className="text-sm text-slate-200 space-y-2 font-medium">
        <li className="flex items-center gap-2"><LinkIcon size={12}/> Owner owns tools</li>
        <li className="flex items-center gap-2"><LinkIcon size={12}/> 14-hour shifts</li>
        <li className="flex items-center gap-2"><LinkIcon size={12}/> Strict discipline</li>
      </ul>
    </div>
  </div>
);

// --- SECTION COMPONENT ---

const ArgumentSection = ({ title, subtitle, children, align = "left", visual }: any) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 relative z-10 py-24">
      <div className={`max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center ${align === 'right' ? '' : ''}`}>
        
        {/* TEXT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ margin: "-20%" }}
          className={`${align === 'right' ? 'md:order-2 text-right' : 'md:order-1 text-left'}`}
        >
          <div className={`flex items-center gap-4 mb-6 text-red-500 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
             <span className="font-mono text-xs tracking-[0.4em] uppercase border border-red-500/30 px-3 py-1 rounded-full">{subtitle}</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            {title}
          </h2>
          
          <div className="text-lg md:text-xl text-slate-400 font-light leading-relaxed space-y-6">
            {children}
          </div>
        </motion.div>

        {/* VISUAL COLUMN */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ margin: "-20%" }}
           className={`${align === 'right' ? 'md:order-1' : 'md:order-2'}`}
        >
          {visual}
        </motion.div>

      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  return (
    <div ref={containerRef} className="relative bg-black min-h-[300vh] selection:bg-red-500 selection:text-white">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-red-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      {/* --- HERO --- */}
      <header className="h-screen flex flex-col items-center justify-center relative z-10 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-red-500 mb-6">
             <User size={16} />
             <span className="font-mono text-xs tracking-widest uppercase">Presented by Gordon</span>
          </div>
          
          <Flame className="w-12 h-12 text-red-600 mx-auto mb-6 animate-pulse" />
          
          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-stone-800 select-none">
            THE<br/>CURSE
          </h1>
          
          <p className="mt-8 text-xl text-stone-400 font-light tracking-widest uppercase max-w-lg mx-auto leading-relaxed">
            Why the Industrial Revolution was a debt paid in blood.
          </p>
        </motion.div>
        
        <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] font-mono text-red-500">SCROLL TO INVESTIGATE</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </header>


      {/* --- CONTENT --- */}
      
      <ArgumentSection 
        title="ECOLOGICAL COLLAPSE" 
        subtitle="POINT 01" 
        visual={<EnvironmentalData />}
      >
        <p>
          The most immediate visual evidence from the Kovograd Simulation is the <span className="text-white font-bold">total eradication of nature</span>. In 1750, the region was defined by 95% forest coverage. By 1850, that number hit 0%. 
        </p>
        <p>
          This was not merely an aesthetic loss; it was a biological catastrophe. The smoke from the steam engines blackened the skies, causing respiratory failure across the population. The river, once a source of life, became a toxic artery of industrial dye and waste.
        </p>
        <p className="text-red-400 italic border-l-2 border-red-500 pl-4">
          To trade the very air we breathe for faster textile production is not progress—it is a suicide pact with industry.
        </p>
      </ArgumentSection>

      <div className="w-full h-px bg-white/5" />

      <ArgumentSection 
        title="GRAVEYARD OF PROGRESS" 
        subtitle="POINT 02" 
        align="right"
        visual={<HealthData />}
      >
        <p>
          Critics and economists often point to GDP growth as the ultimate sign of success. However, wealth is meaningless to the dead. The inclusion of the <span className="text-red-500 font-bold">Cholera Cemetery</span> in the 1850 simulation is a grim reality, not an exaggeration.
        </p>
        <p>
          Rapid urbanization outpaced sanitation infrastructure. Greed led to overcrowding, creating a breeding ground for diseases like cholera and typhoid. The working class was forced into tenements so dense that sickness spread like wildfire.
        </p>
        <p>
           A society that sacrifices its workers' longevity—dropping life expectancy to a shocking 26 years in urban centers—has fundamentally failed its people.
        </p>
      </ArgumentSection>

      <div className="w-full h-px bg-white/5" />

      <ArgumentSection 
        title="THE ILLUSION OF CHOICE" 
        subtitle="POINT 03"
        visual={<SocietyData />}
      >
        <p>
          Before the revolution, the agrarian cottage industry allowed for autonomy. Workers owned their tools, set their own hours, and lived with their families. Industrialization stripped this freedom away entirely.
        </p>
        <p>
          The shift to the factory system created a permanent dependency on the machine. Men, women, and <span className="text-white font-bold">even young children</span> were reduced to mere cogs in a mechanism they did not own.
        </p>
        <p>
          They traded the freedom of the farm for the tyranny of the factory whistle. The skilled artisan was replaced by the unskilled laborer, making them easily replaceable and trapping them in a cycle of poverty from which they could not escape.
        </p>
      </ArgumentSection>


      {/* --- VERDICT FOOTER --- */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-6 bg-gradient-to-t from-red-950/40 to-black">
        <div className="max-w-4xl text-center border border-white/10 bg-black/50 p-12 md:p-24 rounded-3xl backdrop-blur-xl">
          <BookOpen className="w-16 h-16 text-white mx-auto mb-8" />
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6">FINAL VERDICT</h2>
          <p className="text-2xl md:text-3xl text-stone-300 font-light leading-normal mb-8">
            The Industrial Revolution was a <span className="font-bold text-red-500">CURSE</span>.
          </p>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-12">
            While it built the modern world, it was laid with the suffering of the working class. It destroyed the environment, shortened lives, and enslaved humanity to the machine.
          </p>
          <div className="inline-block bg-red-500/20 border border-red-500 text-red-500 px-6 py-2 rounded font-mono text-sm uppercase">
            Gordon • Unit 3 Project
          </div>
        </div>
      </section>

    </div>
  );
}