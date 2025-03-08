
import { useState } from 'react';
import Navbar from '../components/ui/navbar';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LabResourceCard from '../components/ui/lab-resource-card';
import ResearchNetworkForm from '../components/ui/research-network-form';
import { Waves } from '../components/ui/waves-background';

const Labs = () => {
  const [expandedLab, setExpandedLab] = useState(null);
  const [showResearchForm, setShowResearchForm] = useState(false);
  const toggleLabExpansion = labId => {
    setExpandedLab(expandedLab === labId ? null : labId);
  };
  const openResearchForm = () => {
    setShowResearchForm(true);
  };
  const closeResearchForm = () => {
    setShowResearchForm(false);
  };
  const labCenters = [{
    id: "ai-enablement",
    title: "AI Enablement Lab",
    description: "Focuses on developing frameworks and methodologies for effective AI implementation in organizations, emphasizing responsible and valuable applications.",
    features: ["AI Readiness Assessments", "Responsible AI Frameworks", "AI ROI Modeling"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/labs/ai-enablement"
  }, {
    id: "sustainable-finance",
    title: "Sustainable Finance Lab",
    description: "Conducts research on sustainable finance instruments, ESG metrics, and impact investing strategies to drive positive environmental and social outcomes.",
    features: ["ESG Metrics Development", "Impact Investment Models", "Climate Risk Analysis"],
    imageUrl: "https://images.unsplash.com/photo-1504609773093-1ca3efd3cca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  }, {
    id: "organizational-resilience",
    title: "Organizational Resilience Lab",
    description: "Researches strategies and practices for building resilient organizations capable of adapting to disruptions, crises, and complex change.",
    features: ["Crisis Response Frameworks", "Adaptive Leadership", "Stress Testing Models"],
    imageUrl: "https://images.unsplash.com/photo-1560417804-4b4d28966a1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  }];
  return <div className="min-h-screen bg-off-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pb-20 bg-gradient-to-br from-rich-black via-rich-black to-charcoal-gray text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Waves 
            lineColor="rgba(255, 255, 255, 0.2)"
            backgroundColor="transparent"
            waveSpeedX={0.015}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={15}
            yGap={36}
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Research Labs</h1>
              <p className="text-lg opacity-90 mb-6">
                Our labs develop cutting-edge solutions at the intersection of theory and practice, 
                combining academic rigor with real-world application.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2 bg-zinc-500 text-white rounded-full font-medium hover:bg-zinc-400 transition-all">
                  Explore Labs
                </button>
                <button className="px-5 py-2 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all" onClick={openResearchForm}>
                  Join Research Network
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Laboratory" className="rounded-xl shadow-lg relative z-10" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Lab Centers Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Lab Centers</h2>
            <p className="text-stone-gray max-w-3xl mx-auto">
              Our specialized lab centers focus on different domains, bringing together experts from 
              academia and industry to solve complex problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Enablement Lab */}
            <div className="bg-white rounded-xl p-8 shadow-neumorph-sm">
              <div className="h-14 w-14 bg-light-green/10 text-light-green rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Enablement Lab</h3>
              <p className="text-stone-gray mb-4">
                Focuses on developing frameworks and methodologies for effective AI implementation in 
                organizations, emphasizing responsible and valuable applications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-light-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>AI Readiness Assessments</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-light-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Responsible AI Frameworks</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-light-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>AI ROI Modeling</span>
                </li>
              </ul>
              <Link to="/labs/ai-enablement" className="text-light-green font-medium flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Sustainable Finance Lab */}
            <div className="bg-white rounded-xl p-8 shadow-neumorph-sm">
              <div className="h-14 w-14 bg-light-green/10 text-light-green rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable Finance Lab</h3>
              <p className="text-stone-gray mb-4">
                Conducts research on sustainable finance instruments, ESG metrics, and impact investing 
                strategies to drive positive environmental and social outcomes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-light-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>ESG Metrics Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-light-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Impact Investment Models</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-light-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Climate Risk Analysis</span>
                </li>
              </ul>
              <Link to="#" className="text-light-green font-medium flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Organizational Resilience Lab */}
            <div className="bg-white rounded-xl p-8 shadow-neumorph-sm">
              <div className="h-14 w-14 bg-light-green/10 text-light-green rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Organizational Resilience Lab</h3>
              <p className="text-stone-gray mb-4">
                Researches strategies and practices for building resilient organizations capable of adapting 
                to disruptions, crises, and complex change.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-light-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Crisis Response Frameworks</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-light-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Adaptive Leadership</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-light-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Stress Testing Models</span>
                </li>
              </ul>
              <Link to="#" className="text-light-green font-medium flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lab Resources Section */}
      <section className="py-16 bg-greige/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lab Resources</h2>
            <p className="text-stone-gray max-w-3xl mx-auto">
              Explore our latest research papers, case studies, and frameworks developed by our labs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <LabResourceCard title="AI Readiness Assessment Framework" excerpt="A comprehensive framework for evaluating organizational readiness for AI implementation." lab="AI Enablement Lab" resourceType="Framework" downloadUrl="#" imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
            
            <LabResourceCard title="ESG Metrics: Beyond Compliance" excerpt="Research on developing meaningful ESG metrics that drive business value and social impact." lab="Sustainable Finance Lab" resourceType="Research Paper" downloadUrl="#" imageUrl="https://images.unsplash.com/photo-1504609773093-1ca3efd3cca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            
            <LabResourceCard title="Crisis Response Playbook" excerpt="A practical guide for organizational leaders managing through crisis situations." lab="Organizational Resilience Lab" resourceType="Playbook" downloadUrl="#" imageUrl="https://images.unsplash.com/photo-1560417804-4b4d28966a1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          </div>
          
          <div className="text-center mt-10">
            <Link to="/resources" className="px-6 py-3 bg-light-green text-white rounded-lg font-medium hover:bg-opacity-90 transition-all inline-flex items-center">
              View All Resources <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Research Network Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Join Our Research Network</h2>
              <p className="text-stone-gray mb-6">
                Connect with leading academics, industry experts, and practitioners working on 
                cutting-edge research and practical applications.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-light-green text-white flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Collaboration Opportunities</h4>
                    <p className="text-stone-gray">Partner with our labs on research projects, case studies, and field experiments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-light-green text-white flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Early Access</h4>
                    <p className="text-stone-gray">Get priority access to research findings, tools, and frameworks before public release.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-light-green text-white flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Knowledge Exchange</h4>
                    <p className="text-stone-gray">Participate in exclusive workshops, webinars, and conferences with our research team.</p>
                  </div>
                </li>
              </ul>
              <button className="px-6 py-3 bg-rich-black text-white rounded-lg font-medium hover:bg-opacity-90 transition-all" onClick={openResearchForm}>
                Apply to Join
              </button>
            </div>
            <div className="hidden md:block">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Research Network" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Network Form Modal */}
      <ResearchNetworkForm isOpen={showResearchForm} onClose={closeResearchForm} />
    </div>;
};
export default Labs;
