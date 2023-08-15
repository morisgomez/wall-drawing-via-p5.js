//setup function runs once before draw function loops forever. 
//setup = usually where we set up our canvas. 
function setup()
{
  createCanvas(500, 500);
  background("coral");
}

function draw()
{
//top-left quadrant: parallel lines.
  stroke("white"); 
  //lines above turn grey too bc line 12 overides in draw.
  //loop until explicitly specified.
  strokeWeight(7);
  for (let posX = 15; posX < 250; posX += 20)
  {
    line(posX, 8, posX, 245);
  }

//top-right quadrant: circles.
  stroke("#2d778f"); 
  for (let posX = 265; posX <= 500; posX += 28)
  {
    for (let posY = 10; posY <= 250; posY += 28)
    {
      circle(posX, posY, 5);
    }//closes nested for loop.
  }//closes outer for loop.

//bottom-left quadrant: squares.
  stroke("black"); 
  for (let posX = 10; posX <= 250; posX += 28)
  {
    for (let posY = 260; posY <= 500; posY += 28)
    {
      square(posX, posY, 5);
    }//closes nested for loop.
  }//closes outer for loop.

//bottom-right quadrant: eillipses.
 stroke("green"); 
  for (let posX = 265; posX <= 500; posX += 28)
  {
    for (let posY = 260; posY <= 500; posY += 28)
    {
      ellipse(posX, posY, 10, 3);
    }//closes nested for loop.
  }//closes outer for loop.
}//closes draw function.
