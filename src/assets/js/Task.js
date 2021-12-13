import { getTime } from '@/assets/util/util'

export default class Task {
    constructor(target) {
        this.target = target.slice();
    }
    get data(){
        return this.iterator((item,parent)=>item.pid && parent.children.push(item)).filter(task => task.pid === null);
    }
    get category() {
        return this.iterator();
    }
    iterator(cb){
        let res = this.target.slice();
        res.forEach(item => {
            item.children = [];
            let p = res.find(task => task.id == item.pid);
            console.log(item);
            item.createdTime = getTime(item.createdAt);
            item.category = p && p.category ? p.category + "=>" + item.title : item.title;
            cb && cb(item, p);
        });
        return res;
    }
}