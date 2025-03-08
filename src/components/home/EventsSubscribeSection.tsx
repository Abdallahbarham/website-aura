
import { Card } from '../ui/cards';

const EventsSubscribeSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
      <Card 
        raised 
        className="bg-rich-black text-white p-8 border-0"
        hover
      >
        <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
        <div className="mb-4">
          <span className="text-champagne font-semibold">JUNE 15, 2023 (Wednesday)</span>
          <h4 className="text-xl font-semibold">Fiscal Insight</h4>
          <p className="text-white/80">Online Webinar 10:00 AM - 12:00 PM (Central)</p>
        </div>
        <button className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg font-medium transition-all hover:bg-white/20">
          Register Now
        </button>
      </Card>
      
      <Card 
        className="bg-off-white p-8"
        raised
        hover
        intensity="medium" 
      >
        <h3 className="text-2xl font-bold mb-4">Be the first to know</h3>
        <p className="text-stone-gray mb-6">
          Subscribe to our newsletter to stay updated on the latest FAEI Journal articles, insights, research, and upcoming events.
        </p>
        <div className="flex">
          <input type="email" placeholder="Your email address" className="input-neuro flex-grow rounded-r-none" />
          <button className="bg-rich-black text-white px-4 py-2 rounded-r-lg font-medium transition-all hover:bg-opacity-90">
            Subscribe
          </button>
        </div>
      </Card>
    </div>
  );
};

export default EventsSubscribeSection;
