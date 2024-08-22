
<template>
  <div>
  
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
// 导入pixi
import { Application, Sprite,Assets,BLEND_MODES,Container} from 'pixi.js';



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
  // const texture = Texture.from('./mujian.png');

  // // 创建一个精灵
  // const sprite = new Sprite(texture);

  // //设置精灵的锚点 居中
  // sprite.anchor.set(0.5,0.5);

  // sprite.x = app.screen.width/2;
  // sprite.y = app.screen.height/2;

  // // 设置精灵旋转45度
  // sprite.rotation=Math.PI/4;

  // // 设置精灵的缩放
  // sprite.scale.set(2,2);
  
  // // 设置旋转
  // sprite.alpha = 0.5;


  // 添加资源

  Assets.add('jian','./jian.png');
  Assets.add('man','./man.png');
  Assets.add('mujian','./mujian.png');

  //异步加载资源

  const texturesPromise = Assets.load(['jian','man','mujian'],(progress)=>{
    console.log('加载',progress)
  });


  //加载完成后的回调函数
texturesPromise.then((texture)=>{

  //创建容器
  const container =new Container()
  const sprite = new Sprite(texture.jian);
  
  //设置精灵位置
  sprite.x = app.screen.width/2;
  sprite.y = app.screen.height/2;

  //设置精灵锚点
  sprite.anchor.set(0.5);

  //设置精灵缩放
  sprite.scale.set(0.5,0.5);
  
  //设置精灵透明度
  sprite.alpha = 0.5;

  //设置精灵旋转
  sprite.rotation = 0.5;

  //设置精灵混合模式
  sprite.blendMode = BLEND_MODES.ADD;

  //设置精灵交互
  sprite.interactive =true;

  //设置精灵鼠标样式
  sprite.buttonMode = true;

  //设置精灵鼠标事件
  sprite.on('pointerdown',()=>{
    console.log('pointerdown')
  })

  //添加精灵到舞台
  container.addChild(sprite)

  //创建精灵
  const sprite2 = new Sprite(texture.man)
  sprite2.scale.set(0.1)
  container.addChild(sprite2)

  app.stage.addChild(container)
})


  //ticker 实现动画

  // app.ticker.add((delta)=>{
  //   sprite.rotation += 0.01 * delta;
  // })
  
  // app.stage.addChild(sprite);
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
