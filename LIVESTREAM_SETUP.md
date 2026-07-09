# CMN TV Livestream Setup

The website livestream page is available at `/livestream`.

## YouTube Live

1. Enable livestreaming on the official CMN TV YouTube channel.
2. Copy the channel ID from YouTube Studio.
3. Create `.env.local` in the project root:

```env
NEXT_PUBLIC_CMN_LIVESTREAM_EMBED_URL=https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID
NEXT_PUBLIC_CMN_CHANNEL_URL=https://www.youtube.com/channel/YOUR_CHANNEL_ID
```

4. Restart the Next.js server.

The same embed URL continues to work for future broadcasts made live on that channel.

## Broadcast Workflow

Use streaming software such as OBS Studio to send the CMN TV program output to YouTube Live. YouTube
handles viewer delivery, bandwidth, adaptive playback, and the embedded website player.

Do not place a private YouTube stream key in this project or in a `NEXT_PUBLIC_` environment variable.
The stream key belongs only in the broadcasting software.
