import { useEffect } from 'react';

const listenScroll = () => {
  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var scrollBtn = document.getElementById('scrollBtn');

  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleBtn(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleBtn = function (direction, curScroll) {
    if (direction === 2 && curScroll > 52) {
      scrollBtn.classList.add('hidden');
      scrollBtn.classList.remove('flex');
      prevDirection = direction;
    } else if (direction === 1) {
      scrollBtn.classList.remove('hidden');
      scrollBtn.classList.add('flex');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);
};

export default function ScrollTopBtn() {
  useEffect(() => {
    listenScroll();
  }, []);
  const handleScroll = () => {
    window?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      id='scrollBtn'
      onClick={handleScroll}
      className='rounded-md bg-gray-700 text-gray-50 fixed place-content-center w-10 h-10 bottom-5 right-5 z-50 hidden cursor-pointer'>
      <svg
        className='w-2/3'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 15l7-7 7 7'
        />
      </svg>
    </div>
  );
}
