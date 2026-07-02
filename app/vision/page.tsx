import { PageHero, PageShell, VisionContent } from "../site-pages";

export default function VisionPage() {
  return (
    <PageShell
      activePath="/vision"
      hero={
        <PageHero
          kicker="Vision, mission, values"
          title="Media with purpose, excellence, and biblical truth."
          copy="CMN TV exists to encourage Christian principles that help transform hearts, homes, and communities."
        />
      }
    >
      <VisionContent />
    </PageShell>
  );
}
