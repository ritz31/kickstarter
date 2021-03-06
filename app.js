function readInput() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    })

    // this is the object that has to be processed on
    let problem = {
        T: 0,
        testCases: []
    }

    rl.on('line', function (line) {
        // TODO: Process input
        if (problem.T === 0) {
            // Get number of test cases from first line
            problem.T = Number(line)
        } else {
            // TODO process the rest of the data
            problem.testCases.push(line.split(' ').map(val => Number(val) == val ? Number(val) : val))
        }
    })

        .on('close', () => {
            // Finished processing input, now solve question
            solveProblem(problem)
            process.exit()
        })
}

// lines per testcase
const linesPerTestCase = 2;

// do all your problem solving in here
function solveProblem(problem) {
    let countOfWork = 0, answer = "";

    // the array of testcases
    let p = problem.testCases

    for (let i = 0; i < problem.testCases.length; i += linesPerTestCase) {
        // define all the required variables

        // calculate result
        let result

        // operational variables (don't worry about these)
        countOfWork++
        answer += `\nCase #${countOfWork}: ${result}`
    }

    console.log(answer.substring(1))
}

readInput()