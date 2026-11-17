export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === "www.accident-claims-scotland.com") {
    url.hostname = "accident-claims-scotland.com";
    if (url.pathname !== "/" && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
    }
    return Response.redirect(url.toString(), 301);
  }

  // Trailing slashes were served as 308 (temporary). Use a 301 to the canonical slash-free URL.
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "") || "/";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
