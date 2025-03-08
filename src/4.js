const { v4: uuidv4 } = require('uuid');

function generateRandomCode() {
  const id = uuidv4();
  return id;
}
