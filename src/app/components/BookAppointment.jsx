'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ContactButton from './ContactButton'; // Import the reusable button

function BookAppointment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [serverMessage, setServerMessage] = useState('');

  const onSubmit = async (data) => {
    setServerMessage(''); // Reset message
    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        setServerMessage('Form submitted successfully.');
        reset(); // Reset the form after successful submission
      } else {
        setServerMessage('Failed to submit form. Try again.');
      }
    } catch (error) {
      setServerMessage('Error submitting form. Please try again.');
    }
  };

  return (
    <section id="contact" className="mt-16 p-6 max-w-2xl mx-auto">
      <h1 className="text-center text-4xl font-semibold">Book An Appointment</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8" method='POST'>
        {/* Full Name */}
        <div>
          <label className="block text-lg font-medium">Full Name</label>
          <input
            type="text"
            className="w-full border p-2"
            {...register('fullName', { required: 'Full name is required' })}
            placeholder="Your full name"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-medium">Email</label>
          <input
            type="email"
            className="w-full border p-2"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
            placeholder="Your email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        {/* Mobile Number */}
<div>
  <label className="block text-lg font-medium">Mobile Number</label>
  <input
    type="tel"
    inputMode="numeric" // Ensures numeric keyboard on mobile devices
    className="w-full border p-2"
    maxLength={10} // Limits the maximum length to 10 characters
    {...register('mobileNo', {
      required: 'Mobile number is required',
      validate: (value) => {
        // Custom validation function
        const re = /^[0-9]{10}$/; // Only allows exactly 10 digits
        return re.test(value) || 'Invalid mobile number';
      },
    })}
    placeholder="Your mobile number"
    onChange={(e) => {
      const value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      e.target.value = value; // Update the input value
      register('mobileNo').onChange(e); // Call the register's onChange
    }}
  />
  {errors.mobileNo && <p className="text-red-500">{errors.mobileNo.message}</p>}
</div>


        {/* Patient's Message */}
        <div>
          <label className="block text-lg font-medium">Patient's Message</label>
          <textarea
            className="w-full border p-2"
            {...register('message', { required: 'Message is required' })}
            placeholder="Your message"
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <ContactButton text="Submit" type="submit" />
        </div>

        {/* Server Response */}
        {serverMessage && <p className="mt-4 text-center">{serverMessage}</p>}
      </form>
    </section>
  );
}

export default BookAppointment;
