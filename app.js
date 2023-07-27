var inpu = document.getElementById('disp')

function disp(y) {
    inpu.value +=y
}
function calc(){
    var inpAns = eval(inpu.value)
    var Ans = inpAns
    inpu.value = Ans
}

function ClearAll(){
    inpu.value="";
}