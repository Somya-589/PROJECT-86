var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
var blockIMG="BirthdayImage.jpg";
function new_image()
{
	fabric.Image.fromURL(blockIMG,function(I_M_G){
        blockimageobject = I_M_G;
        blockimageobject.scaleToWidth(700);
        blockimageobject.scaleToHeight(510);
        blockimageobject.set({
            top:0,
            left:0
        });
        canvas.add(blockimageobject);
    });
	
};

function playSound(){
	x.plays();
};
