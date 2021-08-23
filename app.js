function readInput() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    })

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
            problem.testCases.push(line.split(' ').map(val => Number(val)))
        }
    })

        .on('close', () => {
            // Finished processing input, now solve question
            solveProblem(problem)
            process.exit()
        })
}

function solveProblem(problem) {
    // console.log(problem.testCases)
    problem.testCases.forEach((t, i) => {

        // calculate result
        let result

        console.log(`Case #${i + 1}: ${result}`)
    })
}

readInput()