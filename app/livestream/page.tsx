import { ArrowRight, HeartHandshake, Radio, Satellite } from "lucide-react";
import { SiteFooter, SiteHeader } from "../site-pages";

const livestreamEmbedUrl = process.env.NEXT_PUBLIC_CMN_LIVESTREAM_EMBED_URL;

export default function LivestreamPage() {
  return (
    <main>
      <SiteHeader activePath="/livestream" />
      <section className="livestream-page">
        <div className="container">
          <h1 className="livestream-player-title">
            PNG CMN TV LiveStream
            <span className="live-nav-icon" aria-hidden="true">
              <Radio />
              <span className="live-wave"><i /><i /><i /></span>
            </span>
          </h1>

          <div className="livestream-player">
            {livestreamEmbedUrl ? (
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                src={livestreamEmbedUrl}
                title="CMN TV livestream"
              />
            ) : (
              <div className="livestream-unavailable">
                <Satellite aria-hidden="true" />
                <h2>Livestream connection is being prepared</h2>
              </div>
            )}
          </div>

          <div className="livestream-donate">
            <HeartHandshake aria-hidden="true" />
            <div>
              <h2>Help keep CMN TV broadcasting every day.</h2>
              <p>
                Your donation supports the ministry&apos;s day-to-day operations, including program
                production, internet and broadcast costs, equipment maintenance, transport, studio
                needs, and the team working to share Christian content across Papua New Guinea.
              </p>
            </div>
            <a className="primary-button" href="/donate">
              Donate now <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
