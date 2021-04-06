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
      {...register(arrival.name, { required: true })}
      value={value}
      placeHolder={arrival.placeholder}
      type='text'
      id={arrival.name}
      name={arrival.name}
      className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200'
    />
  );

  const CustomInputDeparture = ({ value, onClick }) => (
    <input
      onClick={onClick}
      {...register(departure.name, { required: true })}
      value={value}
      placeHolder={departure.placeholder}
      type='text'
      id={departure.name}
      name={departure.name}
      className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200'
    />
  );

  const RenderRequired = () => (
    <span className='text-red-600'>{is_required}</span>
  );

  return (
    <>
      <div className='w-1/2 p-2'>
        <div className='relative grid'>
          <label
            for={arrival.name}
            className='text-sm leading-7 text-gray-600 capitalize'>
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
            className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200'
          />
          {errors.arrival && <RenderRequired />}
        </div>
      </div>
      <div className='w-1/2 p-2'>
        <div className='relative grid'>
          <label
            for={departure.name}
            className='text-sm leading-7 text-gray-600 capitalize'>
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
            className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200'
          />
          {errors.departure && <RenderRequired />}
        </div>
      </div>
    </>
  );
}
