
<template>
  <div>
  
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
// 导入pixi
import { Application,Graphics} from 'pixi.js';



 onMounted(() => {
  //创建应用
  const app = new Application({
    width:window.innerWidth,
    height:window.innerHeight,
    background:'#1099bb',
    resolution:window.devicePixelRatio || 1,
    antialias:true,//抗锯齿
  });
  //追加元素
  document.body.appendChild(app.view);

  const rectangle = new Graphics();
  // 边框的样式
  rectangle.lineStyle(4,0xff000,1);// 线宽 颜色 透明度
  rectangle.beginFill(0x66ccff,0.9);//填充颜色,透明度从0-1
  rectangle.drawRect(0,0,164,64);//绘制矩形
  rectangle.endFill();//结束绘制

  // 图形的缩放
  // rectangle.scale.set(2,2);

  // 图形的位移
  // rectangle.position.set(100,100)

  // 图形的旋转
  // rectangle.rotation = 0.5;

  // 图形的锚点
  // rectangle.pivot.set(82,32);

  // 创建一个圆形

  const circle = new Graphics();
  circle.beginFill(0x66ccff,0.9);
  circle.drawCircle(0,0,32);
  circle.endFill();
  circle.position.set(300,300);

  app.stage.addChild(circle)
  // 将矩形添加到舞台
  app.stage.addChild(rectangle);
});

</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
canvas{
  width:100vw;
  height:100vh;
  position:fixed;
  left:0;
  top:0;
}
</style>
