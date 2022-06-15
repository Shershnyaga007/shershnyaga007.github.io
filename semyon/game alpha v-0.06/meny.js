var meny = function (mouAtac, curPos){
	
	
	

	var item2 = game.newImageObject({
		file: "grass.png",
		x : camera.getPosition().x+width-100, y : camera.getPosition().y + 250,
		h : 50, w : 50,
		iti : curPos
	})
	var item3 = game.newImageObject({
		file: "PixelTree.png", h : 64, w : 32,
		x : camera.getPosition().x+width-100, y : camera.getPosition().y + 300,
		iti : curPos
	})
	var item4 = game.newImageObject({
		file: "wheat.png", h : 50, w : 50,
		x : camera.getPosition().x+width-100, y : camera.getPosition().y + 364,
		iti : curPos
	})	

	

	
	var men = game.newRectObject({
        x : camera.getPosition().x+width-150,
        y : camera.getPosition().y,
		h : height,
		w : 150,
		fillColor : '#E7B539'
    })
	men.draw()
	

	var menymou3 = game.newRectObject({
	x : camera.getPosition().x+width-135,
	y : camera.getPosition().y+30*4,
	h : 20,
	w : 120,
	fillColor : 'black'
	})	
	var menymou1 = game.newRectObject({
	x : camera.getPosition().x+width-135,
	y : camera.getPosition().y+30,
	h : 20,
	w : 120,
	fillColor : 'black'
	})
	var menymou2 = game.newRectObject({
	x : camera.getPosition().x+width-135,
	y : camera.getPosition().y+30*3,
	h : 20,
	w : 120,
	fillColor : 'black'
	})
	var menymou0 = game.newRectObject({
	x : camera.getPosition().x+width-135,
	y : camera.getPosition().y+30*2,
	h : 20,
	w : 120,
	fillColor : 'black'
	})	
	
	if (mouse.isPeekObject('LEFT', menymou3)){
	    mou = 3
	}
	if (mouse.isPeekObject('LEFT', menymou2)){
	    mou = 2
	}
	if (mouse.isPeekObject('LEFT', menymou1)){
	    mou = 1
	}
	if (mouse.isPeekObject('LEFT', menymou0)){
	    mou = 0
	}
	if (mou == 0){
		if (mouse.isPeekObject('LEFT', item2)){texture = 2}
		if (mouse.isPeekObject('LEFT', item3)){texture = 3}
		if (mouse.isPeekObject('LEFT', item4)){texture = 4}
		item2.draw()
		item3.draw()
		item4.draw()
	}
	
	menymou3.draw() //инвентарь
	menymou2.draw() //удар
	menymou1.draw() //стрельба
	menymou0.draw() //блоки
	
	
	
	
	
    var menymou1text = brush.drawText({
	x : camera.getPosition().x+width-135,
	y : camera.getPosition().y+30-2,
    size : 20,
    color : '#FF0000',
    text : 'стрельба'
    });
	var menymou0text = brush.drawText({
	x : camera.getPosition().x+width-135,
	y : camera.getPosition().y+30*2-2,
    size : 20,
    color : '#FF0000',
    text : 'блоки'
    });
	var menymou2text = brush.drawText({
	x : camera.getPosition().x+width-135,
	y : camera.getPosition().y+30*3-2,
    size : 20,
    color : '#FF0000',
    text : 'удар'
    });	
	var menymou3text = brush.drawText({
	x : camera.getPosition().x+width-135,
	y : camera.getPosition().y+30*4-2,
    size : 20,
    color : '#FF0000',
    text : 'инаентарь'
    });
	

	
	
	
	
	
	
	

	
}