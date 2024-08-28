
<template>
  <div>
  
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
// 导入pixi
import { Application,Sprite,Texture,Container,Text,WRAP_MODES,DisplacementFilter} from 'pixi.js';
import {ShockwaveFilter} from 'pixi-filters'


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

  //创建一个纹理

  const texture = Texture.from('./car.jpg');

  //创建一个精灵
  const sprite = new Sprite(texture);
  sprite.width = app.screen.width;
  sprite.height = app.screen.height;

  //创建一个容器
  const container = new Container();
  //将精灵添加到容器中
  container.addChild(sprite);
  //将容器添加到舞台中
  app.stage.addChild(container);

  //添加文字
  //显示文字 Hello world
  const text = new Text('Hello Pixi.js',{
    fontFimily:'Arial',
    fontSize:30*Math.floor(app.screen.width * 0.003),
    fill:0xffffff,
    align:'center',
    dropShadow:true,
    dropShadowColor:'#000',
    dropShadowBlur:4,//阴影模糊度
    dropShadowAngle:Math.PI/2,
    dropShadowDistance:2,
  })

  //设置文字位置
  text.x = app.screen.width/2;
  text.y = app.screen.height/2;
  text.anchor.set(0.5);
  container.addChild(text)

  // 创建置换滤镜
  const displacementSprite = Sprite.from('./displacement.jpg');
  displacementSprite.scale.set(0.5);
  displacementSprite.texture.baseTexture.wrapMode = WRAP_MODES.REPEAT;
  const displacementFilter = new DisplacementFilter(displacementSprite);
  container.addChild(displacementSprite)
  
  // 添加震波滤镜
  const shockwaveFilter1 = new ShockwaveFilter([
    Math.random() * app.screen.width,
    Math.random() * app.screen.height
  ],
  {
    radius:80,
    wavelength:40,//波长
    amplitude:40,//振幅
    speed:200//扩散的速度
  },0);

  // 添加震波滤镜
  const shockwaveFilter2 = new ShockwaveFilter([
    Math.random() * app.screen.width,
    Math.random() * app.screen.height
  ],
  {
    radius:100,
    wavelength:45,//波长
    amplitude:105,//振幅
    speed:200//扩散的速度
  },0);
  // 添加震波滤镜
  const shockwaveFilter3 = new ShockwaveFilter([
    Math.random() * app.screen.width,
    Math.random() * app.screen.height
  ],
  {
    radius:160,
    wavelength:65,//波长
    amplitude:105,//振幅
    speed:300//扩散的速度
  },0);

  container.filters = [displacementFilter,shockwaveFilter1,shockwaveFilter2,shockwaveFilter3];

  app.ticker.add((delta)=>{
    displacementSprite.x +=1;
    displacementSprite.y+=1

    createWave(shockwaveFilter1,1);
    createWave(shockwaveFilter2,1.2);
    createWave(shockwaveFilter3,0.7);

  })

  function createWave(waveFilter,resetTime){
    waveFilter.time +=0.01;
    if(waveFilter.time > resetTime){
      waveFilter.time = 0;
      waveFilter.center=[
        Math.random() * app.screen.width,
        Math.random() * app.screen.height
      ]
    }
  }

  //添加鼠标点击事件，根据位置产生波纹。
  app.view.addEventListener('click',(e)=>{
    shockwaveFilter3.center = [e.clientX,e.clientY]
    shockwaveFilter3.time =0;
  })
}
);

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
