import type { APIRoute } from "astro";

// This is called at build time and a static responds is generated.
// If we set `output: "server"` in the astro config, it will be rendered at runtime.
export const GET: APIRoute = async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      time: new Date(),
    })
  );
};
