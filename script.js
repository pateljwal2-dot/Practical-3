// Secure Bank Ltd. - Beginner JavaScript Project

// 1. Variables: var, let and const
var bankName = "Secure Bank Ltd."; // var variable
let customerName = "Customer";     // let variable
const minimumScore = 650;          // const value

// This function shows local scope using let.
function showScopeExample() {
    let message = "Welcome to " + bankName;
    return message;
}

// 2. Reusable function to format money
function formatMoney(value) {
    return "Rs. " + value.toFixed(2);
}

// 3. Loan eligibility using if, else-if and nested if
function checkLoan() {
    let income = Number(document.getElementById("income").value);
    let oldEmi = Number(document.getElementById("oldEmi").value);
    let score = Number(document.getElementById("score").value);
    let result = "";

    // Relational and logical operators are used here.
    if (income <= 0 || oldEmi < 0 || score < 300 || score > 900) {
        result = "Please enter valid details.";
    } else if (score >= minimumScore) {
        // Nested if statement
        if (oldEmi < income * 0.5) {
            result = "You may be eligible for a loan (demo result).";
        } else {
            result = "Your existing EMI is high. Loan may not be suitable.";
        }
    } else {
        result = "Credit score is below the sample requirement.";
    }

    document.getElementById("loanResult").innerHTML = result;
}

// 4. EMI calculation using a function with parameters and return value
function findEMI(principal, annualRate, years) {
    let months = years * 12;
    let monthlyRate = annualRate / 12 / 100;

    // If interest rate is zero, divide the loan equally by months.
    if (monthlyRate === 0) {
        return principal / months;
    }

    let emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
    emi = emi / (Math.pow(1 + monthlyRate, months) - 1);

    return emi;
}

function calculateEMI() {
    let amount = Number(document.getElementById("amount").value);
    let rate = Number(document.getElementById("rate").value);
    let years = Number(document.getElementById("years").value);
    let output = "";

    if (amount <= 0 || rate < 0 || years <= 0 || years > 40) {
        output = "Please enter valid loan details.";
    } else {
        let emi = findEMI(amount, rate, years);
        let totalPayment = emi * years * 12;
        let totalInterest = totalPayment - amount;

        output = "Monthly EMI: " + formatMoney(emi) +
            "<br>Total Interest: " + formatMoney(totalInterest) +
            "<br>Total Payment: " + formatMoney(totalPayment);
    }

    document.getElementById("emiResult").innerHTML = output;
}

// 5. Simple interest calculation
function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

function calculateInterest() {
    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("interestRate").value);
    let time = Number(document.getElementById("time").value);

    if (principal < 0 || rate < 0 || time < 0) {
        document.getElementById("interestResult").innerHTML =
            "Please enter values that are zero or more.";
    } else {
        let interest = simpleInterest(principal, rate, time);
        let total = principal + interest;

        document.getElementById("interestResult").innerHTML =
            "Simple Interest: " + formatMoney(interest) +
            "<br>Total Amount: " + formatMoney(total);
    }
}

// 6. Account summary using for, while and do-while loops
function accountSummary() {
    let balance = Number(document.getElementById("balance").value);
    let deposit = Number(document.getElementById("deposit").value);
    let withdraw = Number(document.getElementById("withdraw").value);
    let months = Number(document.getElementById("monthCount").value);

    if (balance < 0 || deposit < 0 || withdraw < 0 ||
        months < 1 || months > 24 || !Number.isInteger(months)) {
        document.getElementById("accountResult").innerHTML =
            "Please enter valid account details. Months must be from 1 to 24.";
        return;
    }

    let table = "<table><tr><th>Month</th><th>Balance (Rs.)</th></tr>";

    // for loop: calculate the balance for each month
    for (let i = 1; i <= months; i++) {
        balance += deposit;       // assignment operator
        balance -= withdraw;      // assignment operator

        table += "<tr><td>" + i + "</td><td>" +
            balance.toFixed(2) + "</td></tr>";
    }

    table += "</table>";

    // while loop: count the months
    let count = 1;
    let totalMonths = 0;
    while (count <= months) {
        totalMonths++;
        count++;
    }

    // do-while loop: show that the loop runs at least once
    let check = 1;
    let loopMessage = "";
    do {
        loopMessage = "Summary created for " + check + " or more month(s).";
        check++;
    } while (check <= 1);

    document.getElementById("accountResult").innerHTML =
        "Months processed: " + totalMonths + "<br>" +
        loopMessage + table;
}

// 7. switch statement for account type
function showAccountType() {
    let type = document.getElementById("accountType").value;
    let message = "";

    switch (type) {
        case "savings":
            message = "Savings Account: Suitable for saving money and earning interest.";
            break;
        case "current":
            message = "Current Account: Commonly used for regular business transactions.";
            break;
        case "salary":
            message = "Salary Account: Used by employers to deposit salary.";
            break;
        default:
            message = "Please select a valid account type.";
    }

    document.getElementById("typeResult").innerHTML = message;
}

// 8. Conditional operator example
let customerStatus = (customerName === "Customer") ? "Demo User" : "Registered User";
console.log(showScopeExample());
console.log("Customer status: " + customerStatus);

// 9. Browser alert example
console.log("Welcome to " + bankName);
