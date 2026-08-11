export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === "www.accident-claims-scotland.com") {
    url.hostname = "accident-claims-scotland.com";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
