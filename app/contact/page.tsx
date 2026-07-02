import { ContactContent, PageHero, PageShell } from "../site-pages";

export default function ContactPage() {
  return (
    <PageShell
      activePath="/contact"
      hero={
        <PageHero
          kicker="Contact Us"
          title="Reach the CMN TV team in Boroko, NCD."
          copy="Contact CMN TV for programming, production services, church partnerships, advertising, and ministry sponsorship."
        />
      }
    >
      <ContactContent />
    </PageShell>
  );
}
