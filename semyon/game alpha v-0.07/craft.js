	var craftingStica = function(b){

		pjs.brush.drawImage({
			file: 'sticka.png',
			x : camera.getPosition().x+(150 * b), y : camera.getPosition().y + game.getWH().h -20,
			h : 20, w : 150
		})
		if (mouse.isDown('LEFT') 
		&& mouse.getPosition().y >= camera.getPosition().y + game.getWH().h -20
		&& mouse.getPosition().y <= camera.getPosition().y + game.getWH().h
		&& mouse.getPosition().x >= camera.getPosition().x + (150 * b)
		&& mouse.getPosition().x <= camera.getPosition().x + (150 * b) + 150
		){
			
			for(var v = 0; v < inventar.length; v++){
				if(inventar[v].id == 1  && inventar[v].sta == 2){
					inventar.splice(v, 1)
					inventar.push({id : 3, sta : 1})
					sticks -=1
					break
				}
			}
		}
		b = b+1
	}
	var craftingBow = function(b){
		pjs.brush.drawImage({
			file: 'bow.png',
			x : camera.getPosition().x+(150 * b), y : camera.getPosition().y + game.getWH().h -60,
			h : 60, w : 60
		})
		if (mouse.isDown('LEFT') 
		&& mouse.getPosition().y >= camera.getPosition().y + game.getWH().h -60
		&& mouse.getPosition().y <= camera.getPosition().y + game.getWH().h
		&& mouse.getPosition().x >= camera.getPosition().x + (150*b)
		&& mouse.getPosition().x <= camera.getPosition().x + (150*b) + 150
		){
			
			for(var v = 0; v < inventar.length; v++){
				if(inventar[v].id == 4  && inventar[v].sta == 2){
					inventar.splice(v, 1)
					inventar.push({id : 5, sta : 1})
					wheats -= 1
					break
				}
			}
			for(var v = 0; v < inventar.length; v++){
				if(inventar[v].id == 3  && inventar[v].sta == 2){
					inventar.splice(v, 1)
					stickas -= 1
					break
				}
			}			
		}
		return 1
	}	
	var craftingArrow = function(b){

		pjs.brush.drawImage({
			file: 'arrow.png',
			x : camera.getPosition().x+(150 * b), y : camera.getPosition().y + game.getWH().h -10,
			h : 10, w : 150
		})
		
		if (mouse.isDown('LEFT') 
		&& mouse.getPosition().y >= camera.getPosition().y + game.getWH().h -10
		&& mouse.getPosition().y <= camera.getPosition().y + game.getWH().h
		&& mouse.getPosition().x >= camera.getPosition().x + (150 * b) 
		&& mouse.getPosition().x <= camera.getPosition().x + (150 * b) + 150
		){
			
			for(var v = 0; v < inventar.length; v++){
				if(inventar[v].id == 4  && inventar[v].sta == 2){
					inventar.splice(v, 1)
					inventar.push({id : 7, sta : 1})
					stickas -= 1
					break
				}
			}
			for(var v = 0; v < inventar.length; v++){
				if(inventar[v].id == 3  && inventar[v].sta == 2){
					inventar.splice(v, 1)
					wheats -= 1
					break
				}
			}
			for(var v = 0; v < inventar.length; v++){
				if(inventar[v].id == 6  && inventar[v].sta == 2){
					inventar.splice(v, 1)
					stones -= 1
					break
				}
			}	
		}
		return 1
	}
	var craftingHatchet = function(b){
		
		pjs.brush.drawImage({
			file: 'hatchet.png',
			x : camera.getPosition().x+(150 * b), y : camera.getPosition().y + game.getWH().h -30,
			h : 30, w : 150
		})
		
		if (mouse.isDown('LEFT') 
		&& mouse.getPosition().y >= camera.getPosition().y + game.getWH().h -30
		&& mouse.getPosition().y <= camera.getPosition().y + game.getWH().h
		&& mouse.getPosition().x >= camera.getPosition().x + (150 * b)
		&& mouse.getPosition().x <= camera.getPosition().x + (150 * b) + 150
		)
		{
			
			for(var v = 0; v < inventar.length; v++){
				if(inventar[v].id == 4  && inventar[v].sta == 2){
					inventar.splice(v, 1)
					inventar.push({id : 9, sta : 1})
					stickas -= 1
					break
				}
			}
			for(var v = 0; v < inventar.length; v++){
				if(inventar[v].id == 3  && inventar[v].sta == 2){
					inventar.splice(v, 1)
					wheats -= 1
					break
				}
			}
			for(var v = 0; v < inventar.length; v++){
				if(inventar[v].id == 6  && inventar[v].sta == 2){
					inventar.splice(v, 1)
					stones -= 1
					break
				}
			}	
		}
		return 1
	}




 