let info;
async function fetchData() {
  const response = await fetch('/menus/Start menu/main_map.json');
  const data = await response.json();
  info = data;
}

const TILES_IMG = document.getElementById("tile");

let CANVAS_W, CANVAS_H;


let zoom = 100;
const MIN_ZOOM = 25;
const MAX_ZOOM = 200;
let tiles = [];

function drawStartMenu(){
    CANVAS_W = c.width = MAP_W * TILE_W * 3 / 4 + 30;
    CANVAS_H = c.height =  (TILE_H / 2 + MAP_H * TILE_H) / 1.70;
    //--------------
    //TILES CREATING
    if(tiles.length == 0){
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

    for(let i = 0;i < MAP_H;i++){
        for(let j = 0;j < MAP_W;j++){
            if(!buildings_bought[i][j])continue;
            buildings_bought[i][j].draw();
        }        
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

    let lvl_container = document.getElementById("city-lvl");
    lvl_container.innerHTML = player.city_level;
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
    ctx.clearRect(0, 0, c.width, c.height);
    drawStartMenu();
    addResources();
}

fetchData().then(() => {
    drawEverything();
    buildings_bought[56][57] = new GM_Bought(tiles[56][57].x + (TILE_W - 110) / 2, tiles[56][57].y + (TILE_H - 110) / 2 - 36, 56, 57, "producer", gm_coin_upgrade, gm_wood_upgrade, gm_stone_upgrade, gm_energy_cost, gm_xp_gain, gm_max_level, 'assets/Gold_mine_lvl', 'Gold Mine', gm_unlockable);
    buildings_bought[56][56] = new WNM_Bought(tiles[56][56].x + (TILE_W - 110) / 2, tiles[56][56].y + (TILE_H - 110) / 2 - 36, 56, 56, "storage", wnm_coin_upgrade, wnm_wood_upgrade, wnm_stone_upgrade, wnm_energy_cost, wnm_xp_gain, wnm_max_level, 'assets/Windmill_lvl', 'Windmill', wnm_unlockable);
    buildings_bought[57][56] = new MC_Bought(tiles[57][56].x + (TILE_W - 110) / 2, tiles[57][56].y + (TILE_H - 110) / 2 - 36, 57, 56, "townhall", mc_coin_upgrade, mc_wood_upgrade, mc_stone_upgrade, mc_energy_cost, mc_xp_gain, mc_max_level, 'assets/Main_castle_lvl', 'Main castle', mc_unlockable);

    tiles[56][57].hasBuilding = true;
    tiles[56][56].hasBuilding = true;
    tiles[57][56].hasBuilding = true;

    buildings_bought[56][57].draw();
    buildings_bought[56][56].draw();
    buildings_bought[57][56].draw();

    window.scrollBy(CANVAS_W, CANVAS_H);
});

