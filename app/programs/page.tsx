import { PageHero, PageShell, ProgramsContent } from "../site-pages";

export default function ProgramsPage() {
  return (
    <PageShell
      activePath="/programs"
      hero={
        <PageHero
          kicker="Our Programs"
          title="Christian programming that teaches, inspires, and strengthens faith."
          copy="Explore worship, devotion, testimonies, preaching, youth life, church events, and family-focused programs."
        />
      }
    >
      <ProgramsContent />
    </PageShell>
  );
}
