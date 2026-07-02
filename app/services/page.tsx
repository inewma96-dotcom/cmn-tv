import { PageHero, PageShell, ServicesContent } from "../site-pages";

export default function ServicesPage() {
  return (
    <PageShell
      activePath="/services"
      hero={
        <PageHero
          kicker="Multimedia Services"
          title="Production support for churches, ministries, businesses, and communities."
          copy="CMN TV provides filming, editing, event coverage, advertising, design, and media production support."
        />
      }
    >
      <ServicesContent />
    </PageShell>
  );
}
