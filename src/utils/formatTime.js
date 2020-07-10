export const formatTime = (time) => {
//   let date = new Date(time);

  let options = {
    // weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    // hour: "none",
    // minute: "2-digit",
  };

    return new Date(time).toLocaleDateString("en-us", options);
};
