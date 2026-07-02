import { PageHero, PageShell, SupportContent } from "../site-pages";

export default function SupportPage() {
  return (
    <PageShell
      activePath="/support"
      hero={
        <PageHero
          kicker="How You Can Help"
          title="Partner with CMN TV today."
          copy="Your partnership helps CMN TV produce more Christian content, reach more homes, and serve communities across Papua New Guinea."
        />
      }
    >
      <SupportContent />
    </PageShell>
  );
}
