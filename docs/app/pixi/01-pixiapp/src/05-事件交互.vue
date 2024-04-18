
<template>
  <div>
  
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
// 导入pixi
import { Application,Texture,Graphics, Sprite} from 'pixi.js';



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

  // 创建一个纹理
  const texture = Texture.from('./mujian.png');

  // 创建一个精灵
  const sprite = new Sprite(texture);

  //设置精灵的锚点 居中
  sprite.anchor.set(0.5,0.5);

  sprite.x = app.screen.width/2;
  sprite.y = app.screen.height/2;

  // 设置精灵旋转45度
  sprite.rotation=Math.PI/4;

  // 设置精灵的缩放
  sprite.scale.set(2,2);
  
  // 设置旋转
  sprite.alpha = 0.5;

  //ticker 实现动画

  app.ticker.add((delta)=>{
    sprite.rotation += 0.01 * delta;
  })
  // 为精灵添加交互事件

  sprite.interactive = true;
  sprite.on('click',()=>{
    console.log('click')
  })

  // 绘制一个图形
  const rect =new Graphics();

  rect.beginFill(0xff0000);
  rect.drawRect(0,0,100,100);
  rect.endFill();
  rect.x = 100;
  rect.y = 100;
  app.stage.addChild(rect);

  rect.interactive =true;
  rect.on('click',()=>{
    console.log('rect click')
  })

  sprite.on('pointerenter',()=>{
    sprite.alpha = 1;
  })
  
  sprite.on('pointerout',()=>{
sprite.alpha = 0.5
  })

  app.stage.addChild(sprite);
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
