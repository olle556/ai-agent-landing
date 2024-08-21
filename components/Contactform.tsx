"use client";

import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: 'basic'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
  
    try {
      console.log('Attempting to submit form...'); // Debug log
      const docRef = await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: new Date()
      });
      console.log('Document written with ID: ', docRef.id); // Debug log
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '', interest: 'basic' });
    } catch (err: unknown) {
      console.error('Error adding document: ', err); // Detailed error logging
      if (err instanceof Error) {
        setError(`An error occurred while submitting the form: ${err.message}`);
      } else {
        setError('An unknown error occurred while submitting the form.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        {isSubmitted ? (
          <div className="text-center text-green-600">
            <p>Thank you for your interest! We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            {/* Form fields remain the same */}
            {/* ... */}
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;