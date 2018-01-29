
var height_slider = document.getElementById('height_slider');
var height = height_slider.value;
var height_count = document.getElementById('height_count');
height_count.innerHTML = height_slider.value;
var brick_selector = document.getElementById('brick_selector');
var brick = brick_selector.value;
var pyramid = document.getElementById('pyramid');

function generate_pyramid(height) {
  document.getElementById('pyramid').innerHTML = '';
  for (row = 0; row < height; row++) {
    var numBricks = row + 2;
    var numSpaces = height - row - 1;
    var rowStr = ''
    for (var i = 0; i < numSpaces; i++) {
      rowStr += "&nbsp";
    }
    for (var i = 0; i < numBricks; i++) {
      rowStr += brick;
    }
    rowElem = document.createElement('p');
    document.getElementById('pyramid').appendChild(rowElem);
    rowElem.innerHTML = rowStr;
  }
}  

generate_pyramid(height_slider.value);

brick_selector.addEventListener('change', function(e) {
  brick = brick_selector.value;
  generate_pyramid(height);
})

height_slider.addEventListener('mousemove', function(e) {
  height = height_slider.value;
  height_count.innerHTML = height;
  generate_pyramid(height);
})