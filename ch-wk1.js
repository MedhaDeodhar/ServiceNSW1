//Mark and John are trying to compare their BMI, which is calculated using the formula BMI=mass/(height*height)*//

var massMark=70; //in kg
var massJohn=80; //in kg
var heightMark=1.60; //in meter
var heightJohn=1.97; //in meter

var bmiMark=massMark/(heightMark*heightMark);
var bmiJohn=massJohn/(heightJohn*heightJohn);
console.log(bmiMark,bmiJohn);

/*var higherbmiMark=varbmiMark>varbmiJohn;*/

if (bmiMark > bmiJohn){
    console.log('Mark\'s BMI is higher then John')
    }else{
        console.log('John\'s BMI is higher then Mark')
    }
