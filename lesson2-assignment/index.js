function getMotto(){
    return prompt("what is your favorite motto?");
}

function getCount(){
    return prompt("how many times to show your Motto?")
}

function printMotto(motto, count){ 
    for(let i = 0; i < count; i++){
        console.log((i + 1) + ".) " + motto);
    }
    
}


const _motto = getMotto();
const _count = getCount();
printMotto(_motto, _count)