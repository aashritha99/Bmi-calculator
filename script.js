document.getElementById('Form').addEventListener('submit',function(e){
    e.preventDefault();

    const gender= document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('Height').value);
    const weight = parseFloat(document.getElementById('weight').value);

if(gender && age && Height && weight){
    const heightInMeters = height / 100; // Convert height from cm to m
    const bmi = weight/(heightInMeters * heightInMeters);
    const resultElemt = document.getElementById('result');
    let category = '';
    if(bmi <18.5){
        category = 'Underweight';
    }
    else if(bmi >= 18.5 && bmi < 24.9){
        category = 'Normal weight';
    }
    else if(bmi >= 25 && bmi < 29.9){
        category = 'Overweight';
    }
    else{
        category = 'Obesity';
    }
    let resultMessage = 'your BMI is :' + bmi.toFixed(2) +'<br>'
    resultMessage += 'Category: ' + category;
    resultElemt.innerHTML = resultMessage;
}


});