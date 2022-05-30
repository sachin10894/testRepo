function compute()
{
    el = document.getElementById("principal");
    var p = el.value;
    if(p<=0){
	alert("Enter positive value for Principal");
	el.focus();

	el.value = '';
	return;
    }
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var a = p*r*y/100;
//    var a = +p + +i;	
    year = new Date().getFullYear()+parseInt(y);
    fi = "If you deposit \<span class=\"highlight\"\>"+p+",\<\/span\>\<br\>"
    sec = "at an interest rate of \<span class=\"highlight\"\>"+r+"%,\<\/span\>\<br\>"
    th = "You will receive an amount of \<span class=\"highlight\"\>"+a+",\<\/span\>\<br\>"
    fo = "in the year \<span class=\"highlight\"\>"+year+".\<\/span\>\<br\>";
    document.getElementById("result").innerHTML=fi+sec+th+fo;
    htmlColl = document.getElementsByClassName("highlight")
    arr = Array.from(htmlColl);
    arr.forEach(x=>{x.style.backgroundColor = "yellow"});
	
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=(rateval+ " %");
}

