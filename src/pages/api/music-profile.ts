import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    // Fetch the data from the external source
    const response = await fetch('https://volt.fm/solaszn?time_frame=short');

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const html = await response.text();

    // Parse Now Playing
    const nowPlayingRegex =
      /<div class="theme-bg-primary[^>]*>[\s\S]*?<div class="group\/track-player-overlay[^>]*style="background-image:url\(([^)]+)\)[\s\S]*?<a href="([^"]+)"[^>]*>([^<]+)<\/a>[\s\S]*?<a href="([^"]+)"[^>]*>([^<]+)<\/a>/;
    const nowPlayingMatch = html.match(nowPlayingRegex);

    const nowPlaying = nowPlayingMatch
      ? {
          song: nowPlayingMatch[3].trim(),
          songLink: nowPlayingMatch[2].trim(),
          artist: nowPlayingMatch[5].trim(),
          artistLink: nowPlayingMatch[4].trim(),
          coverArt: nowPlayingMatch[1].trim(),
        }
      : null;

    // Parse Top Artists
    const topArtistsRegex =
      /<a href="\/artist\/[^"]+"[^>]*>[\s\S]*?<img src="([^"]+)"[^>]*>[\s\S]*?<span class="external-text">([^<]+)<\/span>/g;
    const matches = [...html.matchAll(topArtistsRegex)];
    const topArtists = matches.slice(0, 10).map((match) => ({
      name: match[2].trim(),
      image: match[1].trim(),
    }));

    // Return the parsed data as JSON
    return new Response(
      JSON.stringify({
        nowPlaying,
        topArtists,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error fetching music profile:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
