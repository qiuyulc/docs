
<template>
  <div>
  
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
// 导入pixi
import { Application,Text,Sprite,Graphics} from 'pixi.js';



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

  //显示文字 Hello world
  const text = new Text('Hello world',{
    fontFimily:'Arial',
    fontSize:180,
    fill:0xff0000,
    align:'center'
  })
  //设置文字位置
  text.x=app.screen.width/2;
  text.y=app.screen.height/2;

  //设置文字锚点
  text.anchor.set(0.5);

  // app.stage.addChild(text);


  //创建一个圆形
  const circle = new Graphics();
  circle.beginFill(0x0000ff);
  circle.drawCircle(app.screen.width/2,app.screen.height/2,100);
  circle.endFill();

  //木剑遮罩
  const mujian = Sprite.from('./mujian.png');

  //创建一个精灵
  const bunny = Sprite.from('./bg.png');
  

  //用精灵铺满整个屏幕
  bunny.width=app.screen.width;
  bunny.height = app.screen.height;
  // bunny.mask = text;
  // bunny.mask=circle;
  bunny.mask=mujian;
  app.stage.addChild(bunny)
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
