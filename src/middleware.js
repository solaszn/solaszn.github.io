export function onRequest(context, next) {
  const url = new URL(context.request.url);

  // Check if the request is for the protected page
  if (url.pathname === "/reframe") {
    const password = context.request.headers.get("x-password");
    const correctPassword = import.meta.env.WORK_SECRET_KEY;

    // Validate the password
    if (password !== correctPassword) {
      // Return a 403 Forbidden response if the password is incorrect
      return new Response("Access denied. Please provide the correct password.", {
        status: 403,
      });
    }
    context.locals.isUnlocked = true;
  }

  // If the password is correct or it's not the protected page, proceed
  return next();
}