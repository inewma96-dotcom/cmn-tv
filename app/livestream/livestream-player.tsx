"use client";

import { ExternalLink, Play, Radio, RefreshCw } from "lucide-react";
import { useState } from "react";

type LivestreamPlayerProps = {
  embedUrl: string;
  youtubeLiveUrl: string;
};

export function LivestreamPlayer({ embedUrl, youtubeLiveUrl }: LivestreamPlayerProps) {
  const [showPlayer, setShowPlayer] = useState(false);

  if (showPlayer) {
    return (
      <>
        <div className="livestream-player">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            src={embedUrl}
            title="CMN TV livestream"
          />
        </div>

        <div className="livestream-player-help">
          <div>
            <strong>Waiting for the YouTube live signal</strong>
            <span>If the player stays blank, confirm the YouTube live event is public and receiving video.</span>
          </div>
          <div className="livestream-player-actions">
            <button type="button" onClick={() => setShowPlayer(false)}>
              <RefreshCw size={18} /> Show cover
            </button>
            <a href={youtubeLiveUrl} target="_blank" rel="noreferrer">
              <ExternalLink size={18} /> Watch on YouTube
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="livestream-cover">
      <img className="livestream-cover-bg" src="/image/LiveStream.png" alt="" aria-hidden="true" />
      <div className="livestream-cover-shade" />
      <div className="livestream-cover-content">
        <span className="livestream-cover-kicker">
          <Radio size={18} /> CMN TV Live Broadcast
        </span>
        <h2>Livestream will appear here.</h2>
        <p>
          When PNG Christian Media Network TV goes live, the broadcast will play in this media
          player. If you are waiting for a live program, refresh or open the live player.
        </p>
        <div className="livestream-cover-actions">
          <button type="button" onClick={() => setShowPlayer(true)}>
            <Play size={20} /> Open live player
          </button>
          <a href={youtubeLiveUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={18} /> Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
