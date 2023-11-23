
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img)
	 {
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '77') 
	{
		block_x = 0;
		new_image('mao_zedong.jpg');
		console.log("m")
	}
	if(keyPressed == '65')
	{
		block_x = 200;
		new_image('adolf_hitler.jpg');
		console.log("a")
	}
	
	if(keyPressed == '74')
	{
		block_x =400;
		new_image('joseph_stalin.jpg');
		console.log("j");
	}
	if(keyPressed == '67')
	{
		block_x = 600;
		new_image('chiang_kaishek.jpg');
		console.log("c")
	}
	if(keyPressed == '76')
	{
		block_x = 800;
		new_image('leopold_ii.jpg');
		console.log("l")
	}
	
}

