export const timeConverter = (UNIX_timestamp) => {
  let createDate = new Date(UNIX_timestamp);
  let now = Date.now();
  let diff = Math.floor((now - createDate) / 1000); // diff in seconds
  let timeInSeconds = {
    mins: 60,
    hours: 3600,
    days: 86400,
    weeks: 604800,
    months: 2592000,
    years: 31536000,
  };
  let time = "";

  if (diff < timeInSeconds.mins) {
    time = diff + "s";
  } else if (diff < timeInSeconds.hours) {
    time = `${Math.floor(diff / 60)}m ${diff % 60}s`;
  } else if (diff < timeInSeconds.days) {
    time = `${Math.floor(diff / 3600)}h ${Math.floor((diff / 60) % 60)}m`;
  } else if (diff < timeInSeconds.weeks) {
    time = Math.floor(diff / timeInSeconds.days) + " days ago";
  } else if (diff < timeInSeconds.months) {
    time = Math.floor(diff / timeInSeconds.weeks) + " weeks ago";
  } else if (diff < timeInSeconds.months) {
    time = Math.floor(diff / timeInSeconds.months) + " months ago";
  } else {
    time = Math.floor(diff / timeInSeconds.years) + " years ago";
  }
  return time;
};
