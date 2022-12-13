import { useState } from "react";
import useLocale from "hooks/useLocale";
import DateRowPicker from "components/atoms/DatePicker";
import { useForm } from "react-hook-form";
import Success from "components/atoms/Modals/Success";
import Error from "components/atoms/Modals/Error";

import * as emailjs from "emailjs-com";

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
  const { locale } = useLocale();
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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
    const submittingTxt =
      (locale === "it" && "Inviando...") ||
      (locale === "en" && "Submitting...");
    const submittedTxt =
      (locale === "it" && "Inviato") || (locale === "en" && "Submitted");
    if (status.submitting) return submittingTxt;
    if (status.submitted) return submittedTxt;
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
    <span className="text-red-600">{is_required}</span>
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap mx-auto -m-2 lg:w-1/2 md:w-2/3"
    >
      <div className="w-full p-2 sm:w-1/2">
        <div className="relative">
          <label
            for="name"
            className="text-sm leading-7 text-gray-600 capitalize"
          >
            {name.name}
          </label>
          <input
            placeHolder={name.placeholder}
            {...register("name", { required: true })}
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 shadow-none outline-none appearance-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200"
          />
          {errors.name && <RenderRequired />}
        </div>
      </div>
      <div className="w-full p-2 sm:w-1/2">
        <div className="relative">
          <label
            for="email"
            className="text-sm leading-7 text-gray-600 capitalize"
          >
            {email.name}
          </label>
          <input
            placeholder={email.placeholder}
            {...register("email", { required: true })}
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 shadow-none outline-none appearance-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200"
          />
          {errors.email && <RenderRequired />}
        </div>
      </div>

      {/* <DateRowPicker {...pickerAttributes} /> */}

      <div className="w-full p-2">
        <div className="relative">
          <label
            for="message"
            className="text-sm leading-7 text-gray-600 capitalize"
          >
            {message.name}
          </label>
          <textarea
            placeHolder={message.placeholder}
            {...register("message", { required: true })}
            id="message"
            name="message"
            className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 shadow-none outline-none appearance-none resize-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200"
          ></textarea>
          {errors.message && <RenderRequired />}
        </div>
      </div>
      {status.submitted === true && (
        <Success message={success_msg} close={cleanSuccess} />
      )}
      {status.error === true && (
        <Error message={error_msg} close={cleanError} />
      )}
      <div className="w-full p-2">
        <input
          type="submit"
          className={`flex px-8 py-2 mx-auto text-lg text-white capitalize border-0 cursor-pointer focus:outline-none ${
            (status.submitted && "bg-green-900") ||
            "hover:bg-gray-900 bg-gray-700"
          }`}
          value={buttonTxt()}
        />
      </div>
    </form>
  );
}
