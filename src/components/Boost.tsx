import React from "react";

const Boost: React.FC = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center font-Montserrat">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            <span className="text-[#0f0629]">Boost</span>{' '}
            <span className="text-gray-600">Your </span>
            <span className="text-[#0f0629]">Tech Journey</span>
          </h1>
          <p className="text-lg md:text-lg text-gray-700 max-w-4xl mx-auto">
            Welcome to INGRYD Academy, your premier tech talent acquisition and recruitment partner in Africa. We 
            bridge the gap between mid-level tech professionals and the evolving needs of today's dynamic workforce.
          </p>
        </div>
      </section>
    );
  };

export default Boost;
