import V3 from "@/pages/v3-shadcn";
import { LanguageProvider } from "@/contexts/language-context";

export default function App() {
  return (
    <LanguageProvider>
      <V3 />
    </LanguageProvider>
  );
}
