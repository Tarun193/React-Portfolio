const LINK_FIXES = {
  "https://github.com/Tarun193/BirthdayWhisher":
    "https://github.com/Tarun193/BirthdayWisher",
};

export const getExternalLink = (url) => {
  if (!url) return "";

  const cleanUrl = url.trim();
  return LINK_FIXES[cleanUrl] || cleanUrl;
};

export const handleExternalLink = (event, url) => {
  const cleanUrl = getExternalLink(url);

  event.stopPropagation();

  if (!cleanUrl) {
    event.preventDefault();
    return;
  }

  if (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  event.preventDefault();
  window.location.assign(cleanUrl);
};
