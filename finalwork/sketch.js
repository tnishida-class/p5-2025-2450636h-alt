// 最終課題を制作しよう

let flagY;         // 旗の上端の位置
let poleX = 150;   // ポールのX位置
let flagW = 200;   // 旗の幅
let flagH = 120;   // 旗の高さ

function setup(){
  createCanvas(windowWidth, windowHeight);
  flagY = 100;   // 初期位置
}

function draw(){
  background(160, 192, 255);

  // ポール
  fill(150);
  rect(poleX, 50, 10, height - 100);

  // キー操作
  if (keyIsDown(UP_ARROW))    flagY -= 2;
  if (keyIsDown(DOWN_ARROW))  flagY += 2;
  if(keyIsDown("W".charCodeAt(0))&&keyIsDown(UP_ARROW)){ flagY-= 4; }
  if(keyIsDown("S".charCodeAt(0))&&keyIsDown(DOWN_ARROW)){ flagY+= 4; }

  // 範囲制限
  flagY = constrain(flagY, 50, height - 100 - flagH);

  // 旗の描画
  drawFlag(poleX + 10, flagY);
}

function drawFlag(x, y){
  // 白地
  fill(255);
  rect(x, y, flagW, flagH);
  //水色ドット
  let dotSize = 15;     // ドットの大きさ
  for (let dx = 20; dx < flagW; dx += 40){
  for (let dy = 20; dy < flagH; dy += 40){
    noStroke();
    fill(120, 200, 255);   // 水色
    ellipse(x + dx, y + dy, dotSize);
    }
  }
}
// ウィンドウリサイズ
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}