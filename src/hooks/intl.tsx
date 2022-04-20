import {
  createContext,
  useCallback,
  useMemo,
  useState,
  ReactNode,
  useContext,
} from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import { ptBR, enUS } from "../intl/";

interface IntlContextProps {
  locale: string;
  setLocale: (locale: "pt-BR" | "en-US") => void;
}

interface IntlProviderProps {
  children: ReactNode;
}

export const IntlContext = createContext<IntlContextProps>(
  {} as IntlContextProps
);

const IntlProvider = ({ children }: IntlProviderProps) => {
  const [languageValue, setLanguageValue] = useState<"pt-BR" | "en-US">(() => {
    const storagedValue = localStorage.getItem("@MYPORTFOLIO:locale");

    return storagedValue ? JSON.parse(storagedValue) : "pt-BR";
  });

  const setLocale = useCallback(
    (locale: "pt-BR" | "en-US") => {
      setLanguageValue(locale);
    },
    [setLanguageValue]
  );

  const localeMessages = languageValue === "en-US" ? enUS : ptBR;

  const exports: IntlContextProps = useMemo(
    () => ({
      locale: languageValue,
      setLocale,
    }),
    [setLocale, languageValue]
  );

  return (
    <IntlContext.Provider value={exports}>
      <ReactIntlProvider locale={languageValue} messages={localeMessages}>
        {children}
      </ReactIntlProvider>
    </IntlContext.Provider>
  );
};

const useIntl = () => {
  return useContext(IntlContext);
};

export { IntlProvider, useIntl };
