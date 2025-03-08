
import Card from './Card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl?: string;
}

export const TestimonialCard = ({ quote, author, role, company, imageUrl }: TestimonialCardProps) => {
  return (
    <Card className="bg-white p-6 shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff]" raised>
      <div className="flex flex-col h-full">
        <svg className="h-8 w-8 text-champagne mb-4" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8v6H6v10h10V14h-6c0-2.21 1.79-4 4-4h2V8h-2c-3.3 0-6 2.7-6 6v2H6v-2c0-5.52 4.48-10 10-10h2v2h-2c-4.41 0-8 3.59-8 8zm12-4v6h-4v10h10V10h-6c0-2.21 1.79-4 4-4h2V4h-2c-3.3 0-6 2.7-6 6v2h-4v-2c0-5.52 4.48-10 10-10h2v2h-2c-4.41 0-8 3.59-8 8z" />
        </svg>
        <p className="text-stone-gray mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          {imageUrl && (
            <div className="mr-4">
              <div className="h-10 w-10 rounded-full overflow-hidden shadow-md">
                <img src={imageUrl} alt={author} className="h-full w-full object-cover" />
              </div>
            </div>
          )}
          <div>
            <div className="font-semibold text-rich-black">{author}</div>
            <div className="text-sm text-stone-gray">
              {role}, {company}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
