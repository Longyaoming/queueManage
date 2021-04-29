//时间戳转换方法    time:需要被转换的时间戳数字
export default function formatDate(time:any){
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


