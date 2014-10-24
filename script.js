var matrix = document.getElementById("matrix"),
    context = matrix.getContext("2d"),
    ukrainian = "юабцде╙фгх╡╞ийклмнопярстужвьыэчъ",
    font_size = 15,
    columns = matrix.width/font_size,
    drops = [];
        
matrix.height = window.innerHeight;
matrix.width = window.innerWidth;

ukrainian = ukrainian.split("");

for(var x = 0; x < columns; x++)
	drops[x] = 1; 

function draw()
{
	context.fillStyle = "rgba(0, 0, 0, 0.05)";
	context.fillRect(0, 0, matrix.width, matrix.height);
	
	context.fillStyle = "#7CFC00"; 
	context.font = font_size + "px arial";
	
        for(var i = 0; i < drops.length; i++)
	{
            var text = ukrainian[Math.floor(Math.random()*ukrainian.length)];
	    context.fillText(text, i*font_size, drops[i]*font_size);
	    
            if(drops[i]*font_size > matrix.height && Math.random() > 0.975)
		drops[i] = 0;
		drops[i]++;
	}
}

setInterval(draw, 45);
