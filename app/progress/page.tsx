import { PageHero, PageShell, ProgressContent } from "../site-pages";

export default function ProgressPage() {
  return (
    <PageShell
      activePath="/progress"
      hero={
        <PageHero
          kicker="Our Progress"
          title="Built by committed people, production tools, and ministry partnerships."
          copy="See the production work, equipment, team capability, and ministry portfolio behind CMN TV."
        />
      }
    >
      <ProgressContent />
    </PageShell>
  );
}
