
import { ChevronRight } from 'lucide-react';
import Navbar from '../components/ui/navbar';
import { Card } from '../components/ui/card';
import TeamMemberCard from '../components/ui/team-member-card';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container-custom">
          {/* Hero Content */}
          <div className="mb-12 md:mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-rich-black to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Abstract visualization representing FAEI's research methodologies"
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 flex items-center z-20">
                <div className="container-custom">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                      About FAEI
                    </h1>
                    <p className="text-lg opacity-90 mb-6">
                      Learn more about our mission, values, and team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-light-green/10 text-light-green text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-stone-gray">
                At FAEI, our mission is to bridge the gap between theory and practice by providing innovative research and actionable insights. We strive to empower organizations and individuals to achieve excellence through data-driven strategies and methodologies.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="neumorph p-6">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="FAEI Team"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <ul className="list-disc list-inside text-stone-gray space-y-2">
                  <li>Innovation: We foster a culture of creativity and continuous improvement.</li>
                  <li>Integrity: We uphold the highest ethical standards in all our endeavors.</li>
                  <li>Collaboration: We believe in the power of teamwork and shared knowledge.</li>
                  <li>Excellence: We are committed to delivering exceptional results and exceeding expectations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TeamMemberCard
                name="John Doe"
                role="CEO"
                imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                bio="John is a visionary leader with over 20 years of experience in the financial industry."
              />
              <TeamMemberCard
                name="Jane Smith"
                role="CTO"
                imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                bio="Jane is a technology expert with a passion for innovation and digital transformation."
              />
              <TeamMemberCard
                name="Mike Johnson"
                role="COO"
                imageUrl="https://images.unsplash.com/photo-1534528741702-a0cfae562c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                bio="Mike is an operations guru with a focus on efficiency and process optimization."
              />
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-light-green/10 text-light-green text-sm font-medium mb-4">
                Our Methodology
              </span>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-stone-gray">
                We employ a rigorous, research-driven approach to develop solutions that are both innovative and practical. Our methodology is based on the following key principles:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white p-6 transition-all duration-300 hover:-translate-y-1" raised hover>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                <p className="text-stone-gray">We leverage data analytics and statistical modeling to identify trends and patterns that inform our recommendations.</p>
              </Card>
              <Card className="bg-white p-6 transition-all duration-300 hover:-translate-y-1" raised hover>
                <h3 className="text-xl font-semibold mb-2">Collaborative Partnerships</h3>
                <p className="text-stone-gray">We work closely with our clients to understand their unique challenges and develop customized solutions that meet their specific needs.</p>
              </Card>
              <Card className="bg-white p-6 transition-all duration-300 hover:-translate-y-1" raised hover>
                <h3 className="text-xl font-semibold mb-2">Actionable Strategies</h3>
                <p className="text-stone-gray">We focus on developing practical strategies and methodologies that can be immediately implemented to drive business value.</p>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-stone-gray mb-8">
              Contact us today to learn more about how FAEI can help your organization achieve its goals.
            </p>
            <Link to="/contact" className="neumorph-button inline-flex items-center hover:text-light-green">
              Contact Us <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer has been removed as it's now provided by the Layout component */}
    </div>
  );
};

export default About;
