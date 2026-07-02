//Assignment (Conditional Statements & Loops)

//This interface is a TypeScript keyword and it is an employee object
interface employeeInfo {
    "empId": number,
    "empName": string,
    "baseSalary": number,
    "experience": number,
    "rating": number
}

//Store Employee Data - employeeInfo[] means it is an array of employee objects here we can store employee objects
let employeeDetails: employeeInfo[] = [

    {
        "empId": 1,
        "empName": "Alice Johnson",
        "baseSalary": 75000,
        "experience": 5.1,
        "rating": 4.2
    },

    {
        "empId": 2,
        "empName": "Bob Smith",
        "baseSalary": 68000,
        "experience": 3.2,
        "rating": 3.8
    },

    {
        "empId": 3,
        "empName": "Carol Davis",
        "baseSalary": 82000,
        "experience": 7.1,
        "rating": 4.5
    },

    {
        "empId": 4,
        "empName": "David Brown",
        "baseSalary": 90000,
        "experience": 10.2,
        "rating": 2.5
    },

    {
        "empId": 5,
        "empName": "Eva Green",
        "baseSalary": 60000,
        "experience": 2.4,
        "rating": 3.5
    }

];

//Map - A Map stores data as Key and Value pairs.
let employeeHikePercentage = new Map<string, number>();

console.log("**** Employee Hike Details *****");

// 4. Loop through Employee Records - This loop processes every employee one by one.

for (let i = 0; i < employeeDetails.length; i++) {

    let variablePay: number = 0;
    let bonus: number = 0;
    let reward: number = 0;

    // Rating Condition - we Checks whether the employee rating is greater than or equal to 4

    if (employeeDetails[i].rating >= 4) {

        variablePay = 15;
        bonus = 1500;

    }

    else if (employeeDetails[i].rating >= 3 && employeeDetails[i].rating < 4) {

        variablePay = 10;
        bonus = 1200;

    }

    else {

        variablePay = 3;
        bonus = 300;

    }

    //Checks whether the employee has 5 or more years of experience.
    if (employeeDetails[i].experience >= 5) {

        reward = 5000;

    }

    // Calculates the total hike amount

    let hike = (employeeDetails[i].baseSalary * variablePay / 100) + bonus + reward;

        let hikePercentage = hike / employeeDetails[i].baseSalary;

        // Stores the employee name and hike percentage inside the Map

    employeeHikePercentage.set(employeeDetails[i].empName, hikePercentage);

    // To Print Employee Details

    console.log("---");

    console.log("Employee Id      :", employeeDetails[i].empId);
    console.log("Employee Name    :", employeeDetails[i].empName);
    console.log("Base Salary      :", employeeDetails[i].baseSalary);
    console.log("Experience       :", employeeDetails[i].experience);
    console.log("Rating           :", employeeDetails[i].rating);
    console.log("Variable Pay     :", variablePay + "%");
    console.log("Bonus            :", bonus);
    console.log("Reward           :", reward);
    console.log("Hike Amount      :", hike);
    console.log("Hike Percentage  :", (hikePercentage * 100).toFixed(2) + "%");

}

// 5. To Print the map

console.log(" ");
console.log("**** Employee Hike Percentage Map ****");

for (let data of employeeHikePercentage) {

    console.log(data[0] + " : " + (data[1] * 100).toFixed(2) + "%");

}
