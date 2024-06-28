
function showTime(clock) {
    var s1='2024-06-20';
    s1 = new Date(s1.replace(/-/g,"/"));
    var now = new Date();
    var dateDiff = now.getTime() - s1.getTime();
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
    var leave1=dateDiff%(24*3600*1000);   
    var hours=Math.floor(leave1/(3600*1000));

    var leave2=leave1%(3600*1000)    
    var minutes=Math.floor(leave2/(60*1000));

    var leave3=leave2%(60*1000);      
    var seconds=Math.round(leave3/1000);

    var time =  dayDiff+"天 "+hours+"小時 "+minutes+" 分鐘"+seconds+" 秒";
    clock.innerHTML = "我們已經度過了: " + time;
}
window.onload = function () {
    var clock = document.getElementById("clock");
    window.setInterval(function () {
        showTime(clock);
    }, 1000);
}
function clock(){
    alert('特別數字就請你對劉羿承說"我愛你"才告訴你');
}

function s() {
    　var Today=new Date();
    　alert("今天日期是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日"+'又是愛你的一天喔!寶寶~');
    }

no5.addEventListener("click",function(){
    var no5=document.getElementById('no5');
    no5.href='fire.html';
    
})
go.addEventListener("click",function(){
    var text=document.getElementById("text");
    var pass=document.getElementById("pass");
    
    if(text.value!=='0620' ||(pass.value!=='0607' && pass.value!=='0321')){
        alert('你居然輸入錯誤??(-`ェ´-╬)給我重新輸入 ');
    }
    else{
        alert('登陸成功~ヾ(●゜▽゜●)♡');
    }
})

