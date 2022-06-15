var inven = function(player, inventar, a, b) {
	
	var invent = game.newRectObject({
        x : camera.getPosition().x,
        y : camera.getPosition().y,
		h : height,
		w : 150,
		fillColor : '#E7B539'
    })
	invent.draw()
	
	OOP.forArr(lyt, function (el, id) {
		if (mouse.isPeekObject('RIGHT', el) && el.isDynamicIntersect(player.getDynamicBox()) && inventar.length <= 5){
			if(el.file == 'stick.png'){
				lyt.splice(id, 1)
				inventar.push({id : 1, sta : 1})
			}
			if(el.file == 'log.png'){
				inventar.push({id : 2, sta : 1})
				lyt.splice(id, 1)
			}
			if(el.file == 'wheat3.png'){
				inventar.push({id : 4, sta : 1})
				lyt.splice(id, 1)
			}
			if(el.file == 'cobblestone1.png'){
				inventar.push({id : 6, sta : 1})
				lyt.splice(id, 1)
			}
		}
	})
	for(i in inventar){
		if(inventar[i].sta == 2){
			pjs.brush.drawRect({
				x : camera.getPosition().x, y : camera.getPosition().y + 60 * i,
				h : 60, w : 150,
				fillColor : 'red'
			})
		}
	}
	for(i in inventar){
		if(inventar[i].id == 1){
			pjs.brush.drawImage({
				file: "stick.png",
				x : camera.getPosition().x+45, y : camera.getPosition().y + 60 * i,
				h : 60, w : 40
			})
		}
		if(inventar[i].id == 2){
			pjs.brush.drawImage({
				file: "log.png",
				x : camera.getPosition().x, y : camera.getPosition().y + 60 * i,
				h : 60, w : 150
			})			
		}
		if(inventar[i].id == 3){
			pjs.brush.drawImage({
				file: "sticka.png",
				x : camera.getPosition().x , y : camera.getPosition().y + 60 * i,
				h : 10, w : 150
			})			
		}
		if(inventar[i].id == 4){
			pjs.brush.drawImage({
				file: "wheat3.png",
				x : camera.getPosition().x + 45, y : camera.getPosition().y + 60 * i,
				h : 60, w : 60
			})			
		}
		if(inventar[i].id == 5){
			pjs.brush.drawImage({
				file: "bow.png",
				x : camera.getPosition().x + 45, y : camera.getPosition().y + 60 * i,
				h : 60, w : 60
			})			
		}
		if(inventar[i].id == 6){
			pjs.brush.drawImage({
				file: "cobblestone2.png",
				x : camera.getPosition().x + 45, y : camera.getPosition().y + 60 * i,
				h : 60, w : 60
			})			
		}
		if(inventar[i].id == 7){
			pjs.brush.drawImage({
				file: "arrow.png",
				x : camera.getPosition().x, y : camera.getPosition().y + 60 * i,
				h : 10, w : 150
			})			
		}
		if(inventar[i].id == 8){
			pjs.brush.drawImage({
				file: "fence1.png",
				x : camera.getPosition().x, y : camera.getPosition().y + 60 * i,
				h : 60, w : 150
			})			
		}
		if(inventar[i].id == 9){
			pjs.brush.drawImage({
				file: "hatchet.png",
				x : camera.getPosition().x+15, y : camera.getPosition().y + 60 * i,
				h : 60, w : 120
			})			
		}	
	}



}
