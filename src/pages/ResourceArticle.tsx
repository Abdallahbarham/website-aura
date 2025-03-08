
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react';
import Navbar from '../components/ui/navbar';
import { Card } from '../components/ui/card';
import ResourceCard from '../components/ui/resource-card';
import { useState, useEffect } from 'react';

// Mock data for resources
const resources = [
  {
    id: "resilience-in-global-markets",
    title: "Resilience in Global Markets",
    excerpt: "Exploring strategies for maintaining operational resilience amidst global market volatility.",
    category: "Insights",
    date: "June 27, 2023",
    readTime: "8",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    content: `
      <h2>Introduction to Market Resilience</h2>
      <p>In today's rapidly evolving global marketplace, operational resilience has become more critical than ever before. Market volatility, geopolitical tensions, supply chain disruptions, and unforeseen global events have all highlighted the necessity for organizations to develop robust resilience strategies.</p>
      
      <p>This article explores effective approaches for maintaining operational stability during turbulent market conditions and provides actionable frameworks for building resilience into organizational structures.</p>
      
      <h2>Understanding Market Volatility</h2>
      <p>Market volatility refers to the rate at which prices rise or fall for a particular market, asset, or index. High volatility is characterized by rapid and significant price fluctuations, while low volatility indicates more stable and predictable price movements.</p>
      
      <p>The causes of market volatility can be attributed to several factors:</p>
      <ul>
        <li>Economic indicators and policy changes</li>
        <li>Geopolitical events and tensions</li>
        <li>Supply chain disruptions</li>
        <li>Technological disruptions</li>
        <li>Natural disasters and global health crises</li>
      </ul>
      
      <h2>Building Operational Resilience</h2>
      <p>Operational resilience is the ability of an organization to adapt to changing circumstances while maintaining continuous business operations and safeguarding its people, assets, and overall brand equity. Here are key strategies for enhancing operational resilience:</p>
      
      <h3>1. Diversified Supply Chains</h3>
      <p>Organizations that rely on single sources for critical components or services are particularly vulnerable to disruptions. Implementing a diversified supply chain strategy involves:</p>
      <ul>
        <li>Identifying alternative suppliers across different geographical regions</li>
        <li>Developing relationships with local suppliers</li>
        <li>Creating buffer inventories for critical components</li>
        <li>Implementing real-time supply chain visibility solutions</li>
      </ul>
      
      <h3>2. Adaptive Business Models</h3>
      <p>Organizations with rigid business models struggle to pivot during market disruptions. Developing adaptive business models includes:</p>
      <ul>
        <li>Creating multiple revenue streams</li>
        <li>Designing flexible operational processes</li>
        <li>Implementing scenario planning and regular stress testing</li>
        <li>Fostering a culture of innovation and adaptability</li>
      </ul>
      
      <h3>3. Robust Risk Management Frameworks</h3>
      <p>Comprehensive risk management goes beyond identifying risks to actively preparing for them. Key components include:</p>
      <ul>
        <li>Regular risk assessments across all operational areas</li>
        <li>Development of detailed contingency plans</li>
        <li>Crisis management teams with clearly defined roles</li>
        <li>Regular simulations and tabletop exercises</li>
      </ul>
      
      <h3>4. Technology and Data Analytics</h3>
      <p>Leveraging technology and data analytics enhances an organization's ability to anticipate, identify, and respond to market changes:</p>
      <ul>
        <li>Predictive analytics for early warning systems</li>
        <li>Cloud-based operations for location independence</li>
        <li>Automation of critical processes</li>
        <li>Real-time dashboards for market monitoring</li>
      </ul>
      
      <h2>Case Studies in Resilience</h2>
      <p>Several organizations have demonstrated exceptional resilience during market disruptions. Their approaches offer valuable lessons:</p>
      
      <h3>Case Study 1: Global Manufacturing Firm</h3>
      <p>A leading manufacturing company implemented a "regionalization" strategy, establishing manufacturing capabilities across multiple regions rather than centralizing production. When geopolitical tensions disrupted operations in one region, they were able to quickly shift production to alternative locations, maintaining 92% of their output capacity.</p>
      
      <h3>Case Study 2: Financial Services Provider</h3>
      <p>A major financial institution developed a comprehensive digital transformation strategy that enabled them to transition 95% of their workforce to remote operations within 48 hours during a global crisis. Their investment in cloud infrastructure and digital workflows ensured continuous service delivery despite physical disruptions.</p>
      
      <h2>Measuring Resilience</h2>
      <p>Quantifying and monitoring resilience is essential for ongoing improvement. Key performance indicators include:</p>
      <ul>
        <li>Recovery Time Objective (RTO): Time required to restore business functions after disruption</li>
        <li>Operational Continuity Rate: Percentage of operations maintained during disruption</li>
        <li>Supply Chain Visibility Index: Measurement of supply chain transparency</li>
        <li>Adaptability Quotient: Organization's demonstrated ability to pivot strategies</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building resilience is not a one-time project but an ongoing commitment that requires continuous assessment and improvement. Organizations that prioritize operational resilience will be better positioned to withstand market volatility and potentially gain competitive advantage during disruptions.</p>
      
      <p>By implementing diversified supply chains, adaptive business models, robust risk management frameworks, and leveraging technology, organizations can enhance their ability to maintain operational stability amidst global market volatility.</p>
    `,
    author: "Dr. Sarah Johnson",
    authorTitle: "Director of Research, FAEI"
  },
  {
    id: "policy-impact-assessment",
    title: "Policy Impact Assessment",
    excerpt: "Quantitative analysis of recent policy changes and their implications for financial systems.",
    category: "Research",
    date: "May 15, 2023",
    readTime: "12",
    imageUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    content: `
      <h2>Introduction to Policy Impact Assessment</h2>
      <p>Comprehensive analysis of recent financial policy changes and their quantifiable effects on market systems, regulation compliance, and institutional structures.</p>
      
      <h2>Methodology</h2>
      <p>This research employed mixed-methods analysis including econometric modeling, comparative case studies, and regulatory framework assessment to evaluate policy impacts across multiple dimensions.</p>
      
      <h2>Key Findings</h2>
      <p>Our analysis revealed three primary areas of impact: liquidity requirements, reporting standards, and algorithmic trading regulations. Each policy domain exhibited distinct patterns of implementation and market response.</p>
      
      <h2>Implications for Market Participants</h2>
      <p>Financial institutions must adapt operational strategies to align with new regulatory frameworks while maintaining competitive positioning and innovation capacity.</p>
    `,
    author: "Michael Chen",
    authorTitle: "Senior Policy Analyst, FAEI"
  },
  {
    id: "ai-implementation-report",
    title: "AI Implementation Report",
    excerpt: "Case study on successful AI implementation strategies in financial operations.",
    category: "Case Study",
    date: "April 8, 2023",
    readTime: "10",
    imageUrl: "https://images.unsplash.com/photo-1581093199082-a1a7ee686bbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    content: `
      <h2>Executive Summary</h2>
      <p>This case study examines the phased implementation of artificial intelligence solutions across a major financial institution's operations, documenting key success factors, implementation challenges, and measurable outcomes.</p>
      
      <h2>Implementation Strategy</h2>
      <p>The organization adopted a three-tiered approach: diagnostic assessment, pilot implementation, and scaled deployment with continuous feedback mechanisms integrated throughout the process.</p>
      
      <h2>Technology Stack</h2>
      <p>Solutions implemented included natural language processing for customer service, machine learning for fraud detection, and predictive analytics for portfolio management, all integrated with existing infrastructure.</p>
      
      <h2>Results and Metrics</h2>
      <p>Quantifiable improvements included 42% reduction in false positive fraud alerts, 28% increase in customer satisfaction scores, and 15% improvement in operational efficiency metrics across transformed functions.</p>
    `,
    author: "Dr. Rajiv Patel",
    authorTitle: "AI Research Lead, FAEI"
  },
  {
    id: "digital-transformation-strategies",
    title: "Digital Transformation Strategies",
    excerpt: "Key insights on how financial institutions are navigating digital transformation challenges.",
    category: "Insights",
    date: "March 22, 2023",
    readTime: "7",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    content: `<p>This is a placeholder for the Digital Transformation Strategies article content.</p>`,
    author: "Emma Rodriguez",
    authorTitle: "Digital Strategy Consultant, FAEI"
  },
  {
    id: "financial-regulation-trends",
    title: "Financial Regulation Trends",
    excerpt: "An analysis of emerging regulatory trends and their impact on global financial markets.",
    category: "Research",
    date: "February 19, 2023",
    readTime: "9",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    content: `<p>This is a placeholder for the Financial Regulation Trends article content.</p>`,
    author: "Dr. James Wilson",
    authorTitle: "Regulatory Affairs Director, FAEI"
  },
  {
    id: "blockchain-finance-applications",
    title: "Blockchain Applications in Finance",
    excerpt: "Exploring innovative use cases of blockchain technology in financial services.",
    category: "Technology",
    date: "January 30, 2023",
    readTime: "11",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    content: `<p>This is a placeholder for the Blockchain Applications in Finance article content.</p>`,
    author: "Dr. Lisa Chang",
    authorTitle: "Blockchain Research Lead, FAEI"
  },
  {
    id: "sustainable-investment-framework",
    title: "Sustainable Investment Framework",
    excerpt: "A comprehensive framework for integrating ESG factors into investment decision-making.",
    category: "Framework",
    date: "December 12, 2022",
    readTime: "15",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    content: `<p>This is a placeholder for the Sustainable Investment Framework article content.</p>`,
    author: "Maria Gonzalez",
    authorTitle: "ESG Investment Specialist, FAEI"
  },
  {
    id: "risk-management-best-practices",
    title: "Risk Management Best Practices",
    excerpt: "Essential strategies for effective risk management in volatile market conditions.",
    category: "Best Practices",
    date: "November 5, 2022",
    readTime: "8",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    content: `<p>This is a placeholder for the Risk Management Best Practices article content.</p>`,
    author: "David Park",
    authorTitle: "Risk Management Director, FAEI"
  },
];

const ResourceArticle = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  
  useEffect(() => {
    // Find the article with matching ID
    const foundArticle = resources.find(resource => resource.id === id);
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Find related articles in the same category
      const related = resources
        .filter(resource => resource.category === foundArticle.category && resource.id !== id)
        .slice(0, 3);
      
      setRelatedArticles(related);
    }
    
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!article) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="text-stone-gray mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/resources" className="bg-light-green text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-opacity-90">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Article Header */}
      <header className="pt-28 pb-12 bg-gradient-to-b from-rich-black to-charcoal-gray text-white">
        <div className="container-custom">
          <Link to="/resources" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{article.title}</h1>
            
            <div className="flex flex-wrap items-center text-white/80 gap-4 mb-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{article.readTime} min read</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                <span>{article.category}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Article Content */}
      <section className="py-12 bg-off-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <Card className="bg-white p-6 md:p-10 mb-8">
                <div className="mb-8">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}></div>
                
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 font-bold text-xl mr-4">
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{article.author}</h4>
                      <p className="text-stone-gray text-sm">{article.authorTitle}</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Social Sharing */}
              <Card className="bg-white p-6 mb-8">
                <h3 className="font-semibold mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="p-2 bg-[#1DA1F2] text-white rounded-full hover:bg-opacity-90">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-[#0A66C2] text-white rounded-full hover:bg-opacity-90">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-[#3b5998] text-white rounded-full hover:bg-opacity-90">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Author Info */}
              <Card className="bg-white p-6 mb-8">
                <h3 className="font-semibold mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 font-bold text-xl mr-4">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{article.author}</h4>
                    <p className="text-stone-gray text-sm">{article.authorTitle}</p>
                  </div>
                </div>
                <p className="text-stone-gray text-sm mb-4">
                  Expert in financial analysis and research with over 15 years of experience in the industry.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="p-1.5 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="p-1.5 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </Card>
              
              {/* Categories */}
              <Card className="bg-white p-6 mb-8">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm text-stone-gray hover:bg-light-green hover:text-white">
                    Insights
                  </a>
                  <a href="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm text-stone-gray hover:bg-light-green hover:text-white">
                    Research
                  </a>
                  <a href="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm text-stone-gray hover:bg-light-green hover:text-white">
                    Case Study
                  </a>
                  <a href="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm text-stone-gray hover:bg-light-green hover:text-white">
                    Technology
                  </a>
                  <a href="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm text-stone-gray hover:bg-light-green hover:text-white">
                    Framework
                  </a>
                  <a href="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm text-stone-gray hover:bg-light-green hover:text-white">
                    Best Practices
                  </a>
                </div>
              </Card>
              
              {/* Newsletter */}
              <Card className="bg-white p-6 mb-8">
                <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-stone-gray text-sm mb-4">
                  Stay updated with our latest research and insights delivered directly to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-light-green"
                  />
                  <button className="w-full bg-light-green text-white py-3 rounded-lg font-medium transition-all hover:bg-opacity-90">
                    Subscribe
                  </button>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <ResourceCard
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    category={article.category}
                    date={article.date}
                    readTime={article.readTime}
                    imageUrl={article.imageUrl}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Card className="bg-rich-black text-white p-8 md:p-12 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
                <p className="opacity-90 mb-6">
                  Explore our research and gain valuable insights to help your organization thrive in today's complex financial landscape.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="bg-light-green text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-opacity-90">
                    Contact Us
                  </Link>
                  <Link to="/resources" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-white/10">
                    View All Resources
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Resources" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-rich-black text-white py-12">
        <div className="container-custom">
          {/* Footer content (same as on other pages) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">FAEI</h3>
              <p className="text-white/70 mb-4">
                Bridging theory and practice through innovative research and actionable insights.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white/70 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-white/70 hover:text-white">About</Link></li>
                <li><Link to="/solutions" className="text-white/70 hover:text-white">Solutions</Link></li>
                <li><Link to="/resources" className="text-white/70 hover:text-white">Resources</Link></li>
                <li><Link to="/labs" className="text-white/70 hover:text-white">Labs</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Research Papers</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Case Studies</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Insights</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Frameworks</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Policy Analyses</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <address className="not-italic text-white/70">
                <p>123 Finance Street</p>
                <p>New York, NY 10001</p>
                <p className="mt-4">info@faei.org</p>
                <p>+1 (555) 123-4567</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/70 text-sm mb-4 md:mb-0">
                © 2023 Financial Analysis and Economics Institute. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-white/70 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" className="text-white/70 hover:text-white text-sm">Terms of Service</a>
                <a href="#" className="text-white/70 hover:text-white text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResourceArticle;
