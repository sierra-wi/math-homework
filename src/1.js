const { readFile } = require('fs');

readFile('math-homework.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const mathProblems = JSON.parse(data).problems;
  for (let i = 0; i < mathProblems.length; i++) {
    const problem = mathProblems[i];
    if (problem.type === 'addition') {
      console.log(`${problem.a} + ${problem.b} = ${problem.answer}`);
    } else if (problem.type === 'subtraction') {
      console.log(`${problem.a} - ${problem.b} = ${problem.answer}`);
    } else if (problem.type === 'multiplication') {
      console.log(`${problem.a} x ${problem.b} = ${problem.answer}`);
    } else if (problem.type === 'division') {
      console.log(`${problem.a} / ${problem.b} = ${problem.answer}`);
    } else {
      console.log(`Unsupported problem type: ${problem.type}`);
    }
  }
});
