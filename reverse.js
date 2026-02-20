function reverse(string) {
    const strArray = string.split('');
    strArray.reverse();
    const reversed = strArray.join('');
    return reversed;
}

module.exports = reverse;