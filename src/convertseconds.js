function convertSeconds(seconds) {
  // Convert time in seconds to hours, minutes, seconds
  // Returns the values

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return [hours, minutes, remainingSeconds];
}

export { convertSeconds };
