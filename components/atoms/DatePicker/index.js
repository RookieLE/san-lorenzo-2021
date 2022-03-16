import { useState, useEffect, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateRowPicker({
  arrival,
  departure,
  errors,
  register,
  is_required,
  submitted,
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const popperCustomStyle = {
    offset: {
      enabled: true,
      offset: "5px, 10px",
    },
    preventOverflow: {
      enabled: true,
      escapeWithReference: false,
      boundariesElement: "viewport",
    },
  };

  const CustomInputArrival = forwardRef(({ value, onClick }, ref) => (
    <input
      ref={ref}
      onClick={onClick}
      {...register("arrival", { required: true })}
      value={value}
      placeHolder={arrival.placeholder}
      type="text"
      id="arrival"
      name="arrival"
      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded shadow-none outline-none appearance-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200"
    />
  ));

  const CustomInputDeparture = forwardRef(({ value, onClick }, ref) => (
    <input
      onClick={onClick}
      ref={ref}
      {...register("departure", { required: true })}
      value={value}
      placeHolder={departure.placeholder}
      type="text"
      id="departure"
      name="departure"
      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded shadow-none outline-none appearance-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200"
    />
  ));

  const RenderRequired = () => (
    <span className="text-red-600">{is_required}</span>
  );

  return (
    <>
      <div className="w-1/2 p-2">
        <div className="relative grid">
          <label
            for="arrival"
            className="text-sm leading-7 text-gray-600 capitalize"
          >
            {arrival.name}
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            popperPlacement="top-end"
            popperModifiers={popperCustomStyle}
            customInput={<CustomInputArrival />}
            dateFormat="dd/MM/yyyy"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200"
          />
          {errors.arrival && <RenderRequired />}
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="relative grid">
          <label
            for="departure"
            className="text-sm leading-7 text-gray-600 capitalize"
          >
            {departure.name}
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            popperPlacement="top-end"
            popperModifiers={popperCustomStyle}
            customInput={<CustomInputDeparture />}
            dateFormat="dd/MM/yyyy"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200"
          />
          {errors.departure && <RenderRequired />}
        </div>
      </div>
    </>
  );
}
