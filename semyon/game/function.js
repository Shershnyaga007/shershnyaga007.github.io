var hit = function (bul, camera, player){

	for (a in slou){
		for (i in buls){
			if (slou[a].isDynamicIntersect(buls[i].getDynamicBox())){
				hellSlou[a] -= 1;
				buls.splice(i, 1);
			}
		}
	}
	
	for(a in hellSlou){
		if (hellSlou[a] <= 0 && slou[a].file == 'PixelTree.png'){
			lyt.push(log = game.newImageObject({
				file: "log.png",
				x : slou[a].x-10, y : slou[a].y+20,
				h : 15, w : 45
			}))
			lyt.push(stick = game.newImageObject({
				file: "stick.png",
				x : slou[a].x-15, y : slou[a].y+20,
				h : 30, w : 20
			}))
			slou.splice(a, 1)
			hellSlou.splice(a, 1)
		}
		if (hellSlou[a] <= 0 && slou[a].h == 42 && slou[a].w == 64/10*7){
			lyt.push(wheat3 = game.newImageObject({
				file: "wheat3.png",
				x : slou[a].x+15, y : slou[a].y+20,
				h : 20, w : 25
			}))
			slou.splice(a, 1)
			hellSlou.splice(a, 1)
		}
		if (hellSlou[a] <= 0){
			if(slou[a].file == 'cobblestone2.png' || slou[a].file == 'cobblestone1.png'){
				lyt.push(stone = game.newImageObject({
					file: "cobblestone1.png",
					x : slou[a].x+15, y : slou[a].y+20,
					h : 20, w : 25
				}))
				slou.splice(a, 1)
				hellSlou.splice(a, 1)
			}
		}
	}
	
	if (buls.length >= 30){ buls.splice(29, 29)}
}
var bubbleSort1 = function(data){
	for(var b = 0; b < data.length; b++){
		for(var i = 0; i < data.length; i++){
			var con1, con2;
			con1 = data[i]
			con2 = data[b]
			co1 = hellSlou[i]
			co2 = hellSlou[b]
			if (con1.y + con1.h > con2.y + con2.h){
				data[i] = con2;
				data[b] = con1;
				hellSlou[i] = co2;
				hellSlou[b] = co1;
				break
			}
		}
	}
}