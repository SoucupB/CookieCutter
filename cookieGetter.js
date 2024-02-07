function isThirdPartyCookie(cookieName) {
  // Get the current domain
  var currentDomain = window.location.hostname;

  // Get the cookie value
  var cookieValue = getCookie(cookieName);

  // If the cookie value is not empty
  if (cookieValue) {
      // Parse the domain from the cookie
      var cookieDomain = getCookieDomain(cookieValue);

      // Check if the cookie domain is different from the current domain
      if (cookieDomain && cookieDomain !== currentDomain) {
          return true; // Third-party cookie
      }
  }

  return false; // First-party cookie or no cookie found
}

// Helper function to get the value of a cookie by name
function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');

  for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
          return cookie.substring(name.length, cookie.length);
      }
  }
  console.log("MENIS")

  return null; // Cookie not found
}

// Helper function to extract domain from a cookie string
function getCookieDomain(cookieValue) {
  var matches = cookieValue.match(/(?:^|;\s*)domain=([^;]*)/);
  return matches ? matches[1] : null;
}

console.log(isThirdPartyCookie('user_id'))