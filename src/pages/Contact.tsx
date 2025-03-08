
import { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ContactForm from '@/components/ui/contact-form';
import FaqAccordion from '@/components/ui/faq-accordion';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Contact = () => {
  const {
    toast
  } = useToast();
  
  return <div className="min-h-screen bg-off-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container-custom mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact us</h1>
              <p className="text-stone-gray mb-6">
                We are here to answer your questions, provide solutions, and guide you through the process. Simply use the form below or reach out to us directly - we want to explore how FAEI can support your organization. We aim to help unlock your potential.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-neumorph-sm">
                <h3 className="text-2xl font-semibold mb-4">FAEI</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-champagne mr-3" />
                    <span>1234 Innovation Ave, San Francisco, CA 94103</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-champagne mr-3" />
                    <span>contact@faei.org</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-champagne mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-greige">
                  <h4 className="font-medium mb-3">Social Media</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-off-white rounded-full hover:bg-champagne hover:text-white transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-2 bg-off-white rounded-full hover:bg-champagne hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-2 bg-off-white rounded-full hover:bg-champagne hover:text-white transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="container-custom mb-16">
          <div className="bg-greige/50 p-8 md:p-12 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get in Touch</h2>
            <ContactForm />
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="container-custom">
          <h2 className="text-3xl font-semibold mb-8 text-center">FAQs <span className="text-stone-gray">(Frequently asked questions)</span></h2>
          <FaqAccordion />
        </section>
      </main>
    </div>;
};
export default Contact;
