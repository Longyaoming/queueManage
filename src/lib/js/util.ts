//时间戳转换方法    time:需要被转换的时间戳数字
function formatDate(time:any){
    console.log("这是：",time);
    let year=time.getFullYear();
    let mon = time.getMonth()+1;
    let day = time.getDate();
    if(mon < 10){
        mon = "0"+ mon
    }
    if(day < 10){
        day = "0"+ day
    }
    return year+'-'+mon+'-'+day;
}

//防抖
function debounce(fn:any, time:number, triggleNow:boolean){
    let t:any = null;
    let debounced = () => {

        // let _this =  this;
        if(t){
            clearTimeout(t);
        }
        //是否首次加载
        if(triggleNow){
            let exec = !t;
            t = setTimeout(() => {
                t = null;
            }, time)

            if(exec){
                fn();
            }
        }else{
            t = setTimeout(() => {
                fn();
            }, time)
        }
    }
    return debounced;
}

export {
    formatDate,
    debounce
}


