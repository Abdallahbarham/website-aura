
import React from 'react';
import { Card } from '../ui/cards';

const Newsletter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <Card className="bg-rich-black text-white p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
              <p className="opacity-90 mb-6">
                Subscribe to our newsletter to receive the latest articles, insights, and research directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-light-green" />
                <button className="bg-light-green text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-opacity-90">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Newsletter" className="rounded-lg w-full h-auto" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
