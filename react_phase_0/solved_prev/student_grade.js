//2. Arrow Functions
const total_marks= (s1,s2,s3) =>{return s1+s2+s3};
const calc_per= (totalmarks) => { return totalmarks/300*100};
const test_pass=(percentage) => {if (percentage>35) {
    console.log("pass")
}else{
    console.log("fail")
}};
const grade_calc= (percentage) => {
    switch (percentage) {
        case 60: return "C"
                    break;
        case 70: return "B"
                    break;
                    
        case 80: return "A"
                        break;
    
        default:
            break;
    }
}
s1=70;
s2=80;
s3=90;
console.log("total marks:" +total_marks(s1,s2,s3));
console.log("the percentage is:"+ calc_per(total_marks(s1,s2,s3)));
 test_pass( calc_per(total_marks(s1,s2,s3)));
console.log("student's grade is  :"+ grade_calc(calc_per(total_marks(s1,s2,s3))));
