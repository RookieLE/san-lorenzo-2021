import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateRowPicker({ customInput, arrival, departure }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
  return (
    <>
      <div className='p-2 w-1/2'>
        <div className='relative grid'>
          <label
            for='date'
            className='leading-7 capitalize text-sm text-gray-600'>
            {arrival}
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            popperPlacement='top-end'
            popperModifiers={popperCustomStyle}
            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
      </div>
      <div className='p-2 w-1/2'>
        <div className='relative grid'>
          <label
            for='date'
            className='leading-7 capitalize text-sm text-gray-600'>
            {departure}
          </label>
          <DatePicker
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
        </div>
      </div>
    </>
  );
}
