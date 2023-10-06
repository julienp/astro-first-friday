import type { APIRoute } from "astro";

export const GET: APIRoute = async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      time: new Date(),
    })
  );
};
