import Vue from 'vue'
import {Toast} from "vant";

Vue.directive("myLazy", (el) => {
   let showPage = 1;// 当前展示页数
   let maxPage = 1;// 最大页数
   let arr = [];
   let mission = null;// 正在执行的加载任务

   Vue.nextTick(() => {
      let height = 0;// 累计高度
      for (let item of el.children) {
         if (height >= el.clientHeight * maxPage) maxPage++;// 当前页已放满，增加页数
         height += item.clientHeight;// 累计高度
         let obj = {pageNum: maxPage, height};
         arr.push(obj);
         if (maxPage > showPage) item.style.display = "none";// 隐藏不展示内容
      }
   })

   // 加载新内容
   let changeShowDom = () => {
      showPage++;// 增加页数
      for (let i in arr) {
         // 找到页数对应dom下标，展示对应dom
         if (arr[i].pageNum === showPage) el.children[i].style.display = "";
      }
   }

   // 滚动监听
   el.onscroll = () => {
      if (mission) return;// 阻止连续触发
      let scrollTop = el.scrollTop; // 滚动高度
      let clientHeight = el.clientHeight; //可见高度


      for (let i = arr.length - 1; i > 0; i--) {
         if (showPage === arr[i].pageNum && scrollTop + clientHeight >= arr[i].height - 30) {
            // 已滚动至当前页面底部
            Toast.loading({mask: true, duration: 300});// 加载动画
            changeShowDom();// 加载新内容
            mission = setTimeout(() => { mission = null }, 300);// 300毫秒后取消监听限制
            break;
         }
      }
      if (showPage >= maxPage) {
          console.log("...");
          clearTimeout(mission);
          el.onscroll = null;
      }// 全部加载完毕，关闭滚动监听
   };
})
