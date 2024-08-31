
const How = () => {
  const steps = [
    { number: 1, text: 'Call for Applications' },
    { number: 2, text: 'Selection Process' },
    { number: 3, text: 'Training' },
    { number: 4, text: 'Outsourcing' },
  ];

  return (
    <section className="font-Montserrat max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-medium text-center mb-2">How we get top tech talents</h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        We undergo a 4-stage process to get the most suitable talents in different fields
      </p>
      
      <div className="flex flex-col gap-4 items-center mb-12">
        {steps.map((step) => (
          <div key={step.number} className="flex items-start mb-4 w-full max-w-xs">
            <div className="w-10 h-10 rounded-lg border-2 border-slate-800 flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text- text-gray-500 font-semibold">{step.number}</span>
            </div>
            <span className="text-lg font-bold text-gray-800">{step.text}</span>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg p-24 text-white">
        <h3 className="text-2xl italic font-bold text-center mb-6">
          Innovate faster with the right talent
        </h3>
        <div className="flex justify-center">
          <button className="bg-slate-800 text-white font-bold py-4 px-6 rounded-lg flex items-center transition-colors duration-1000 ease-in-out hover:bg-pink-500 delay-100">
            Start Here
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default How;
