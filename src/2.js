const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'homework');
const fileName = Math.random().toString(36).substring(2, 15) + '.md';
const filePath = path.join(dirPath, fileName);

fs.writeFileSync(filePath, '# Homework for math class\n\n## Exercise 1\nSolve the equation:\n\nax + b = 0\n\nWhere a and b are numbers.', { flag: 'w' });
