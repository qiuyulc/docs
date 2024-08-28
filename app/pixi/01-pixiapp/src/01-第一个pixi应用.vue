
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
  rectangle.beginFill(0x66ccff);//填充颜色
  rectangle.drawRect(200,200,164,64);//绘制矩形
  rectangle.endFill();//结束绘制

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
