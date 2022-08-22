function countingValleys(steps, path) {
    // Write your code here
    let sealevel = 0;
    let mountain = 0;
    let valley = 0;
    for(let i in path){
        if(path[i]=="U"){
            if(sealevel==0){
                mountain++;
            }
            sealevel++;
        }
        if(path[i]=="D"){
            if(sealevel==0){
                valley++;
            }
            sealevel--;
        }
    }
    return valley;
}
