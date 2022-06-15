
	var addTile = function (texture, player) {
		var cellW  = 64,
			cellh  = 64;
		var onTile = false ;
		
		
		onTile = true
		for (el in tilas){
			if (tilas[el].isDynamicIntersect(camera.getDynamicBox())){
				tilas[el].draw();
			}
		}
		OOP.forArr(fon, function (el, id) {
			if (mouse.isPeekObject('RIGHT', el)&& mou == 0 && texture == 2){
				return fon.splice(id, 1);
			}
			if (mouse.isInObject(el)&& texture == 2){
				onTile = false
			}
		})
		OOP.forArr(slou, function (el, id) {
			if (mouse.isPeekObject('RIGHT', el)&& mou == 0 && texture == 3){
				hellSlou.splice(id, 1)
				return slou.splice(id, 1);
				
			}
			if (mouse.isInObject(el)&& texture == 3){
				onTile = false
			}
			if(mouse.isPeekObject('LEFT', el) && mou == 2){
				if(player.isDynamicIntersect(el.getDynamicBox())){
					hellSlou[id] -= 1
				}
			}	
		})
		OOP.forArr(slou, function (el, id) {
			if (mouse.isPeekObject('RIGHT', el)&& mou == 0 && texture == 4){
				return slou.splice(id, 1);
			}
			if (mouse.isInObject(el) && texture == 4){
				onTile = false
			}
		})
		
		if (mou == 0 && onTile == true && mouse.isPress('LEFT') && mouse.getPosition().x<=camera.getPosition().x+width-150){
			if (texture == 2){fon.push(
				game.newImageObject({
				file: "grass.png",
				x : curPos.x = cellW * Math.floor(mouse.getPosition().x / cellW), y : curPos.y = cellh * Math.floor(mouse.getPosition().y / cellh)
				}))
			}	
			if (texture == 1){tilas.push(
				game.newImageObject({
				file: "block.png", h : 64, w : 64,
				x : curPos.x = cellW * Math.floor(mouse.getPosition().x / cellW), y : curPos.y = cellh * Math.floor(mouse.getPosition().y / cellh)
				}))
			}
			if (texture == 3){slou.push(
				game.newImageObject({
				file: "PixelTree.png", h : 64, w : 32,
				x : mouse.getPosition().x-32/2, y : mouse.getPosition().y-32
				}))
				hellSlou.push(10)
			}
			if (texture == 4){slou.push(
				game.newAnimationObject({
				animation : pjs.tiles.newImage('wheat2.png').getAnimation(0, 0, 123, 120, 2),
				h : 60/10*7, w : 64/10*7,
				x : mouse.getPosition().x - 15, y : mouse.getPosition().y - 16,
				delay : 40
				}))
			}
		}
		var drawCell = function (mp){
			brush.drawRect({
				x : curPos.x = cellW * Math.floor(mouse.getPosition().x / cellW),
				y : curPos.y = cellh * Math.floor(mouse.getPosition().y / cellh),
				w : cellW,
				h : cellh,
				strokeColor : 'red',
				strokeWidth : 1
			});	
		};
		if (mou == 0){
			drawCell();
		}
		
	}
	
	
