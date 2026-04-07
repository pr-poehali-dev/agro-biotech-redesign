import Navbar from "@/components/Navbar";
import HeroSections from "@/components/HeroSections";
import ContentSections from "@/components/ContentSections";
import ContactsFooter from "@/components/ContactsFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSections />
      <ContentSections />
      <ContactsFooter />
    </div>
  );
}
