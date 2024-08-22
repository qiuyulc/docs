
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

  // 将矩形添加到舞台
  app.stage.addChild(rectangle);

  // 创建一个圆形

  const circle = new Graphics();
  circle.beginFill(0x66ccff,0.9);
  circle.drawCircle(0,0,32);
  circle.endFill();
  circle.position.set(100,200);

  app.stage.addChild(circle)

  // 绘制圆角矩形

  const roundeRectangle = new Graphics();
  roundeRectangle.beginFill(0x66ccff,0.9);
  roundeRectangle.drawRoundedRect(0,0,164,64,10);//x,y,w,h,radius
  roundeRectangle.position.set(80,300)
  roundeRectangle.endFill();

  app.stage.addChild(roundeRectangle)
  
  // 绘制椭圆

  const ellipse = new Graphics();
  ellipse.beginFill(0x66ccff,0.9);
  ellipse.drawEllipse(0,0,164,64);//x,y,w,h
  ellipse.position.set(180,500)
  ellipse.endFill();
  app.stage.addChild(ellipse);


  // 绘制多边形

  const polygon =new Graphics();
  polygon.beginFill(0x66ccff,0.9);
  polygon.drawPolygon([0,0,100,0,100,100,0,100]);// 绘制多边形，参数是一个数组，每个元素是一个点的坐标
  polygon.endFill();
  polygon.position.set(50,600)
  app.stage.addChild(polygon);

  //绘制圆弧

  const arc = new Graphics();
  arc.beginFill(0x66ccff,0.9);

  arc.arc(0,0,32,0,Math.PI,false);
  arc.endFill();
  arc.position.set(300,50);
  app.stage.addChild(arc)

  //绘制线段

  const line = new Graphics();
  line.lineStyle(4, 0x66ccff, 1);
  line.moveTo(0, 0);
  line.lineTo(100, 100);
  line.lineTo(200, 0);
  line.position.set(500, 50);
  app.stage.addChild(line);
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
