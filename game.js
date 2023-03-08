function update() {
    constUpdateStartMenu();
    if(menu == "start_menu")updateStartMenu();
}

// function draw(){

// }
  
function startAnimation() {
    requestAnimationFrame(() => {
        update();
        setTimeout(startAnimation, time_loop);
    });
}

startAnimation();
// draw();