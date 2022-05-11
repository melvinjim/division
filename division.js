class Division{
    firstResult(fristNumber, secondNumber){
        return fristNumber/secondNumber;
    }

    secondtResult(fristNumber, secondNumber){
        return fristNumber/secondNumber;
    }

    thirdResult(fristNumber, secondNumber){
        return fristNumber/secondNumber;
    }

    forthResult(fristNumber, secondNumber){
        if (secondNumber < 1) {
            return 'error, cant divide by 0'
        }
        return fristNumber/secondNumber;
    }
}


module.exports = Division;