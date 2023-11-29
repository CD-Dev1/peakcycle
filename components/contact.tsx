'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
  phone: string;
  bikemodel: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isSubmitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  async function onSubmit(data: FormData) {
    try {
      await sendEmail(data);
      setSubmitSuccess(true);
      // Reset the form fields after successful submission
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitSuccess(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
    
        <input
          type='text'
          placeholder='Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
      
        <input
          type='email'
          placeholder='Email'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: false })}
        />
      </div>
      <div className='mb-5'>
       
        <input
          type='phone'
          placeholder='Phone Number'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('phone', { required: false })}
        />
      </div>
      <div className='mb-5'>
       
        <input
          type='bikemodel'
          placeholder='Bike Model'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('bikemodel', { required: false })}
        />
      </div>
      <div className='mb-5'>
        
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
      {isSubmitSuccess !== null && (
        <div className={isSubmitSuccess ? 'text-green-500' : 'text-red-500'}>
          {isSubmitSuccess
            ? 'Thank you for your message we will get back to you soon'
            : 'Error sending message. Please try again later.'}
        </div>
      )}
    </form>
  );
};

export default Contact;