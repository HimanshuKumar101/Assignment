import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '../ui/Input'; // Assuming you have a custom Input component
import { Button } from '../ui/Button'; // Assuming you have a custom Button component

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  const [showToaster, setShowToaster] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    setShowToaster(false);

    try {
      const response = await fetch('https://ecosearch-backend-1-lt5j.onrender.com/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email }),
      });

      const responseData = await response.json(); // Parse JSON response
      console.log('Response data:', responseData);

      if (response.ok && responseData.success) {
        setStatus('success');
        setMessage('Thank you!');
        setEmail('');
        setShowToaster(true);
      } else {
        console.error('Server response error:', responseData);
        setStatus('error');
        setMessage(responseData.message || 'Oops! Something went wrong. Please try again.');
        setShowToaster(true);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setStatus('error');
      setMessage('Oops! Something went wrong. Please try again.');
      setShowToaster(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
          disabled={status === 'loading'}
        />
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full sm:w-auto"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </Button>
      </form>
      <AnimatePresence>
        {showToaster && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-black"
              onClick={() => setShowToaster(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#8eb486] text-white p-4 rounded shadow-lg flex items-center justify-between"
            >
              <span>{message}</span>
              <button
                onClick={() => setShowToaster(false)}
                className="ml-4 text-white"
              >
                X
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NewsletterForm;