
function gradingStudents(grades) {
    for(let i in grades){
        let curr = grades[i];
        var results = Math.ceil(grades[i] / 5) * 5; //40
        if(results >= 40){
            var diff = results - grades[i]; //40-38=2
            if(diff<3){
                grades[i] = Math.ceil(grades[i] / 5) * 5;
            }
            else{
                grades[i] = curr;
            }
        }
        else{
            grades[i] = curr;
        }
    }
    return grades;
}
