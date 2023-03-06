let shop_buildings = new Map();

class Shop_MC{
    constructor(count){
        this.count = count;
        this.owned = 1;
        this.coin_cost = mc_coin_upgrade[1];
        this.wood_cost = mc_wood_upgrade[1];
        this.stone_cost = mc_stone_upgrade[1];
        this.energy_cost = mc_energy_cost[1];
        this.xp_gain = mc_xp_gain[1];
    }

    update(){
        let mc_cost = document.getElementById("main-castle-card").getElementsByClassName("resource-amount");
        let mc_count = document.getElementById("main-castle-card").getElementsByClassName("building-count")[0];

        mc_cost[0].innerHTML = this.coin_cost;
        mc_cost[1].innerHTML = this.wood_cost;
        mc_cost[2].innerHTML = this.stone_cost;
        mc_cost[3].innerHTML = this.energy_cost;
        mc_cost[4].innerHTML = this.xp_gain;
        mc_count.innerHTML = `${this.owned} / ${this.count}`;
    }

    buy(x, y, i, j){
        buildings_bought[i][j] = new MC_Bought(x, y, i, j);
        this.owned++;
    }
}

class Shop_GM{
    constructor(count){
        this.count = count;
        this.owned = 1;
        this.coin_cost = gm_coin_upgrade[1];
        this.wood_cost = gm_wood_upgrade[1];
        this.stone_cost = gm_stone_upgrade[1];
        this.energy_cost = gm_energy_cost[1];
        this.xp_gain = gm_xp_gain[1];
    }

    update(){
        let gm_cost = document.getElementById("gold-mine-card").getElementsByClassName("resource-amount");
        let gm_count = document.getElementById("gold-mine-card").getElementsByClassName("building-count")[0];

        gm_cost[0].innerHTML = this.coin_cost;
        gm_cost[1].innerHTML = this.wood_cost;
        gm_cost[2].innerHTML = this.stone_cost;
        gm_cost[3].innerHTML = this.energy_cost;
        gm_cost[4].innerHTML = this.xp_gain;
        gm_count.innerHTML = `${this.owned} / ${this.count}`;
    }

    buy(x, y, i, j){
        buildings_bought[i][j] = new GM_Bought(x, y, i, j);
        this.owned++;
    }
}

class Shop_SWM{
    constructor(count){
        this.count = count;
        this.owned = 1;
        this.coin_cost = swm_coin_upgrade[1];
        this.wood_cost = swm_wood_upgrade[1];
        this.stone_cost = swm_stone_upgrade[1];
        this.energy_cost = swm_energy_cost[1];
        this.xp_gain = swm_xp_gain[1];
    }

    update(){
        let swm_cost = document.getElementById("sawmill-card").getElementsByClassName("resource-amount");
        let swm_count = document.getElementById("sawmill-card").getElementsByClassName("building-count")[0];

        swm_cost[0].innerHTML = this.coin_cost;
        swm_cost[1].innerHTML = this.wood_cost;
        swm_cost[2].innerHTML = this.stone_cost;
        swm_cost[3].innerHTML = this.energy_cost;
        swm_cost[4].innerHTML = this.xp_gain;
        swm_count.innerHTML = `${this.owned} / ${this.count}`;
    }

    buy(x, y, i, j){
        buildings_bought[i][j] = new SWM_Bought(x, y, i, j);
        this.owned++;
    }
}


class Shop_QRY{
    constructor(count){
        this.count = count;
        this.owned = 1;
        this.coin_cost = qry_coin_upgrade[1];
        this.wood_cost = qry_wood_upgrade[1];
        this.stone_cost = qry_stone_upgrade[1];
        this.energy_cost = qry_energy_cost[1];
        this.xp_gain = qry_xp_gain[1];
    }

    update(){
        let qry_cost = document.getElementById("quarry-card").getElementsByClassName("resource-amount");
        let qry_count = document.getElementById("quarry-card").getElementsByClassName("building-count")[0];

        qry_cost[0].innerHTML = this.coin_cost;
        qry_cost[1].innerHTML = this.wood_cost;
        qry_cost[2].innerHTML = this.stone_cost;
        qry_cost[3].innerHTML = this.energy_cost;
        qry_cost[4].innerHTML = this.xp_gain;
        qry_count.innerHTML = `${this.owned} / ${this.count}`;
    }

    buy(x, y, i, j){
        buildings_bought[i][j] = new QRY_Bought(x, y, i, j);
        this.owned++;
    }
}

class Shop_GS{
    constructor(count){
        this.count = count;
        this.owned = 0;
        this.coin_cost = gs_coin_upgrade[1];
        this.wood_cost = gs_wood_upgrade[1];
        this.stone_cost = gs_stone_upgrade[1];
        this.energy_cost = gs_energy_cost[1];
        this.xp_gain = gs_xp_gain[1];
    }

    update(){
        let gs_cost = document.getElementById("gold-storage-card").getElementsByClassName("resource-amount");
        let gs_count = document.getElementById("gold-storage-card").getElementsByClassName("building-count")[0];

        gs_cost[0].innerHTML = this.coin_cost;
        gs_cost[1].innerHTML = this.wood_cost;
        gs_cost[2].innerHTML = this.stone_cost;
        gs_cost[3].innerHTML = this.energy_cost;
        gs_cost[4].innerHTML = this.xp_gain;
        gs_count.innerHTML = `${this.owned} / ${this.count}`;
    }

    buy(x, y, i, j){
        buildings_bought[i][j] = new GS_Bought(x, y, i, j);
        this.owned++;
    }
}

class Shop_WS{
    constructor(count){
        this.count = count;
        this.owned = 0;
        this.coin_cost = ws_coin_upgrade[1];
        this.wood_cost = ws_wood_upgrade[1];
        this.stone_cost = ws_stone_upgrade[1];
        this.energy_cost = ws_energy_cost[1];
        this.xp_gain = ws_xp_gain[1];
    }

    update(){
        let ws_cost = document.getElementById("wood-storage-card").getElementsByClassName("resource-amount");
        let ws_count = document.getElementById("wood-storage-card").getElementsByClassName("building-count")[0];

        ws_cost[0].innerHTML = this.coin_cost;
        ws_cost[1].innerHTML = this.wood_cost;
        ws_cost[2].innerHTML = this.stone_cost;
        ws_cost[3].innerHTML = this.energy_cost;
        ws_cost[4].innerHTML = this.xp_gain;
        ws_count.innerHTML = `${this.owned} / ${this.count}`;
    }

    buy(x, y, i, j){
        buildings_bought[i][j] = new WS_Bought(x, y, i, j);
        this.owned++;
    }
}

class Shop_SS{
    constructor(count){
        this.count = count;
        this.owned = 0;
        this.coin_cost = ss_coin_upgrade[1];
        this.wood_cost = ss_wood_upgrade[1];
        this.stone_cost = ss_stone_upgrade[1];
        this.energy_cost = ss_energy_cost[1];
        this.xp_gain = ss_xp_gain[1];
    }

    update(){
        let ss_cost = document.getElementById("stone-storage-card").getElementsByClassName("resource-amount");
        let ss_count = document.getElementById("stone-storage-card").getElementsByClassName("building-count")[0];

        ss_cost[0].innerHTML = this.coin_cost;
        ss_cost[1].innerHTML = this.wood_cost;
        ss_cost[2].innerHTML = this.stone_cost;
        ss_cost[3].innerHTML = this.energy_cost;
        ss_cost[4].innerHTML = this.xp_gain;
        ss_count.innerHTML = `${this.owned} / ${this.count}`;
    }

    buy(x, y, i, j){
        buildings_bought[i][j] = new SS_Bought(x, y, i, j);
        this.owned++;
    }
}

class Shop_WNM{
    constructor(count){
        this.count = count;
        this.owned = 0;
        this.coin_cost = wnm_coin_upgrade[1];
        this.wood_cost = wnm_wood_upgrade[1];
        this.stone_cost = wnm_stone_upgrade[1];
        this.energy_cost = wnm_energy_cost[1];
        this.xp_gain = wnm_xp_gain[1];
    }

    update(){
        let wnm_cost = document.getElementById("windmill-card").getElementsByClassName("resource-amount");
        let wnm_count = document.getElementById("windmill-card").getElementsByClassName("building-count")[0];

        wnm_cost[0].innerHTML = this.coin_cost;
        wnm_cost[1].innerHTML = this.wood_cost;
        wnm_cost[2].innerHTML = this.stone_cost;
        wnm_cost[3].innerHTML = this.energy_cost;
        wnm_cost[4].innerHTML = this.xp_gain;
        wnm_count.innerHTML = `${this.owned} / ${this.count}`;
    }

    buy(x, y, i, j){
        buildings_bought[i][j] = new WNM_Bought(x, y, i, j);
        this.owned++;
    }
}

let mc = new Shop_MC(1);

let gm = new Shop_GM(3);
let swm = new Shop_SWM(3);
let qry = new Shop_QRY(3);

let gs = new Shop_GS(3);
let ws = new Shop_WS(3);
let ss = new Shop_SS(3);
let wnm = new Shop_WNM(3);


mc.update();

gm.update();
swm.update();
qry.update();

gs.update();
ws.update(); 
ss.update();
wnm.update();

shop_buildings.set("http://127.0.0.1:5500/assets/Main_castle_lvl1.png", mc)

shop_buildings.set("http://127.0.0.1:5500/assets/Gold_mine_lvl1.png", gm)
shop_buildings.set("http://127.0.0.1:5500/assets/Sawmill_lvl1.png", swm)
shop_buildings.set("http://127.0.0.1:5500/assets/Quarry_lvl1.png", qry)

shop_buildings.set("http://127.0.0.1:5500/assets/Gold_storage_lvl1.png", gs);
shop_buildings.set("http://127.0.0.1:5500/assets/Wood_storage_lvl1.png", ws);
shop_buildings.set("http://127.0.0.1:5500/assets/Stone_storage_lvl1.png", ss);
shop_buildings.set("http://127.0.0.1:5500/assets/Windmill_lvl1.png", wnm);
