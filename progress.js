(function(root){
  "use strict";
  var UI = root.Progress || {};
  var container, canvas, ctx, width, height, procent; // Переменные

  function map(x, in_min, in_max, out_min, out_max){ // преобразуем 0..100% в 0..360градусов
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  function draw(procent){ // Тестовое задание на js, значит и progress на js
  	procent = procent || 0; // если не указан процент, то он будет равен нулю
    var centerX = width/2, centerY = height/2, radius = width/2-10
    ctx.clearRect(0,0,width,height);
    ctx.lineWidth = 15;

    ctx.beginPath(); 
    ctx.arc(centerX, centerY, radius, 0, 2.0 * Math.PI, false);
    ctx.strokeStyle = "#ededea";
    ctx.stroke();

    ctx.beginPath();
    var startingAngle = -1.57079632679, endingAngle = map(procent, 0, 100, 0.0, 360.0)*Math.PI/180-1.57079632679;
    ctx.arc(centerX, centerY, radius, startingAngle, endingAngle, false);
    ctx.strokeStyle = "#ffdb4d";
    ctx.stroke();
  }

  function resize(){ // Подгоняем canvas под блок в котором находимся
    width = container.offsetHeight;
    height = container.offsetWidth;
    canvas.width = width;
    canvas.height = height;
  }

  function hide(status){
    if(status == true){
      container.style.display = "none";
    }else{
      container.style.display = "block";
    }
  }

  function Init(opts){ // Инициализация
    opts = opts || {};
    container = document.getElementById(opts.container);
    canvas = document.createElement('canvas'); // Создаем canvas
    resize();
    ctx=canvas.getContext("2d");
    container.appendChild(canvas);
    draw();
    container.addEventListener('resize', resize); // делаем наш Progress динамическим
    var init = {
      draw: draw,
      hide: hide
     }
    return init
  }

  UI.Init = Init;
  root.Progress = UI;
}(this, undefined));