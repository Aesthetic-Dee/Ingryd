import React, { useState } from 'react';

const Subscribe: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitted:', { name, email });
    // Reset form fields
    setName('');
    setEmail('');
  };

  return (
    <div className="font-Montserrat bg-pink-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-slate-800 mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-center text-slate-800 mb-8">
          Get timely and latest updates on growth strategy & opportunities around the world - for techies and companies.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-center p-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-slate-800"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-center p-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-slate-800"
            required
          />
          <button
            type="submit"
            className="w-full bg-fuchsia-500 text-white py-3 px-6 rounded-md hover:bg-slate-800 transition-colors duration-1000"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;