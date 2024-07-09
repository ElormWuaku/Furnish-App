import { Calculator, Settings, Truck } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <Calculator className="text-6xl text-[#C2B931]" />,
    title: "Get A Free Quote",
    description: "Far far away, behind the word mountains, far from the countries Vokalia.",
  },
  {
    id: 2,
    icon: <Settings className="text-6xl text-blue-500" />,
    title: "Production",
    description: "Far far away, behind the word mountains, far from the countries Vokalia.",
  },
  {
    id: 3,
    icon: <Truck className="text-6xl text-[#C2B931]" />,
    title: "Delivery & Assembly",
    description: "Far far away, behind the word mountains, far from the countries Vokalia.",
  },
];

const Production = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-10">How it Works</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className="relative flex items-center justify-center bg-white shadow-lg rounded-full p-6 mb-4">
              {step.icon}
              <span className="absolute top-0 right-0 bg-[#C2B931] text-white rounded-full px-2 py-1 text-xs">{step.id}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Production;
