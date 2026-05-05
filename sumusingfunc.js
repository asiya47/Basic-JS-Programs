function sumofDigit(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;   // Grabs the last digit
        sum += digit;           // Adds digit to the total sum
        num = Math.floor(num / 10); // Removes the last digit from num
    }
    return sum;
}

console.log(sumofDigit(1123456)); 