const TILE_W = 140;
const TILE_H = 150;

//* In tiles number
const  MAP_W = 60, MAP_H = 60;

const levels_xp = [0, 100, 200, 300, 400, 500, 600];

const coin_storage = [0, 400, 500, 600, 800, 1000];
const wood_storage = [0, 400, 500, 600, 800, 1000];
// const stone_storage = [0, 400, 500, 600, 800, 1000];
// const energy_storage = [0, 400, 500, 600, 800, 1000];

const main_castle_coin = [0, 3000, 6000, 9000, 12000, 16000, 19000, 22000, 25000, 28000, 31000, 34000, 37000, 40000, 43000];
const main_castle_wood = [0, 3000, 6000, 9000, 12000, 16000, 19000, 22000, 25000, 28000, 31000, 34000, 37000, 40000, 43000];
const main_castle_stone = [0, 3000, 6000, 9000, 12000, 16000, 19000, 22000, 25000, 28000, 31000, 34000, 37000, 40000, 43000];

let coin_storages = [];
let wood_storages = [];
// let stone_storages = [];

//cs = coin storage
//ws = wood storage
//ss = stone storage
//es = energy storage

//-----------------------------------------------
//WOOD STORAGE
const ws_coin_upgrade = [0, 100, 200, 300, 400, 500];
const ws_wood_upgrade = [0, 0, 100, 200, 300, 400];
const ws_stone_upgrade = [0, 0, 0, 0, 100, 200];
const ws_energy_cost = [0, 5, 10, 15, 20, 30];
const ws_xp_gain = [0, 5, 10, 20, 30, 40];



let buildings_bought = [];

for(let i = 0;i < 60;i++){
    buildings_bought[i] = [];
    for(let j = 0; j < 60;j++){
        
    }
}
























