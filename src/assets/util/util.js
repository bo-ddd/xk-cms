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
    let day = ['七','一','二','三','四','五','六'][d.getDay()];
    let minutes = d.getMinutes();
    minutes = minutes > 9 ? minutes : '0' + minutes;
    let seconds = d.getSeconds();
    seconds = seconds > 9 ? seconds : '0' + seconds;
    return year + '年' + month + '月' + date + '日' + '  星期' + day + '  ' + hours + ':' + minutes + ':' + seconds ;
}

export const serialNumber = (s,num = 6) => (Array(num).join(0) + s).slice(-num);

export default {
    getTime,
    serialNumber
}