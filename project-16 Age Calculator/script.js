
// selecting the elements
let date = document.getElementById('date');
let calculate = document.getElementById('calculate');
let result = document.querySelector('.result');

// set maximum date to today
date.max = new Date().toISOString().split('T')[0];

function calculateAge() {
    let today = new Date();
    let birthDate = new Date(date.value);

    // Calculate years
    let years;
    if (today.getMonth() > birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate())) {
        years = today.getFullYear() - birthDate.getFullYear();
    }
    else {
        years = today.getFullYear() - birthDate.getFullYear() - 1;
    }

    // Calculate months
    let months;
    if (today.getDate() >= birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth();
    }
    else if (today.getDate() < birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth() - 1;
    }
    // make month positive
    months = months < 0 ? months + 12 : months;

    // Calculate days
    let days;
    // days of months in a year
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (today.getDate() >= birthDate.getDate()) {
        days = today.getDate() - birthDate.getDate();
    } else {
    days = today.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
    }

    // Display result
    result.innerHTML += `<p class="age">You are ${years} years, ${months} months and ${days} days old.</p>`;
    if (months == 0 && days == 0) {
        result.innerHTML += `<p class="wishing">Happy Birthday!🎂🤩🎉</p>`;
    }
}
calculate.addEventListener('click', calculateAge);

// run calculate on enter key
document.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        calculate.click();
    }
});
// onload focus on date input
date.focus();
