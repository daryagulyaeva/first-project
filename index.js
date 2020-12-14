let list = [];

document.getElementById("form__add").onclick = function(){
    let text = document.getElementById("form__value").value;
    list.push(text);
    console.log(text)
    out(list);
}

function out(arr) {
    let out = '';
    arr.forEach(item => {
        out += item + "</br>";
    });

    document.getElementById("list").innerHTML = out;
}