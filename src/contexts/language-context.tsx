import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Lang = "cs" | "en";

const STORAGE_KEY = "lang";

/**
 * Reads the stored language defensively. Storage is unavailable during
 * build-time prerendering and throws outright in some privacy modes, and the
 * stored value is user-writable, so anything but a known language is ignored.
 */
function readStoredLang(): Lang {
  if (typeof window === "undefined") return "cs";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "cs" ? stored : "cs";
  } catch {
    return "cs";
  }
}

function persistLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage denied — the language still applies for this visit.
  }
}

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "cs",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStoredLang);

  // Keep the document language in sync so screen readers pronounce the page
  // with the right voice after a switch.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => {
    const next: Lang = lang === "cs" ? "en" : "cs";
    setLang(next);
    persistLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
