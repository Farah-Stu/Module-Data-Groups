function sum(arr) {
    return arr
        .filter(item=> typeof item === 'number') // Filter out non-numeric values
        .reduce((total, num) => total + num, 0); // Sum the numeric values
    
    
}

module.exports = sum;
