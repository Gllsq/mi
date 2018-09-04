
//双下表轮播函数

//imgs:需要轮播图片的集合
//dots：轮播点的集合
//banner：放轮播图的盒子，元素
//leftBtn：左箭头、元素
//rightBtn：右箭头、元素
//widths：轮播图的宽度，整数
//activeClass：轮播点选中时的类名
//second：轮播时间
function banner_lr(imgs,dots,banner,leftBtn,rightBtn,widths,activeClass,second=2000) {
    //初始值
    imgs[0].style.left = 0;
    dots[0].classList.add(activeClass);
    let now = 0;
    let next = 0;

    //定义开关:控制快速点击时图片快速轮播的现象
    //默认开关是打开的，可以点击左右箭头 flag=true
    let flag = true;


    let t = setInterval(move, second);

    function move() {
        next++;
        if (next == imgs.length) {
            next = 0;
        }
        //确保下一张图永远在最右侧
        imgs[next].style.left = widths + "px";
        animate(imgs[now], {left: -widths});
        animate(imgs[next], {left: 0}, function () {
            flag = true;

        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now = next;

    }


    // 点击左箭头
    function moveL() {
        next--;
        if (next < 0) {
            next = imgs.length - 1;
        }
        imgs[next].style.left = -widths + "px";
        animate(imgs[now], {left: widths});
        animate(imgs[next], {left: 0}, function () {
            flag = true;
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now = next;
    }

    leftBtn.onclick = function () {
        //判断开关是否开启
        //如果开关开启，则!flag=flase,不执行return，执行flag=flase和move，move执行完flag=true
        //开关关闭的时候，不要点击
        //flag=false !flge=true
        if (!flag) {
            return;
        }
        flag = false;
        moveL();
    }
    rightBtn.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        move();
    }
    banner.onmouseover = function () {
        clearInterval(t);
    }
    banner.onmouseout = function () {
        t = setInterval(move, second);
    }


    //鼠标移入轮播点
    for (let i = 0; i < dots.length; i++) {
        dots[i].onmouseover = function () {
            for (let j = 0; j < dots.length; j++) {
                imgs[j].style.left = widths + "px";
                dots[j].classList.remove(activeClass);

            }
            imgs[i].style.left = 0;
            dots[i].classList.add(activeClass);
            now = i;
            next = i;
        }
    }

    //窗口失去焦点时，停止时间间隔函数
    window.onblur = function () {
        clearInterval(t);
    }
    //窗口获得焦点时，继续时间间隔函数
    window.focus = function () {
        t = setInterval(move, second);
    }
}





// 选项卡的函数
// 获取所需元素
// lis 所有选项框的集合
// card 所有选项中卡的集合
// let lis=document.querySelectorAll("li");
// let card=document.querySelectorAll(".son");
// Tab(lis,card);
function Tab(lis,card){
    for(let i=0;i<lis.length;i++){
        //3.进行鼠标移入每个li时的操作
        lis[i].onmouseover=function(){
            //4.其余子元素消失
            for(let j=0;j<lis.length;j++){
                //其余子元素消失
                card[j].style.display="none";
            }
            //5.当前子元素出现
            card[i].style.display="block";
        }
        lis[i].onmouseout=function(){
            for(let j=0;j<lis.length;j++){
                //其余子元素消失
                card[j].style.display="none";
            }
        }
    }
}

// 遮罩的函数
// 获取所需元素
// box 被遮罩的盒子的集合
// cover 遮罩层盒子的集合
// let box=document.querySelectorAll(".box")[0];
// let cover=document.querySelectorAll(".cover")[0];
// Shade(box,cover);
function Shade(box,cover){
    box.onmouseover=function(){
        cover.style.display="block";
    }
    box.onmouseout=function(){
        cover.style.display="none";
    }
}






//点击轮播图
function banner_dj(imgs,dots,banner,leftBtn,rightBtn,widths,activeClass="lie"){
    imgs[0].style.left=0;
    dots[0].classList.add(activeClass);
    let now=0;
    let next=0;
    //开关：控制快速点击时图片会快速轮播的现象
    //默认开关是打开的，flag=true 可以点击左右箭头
    let flag=true;
    // let t=setInterval(move, 2000);
    function move() {
        next++;
        if (next==imgs.length) {
            next=0;
        }
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function(){
            flag=true;
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now=next;
    }
    function moveL(){
        next--;
        if (next<0) {
            next=imgs.length-1;
        }
        imgs[next].style.left=-widths+"px";
        animate(imgs[now], {left:widths});
        animate(imgs[next], {left:0},function(){
            flag=true;
        });
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        now=next;
    }
    rightBtn.onclick=function(){
        //判断开关是否开启
        //开关开启，则！flag=false，不执行retur，执行flag=false和move
        //move执行完flag=true      
        //开关关闭，不能点击
        if (!flag) {
            return;
        }
         if (next==0) {
            return;
        }
        flag=false;
        moveL();
    }
    leftBtn.onclick=function(){
        
        //开关关闭，不能点击
        if (!flag) {
            return;
        }
        if (next==imgs.length-1) {
            return;
        }
        flag=false;
        move();
    }
    //鼠标移入轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onclick=function(){
        if(now==i){
            return;
        }else if (now<i) {
            imgs[i].style.left=`${widths}px`;
            animate(imgs[now],{left:-widths});
            animate(imgs[i],{left:0});
            dots[now].classList.remove(activeClass);
            dots[i].classList.add(activeClass);
            now=next=i;
        }else if (now>i) {
            imgs[i].style.left=`${-widths}px`;
            animate(imgs[now],{left:widths});
            animate(imgs[i],{left:0});
            dots[now].classList.remove(activeClass);
            dots[i].classList.add(activeClass);
            now=next=i;
        }
    }
}
}


//滑动
function hd(lz,ry,list,w){
    let times=0;
    console.log(lz,ry,list,w);
    lz[0].onclick=function(){
        times++;
        if(times==3){
            times=2;
        }
        list.style.transform=`translate(-${w*times}px)`;
    }
    ry[0].onclick=function(){
        times--;
        if(times==-1){
            times=0;
        }
        list.style.transform=`translate(-${w*times}px)`;
    }
}




function hd_l(lz,ry,list,w){
    let times=0;
    console.log(lz,ry,list,w);
    lz[0].onclick=function(){
        times++;
        if(times==2){
            times=1;
        }
        list.style.transform=`translate(-${w*times}px)`;
    }
    ry[0].onclick=function(){
        times--;
        if(times==-1){
            times=0;
        }
        list.style.transform=`translate(-${w*times}px)`;
    }
}