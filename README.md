# game_scanner_zebra
Ахтунг!!! Ужасный код внутри, не лезь, он тебя сожрёт.<br>
Перед запуском проверяем, что сканер переведен в режим "Клавиатура USB (HID)"<br>
![](https://raw.githubusercontent.com/wirusoal/wirusoal.github.io/master/image/scannerHID.PNG)<br>
и сканер после завершения сканирования эмулирует клавишу Enter<br>
![](https://raw.githubusercontent.com/wirusoal/wirusoal.github.io/master/image/enter.PNG)<br>
Потом открываем index.html и играемся(проверял только в google chrome).<br>
В файле есть пара настроек<br>
let count_finish = 40; // До скольки играем, игра начинается от count_finish/2 <br>
let timer_show = [200, 600]; // Как быстро появляются штрих-коды. Значение рандомно берется от 200 до 600 мс<br>
let timer_hide = [1200, 3500]; // Тоже самое, но с исчезновением<br>


штрих код для сброса к заводским настройкам <br>
![](https://raw.githubusercontent.com/wirusoal/wirusoal.github.io/master/image/zavod.PNG)<br>
Руководство от сканера <br>
https://postorg.com.ua/published/file/999103/ds2208-qsg-ru.pdf<br>
