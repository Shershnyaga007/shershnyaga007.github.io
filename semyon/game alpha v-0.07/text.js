var text = function (camera){
	brush.drawText({
    x : camera.getPosition().x,
    y : camera.getPosition().y + 20,
    size : 20,
    color : '#FF0000',
    text : 'FPS '+ pjs.system.getFPS()
    });
	
	brush.drawText({
    x : camera.getPosition().x,
    y : camera.getPosition().y,
    size : 20,
    color : '#FF0000',
    text : 'Позиция: '+pjs.OOP.toString(car1.getPosition())
    });
	brush.drawText({
    x : camera.getPosition().x,
    y : camera.getPosition().y+40,
    size : 20,
    color : '#FF0000',
    text : 'alpha v-0.06'
    });
	brush.drawText({
    x : camera.getPosition().x,
    y : camera.getPosition().y+60,
    size : 20,
    color : '#FF0000',
    text : hell
    });
}