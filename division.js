function division(fristNumber, secondNumber){
    if (typeof fristNumber != "number" || typeof secondNumber != "number") {
        return "I can not perform this division, I only receive numbers"
    }
    return fristNumber/secondNumber;
}

module.exports = division;