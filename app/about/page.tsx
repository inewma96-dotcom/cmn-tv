import { AboutContent, PageHero, PageShell } from "../site-pages";

export default function AboutPage() {
  return (
    <PageShell
      activePath="/about"
      hero={
        <PageHero
          kicker="About CMN TV"
          title="A Christian broadcasting and multimedia ministry based in Port Moresby."
          copy="Learn the story, purpose, and foundation of PNG Christian Media Network TV."
        />
      }
    >
      <AboutContent />
    </PageShell>
  );
}
