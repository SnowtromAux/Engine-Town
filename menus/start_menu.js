let info;
async function fetchData() {
  const response = await fetch('main_map.json');
  const data = await response.json();
  info = data;
}

function StartMenu(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    const TILES_IMG = document.getElementById("tile");

    const TILE_W = 140;
    const TILE_H = 150;

    //* In tiles number
    const MAP_W = info.width;
    const MAP_H = info.height;

    const CANVAS_W = c.width = MAP_W * TILE_W * 3 / 4 + 30;
    const CANVAS_H = c.height =  (TILE_H / 2 + MAP_H * TILE_H) / 1.65;

    let zoom = 100;
    const MIN_ZOOM = 25;
    const MAX_ZOOM = 200;


    class Tile{
        constructor(x, y, type, ind1, ind2, occupied){
          this.x = x;
          this.y = y;
          this.type = type;
          this.ind1 = ind1;
          this.ind2 = ind2;
          this.occupied = occupied;
          // this.difficulty = difficulty;
    
          this.w = TILE_W;
          this.h = TILE_H;
          
        }
    
        drawTile(){
            const crop_x = (this.type % 8) * 32;
            const crop_y = Math.floor(this.type / 8) * 48;
            const crop_w = 32;
            const crop_h = 48;
        
            ctx.drawImage(TILES_IMG , crop_x , crop_y, crop_w, crop_h, this.x, this.y - 64, this.w, this.h);
        }

        drawWalls(){
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = "Black";
            ctx.moveTo(this.x + 32, this.y - 5);

            if(this.occupied){
                if(this.ind2 % 2 == 1){
                    if(this.ind1 > 0 && tiles[this.ind1 - 1][this.ind2].occupied)
                        ctx.moveTo(this.x + 106, this.y - 5);
                    else
                        ctx.lineTo(this.x + 106, this.y - 5);

                    
                    if(this.ind2 < MAP_W - 1 && tiles[this.ind1][this.ind2 + 1].occupied)
                        ctx.moveTo(this.x + 140, this.y + 38);
                    else
                        ctx.lineTo(this.x + 140, this.y + 38);


                    if(this.ind1 < MAP_H - 1 && this.ind2 < MAP_W - 1 && tiles[this.ind1 + 1][this.ind2 + 1].occupied)
                        ctx.moveTo(this.x + 106, this.y + 81);
                    else
                        ctx.lineTo(this.x + 106, this.y + 81);

                    
                    if(this.ind1 < MAP_H && tiles[this.ind1 + 1][this.ind2].occupied)
                        ctx.moveTo(this.x + 32, this.y + 81);
                    else
                        ctx.lineTo(this.x + 32, this.y + 81);

                    
                    if(this.ind1 < MAP_H && this.ind2 > 0 && tiles[this.ind1 + 1][this.ind2 - 1].occupied)
                        ctx.moveTo(this.x, this.y + 38);
                    else
                        ctx.lineTo(this.x, this.y + 38);

                    
                    if(this.ind2 > 0 && tiles[this.ind1][this.ind2 - 1].occupied)
                        ctx.moveTo(this.x + 32, this.y-5);
                    else
                        ctx.lineTo(this.x + 32, this.y-5);
                }else{
                    if(this.ind1 > 0 && tiles[this.ind1 - 1][this.ind2].occupied)
                        ctx.moveTo(this.x + 106, this.y - 5);
                    else
                        ctx.lineTo(this.x + 106, this.y - 5);

                    
                    if(this.ind1 > 0 && this.ind2 < MAP_W - 1 && tiles[this.ind1 - 1][this.ind2 + 1].occupied)
                        ctx.moveTo(this.x + 140, this.y + 38);
                    else
                        ctx.lineTo(this.x + 140, this.y + 38);


                    if(this.ind2 < MAP_W - 1 && tiles[this.ind1][this.ind2 + 1].occupied)
                        ctx.moveTo(this.x + 106, this.y + 81);
                    else
                        ctx.lineTo(this.x + 106, this.y + 81);

                    
                    if(this.ind1 < MAP_H && tiles[this.ind1 + 1][this.ind2].occupied)
                        ctx.moveTo(this.x + 32, this.y + 81);
                    else
                        ctx.lineTo(this.x + 32, this.y + 81);

                    
                    if(this.ind2 > 0 && tiles[this.ind1][this.ind2 - 1].occupied)
                        ctx.moveTo(this.x, this.y + 38);
                    else
                        ctx.lineTo(this.x, this.y + 38);

                    
                    if(this.ind1 > 0 && this.ind2 > 0 && tiles[this.ind1 - 1][this.ind2 - 1].occupied)
                        ctx.moveTo(this.x + 32, this.y-5);
                    else
                        ctx.lineTo(this.x + 32, this.y-5);
                    }

                ctx.stroke();
            }
        }
    }

    class Layer2{
        constructor(x, y, type){
          this.x = x;
          this.y = y;
          this.w = 150;
          this.h = 150;
          this.type = type;
        }
    }

    //--------------
    //TILES CREATING
    let tiles = [];

    for(let i = 0;i < MAP_H;i++){
        tiles[i] = [];

        for(let j = 0;j < MAP_W; j++){
            const x =  j * TILE_W * 3 / 4;
            const y = ((j % 2) * TILE_H / 2 + i * TILE_H) / 1.65;
            const type =  info.layers[0].data[i * MAP_W + j] - 1;

            let occupied;
            if(i == 56 && j == 55 ||
                i == 56 && j == 56 ||
                i == 56 && j == 57 ||
                i == 57 && j == 55 ||
                i == 57 && j == 56 ||
                i == 57 && j == 57 ||
                i == 58 && j == 56)
                occupied = true;
            else occupied = false;

            tiles[i][j] = new Tile(x, y, type, i, j, occupied);
        }
    }


    for(let i = 0;i < MAP_H;i++){
        for(let j = 0;j < MAP_W;j+=2)
            tiles[i][j].drawTile();

        for(let j = 1;j < MAP_W;j+=2)
            tiles[i][j].drawTile();
    }

    for(let i = 0;i < MAP_H;i++)
        for(let j = 0;j < MAP_W; j++)
            tiles[i][j].drawWalls();


    window.scrollBy(CANVAS_W, CANVAS_H);
    //document.body.style.zoom = `${ZOOM_LVL} % `;
}






fetchData().then(() => {
   StartMenu();
});