export default function DateRowPicker({
  arrival,
  departure,
  errors,
  register,
  is_required,
}) {
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
          <input
            {...register("arrival", { required: true })}
            placeHolder={arrival.placeholder}
            type="date"
            id="arrival"
            name="arrival"
            min="2022-04-28"
            max="2022-10-10"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 shadow-none outline-none appearance-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200"
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
          <input
            {...register("departure", { required: true })}
            placeHolder={departure.placeholder}
            type="date"
            id="departure"
            name="departure"
            min="2022-04-28"
            max="2022-10-10"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 shadow-none outline-none appearance-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200"
          />
          {errors.departure && <RenderRequired />}
        </div>
      </div>
    </>
  );
}
