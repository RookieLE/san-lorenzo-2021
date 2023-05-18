import ScrollTopBtn from "components/molecules/ScrollTopBtn";

import useLocale from "hooks/useLocale";
export default function Layout({ children }) {
  const { t } = useLocale();

  const { title, text } = t.announcement;
  return (
    <main className="grid">
      <div class="px-4 pt-4 pb-4 lg:pb-0">
        <div class="mx-auto">
          <div class="px-2 py-4 bg-blue-100 rounded-md">
            <div class="flex w-full h-full items-center justify-center text-center">
              <div class="flex">
                <div>
                  <div class="text-sky-900 text-sm font-semibold uppercase">
                    {title}
                  </div>
                  <span class="text-sm leading-5 text-gray-700 font-medium">
                    {text}
                  </span>
                </div>
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
