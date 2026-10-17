function calculateGrade() {
    let score=90;
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = "A++";
            console.log(`Secured grade is: ${grade} with score ${score}`);
            break;

        case (score >= 80 && score < 90):
            grade = "A";
            console.log(`Secured grade is: ${grade} with score ${score}`);
            break;

        case (score >= 70 && score < 80):
            grade = "B++";
            console.log(`Secured grade is: ${grade} with score ${score}`);
            break;

        case (score >= 60 && score < 70):
            grade = "B";
            console.log(`Secured grade is: ${grade} with score ${score}`);
            break;

        default:
            grade = "Invalid score or Fail";
            console.log(`Sorry you failed this assessment with score ${score}`);
    }
}

calculateGrade();