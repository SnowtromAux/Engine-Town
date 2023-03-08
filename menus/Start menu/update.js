function updateStartMenu(){
    
}

function constUpdateStartMenu(){
    for(let i = 0;i < MAP_H;i++){
        for(let j = 0;j < MAP_W;j++){
            if(buildings_bought[i][j])
                buildings_bought[i][j].update();
        }
    }

}