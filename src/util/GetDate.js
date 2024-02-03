function convertTimestampToDateString(timestamp) {
  // Convert UNIX timestamp to milliseconds
  const milliseconds = timestamp * 1000;
  // Create a new Date object using the timestamp
  const date = new Date(milliseconds);
  // Get the day of the month
  const day = date.getDate();
  // Get the month name
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );

  // Construct the desired format
  return `${day} ${monthName}`;
}

// Example usage
const timestamp = 1706884328;
const dateString = convertTimestampToDateString(timestamp);
console.log(dateString); // Output: "1 March"
