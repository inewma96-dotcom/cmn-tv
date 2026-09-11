import { Radio } from "lucide-react";
import { SiteFooter, SiteHeader } from "../site-pages";
import { LivestreamPlayer } from "./livestream-player";

const youtubeChannelId = "UC6_3owrj4wsO4dJGp2B7Xrg";
const defaultLivestreamEmbedUrl = `https://www.youtube.com/embed/live_stream?channel=${youtubeChannelId}&autoplay=1&mute=1&playsinline=1&rel=0`;
const livestreamEmbedUrl = defaultLivestreamEmbedUrl;
const youtubeLiveUrl = `https://www.youtube.com/channel/${youtubeChannelId}/live`;

const livestreamVideos = [
  {
    title: "PNG Outreach Team conducting an outreach at Boroko 4 Mile.",
    videoId: "Lj24YSWbX4w",
    href: "https://youtu.be/Lj24YSWbX4w?si=cxuAD8y0nMi89nnr",
  },
  {
    title: "Rev. Robert Merrill Brock Memorial Tabernacle Opening",
    videoId: "fjscUDwqEMs",
    href: "https://youtu.be/fjscUDwqEMs?si=oVTf0xiusENiCPci",
  },
  {
    title: "Tambul Lower Kagul Western Highlands",
    videoId: "kzTwix_HGTk",
    href: "https://youtu.be/kzTwix_HGTk?si=AlVUMy13AIxOBBRj",
  },
  {
    title: "Nebilyer Valley Western Highlands Province",
    videoId: "Xcg_ft5oi14",
    href: "https://youtu.be/Xcg_ft5oi14?si=rHz1r0yHUTbud19_",
  },
];

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

          <LivestreamPlayer embedUrl={livestreamEmbedUrl} youtubeLiveUrl={youtubeLiveUrl} />

          <section className="livestream-archive" aria-labelledby="livestream-archive-title">
            <div className="livestream-archive-heading">
              <span>Recent Broadcasts</span>
              <h2 id="livestream-archive-title">LiveStream</h2>
            </div>

            <div className="livestream-video-grid">
              {livestreamVideos.map((video) => (
                <a className="livestream-video-card" href={video.href} target="_blank" rel="noreferrer" key={video.videoId}>
                  <span className="livestream-video-thumb">
                    <img src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} alt="" />
                    <span className="livestream-video-play" aria-hidden="true">Play</span>
                  </span>
                  <span className="livestream-video-meta">
                    <small>CMN TV</small>
                    <strong>{video.title}</strong>
                  </span>
                </a>
              ))}
            </div>
          </section>

        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
