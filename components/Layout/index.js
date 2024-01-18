import ScrollTopBtn from "components/molecules/ScrollTopBtn";

import useLocale from "hooks/useLocale";
export default function Layout({ children }) {
  const { t } = useLocale();

  const { title, text } = t.announcement;
  return (
    <main className="grid">
      <div class="px-4 pt-4 pb-4 lg:pb-0">
        <div class="mx-auto">
          <div class="px-2 py-4 rounded-2xl max-w-xl mx-auto bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] relative from-gray-800 via-gray-900 to-black">
            <div class="flex w-full h-full items-center justify-center text-center">

              <div class="grid place-content-center place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white mb-2 absolute top-3 right-3 rotate-12">
                  <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
                </svg>


                <div class="text-white text-2xl font-semibold">
                  {title}
                </div>
                <span class="text-sm leading-5 text-gray-300 font-medium px-2 mt-1">
                  {text}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
      <ScrollTopBtn />
    </main>
  );
}
