
import { Card } from '../ui/cards';

const AIReadinessSection = () => {
  return (
    <Card 
      className="bg-rich-black text-white overflow-hidden mb-20 border-0"
      raised
      intensity="strong"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Measure Your AI Readiness</h2>
          <p className="text-white/80 mb-6">
            Accelerate progress with FAEI by leveraging our research-driven AI readiness assessment. This diagnostic tool helps organizations determine their digital maturity level across key indicators. Through our AI Enablement Lab, we help identify specific business priorities and develop value-creating, business-focused roadmaps for successful AI adoption. Our "capability-based model" helps you "define" decision domains and objectives for sequential or in-parallel AI adoption.
          </p>
          <button className="button-neuro bg-white text-rich-black px-6 py-3 rounded-xl font-medium">
            Take the Test
          </button>
        </div>
        <div className="relative h-full min-h-[300px] bg-gray-700">
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="AI Readiness" className="object-cover h-full w-full opacity-60" />
        </div>
      </div>
    </Card>
  );
};

export default AIReadinessSection;
