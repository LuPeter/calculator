var str=""; //暫存輸入的值(string)
var op="+";  //暫存oprator
var number=0;
var membery=0;
//存取數值
function stor(i){
    str+=i;
    document.getElementById("output").innerHTML=str;
}
/*
預設 number為0，op為+
輸入數值在str，按下任何運算符號時，先將str值用op運算到number，再將新的運算傳給op，最後把str清空
如果連續按不同運算符號，此時str為空，將新的運算傳給op
*/
function method(operator){
    if(str==""){
        op=operator;
    }
    else{
        switch(op){
            case '+':
                number+=Number(str);
                console.log(number);
                break;
            case '-':
                number-=Number(str);
                console.log(number);
                break;
            case '*':
                (number==0)?number=Number(str):number*=Number(str);
                console.log(number);
                break;
            case '/':
                (number==0)?number=Number(str):number/=Number(str);
                console.log(number);
                break;
            default:
                break;    
        }     
        op=operator;
        console.log(op);
        str=""; 
        document.getElementById("output").innerHTML=number;
    }       
}
//將number用目前的op計算出來，並將op設回預設的'+'
function equal(){
    method(op);
    str=number.toString();
    number=0;
    console.log(op);
}
//僅將str清空
function clearError(){
    str="";
    document.getElementById("output").innerHTML= "0";
}
//將所有數值初始化
function clearAll(){    
    number=0;
    str="";
    op="+";
    document.getElementById("output").innerHTML= number;
}
//將字串往右移一格
function shiftstr(){        
    str=str.slice(0,str.length-1);
    if(str==''){
        document.getElementById("output").innerHTML= '0';
    }
    else{
        document.getElementById("output").innerHTML= str;
    }
}
//改變str正負號
function sign(){
    if(str!=''){
        if(str[0]=='-'){
            str=str.slice(1);
        }
        else{            
            str='-'+str;
        }
        document.getElementById("output").innerHTML= str;
    }
}
//開根號
function tosqrt(){
    str=Math.sqrt(Number(str));    
    str=str.toString();
    console.log('sqrt= '+str);
    document.getElementById("output").innerHTML = str;
}
//平方
function square(){
    str=Math.pow(Number(str),2);
    str=str.toString();
    console.log('square= '+str);
    document.getElementById("output").innerHTML = str;
}
//倒數
function recip(){
    str=1/Number(str);
    str=str.toString();
    console.log('recip= '+str);
    document.getElementById("output").innerHTML = str;
}
//百分比%
function percent(){
    if(number!=0 && str!=''){
        str=Number(str)*number/100;
        equal();
    }
}
//MR
function mRecall(){
    str=membery.toString();
    document.getElementById("output").innerHTML= str;
    str='';
}
//MC
function mClean(){
    membery=0;
}
//M+
function mAdd(){
    if(str==""){
        membery+=number;
    }
    else{
        membery+=Number(str);
    }    
    str=""; 
}
//M-
function mMinus(){
    if(str==""){
        membery-=number;
    }
    else{
        membery-=Number(str);
    }    
    str=""; 
}
//MS
function mS(){
    membery=Number(str);
}

//鍵盤輸入
window.addEventListener("keydown",function(key){
    if(key.keyCode>=96 && key.keyCode<=105){
        stor(key.key);
    }  
    else if(key.keyCode>=106 && key.keyCode<= 111 && key.keyCode!=110){        
        method(key.key);
    }
    else{
        switch(key.keyCode){
            case 110:
                stor(key.key);
                break;
            case 13:
                equal();
                break;
            case 27:
                clearAll();
                break;
            case 8:
                shiftstr();
            default:
        }
    }    
});

//使用JQERY 點擊按鈕動畫
$(document).ready(function(){
    $("button").mousedown(function(){
        $(this).removeClass("mousedown");
        $(this).removeClass("mouseup");
        $(this).addClass("mousedown");
    });
    $("button").mouseup(function(){
        $(this).removeClass("mousedown");
        $(this).removeClass("mouseup");
        $(this).addClass("mouseup");
    });    
});