export default function Button({ text, ctaStyle, onClick }) {
  const Arrow = ctaStyle === 'underline' && (
    <svg
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
      className='w-4 h-4 ml-2'
      viewBox='0 0 24 24'>
      <path d='M5 12h14M12 5l7 7-7 7'></path>
    </svg>
  );
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center border-0 py-2 focus:outline-none rounded text-lg ${
        (ctaStyle == 'secondary' &&
          'px-6 text-white bg-gray-400 hover:bg-gray-600 shadow hover:shadow-md') ||
        (ctaStyle == 'primary' &&
          'px-6 text-white bg-green-800 hover:bg-green-900 shadow hover:shadow-md') ||
        (ctaStyle == 'underline' && 'bg-transparent underline')
      }`}>
      {text}
      {Arrow}
    </button>
  );
}
