function minDate(dates) {
  // Defensive copy so input is not modified
  const datesCopy = dates.slice();

  // The date format is YYYY/MM/DD which sorts lex in chronological order
  // So just return the minimum string by sorting
  datesCopy.sort();

  return datesCopy[0];
}

document.getElementById("findMinBtn").addEventListener("click", () => {
  const input = document.getElementById("datesInput").value.trim();

  if (!input) {
    document.getElementById("result").textContent = "Please enter some dates.";
    return;
  }

  // Split input by commas and clean whitespace
  const datesArray = input.split(",").map(date => date.trim());

  // Optional: Validate date format with simple regex
  const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
  for (const d of datesArray) {
    if (!dateRegex.test(d)) {
      document.getElementById("result").textContent = `Invalid date format: "${d}". Use YYYY/MM/DD`;
      return;
    }
  }

  const earliest = minDate(datesArray);
  document.getElementById("result").textContent = `Earliest date is: ${earliest}`;
});
