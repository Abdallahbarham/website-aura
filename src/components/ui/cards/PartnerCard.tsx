
import Card from './Card';

interface PartnerCardProps {
  logoUrl: string;
  name: string;
}

export const PartnerCard = ({ logoUrl, name }: PartnerCardProps) => {
  return (
    <Card className="bg-white p-4 flex items-center justify-center h-24 shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff]" raised>
      <img src={logoUrl} alt={name} className="max-h-12 max-w-[80%]" />
    </Card>
  );
};

export default PartnerCard;
