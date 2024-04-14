
<template>
  <div>
  
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
// 导入pixi
import { Application,BaseTexture,Rectangle,Sprite,Texture,AnimatedSprite,Container,TilingSprite,Text} from 'pixi.js';

 onMounted(() => {
  //创建应用
  const app = new Application({
    width:window.innerWidth,
    height:window.innerHeight,
    background:'#fff',
    resolution:window.devicePixelRatio || 1,
    antialias:true,//抗锯齿
  });

  //追加元素
  document.body.appendChild(app.view);

  //创建一个容器
  const container = new Container();
  app.stage.addChild(container);

  // 添加恐龙精灵纹理
  const baseTexture = BaseTexture.from('./game.png');

  // 创建恐龙纹理
  const dinoTexture = new Texture(
    baseTexture,
    new Rectangle(75,0,88,100)
  )

  //创建恐龙精灵
  const dino = new Sprite(dinoTexture);
  dino.visible=false;
  container.addChild(dino);

  //创建恐龙跑步动画
  const runTextures = [];

  for(let i =0;i<2;i++){
    runTextures.push(new Texture(
      baseTexture,
      new Rectangle(1680 + (2+i)*88,0,82,100)
    ))
  }

  const runAnimation = new AnimatedSprite(runTextures);
  runAnimation.animationSpeed = 0.1;
  runAnimation.visible = false;
  runAnimation.play();

  container.addChild(runAnimation);

  //恐龙跳跃精灵

  const jumpTexture = new Texture(
    baseTexture,
    new Rectangle(1680,0,82,100)
  )

  const jumpSprite = new Sprite(jumpTexture);
  jumpSprite.x = 60;
  jumpSprite.y = window.innerHeight-50-100;
  jumpSprite.visible=false;
  container.addChild(jumpSprite);
 

  //创建地面精灵
  const groundTexture = new Texture(
    baseTexture,
    new Rectangle(50,100,2300,30),
  )

  const groundSprite = new TilingSprite(groundTexture);
  groundSprite.width = window.innerWidth;
  groundSprite.height = 30;
  //设置地面精灵的位置
  groundSprite.position.set(0,window.innerHeight-50);
  container.addChild(groundSprite);

  //创建仙人掌精灵
  const cactusTexture = new Texture(
    baseTexture,
    new Rectangle(515,0,30,60)
  )

  const cactusSprite = new Sprite(cactusTexture);
  cactusSprite.x = window.innerWidth / 2;
  cactusSprite.y = window.innerHeight -50-60;
  container.addChild(cactusSprite);

  //创建文字

  let startText = new Text('开始游戏',{
    fontFamily:'Arial',
    fontSize:36,
    fill:0x333333,
    align:'center'
  })

  startText.x = window.innerWidth /2;
  startText.y = window.innerHeight /2;
  startText.anchor.set(0.5);//设置文字原点
  container.addChild(startText);

  startText.interactive =true;

  startText.on('click',()=>{
    playGame()
  })

  let isGameing = false;

  //开始游戏
  function playGame(){
    isGameing = true
    console.log('开始游戏')

    runAnimation.visible = true;
    runAnimation.x= 60;
    runAnimation.y = window.innerHeight - 50 - 100;
  }

  //游戏得分
  let score = 0;

  //初始化跳跃的速度
  let jumpVelocity= 20;

  //初始化重力
  let gravity = 1;

  //初始化游戏结束
  let isGameOver = false;
  app.ticker.add((delta)=>{
    if(isGameOver)return; 

    if(isGameing){
      //地面移动
      groundSprite.tilePosition.x -= 10;
      //仙人掌移动
      cactusSprite.x -= 10;
      if(cactusSprite.x<=30){
        cactusSprite.x = window.innerWidth;
        score++;
      }
    }
    if(jumpSprite.visible){
      jumpVelocity -= gravity;
      jumpSprite.y -= jumpVelocity;
      if(jumpSprite.y>window.innerHeight - 50 -100){
        jumpSprite.y = window.innerHeight -50-100;
        jumpVelocity = 20;
        jumpSprite.visible = false;
        runAnimation.visible = true
      }
      
    }
    //检测碰撞
    if(jumpSprite.y>cactusSprite.y-60
    &&cactusSprite.x<jumpSprite.x+60
    &&cactusSprite.x>jumpSprite.x - 60){
      //游戏结束
      gameOver();
      startText.visible = false;
      // 显示游戏结束的文字

      let overText = new Text(`游戏结束，最后得分：${score}分`,{
        fontFamily:'Arial',
        fontSize:36,
        fill:0x333333,
        align:'center'
      })

      overText.x = window.innerWidth / 2;
      overText.y = window.innerHeight / 2;
      overText.anchor.set(0.5);
      container.addChild(overText);

      overText.interactive=true;
      overText.on('click',()=>{
        location.reload();
      })
    }
  })

  function gameOver(){
    isGameOver = true;
  }

  document.addEventListener('keydown',(e)=>{
    if(e.code === 'Space'&&isGameing){
      console.log('跳跃');
      runAnimation.visible=false;
      jumpSprite.visible = true;
      jumpVelocity=20;
    }
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
