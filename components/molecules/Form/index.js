import { useState, useEffect } from 'react';
import DateRowPicker from 'components/atoms/DatePicker';
import { useForm } from 'react-hook-form';
import Success from 'components/atoms/Modals/Success';
import Error from 'components/atoms/Modals/Error';
import * as emailjs from 'emailjs-com';

export default function Form({ form }) {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: 'Error message is this one. You can try again!',
    },
  });

  const { register, handleSubmit, formState, errors, reset } = useForm();

  const onSubmit = async (data) => {
    await setStatus((state) => ({ ...state, submitting: true }));
    const templateParams = {
      ...data,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_EMAILJS,
        process.env.NEXT_PUBLIC_TEMPLATE_EMAILJS,
        templateParams,
        process.env.NEXT_PUBLIC_USER_EMAILJS
      )
      .then((response) => {
        setStatus((state) => ({
          ...state,
          submitting: false,
          submitted: true,
        }));
        reset();
      })
      .catch((error) => {
        setStatus((state) => ({
          info: { error: true, msg: error },
          submitting: false,
          submitted: false,
        }));
      });
  };

  const buttonTxt = () => {
    if (status.submitting) return 'Submitting...';
    if (status.submitted) return 'Submitted';
    else return form.button;
  };

  const pickerAttributes = {
    arrival: form.arrival_date,
    departure: form.departure_date,
    register,
    errors,
    submitted: status.submitted,
  };

  const cleanError = () =>
    setStatus((state) => ({
      ...state,
      info: {
        error: false,
        msg: '',
      },
    }));

  const cleanSuccess = () =>
    setStatus((state) => ({
      ...state,
      submitted: false,
    }));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-wrap -m-2 lg:w-1/2 md:w-2/3 mx-auto'>
      <div className='p-2 w-1/2'>
        <div className='relative'>
          <label
            for='name'
            className='leading-7 capitalize text-sm text-gray-600'>
            {form.name}
          </label>
          <input
            placeHolder='Full Name'
            ref={register({ required: true })}
            type='text'
            id='name'
            name='name'
            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          {errors.name && (
            <span className='text-red-600'>This field is required</span>
          )}
        </div>
      </div>
      <div className='p-2 w-1/2'>
        <div className='relative'>
          <label
            for='email'
            className='leading-7 capitalize text-sm text-gray-600'>
            {form.email}
          </label>
          <input
            placeholder='Email'
            ref={register({ required: true })}
            type='email'
            id='email'
            name='email'
            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          {errors.email && (
            <span className='text-red-600'>This field is required</span>
          )}
        </div>
      </div>

      <DateRowPicker {...pickerAttributes} />

      <div className='p-2 w-full'>
        <div className='relative'>
          <label
            for='message'
            className='leading-7 capitalize text-sm text-gray-600'>
            {form.message}
          </label>
          <textarea
            placeHolder='Write your message'
            ref={register({ required: true })}
            id='message'
            name='message'
            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
          {errors.message && (
            <span className='text-red-600'>This field is required</span>
          )}
        </div>
      </div>
      {status.submitted === true && (
        <Success
          message={
            'Email submitted correctly! We will reply you as soon as possible. Thanks.'
          }
          close={cleanSuccess}
        />
      )}
      {status.info.error === true && (
        <Error message={status.info.msg} close={cleanError} />
      )}
      <div className='p-2 w-full'>
        <input
          type='submit'
          className='capitalize cursor-pointer flex mx-auto text-white bg-gray-700 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg'
          value={buttonTxt()}
        />
      </div>
    </form>
  );
}
