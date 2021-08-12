// BMI = KG / (H / 100 * H/100)

document.getElementById("submit").addEventListener("click", bmiCalculator);

function bmiCalculator() {
    var cm = document.getElementById("cm").value;
    var kg = document.getElementById("kg").value;
    var bmi;
    var newCm = (cm/100);

    if(cm == '' || kg.value == ''){
        // alert('Please enter your cm value.');
        document.getElementById('result').innerHTML = `<strong>Please enter your cm value.</strong>`
    }
    else{
    bmi = kg /(newCm * newCm);
    bmi = bmi.toFixed(2);
    console.log(bmi);

    document.getElementById('result').innerHTML = "Your BMI Weight is "+ bmi;
    }
}