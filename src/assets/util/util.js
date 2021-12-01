/**
 * @param time  时间戳 或者 时间格式的数据；
 * @returns 年月日时分秒格式的字符串
 * **/ 
export const getTime = time =>{
    let d = new Date(time);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate(); 
    let hours = d.getHours();
    let day = ['一','二','三','四','五','六','七'][d.getDay() + 1];
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    return year + '年' + month + '月' + date + '日' +
        '  星期' + day + '  ' + hours + ':' + minutes + ':' + seconds ;
}
