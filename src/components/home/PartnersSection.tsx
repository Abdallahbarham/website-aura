import { PartnerCard } from '../ui/cards';

const PartnersSection = () => {
  const partnerLogos = [{
    name: "PayPal",
    logoUrl: "https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-0.png"
  }, {
    name: "Airbnb",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
  }, {
    name: "Forbes",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/2560px-Forbes_logo.svg.png"
  }, {
    name: "Elastic",
    logoUrl: "https://seeklogo.com/images/E/elastic-logo-913B46011E-seeklogo.com.png"
  }, {
    name: "Docker",
    logoUrl: "https://www.docker.com/wp-content/uploads/2022/03/Docker-Logo-Blue-640x164.png"
  }];

  return (
    <div className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
        <p className="text-stone-gray">
          We collaborate with leading organizations to deliver exceptional results and drive innovation in the industry.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {partnerLogos.map((partner, index) => <PartnerCard key={index} logoUrl={partner.logoUrl} name={partner.name} />)}
      </div>
    </div>
  );
};

export default PartnersSection;
