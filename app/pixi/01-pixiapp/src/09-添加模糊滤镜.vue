
<template>
  <div>
  
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
// 导入pixi
import { Application,Sprite,Texture,BlurFilter} from 'pixi.js';



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
  // 设置精灵的位置
  sprite.x = app.screen.width /2;
  sprite.y = app.screen.height/2;

  //设置精灵锚点
  sprite.anchor.set(0.5);

  app.stage.addChild(sprite)

  //创建模糊滤镜
  const blurFilter = new BlurFilter();

  //设置模糊程度
  blurFilter.blur = 20;
  
  //将模糊滤镜添加到精灵上
  sprite.filters = [blurFilter];

  sprite.interactive = true;
  sprite.on('pointerover',()=>{
    console.log('我进来了')
    //设置模糊滤镜的模糊程度
    blurFilter.blur = 0;
  })

  sprite.on('pointerout',()=>{
    console.log('哎，我又出来了')
    blurFilter.blur = 20;
  })
  
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
