import ScrollTopBtn from "components/molecules/ScrollTopBtn";

import useLocale from "hooks/useLocale";
export default function Layout({ children }) {
  const { t } = useLocale();

  const { title, text } = t.announcement;
  return (
    <main className="grid">
      <div class="px-4 pt-4">
        <div class="mx-auto">
          <div class="p-4 bg-blue-100">
            <div class="flex w-full h-full items-center justify-center text-center">
              <div class="flex pr-6">
                <div>
                  <h3 class="text-gray-900  font-semibold text-xl">
                    {title}
                  </h3>
                  <span class="text-sm leading-5 text-gray-900 font-medium">
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
