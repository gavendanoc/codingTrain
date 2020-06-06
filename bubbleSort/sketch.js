
// run seerver with Ctrl+Alt+L

const array = [50, 4, 3, 2, 1, 5, 7, 8, 15, 20, 40, 4, 3, 2, 3];
const states = [];

let iterations = 0;

console.log(array);

function setup() {
  createCanvas(600, 400);
  background(200);
  frameRate(10);

  // initial state 'all blacks'
  states.push({
    colorArray: new Array(array.length).fill(color(0, 0, 0)),
    array: array.slice()
  });

  for (let i = 0; i < array.length - 1 ; i++){
    for (let j = 0 ; j < array.length - 1 ; j++){

      const colorArray = new Array(array.length).fill(color(0, 0, 0));

      // mark red the comparing labels
      colorArray[j] = color(255, 0, 0);
      colorArray[j+1] = color(255, 0, 0);

      states.push({
        colorArray: colorArray,
        array: array.slice()
      });


      if (array[j] > array[j+1]){
        // swap
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;

        const colorArraySwap = new Array(array.length).fill(color(0, 0, 0));

        // mark green swaping labels
        colorArraySwap[j] = color(0, 255, 0);
        colorArraySwap[j+1] = color(0, 255, 0);

        states.push({
          colorArray: colorArraySwap,
          array: array.slice()
        });

      }
    }
  }
}

function draw() {
  background(200);
  if (iterations >= states.length){
    iterations = 0;
  }


  currentState = states[iterations];

  const colorArray = currentState['colorArray'];
  const currentArray = currentState['array'];

  // draw rectangles
  for (let i = 0; i < currentArray.length; i++){
    let w = (width) / currentArray.length;
    let h = map(currentArray[i], min(currentArray), max(currentArray), 30, height-60);

    console.log(colorArray[i]);
    fill(colorArray[i]);
    rect(w*i , 0, w - 3, h);
  }

  iterations++;
}
