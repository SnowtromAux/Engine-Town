const TILE_W = 140;
const TILE_H = 150;

//* In tiles number
const  MAP_W = 60, MAP_H = 60;

const levels_xp = [0, 10, 20, 35, 50, 70, 95, 120, 150, 180, 210, 230, 255, 270, 290, 335, 370, 425, 465, 500, 550,
                      620, 680, 770, 860, 950, 1070, 1100, 1150, 1200, 1230, 1400, 1460, 1530, 1600, 1650, 1700, 1750, 1820, 1900, 2000];

//-----------------------------------------------
//MAIN CASTLE
const mc_max_level = 20;//*
const mc_coin_upgrade = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
const mc_wood_upgrade = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
const mc_stone_upgrade = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
const mc_energy_cost = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 80, 90, 100, 110, 120, 130, 150];
const mc_xp_gain = [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
const mc_count = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];//* 
const mc_coin_cap = [0, 3000, 6000, 9000, 12000, 16000, 19000, 22000, 25000, 28000, 31000, 34000, 37000, 40000, 43000, 47000, 50000, 55000, 60000, 75000, 100000];
const mc_wood_cap = [0, 3000, 6000, 9000, 12000, 16000, 19000, 22000, 25000, 28000, 31000, 34000, 37000, 40000, 43000, 47000, 50000, 55000, 60000, 75000, 100000];
const mc_stone_cap = [0, 3000, 6000, 9000, 12000, 16000, 19000, 22000, 25000, 28000, 31000, 34000, 37000, 40000, 43000, 47000, 50000, 55000, 60000, 75000, 100000];
const mc_energy_cap = [0, 30, 50, 70, 100, 140, 180, 230, 290, 350, 410, 500, 610, 730, 890, 1050, 1200, 1350, 1500, 1700, 2000];//*
const mc_unlockable = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


//*-----------------------------------------------
//*GOLD MINE
const gm_max_level = 12;
const gm_coin_upgrade = [0, 750, 2000, 4000, 7000, 10000, 15000, 25000, 40000, 60000, 85000, 120000, 150000];
const gm_wood_upgrade = [0, 0, 0, 0, 900, 2500, 5000, 10000, 25000, 40000, 75000, 115000, 150000];
const gm_stone_upgrade = [0, 0, 0, 0, 0, 0, 0, 0, 1500, 8000, 25000, 75000, 150000];
const gm_energy_cost = [0, 3, 2, 3, 4, 3, 5, 5, 5, 5, 5, 10, 20];
const gm_xp_gain = [0, 4, 7, 10, 15, 20, 25, 30, 40, 50, 75, 100, 200];
const gm_production = [0, 50, 100, 140, 250, 330, 420, 500, 650, 1000, 1500, 2000, 3000];
const gm_capacity = [0, 150, 300, 500, 750, 1000, 1250, 1500, 2000, 3000, 4500, 6000, 10000];
const gm_unlockable = [0, 1, 3, 5, 7, 10, 13, 16, 19, 22, 26, 30, 35];
const gm_count = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7];

//*-----------------------------------------------
//*SAWMILL
const swm_max_level = 12;
const swm_coin_upgrade = [0, 750, 2000, 4000, 7000, 10000, 15000, 25000, 40000, 60000, 85000, 120000, 150000];
const swm_wood_upgrade = [0, 0, 0, 0, 900, 2500, 5000, 10000, 25000, 40000, 75000, 115000, 150000];
const swm_stone_upgrade = [0, 0, 0, 0, 0, 0, 0, 0, 1500, 8000, 25000, 75000, 150000];
const swm_energy_cost = [0, 3, 2, 3, 4, 3, 5, 5, 5, 5, 5, 10, 20];
const swm_xp_gain = [0, 4, 7, 10, 15, 20, 25, 30, 40, 50, 75, 100, 200];
const swm_production = [0, 50, 100, 140, 250, 330, 420, 500, 650, 1000, 1500, 2000, 3000];
const swm_capacity = [0, 150, 300, 500, 750, 1000, 1250, 1500, 2000, 3000, 4500, 6000, 10000];
const swm_unlockable = [0, 5, 6, 7, 9, 12, 15, 18, 22, 26, 30, 32, 35];
const swm_count = [0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6, 7];

//*-----------------------------------------------
//*QUARRY
const qry_max_level = 12;
const qry_coin_upgrade = [0, 750, 2000, 4000, 7000, 10000, 15000, 25000, 40000, 60000, 85000, 120000, 150000];
const qry_wood_upgrade = [0, 0, 0, 0, 900, 2500, 5000, 10000, 25000, 40000, 75000, 115000, 150000];
const qry_stone_upgrade = [0, 0, 0, 0, 0, 0, 0, 0, 1500, 8000, 25000, 75000, 150000];
const qry_energy_cost = [0, 3, 2, 3, 4, 3, 5, 5, 5, 5, 5, 10, 20];
const qry_xp_gain = [0, 4, 7, 10, 15, 20, 25, 30, 40, 50, 75, 100, 200];
const qry_production = [0, 50, 100, 140, 250, 330, 420, 500, 650, 1000, 1500, 2000, 3000];
const qry_capacity = [0, 150, 300, 500, 750, 1000, 1250, 1500, 2000, 3000, 4500, 6000, 10000];
const qry_unlockable = [0, 20, 21, 22, 23, 25, 27, 29, 30, 31, 32, 33, 35];
const qry_count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 4, 5, 5, 6, 6, 6, 6, 7];

//*-----------------------------------------------
//*GOLD STORAGE
const gs_max_level = 12;
const gs_coin_upgrade = [0, 1000, 2250, 4205, 7325, 11000, 18110, 32230, 55150, 75200, 101300, 162500, 223570];
const gs_wood_upgrade = [0, 0, 0, 0, 1100, 2780, 5230, 10790, 32450, 68730, 94700, 157040, 223570];
const gs_stone_upgrade = [0, 0, 0, 0, 0, 0, 0, 1830, 9420, 31330, 75880, 141210, 223570];
const gs_energy_cost = [0, 4, 3, 4, 4, 5, 5, 6, 6, 8, 10, 15, 20];
const gs_xp_gain = [0, 5, 9, 13, 18, 23, 29, 39, 55, 69, 83, 98, 124, 150];
const gs_count = [0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5];
const gs_unlockable = [0, 2, 4, 6, 8, 11, 14, 17, 21, 24, 27, 31, 35];
const gs_capacity = [0, 500, 1250, 2200, 3500, 6500, 10550, 15500, 22500, 31000, 39000, 45000, 60000];

//*-----------------------------------------------
//*WOOD STORAGE
const ws_max_level = 12;
const ws_coin_upgrade = [0, 1000, 2250, 4205, 7325, 11000, 18110, 32230, 55150, 75200, 101300, 162500, 223570];
const ws_wood_upgrade = [0, 0, 0, 0, 1100, 2780, 5230, 10790, 32450, 68730, 94700, 157040, 223570];
const ws_stone_upgrade = [0, 0, 0, 0, 0, 0, 0, 1830, 9420, 31330, 75880, 141210, 223570];
const ws_energy_cost = [0, 4, 3, 4, 4, 5, 5, 6, 6, 8, 10, 15, 20];
const ws_xp_gain = [0, 5, 9, 13, 18, 23, 29, 39, 55, 69, 83, 98, 124, 150];
const ws_count = [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5];
const ws_unlockable = [0, 10, 11, 13, 15, 17, 19, 21, 23, 26, 29, 32, 35];
const ws_capacity = [0, 500, 1250, 2200, 3500, 6500, 10550, 15500, 22500, 31000, 39000, 45000, 60000];


//*-----------------------------------------------
//*STONE STORAGE
const ss_max_level = 12;
const ss_coin_upgrade = [0, 1000, 2250, 4205, 7325, 11000, 18110, 32230, 55150, 75200, 101300, 162500, 223570];
const ss_wood_upgrade = [0, 0, 0, 0, 1100, 2780, 5230, 10790, 32450, 68730, 94700, 157040, 223570];
const ss_stone_upgrade = [0, 0, 0, 0, 0, 0, 0, 1830, 9420, 31330, 75880, 141210, 223570];
const ss_energy_cost = [0, 4, 3, 4, 4, 5, 5, 6, 6, 8, 10, 15, 20];
const ss_xp_gain = [0, 5, 9, 13, 18, 23, 29, 39, 55, 69, 83, 98, 124, 150];
const ss_count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 4, 4, 5, 5];
const ss_unlockable = [0, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 32, 35];
const ss_capacity = [0, 500, 1250, 2200, 3500, 6500, 10550, 15500, 22500, 31000, 39000, 45000, 60000];

//*-----------------------------------------------
//*WINDMILL
const wnm_max_level = 6;
const wnm_coin_upgrade = [0, 1210, 5320, 17240, 55415, 112055, 173120];
const wnm_wood_upgrade = [0, 0, 3120, 15430, 47215, 107125, 173120];
const wnm_stone_upgrade = [0, 0, 0, 6730, 31425, 92305, 173120];
const wnm_energy_cost = [0, 5, 0, 0, 0, 0, 0];
const wnm_xp_gain = [0, 9, 18, 37, 55, 72, 90];
const wnm_count = [0, 2, 3, 5, 7, 9, 11, 13, 16, 19, 21, 23, 25, 27, 29, 32, 35, 37, 38, 39, 40];
const wnm_unlockable = [0, 1, 7, 21, 27, 31, 35];
const wnm_capacity = [0, 20, 30, 50, 75, 100, 200];




let buildings_bought = [];

for(let i = 0;i < 60;i++){
    buildings_bought[i] = [];
    for(let j = 0; j < 60;j++){
        
    }
}