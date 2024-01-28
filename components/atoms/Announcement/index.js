

import useLocale from "hooks/useLocale";
export default function Announcement() {
    const { t } = useLocale();

    const { title, text } = t.announcement;
    return (
        <div class="">
            <div class="mx-auto">
                <div class="px-2 py-4 rounded-2xl max-w-xl mx-auto bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] relative bg-sky-900">
                    <div class="flex w-full h-full items-start justify-center text-left">

                        <div class="grid place-content-center place-items-start">

                            <div class="text-white text-xs font-semibold text-left px-2 leading-5">
                                <span class="uppercase">{title}.</span>

                                <span class="text-xs text-gray-200 font-medium ml-1">
                                    {text}
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
