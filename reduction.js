const arr = [1, 2, 33, 4, 5]

const isSorted = (array) => {
    let isSorted = true
    array.reduce(
        (previous, current) => {
            if (previous < current)
            {
                isSorted = false
            }
            return current
        }
    )
    return isSorted
}

const insertionSort = (array) => array.reduce(
    (sorted, arrCurrentElement) => {
        sorted = sorted.reduce(
            (previous, current) => {
                if (current < arrCurrentElement)
                {
                    const temp = current
                    current = arrCurrentElement
                    arrCurrentElement = temp
                }
                previous.push(current)
                return previous
            }, []
        )
        sorted.push(arrCurrentElement)
        return sorted
    }, []
)

// Make array sorted
console.log(insertionSort(arr))

const randomSort = (array) => {
    let tempArrayEmpty = []
    let tempArrayFull = array.slice()

    while(true)
    {
        
        array.forEach((element) => {
            const randomIndex = Math.floor(tempArrayFull.length * Math.random())
            tempArrayEmpty.push(tempArrayFull[randomIndex])
            tempArrayFull.splice(randomIndex, 1)
        }, this)

        //console.log(tempArrayEmpty)
        if (isSorted(tempArrayEmpty) === true)
        {
            return tempArrayEmpty
        }

        tempArrayEmpty = []
        tempArrayFull = array.slice()
    }

        
}

console.log(randomSort(arr))









