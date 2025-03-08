import { useState } from 'react';
import Navbar from '../components/ui/navbar';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import KnowledgeHubCard from '../components/ui/knowledge-hub-card';
import LabResourceCard from '../components/ui/lab-resource-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AIEnablementLab = () => {
  const knowledgeHubItems = [
    {
      id: 1,
      title: 'AI Education',
      description: 'Fundamentals of AI and machine learning for business leaders',
      imageUrl: '/lovable-uploads/photo-1488590528505-98d2b5aba04b.jpg',
      category: 'Resource',
      link: '#'
    },
    {
      id: 2,
      title: 'Case Studies',
      description: 'Real-world examples of successful AI implementations',
      imageUrl: '/lovable-uploads/photo-1581091226825-a6a2a5aee158.jpg',
      category: 'Resource',
      link: '#'
    },
    {
      id: 3,
      title: 'Toolkits',
      description: 'Step-by-step guides to implement AI in your organization',
      imageUrl: '/lovable-uploads/photo-1483058712412-4245e9b90334.jpg',
      category: 'Resource',
      link: '#'
    },
    {
      id: 4,
      title: 'Research & Insights',
      description: 'Latest findings and thought leadership in AI enablement',
      imageUrl: '/lovable-uploads/photo-1498050108023-c5249f4df085.jpg',
      category: 'Resource',
      link: '#'
    }
  ];

  const relatedLabs = [
    {
      id: 1,
      title: 'Sustainable Finance Lab',
      excerpt: 'Exploring the intersection of AI and sustainable finance',
      imageUrl: '/lovable-uploads/photo-1605810230434-7631ac76ec81.jpg',
      link: '/labs/sustainable-finance'
    },
    {
      id: 2,
      title: 'Organizational Resilience Lab',
      excerpt: 'Building resilient organizations with AI capabilities',
      imageUrl: '/lovable-uploads/photo-1486312338219-ce68d2c6f44d.jpg',
      link: '/labs/organizational-resilience'
    },
    {
      id: 3,
      title: 'Digital Transformation Lab',
      excerpt: 'AI-powered strategies for digital transformation',
      imageUrl: '/lovable-uploads/photo-1461749280684-dccba630e2f6.jpg',
      link: '/labs/digital-transformation'
    },
    {
      id: 4,
      title: 'Future of Work Lab',
      excerpt: 'How AI is reshaping the workplace and workforce',
      imageUrl: '/lovable-uploads/photo-1519389950473-47ba0277781c.jpg',
      link: '/labs/future-work'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="w-full bg-gradient-to-r from-rich-black to-charcoal-gray text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Enablement Lab</h1>
            <p className="text-lg mb-8">
              Helping organizations harness the transformative power of AI through research, 
              frameworks, and practical implementation tools
            </p>
            <Button className="bg-light-green hover:bg-light-green/90 text-white font-medium px-6 py-3">
              Get Started
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-rich-black">Artificial Intelligence Enablement Lab</h2>
              <p className="text-stone-gray mb-4">
                At the AI Enablement Lab, we're at the forefront of helping organizations harness the power of artificial 
                intelligence. We believe that successful AI implementation requires more than just technology—it demands 
                a strategic approach that aligns with business goals, considers ethical implications, and drives measurable 
                value.
              </p>
              <p className="text-stone-gray mb-4">
                Our interdisciplinary team combines expertise in AI technology, organizational change management, and business 
                strategy to create comprehensive frameworks and methodologies that guide successful AI adoption. We work 
                closely with organizations across sectors to assess AI readiness, develop responsible AI practices, and 
                build capabilities for sustainable AI implementation.
              </p>
              <p className="text-stone-gray mb-8">
                Whether you're just beginning your AI journey or looking to scale existing initiatives, our lab provides 
                the research, tools, and expertise needed to navigate the complex AI landscape and unlock its transformative 
                potential.
              </p>
              
              <h3 className="text-2xl font-bold text-light-green mb-6">What we do?</h3>
              <p className="text-stone-gray mb-6">
                Our specialized lab brings together experts to develop frameworks and tools for effective AI implementation. 
                We conduct research on organizational AI readiness, ethical AI deployment, and success measurement methodologies. 
                Through partnerships with industry and academia, we create practical resources that bridge the gap between 
                AI's theoretical promise and successful real-world applications.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Button variant="outline" className="w-full justify-center font-medium border-light-green text-light-green hover:bg-light-green/10">
                  Our Team
                </Button>
                <Button variant="outline" className="w-full justify-center font-medium border-light-green text-light-green hover:bg-light-green/10">
                  Our Methodology
                </Button>
                <Button variant="outline" className="w-full justify-center font-medium border-light-green text-light-green hover:bg-light-green/10">
                  Past Projects
                </Button>
                <Button variant="outline" className="w-full justify-center font-medium border-light-green text-light-green hover:bg-light-green/10">
                  Work With Us
                </Button>
                <Button variant="outline" className="w-full justify-center font-medium border-light-green text-light-green hover:bg-light-green/10">
                  Latest Research
                </Button>
                <Button variant="outline" className="w-full justify-center font-medium border-light-green text-light-green hover:bg-light-green/10">
                  Thought Leadership
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/photo-1518770660439-4636190af475.jpg" 
                alt="AI Implementation" 
                className="rounded-xl shadow-lg w-full h-auto object-cover aspect-4/3"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Knowledge Hub Section */}
      <section className="py-16 bg-greige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-rich-black">Knowledge Hub</h2>
            <p className="text-stone-gray max-w-3xl mx-auto">
              Explore our collection of resources designed to help you understand and implement AI in your organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {knowledgeHubItems.map((item) => (
              <KnowledgeHubCard
                key={item.id}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                category={item.category}
                link={item.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="#" className="text-light-green font-medium flex items-center justify-center hover:underline">
              Discover the Knowledge Hub
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <p className="mt-2 text-sm text-stone-gray">
              View all downloadable resources
            </p>
          </div>
        </div>
      </section>
      
      {/* AI Readiness Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-rich-black">Measure Your AI Readiness!</h2>
              <p className="text-stone-gray mb-6">
                Organizations vary widely in their readiness to implement AI. Our comprehensive assessment tool helps you evaluate your 
                current capabilities across key dimensions, including data infrastructure, talent, governance, and strategy. Understand 
                where you stand, identify gaps, and get personalized recommendations for building AI readiness. This self-assessment 
                provides a practical roadmap to prepare your organization for successful AI adoption.
              </p>
              <Button className="bg-light-green hover:bg-light-green/90 text-white">
                Take the Assessment
              </Button>
            </div>
            <div>
              <img 
                src="/lovable-uploads/photo-1519389950473-47ba0277781c.jpg" 
                alt="AI Readiness Assessment" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Labs Section */}
      <section className="py-16 bg-greige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-rich-black">Check out related labs</h2>
            <p className="text-stone-gray max-w-3xl mx-auto">
              Explore other specialized labs that complement our AI enablement work
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {relatedLabs.map((lab) => (
              <LabResourceCard
                key={lab.id}
                title={lab.title}
                excerpt={lab.excerpt}
                imageUrl={lab.imageUrl}
                link={lab.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEnablementLab;
