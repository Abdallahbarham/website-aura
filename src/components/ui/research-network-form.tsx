
import { useState, FormEvent } from 'react';
import { X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ResearchNetworkFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResearchNetworkForm = ({ isOpen, onClose }: ResearchNetworkFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    interests: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Research Network Application submitted:', formData);
      
      // Show success toast
      toast({
        title: "Application submitted successfully!",
        description: "Thank you for your interest in joining our research network.",
      });
      
      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        interests: '',
        experience: ''
      });
      
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto animate-in fade-in zoom-in duration-300">
        <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-bold">Apply to Join Research Network</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name*
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
                Email Address*
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="organization" className="block text-sm font-medium">
                  Organization/Institution*
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white border border-ash-gray focus:outline-none focus:ring-2 focus:ring-light-green transition"
                  placeholder="Your organization"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-medium">
                  Role/Position*
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white border border-ash-gray focus:outline-none focus:ring-2 focus:ring-light-green transition"
                  placeholder="Your role or position"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="interests" className="block text-sm font-medium">
                Research Interests*
              </label>
              <textarea
                id="interests"
                name="interests"
                required
                rows={3}
                value={formData.interests}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white border border-ash-gray focus:outline-none focus:ring-2 focus:ring-light-green transition"
                placeholder="Describe your research interests and areas of focus"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="experience" className="block text-sm font-medium">
                Relevant Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                rows={3}
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white border border-ash-gray focus:outline-none focus:ring-2 focus:ring-light-green transition"
                placeholder="Briefly describe your experience related to our labs' focus areas"
              />
            </div>
            
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 border border-ash-gray rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2 bg-rich-black text-white rounded-lg font-medium hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResearchNetworkForm;
