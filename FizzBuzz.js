const fizzBuzz = (counter, divisors) => {
    
    
    if (counter === 0)
    {
        return
    }

    // Check the current number for all divisors
    getDivisors(counter, divisors)
    // Go to the next number to check for divisors
    fizzBuzz(counter - 1, divisors)

}

const getDivisors = (currentNum, divisors, currentIndex = 0, msg = '') => {
    if (divisors.length === 0)
    {
        if (msg != '')
        {
            console.log(currentNum + ': ' + msg)
        }
        return
    }
    if (divisors[0] != undefined)
    {
        if (currentNum % (currentIndex + 1) === 0)
        {
            msg += divisors[0]
        }
    }
    
    // Go to the next divisor for the current number
    getDivisors(currentNum, divisors.slice(1), currentIndex + 1, msg)
}

const printEmVals = [undefined, undefined, 'fizz', undefined, 'buzz', undefined, undefined, 'wut', undefined, undefined]
fizzBuzz(120, printEmVals)



