import { useState, useEffect } from 'react';
import DateRowPicker from 'components/atoms/DatePicker';
import { useForm } from 'react-hook-form';
import Success from 'components/atoms/Modals/Success';
import Error from 'components/atoms/Modals/Error';
import * as emailjs from 'emailjs-com';

export default function Form({
  form: {
    name,
    arrival,
    departure,
    email,
    message,
    is_required,
    success_msg,
    error_msg,
    button_text,
  },
}) {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
  });

  const { register, handleSubmit, errors, reset } = useForm();

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
          error: true,
          submitting: false,
          submitted: false,
        }));
      });
  };

  const buttonTxt = () => {
    if (status.submitting) return 'Submitting...';
    if (status.submitted) return 'Submitted';
    else return button_text;
  };

  const pickerAttributes = {
    arrival,
    departure,
    register,
    errors,
    is_required,
    submitted: status.submitted,
  };

  const cleanError = () =>
    setStatus((state) => ({
      ...state,
      error: false,
    }));

  const cleanSuccess = () =>
    setStatus((state) => ({
      ...state,
      submitted: false,
    }));

  const RenderRequired = () => (
    <span className='text-red-600'>{is_required}</span>
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-wrap -m-2 lg:w-1/2 md:w-2/3 mx-auto'>
      <div className='p-2 w-1/2'>
        <div className='relative'>
          <label
            for={name.name}
            className='leading-7 capitalize text-sm text-gray-600'>
            {name.name}
          </label>
          <input
            placeHolder={name.placeholder}
            ref={register({ required: true })}
            type='text'
            id={name.name}
            name={name.name}
            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          {errors.name && <RenderRequired />}
        </div>
      </div>
      <div className='p-2 w-1/2'>
        <div className='relative'>
          <label
            for={email.name}
            className='leading-7 capitalize text-sm text-gray-600'>
            {email.name}
          </label>
          <input
            placeholder={email.placeholder}
            ref={register({ required: true })}
            type='email'
            id={email.name}
            name={email.name}
            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          {errors.email && <RenderRequired />}
        </div>
      </div>

      <DateRowPicker {...pickerAttributes} />

      <div className='p-2 w-full'>
        <div className='relative'>
          <label
            for={message.name}
            className='leading-7 capitalize text-sm text-gray-600'>
            {message.name}
          </label>
          <textarea
            placeHolder={message.placeholder}
            ref={register({ required: true })}
            id={message.name}
            name={message.name}
            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
          {errors.message && <RenderRequired />}
        </div>
      </div>
      {status.submitted === true && (
        <Success message={success_msg} close={cleanSuccess} />
      )}
      {status.error === true && (
        <Error message={error_msg} close={cleanError} />
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
