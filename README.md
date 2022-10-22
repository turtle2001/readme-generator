# Readme Generator

## Description
The goal of this project was to create a README file by using a command-line application to generate one.

## Installation
Download node.js

# Usage
Open the command line and move to the file
type node inde.js in the command line

Demo
https://drive.google.com/file/d/1JiNp6TuucuW1i57D8QQ43YGAxoqbewmm/view

## Code Snippet
```JavaScript
  .then((response) => {
    const markdown = generateMD(response);

    fs.writeFile('README2.md', markdown, (err) =>
      err ? console.log(err) : console.log('Successfully created README2.md!')
    );
  });
```
## Credit
Node.js

## Author Links
[LinkedIn](https://www.linkedin.com/in/alexis-zaragoza-5baa51242/)
[GitHub](https://github.com/turtle2001)
