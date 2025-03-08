
import { useState, FormEvent } from 'react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    howHeard: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      // Show success toast
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        howHeard: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white border border-ash-gray focus:outline-none focus:ring-2 focus:ring-light-green transition"
          placeholder="Your full name"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white border border-ash-gray focus:outline-none focus:ring-2 focus:ring-light-green transition"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white border border-ash-gray focus:outline-none focus:ring-2 focus:ring-light-green transition"
          placeholder="+1 (555) 123-4567"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-medium">
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white border border-ash-gray focus:outline-none focus:ring-2 focus:ring-light-green transition"
          placeholder="Your company"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="position" className="block text-sm font-medium">
          Position/Title
        </label>
        <input
          id="position"
          name="position"
          type="text"
          value={formData.position}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white border border-ash-gray focus:outline-none focus:ring-2 focus:ring-light-green transition"
          placeholder="Your job title"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="howHeard" className="block text-sm font-medium">
          How did you hear about us?
        </label>
        <select
          id="howHeard"
          name="howHeard"
          value={formData.howHeard}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white border border-ash-gray focus:outline-none focus:ring-2 focus:ring-light-green transition"
        >
          <option value="" disabled>Select an option</option>
          <option value="search">Search Engine</option>
          <option value="social">Social Media</option>
          <option value="referral">Referral</option>
          <option value="conference">Conference/Event</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white border border-ash-gray focus:outline-none focus:ring-2 focus:ring-light-green transition"
          placeholder="Tell us how we can help you..."
        />
      </div>
      
      <div className="md:col-span-2 flex justify-center mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-rich-black text-white font-medium px-8 py-3 rounded-lg transition-all hover:bg-opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
