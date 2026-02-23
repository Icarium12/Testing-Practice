function analyzeArray(arr) {

    const sum = arr.reduce((prev, curr) => {
        return prev + curr;
    })
    const avg = sum / arr.length;
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    const object = {
        average: avg,
        min: min,
        max: max,
        length: arr.length
    };

    return object;
}

module.exports = analyzeArray;