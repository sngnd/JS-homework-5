const checkValue = function(str, isString = true) {
    while (true) {
        const value = prompt(str);
        if (isString && value != "" && value != null) return value;
        else if (!isString && value && value > 0 && value < 120) return +value;
    }
};

const getGender = function() {
    return confirm("Are you male?") ? "male" : "female";
};

const print = function(lastName, firstName, midName, age, gender) {
    let pension = "no";
    if ((gender === "male" && age >= 65) || (gender === "female" && age >= 55)) {
        pension = "yes";
    }
    alert(
        "Name: " +
        firstName +
        " " +
        lastName +
        " " +
        midName +
        "\nAge in years: " +
        age +
        "\nAge in days: " +
        age * 365 +
        "\nAge after 5 years: " +
        (age + 5) +
        "\nGender: " +
        gender +
        "\nPension: " +
        pension
    );
};

const app = function() {
    const lastName = checkValue("Enter last name");
    const firstName = checkValue("Enter first name");
    const midName = checkValue("Enter mid name: ");
    const age = checkValue("Enter age: ", false);
    const gender = getGender();
    print(lastName, firstName, midName, age, gender);
};

app();