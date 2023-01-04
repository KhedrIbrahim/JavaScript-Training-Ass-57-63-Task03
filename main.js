function ageInTime(theAge) {
    let yearsAge = 0;
    // Your Code Here
    if (theAge > 10 && theAge < 100){
        yearsAge += theAge;
        console.log(`Your Age in --Years-- is: ${theAge} Years`);
        daysAge = theAge * 365;
        console.log(`Your Age in --Days-- is: ${daysAge} Days`);
        monthsAge = daysAge / 30;
        console.log(`Your Age in --Months-- is: ${monthsAge.toFixed()} Months`);
        weeksAge = daysAge / 7;
        console.log(`Your Age in --Weeks-- is: ${weeksAge.toFixed()} Weeks`);
        hoursAge = daysAge * 24;
        console.log(`Your Age in --Hours-- is: ${hoursAge.toFixed()} Hours`);
        minAge = hoursAge * 60;
        console.log(`Your Age in --Minutes-- is: ${minAge.toFixed()} Minutes`);
        secAge = minAge * 60;
        console.log(`Your Age in --Seconds-- is: ${secAge.toFixed()} Seconds`);
    } else {
        console.log(`Age Out Of Range`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
ageInTime(23); // Months Example => 8395 Months