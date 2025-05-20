const userInput = document.getElementById("date");
const result = document.getElementById("result");
// Set max to today's date
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  if (!userInput.value) {
    result.innerText = "Please select a date.";
    return;
  }

  const birthdate = new Date(userInput.value);
  const day1 = birthdate.getDate();
  const month1 = birthdate.getMonth() + 1;
  const year1 = birthdate.getFullYear();

  const today = new Date();
  const day2 = today.getDate();
  const month2 = today.getMonth() + 1;
  const year2 = today.getFullYear();

  let day3, month3, year3;
  year3 = year2 - year1;

  if (month2 >= month1) {
    month3 = month2 - month1;
  } else {
    year3--;
    month3 = 12 + month2 - month1;
  }

  if (day2 >= day1) {
    day3 = day2 - day1;
  } else {
    month3--;
    // get days in previous month
    const prevMonth = month2 - 1 || 12;
    const prevYear = prevMonth === 12 ? year2 - 1 : year2;
    day3 = getDaysInMonth(prevYear, prevMonth) + day2 - day1;
  }

  result.innerHTML = `You are <span class=\"font-bold text-xl\">${year3}</span> years, <span class=\"font-bold text-xl\">${month3}</span> months, and <span class=\"font-bold text-xl\">${day3}</span> days old.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
