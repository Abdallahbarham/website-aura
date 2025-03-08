
import { useState } from 'react';
import SolutionDialog from '../components/ui/solution-dialog';

// Import refactored components
import HeroSection from '../components/solutions/HeroSection';
import IntroSection from '../components/solutions/IntroSection';
import SolutionsSection from '../components/solutions/SolutionsSection';
import SpotlightSection from '../components/solutions/SpotlightSection';
import FeaturedSolutionSection from '../components/solutions/FeaturedSolutionSection';

// Import solution data
import { 
  Solution,
  professionalDevelopmentSolutions, 
  methodologiesSolutions, 
  communitySolutions 
} from '../components/solutions/SolutionsData';

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openSolutionDialog = (solution: Solution) => {
    setSelectedSolution(solution);
    setIsDialogOpen(true);
  };

  const closeSolutionDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container-custom">
          {/* Hero Banner */}
          <HeroSection />
          
          {/* Introduction */}
          <IntroSection />
          
          {/* Professional Development Section */}
          <SolutionsSection 
            title="Professional Development" 
            solutions={professionalDevelopmentSolutions} 
            onSolutionClick={openSolutionDialog}
          />
          
          {/* Methodologies & Tools Section */}
          <SolutionsSection 
            title="Methodologies & Tools" 
            solutions={methodologiesSolutions} 
            onSolutionClick={openSolutionDialog}
          />
          
          {/* Community & Insights Section */}
          <SolutionsSection 
            title="Community & Insights" 
            solutions={communitySolutions} 
            onSolutionClick={openSolutionDialog}
          />
          
          {/* Spotlight Section */}
          <SpotlightSection />
          
          {/* Featured Solution */}
          <FeaturedSolutionSection />
        </div>
      </section>
      
      {/* Solution Dialog */}
      {selectedSolution && (
        <SolutionDialog 
          solution={selectedSolution} 
          isOpen={isDialogOpen} 
          onClose={closeSolutionDialog} 
        />
      )}
    </>
  );
};

export default Solutions;
