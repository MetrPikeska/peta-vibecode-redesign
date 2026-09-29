import V4 from "@/pages/v4-survey";
import { LanguageProvider } from "@/contexts/language-context";

export default function App() {
  return (
    <LanguageProvider>
      <V4 />
    </LanguageProvider>
  );
}
