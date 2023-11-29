// pages/about.tsx

import React from 'react';
import Contact from '@/components/contact';
const ContactPage: React.FC = () => {
  return (
    <div className="bg-primary-background text-foreground">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-8">
          Please fill in the form below and we will get back to you.
        </p>
       
        < Contact />
      </div>
    </div>
  );
};

export default ContactPage;
