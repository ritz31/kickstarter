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
        let score = 0, n = p[i][0], k = p[i][1], str = p[i + 1];

        // calculate goodness score
        for (let j = 0; j < Math.floor(n / 2); j++) {
            if (str[0].charAt(j) != str[0].charAt(n - (j + 1))) {
                score++
            }
        }

        // difference of the req. score and the score
        // calculate result
        let result = Math.abs(score - k)


        // operational variables
        countOfWork++
        answer += `\nCase #${countOfWork}: ${result}`
    }

    console.log(answer.substring(1))
}

readInput()