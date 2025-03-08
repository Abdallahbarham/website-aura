
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordion = () => {
  const faqItems = [
    {
      question: "How do I partner with FAEI?",
      answer: "Visit our 'Contact us' page. There, you can fill out a simple form to tell us your objectives (or use the dedicated contact email) and we'll get back to you using the information provided."
    },
    {
      question: "What kind of sectors does FAEI serve?",
      answer: "FAEI serves professional sectors across various industries, including both private and public sectors. Our industry's unique resources are designed for each functional area."
    },
    {
      question: "Are FAEI frameworks industry-specific?",
      answer: "No, FAEI's frameworks and resources are designed to be applied across various sectors, but they can be customized for specific industries. Thus, the underlying principles are universal and can be adapted to any business context."
    },
    {
      question: "How can I stay updated on FAEI's latest offerings?",
      answer: "To stay updated, you can sign up for our newsletter and follow our social media channels. Additionally, you can subscribe to our newsletter for regular updates on new offerings and industry insights."
    },
    {
      question: "What is the process for earning certification?",
      answer: "To earn a certification from FAEI, visit our certification page. From there, you can explore our range of certification and enroll in the course that interests you. Once a learner has successfully completed the course, they'll receive their certification."
    }
  ];

  return (
    <Accordion type="single" collapsible className="max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="mb-4 bg-white rounded-xl overflow-hidden shadow-neumorph-sm">
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-off-white">
            <span className="text-left font-medium">{item.question}</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-stone-gray">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
