
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import StatsCounter from '@/components/ui/stats-counter';
import { Coffee, Leaf, Wheat, ChartBarIncreasing } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  color: string;
  delay: number;
}

const StatItem = ({ icon, value, label, suffix, color, delay }: StatItemProps) => (
  <RevealOnScroll delay={delay} direction="up">
    <div className="p-6 rounded-lg border bg-white shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300 h-full min-h-[260px] flex justify-between">
      <div className={`mb-4 text-${color} p-3 rounded-full bg-${color}/10`}>
        {icon}
      </div>
      <div className="flex-1 flex flex-col items-center justify-center my-4">
        <StatsCounter 
          end={value} 
          suffix={suffix} 
          className={`text-${color} mb-2`}
        />
        <div className="text-gray-600">{label}</div>
      </div>
    </div>
  </RevealOnScroll>
);

const Statistics = () => {
  const stats = [
    {
      icon: <Coffee className="h-8 w-8" />,
      value: 420000,
      label: "Annual Coffee Production",
      suffix: " tons",
      color: "coffee",
      delay: 0
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      value: 65000,
      label: "Annual Tea Production",
      suffix: " tons",
      color: "forest",
      delay: 2
    },
    {
      icon: <Wheat className="h-8 w-8" />,
      value: 2500000,
      label: "Annual Corn Production",
      suffix: " tons",
      color: "amber-500",
      delay: 4
    },
    {
      icon: <ChartBarIncreasing className="h-8 w-8" />,
      value: 28,
      label: "Agricultural Export Growth",
      suffix: "%",
      color: "emerald-600",
      delay: 6
    }
  ];
  
  return (
    <section className="py-24 bg-cream/50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <SectionHeading
            title="Uganda's Agricultural Impact"
            subtitle="A snapshot of Uganda's thriving agricultural sector and its global contribution"
            centered
          />
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              color={stat.color}
              delay={stat.delay}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600 text-sm">
          <RevealOnScroll delay={8}>
            <p>Source: Uganda Bureau of Statistics (UBOS) and Ministry of Agriculture, 2024</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
