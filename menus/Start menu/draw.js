let info;
async function fetchData() {
  const response = await fetch('/menus/Start menu/main_map.json');
  const data = await response.json();
  info = data;
}

const TILES_IMG = document.getElementById("tile");


const TILE_W = 140;
const TILE_H = 150;

//* In tiles number
let  MAP_W, MAP_H;

let CANVAS_W, CANVAS_H;


let zoom = 100;
const MIN_ZOOM = 25;
const MAX_ZOOM = 200;
let tiles = [];


class Tile{
    constructor(x, y, type, ind1, ind2, occupied){
      this.x = x;
      this.y = y;
      this.type = type;
      this.ind1 = ind1;
      this.ind2 = ind2;
      this.occupied = occupied;
      this.hasBuilding = false;
      // this.difficulty = difficulty;

      this.w = TILE_W;
      this.h = TILE_H;
    }

    drawTile(){
        const crop_x = (this.type % 8) * 32;
        const crop_y = Math.floor(this.type / 8) * 48;
        const crop_w = 32;
        const crop_h = 47;
    
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

class Buildings_Bought{
    constructor(x, y, src/*, ind1, ind2*/){
        this.x = x;
        this.y = y;
        this.src = src;
        // this.ind1 = ind1;
        // this.ind2 = ind2; 
        this.w = 110;
        this.h = 110;
    }

    draw(){
        ctx.drawImage(this.src, this.x, this.y, this.w, this.h);
    }
}

let buildings_bought = [];

function drawStartMenu(){
    MAP_W = info.width;
    MAP_H = info.height;

    CANVAS_W = c.width = MAP_W * TILE_W * 3 / 4 + 30;
    CANVAS_H = c.height =  (TILE_H / 2 + MAP_H * TILE_H) / 1.70;
    //--------------
    //TILES CREATING
    for(let i = 0;i < MAP_H;i++){
        tiles[i] = [];

        for(let j = 0;j < MAP_W; j++){
            const x =  j * TILE_W * 3 / 4;
            const y = ((j % 2) * TILE_H / 2 + i * TILE_H) / 1.70;
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

    for(let i = 0;i < buildings_bought.length;i++){
        buildings_bought[i].draw();
    }


    //document.body.style.zoom = `${ZOOM_LVL} % `;
}

function addResources(){
    let gem_container = document.getElementById("gem-amount");
    gem_container.innerHTML = player.gems;
    
    
    let coins_container = document.getElementById("coin-amount");
    let coin_part = document.getElementById("coin-total-coins");
    coins_container.innerHTML = player.coins;
    coin_part.style.width = calculateCoinsPart() + "%";
    
    
    let wood_container = document.getElementById("wood-amount");
    let wood_part = document.getElementById("wood-total-wood");
    wood_container.innerHTML = player.wood;
    wood_part.style.width = calculateWoodPart() + "%";
    
    
    let stone_container = document.getElementById("stone-amount");
    let stone_part = document.getElementById("stone-total-stones");
    stone_container.innerHTML = player.stone;
    stone_part.style.width = calculateStonePart() + "%";
    
    let energy_container = document.getElementById("energy-amount");
    let energy_part = document.getElementById("energy-total-energy");
    energy_container.innerHTML = player.energy;
    energy_part.style.width = calculateEnergyPart() + "%";
    
    let xp_container = document.getElementById("xp-amount");
    let xp_part = document.getElementById("xp-total-xp");
    xp_container.innerHTML = player.xp;
    xp_part.style.width = calculateXpPart() + "%";
}

function calculateCoinsPart(){
    return player.coins / player.storage_coin * 100;
}

function calculateWoodPart(){
    return player.wood / player.storage_wood * 100;
}

function calculateStonePart(){
    if(player.storage_stone == 0)return 0;
    return player.stone / player.storage_stone * 100;
}

function calculateEnergyPart(){
    if(player.storage_energy == 0)return 0;
    return player.energy / player.storage_energy * 100;
}

function calculateXpPart(){
    return player.xp / levels_xp[player.city_level] * 100;
}

function drawEverything(){
    drawStartMenu();
    addResources();
}

fetchData().then(() => {
    drawEverything();
    window.scrollBy(CANVAS_W, CANVAS_H);
});

