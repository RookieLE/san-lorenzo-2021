import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateRowPicker({
  arrival,
  departure,
  errors,
  register,
  is_required,
  submitted,
}) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const popperCustomStyle = {
    offset: {
      enabled: true,
      offset: '5px, 10px',
    },
    preventOverflow: {
      enabled: true,
      escapeWithReference: false,
      boundariesElement: 'viewport',
    },
  };

  const CustomInputArrival = ({ value, onClick }) => (
    <input
      onClick={onClick}
      ref={register({ required: true })}
      value={value}
      placeHolder={arrival.placeholder}
      type='text'
      id={arrival.name}
      name={arrival.name}
      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
    />
  );

  const CustomInputDeparture = ({ value, onClick }) => (
    <input
      onClick={onClick}
      ref={register({ required: true })}
      value={value}
      placeHolder={departure.placeholder}
      type='text'
      id={departure.name}
      name={departure.name}
      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
    />
  );

  const RenderRequired = () => (
    <span className='text-red-600'>{is_required}</span>
  );

  return (
    <>
      <div className='p-2 w-1/2'>
        <div className='relative grid'>
          <label
            for={arrival.name}
            className='leading-7 capitalize text-sm text-gray-600'>
            {arrival.name}
          </label>
          <DatePicker
            customInput={<CustomInputArrival />}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            popperPlacement='top-end'
            popperModifiers={popperCustomStyle}
            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          {errors.arrival && <RenderRequired />}
        </div>
      </div>
      <div className='p-2 w-1/2'>
        <div className='relative grid'>
          <label
            for={departure.name}
            className='leading-7 capitalize text-sm text-gray-600'>
            {departure.name}
          </label>
          <DatePicker
            customInput={<CustomInputDeparture />}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            popperPlacement='top-end'
            popperModifiers={popperCustomStyle}
            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          {errors.departure && <RenderRequired />}
        </div>
      </div>
    </>
  );
}
