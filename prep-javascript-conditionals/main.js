const age = 25;
function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
const isAdultResult = isAdult(age);
console.log('Adult?', isAdultResult);

const student1Score = 87;
function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}
const didStudentPassResult = didStudentPass(student1Score);
console.log('Did the student pass?', didStudentPassResult);

const student2Score = 44;
function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
const student2Grade = gradeCalculator(student2Score);
console.log('Student 2 Grade:', student2Grade);

const season = 'spring';
function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return "it's cold today";
  } else {
    return 'please enter a valid season';
  }
}
const seasonMessengerResult = seasonMessenger(season);
console.log(seasonMessengerResult);

const dayOfTheWeek = 'saturday';
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend!';
  } else {
    return 'Its a weekday!';
  }
}
const dayDetectorResult = dayDetector(dayOfTheWeek);
console.log(dayDetectorResult);
