# CMN TV Livestream Setup

The website livestream page is available at `/livestream`.

## YouTube Live

1. Enable livestreaming on the official CMN TV YouTube channel.
2. Start the livestream from YouTube Studio using the CMN TV channel.
3. Make sure the live video is public and embedding is allowed.
4. The livestream page currently uses the CMN TV channel-live embed by default:

```env
https://www.youtube.com/embed/live_stream?channel=UC6_3owrj4wsO4dJGp2B7Xrg
```

5. To replace it later, update the `youtubeChannelId` value in `app/livestream/page.tsx`.

If you prefer to manage the URL from Vercel later, add this environment variable and update the
livestream page to read it:

```env
NEXT_PUBLIC_CMN_LIVESTREAM_EMBED_URL=https://www.youtube.com/embed/YOUR_LIVE_VIDEO_ID
```

6. Restart the Next.js server or redeploy the site.

If a specific YouTube event must be embedded instead, use this format:

```env
NEXT_PUBLIC_CMN_LIVESTREAM_EMBED_URL=https://www.youtube.com/embed/YOUR_LIVE_VIDEO_ID
```

The channel-live embed is best when the website should follow whatever the CMN TV channel is
currently broadcasting live.

## Broadcast Workflow

Use streaming software such as OBS Studio to send the CMN TV program output to YouTube Live. YouTube
handles viewer delivery, bandwidth, adaptive playback, and the embedded website player.

Do not place a private YouTube stream key in this project or in a `NEXT_PUBLIC_` environment variable.
The stream key belongs only in the broadcasting software.
