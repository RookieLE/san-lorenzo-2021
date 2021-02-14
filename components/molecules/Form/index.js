import { useState } from 'react';
import axios from 'axios';

export default function Form({ form }) {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/[your-formspree-endpoint]',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <form
      onSubmit={handleOnSubmit}
      class='flex flex-wrap -m-2 lg:w-1/2 md:w-2/3 mx-auto'>
      <div class='p-2 w-1/2'>
        <div class='relative'>
          <label for='name' class='leading-7 capitalize text-sm text-gray-600'>
            {form.name}
          </label>
          <input
            onChange={handleOnChange}
            type='text'
            id='name'
            name='name'
            class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
      </div>
      <div class='p-2 w-1/2'>
        <div class='relative'>
          <label for='email' class='leading-7 capitalize text-sm text-gray-600'>
            {form.email}
          </label>
          <input
            onChange={handleOnChange}
            type='email'
            id='email'
            name='email'
            class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
      </div>
      <div class='p-2 w-1/2'>
        <div class='relative'>
          <label for='date' class='leading-7 capitalize text-sm text-gray-600'>
            {form.arrival_date}
          </label>
          <input
            onChange={handleOnChange}
            type='date'
            id='date'
            name='date'
            class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
      </div>
      <div class='p-2 w-1/2'>
        <div class='relative'>
          <label for='date' class='leading-7 capitalize text-sm text-gray-600'>
            {form.departure_date}
          </label>
          <input
            onChange={handleOnChange}
            type='date'
            id='date'
            name='date'
            class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
      </div>
      <div class='p-2 w-full'>
        <div class='relative'>
          <label
            for='message'
            class='leading-7 capitalize text-sm text-gray-600'>
            {form.message}
          </label>
          <textarea
            onChange={handleOnChange}
            id='message'
            name='message'
            class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
        </div>
      </div>
      <div class='p-2 w-full'>
        <button
          class='capitalize flex mx-auto text-white bg-gray-300 border-0 py-2 px-8 focus:outline-none hover:bg-green-900 rounded text-lg'
          disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? form.button
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </div>
    </form>
  );
}
