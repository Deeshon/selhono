import { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import useFetchTranslations from "../hooks/useFetchTranslations";


type ReactIntlProviderProps = {
    defaultLocale?: string;
}
export default function ReactIntlProvider({ children, defaultLocale }: PropsWithChildren<ReactIntlProviderProps>) {

    const {translationList} = useFetchTranslations('en')
    console.log('yeee')

    return (
        <>
            <IntlProvider messages={{'car': 'car'}} defaultLocale={defaultLocale} locale='en' >
                <>
                    { children }
                </>
            </IntlProvider>
        </>
    )
}