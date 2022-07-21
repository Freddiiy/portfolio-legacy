import { useRouter } from "next/router";

export const useLocale = (input: any) => {
    const { locale } = useRouter();
    let [localeText] = input.filter((l: any) => l.locale === locale);
    return localeText;
}