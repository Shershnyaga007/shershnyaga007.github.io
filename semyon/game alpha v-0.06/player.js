
var movePlay = function (car1){
	var tankMove = 0
	tankMove = 0
	if (key.isDown('W')){
		tankMove = 1
		x = 6
		car1.y -= 4
	}
	if (key.isDown('S')){
		tankMove = 3
		car1.y += 4
		x = 4
	}
	if (key.isDown('D')){
		tankMove = 2
		car1.x += 4
		x = 2
	}
	if (key.isDown('A')){
		tankMove = 4
		car1.x -= 4
		x = 0
	}
	if (tankMove > 0){
		car1.drawFrames(x,1+x)
	}else{car1.drawFrames(x, x)}

}