import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

// FAQ data
const faqData = [
  {
    question: "What is AI-driven roleplay simulation?",
    answer: "AI-driven roleplay simulation utilizes artificial intelligence (AI) technology to create realistic and interactive scenarios. The AI algorithm mimics real-world sales meetings, allowing sales professionals to practice their craft, enhance their skills and maintain sales readiness."
  },
  {
    question: "How does Trovex help your sales team train better?",
    answer: "Trovex provides personalized training experiences through AI simulations tailored to your specific sales scenarios. Our platform offers immediate feedback, performance analytics, and customizable difficulty levels that adapt to each team member's skill level, ensuring continuous improvement across your entire sales organization."
  },
  {
    question: "How does Trovex help track and measure sales team performance?",
    answer: "Trovex offers comprehensive analytics dashboards that track key performance indicators like objection handling, questioning techniques, and closing effectiveness. Managers can review detailed reports, identify skill gaps, and monitor progress over time, making data-driven coaching decisions that directly impact revenue."
  },
  {
    question: "How does Trovex reduce time-to-productivity for new hires?",
    answer: "Trovex accelerates onboarding by providing new hires with safe, realistic environments to practice sales conversations before engaging with actual customers. This increases confidence, reduces training costs, and allows new team members to reach full productivity up to 60% faster than traditional training methods."
  },
  {
    question: "Can you assist us in developing the initial AI simulations?",
    answer: "Absolutely! Our implementation team works closely with your sales leadership to understand your unique selling environment, customer personas, and common objections. We then develop customized AI simulations that reflect your specific sales scenarios, products, and market challenges."
  }
];

// Accordion Item with animation
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full p-4 text-left flex justify-between items-center bg-gray-50"
        onClick={onClick}
      >
        <span className="text-gray-800 font-bold">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-gray-600" size={20} />
        ) : (
          <ChevronDown className="text-gray-600" size={20} />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-white"
          >
            <div className="p-4 text-gray-700">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main FAQ Component
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Got Questions?</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">We've Got Answers!</h2>
        <p className="text-gray-600">
          Here Are the Most Frequently Asked Questions,
          <br />
          If you have more queries, feel free to{" "}
          <a href="#" className="text-purple-600 hover:text-purple-800 underline">
            book a demo
          </a>
          !
        </p>
      </div>

      <div className="mb-12">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>

      <div className="text-center">
        <p className="inline block px-4 py-2 text-gray-600 bg-white border border-purple-600 rounded-full mb-4 shadow-lg">
          Didn't find what you are looking for?{" "}
          <span className="text-purple-600 underline font-medium">Book a Demo</span>
        </p>
      </div>
    </motion.div>
  );
}
