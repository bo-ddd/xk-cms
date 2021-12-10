import { getTime } from '@/assets/util/util';
export default class Task {
    constructor(target) {
        this.target = target.slice();
    }
    /**
 * @description 管理中心页面的任务列表渲染使用；
 * **/
    get category() {
        return this.iterator();
    }
    /**
     * @description 任务中心页面渲染列表使用；
     * **/
    get data() {
        return this.iterator((item, parent) => {
            if (item.pid) parent.children.push(item)
        })
        .filter(task => task.pid === null);
    }
    iterator(cb) {
        let res = this.target.slice();
        res.forEach(item => {
            item.children = [];
            let p = res.find(task => task.id == item.pid);
            item.createdAt = getTime(item.createdAt);
            item.category = p ? p.category + "=>" + item.title : item.title;
            cb && cb(item, p);
        });
        return res;
    }
}

// class Cat{
//     constructor(name){
//         this.name = name;
//     }
//     get catName(){
//         return this.name;
//     },
//     run(){
//         console.log(this.name + '跑起来了')
//     }
// }

// let kitty = new Cat('kitty');

// console.log(kitty.name)  //kitty;

// kitty.run()  //kitty跑起来了

// //kitty.catName // kitty;