var sign= "" 
function addZero(){
    document.getElementById("res").innerText = document.getElementById("res").innerText + "0";
}
function addOne(){
    document.getElementById("res").innerText = document.getElementById("res").innerText + "1";
}

function Clear(){
    document.getElementById("res").innerText = "";
}
function Sum(){
    document.getElementById("res").innerText = document.getElementById("res").innerText + "+";
    sign = "+"
}
function Sub(){
    document.getElementById("res").innerText = document.getElementById("res").innerText + "-";
    sign = "-"
}
function Mul(){
    document.getElementById("res").innerText = document.getElementById("res").innerText + "*";
    sign = "*"
}
function Div(){
    document.getElementById("res").innerText = document.getElementById("res").innerText + "/";
    sign = "/"
}
function Equal(){
    var maindata = document.getElementById("res").innerText;
    data = maindata.split(sign)
    var x1 = parseInt(data[0],2)
    var x2 = parseInt(data[1],2)
    if(sign =="+"){
        document.getElementById("res").innerText = (x1+x2).toString(2)
    }
    else if(sign =="-"){
        document.getElementById("res").innerText = (x1-x2).toString(2)
    }
    else if(sign =="*"){
        document.getElementById("res").innerText = (x1*x2).toString(2)
    }
    else if(sign =="/"){
        document.getElementById("res").innerText = (parseInt(x1/x2)).toString(2)
    }
    else{
        document.getElementById("res").innerText = data
    }

}
