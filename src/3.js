const randomNodeJSCode = () => {
  const nodeJsVersions = ['12.18.3', '14.17.0', '16.9.0'];
  const projectName = 'math-homework';
  const randomVersion = Math.floor(Math.random() * 3);

  return `node ${nodeJsVersions[randomVersion]} ${projectName}`;
}
