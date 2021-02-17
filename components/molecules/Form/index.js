import { useState, useEffect } from 'react';
import DateRowPicker from 'components/atoms/DatePicker';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Form({ form }) {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const { register, handleSubmit, formState, errors, reset } = useForm();

  const onSubmit = (data) => {
    setStatus((state) => ({ ...state, submitting: true }));
    console.log(data);
    setStatus((state) => ({ ...state, submitting: false, submitted: true }));
    reset();
  };

  const handleOnSubmit = (e) => {
    const token = 'kEKVpXAIQaefRLV5vrSmJg';
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    /*  axios
      .post(
        'https://api.sendgrid.com/v3/mail/send',
        { data: inputs },
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      )
      .then((res) => {
        console.log('Thank you, your message has been submitted.');
      })
      .catch((error) => {
        console.error(error.response.data.error);
      }); */
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
      {status.info.error === true && <div>ERROR</div>}
      <div className='p-2 w-full'>
        <input
          type='submit'
          className='capitalize cursor-pointer flex mx-auto text-white bg-green-800 border-0 py-2 px-8 focus:outline-none hover:bg-green-900 rounded text-lg'
          value={buttonTxt()}
        />
      </div>
    </form>
  );
}
