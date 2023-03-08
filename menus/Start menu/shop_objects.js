let shop_buildings = new Map();

class Shop_MC{
    constructor(){
        this.count = mc_count[1];
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
        buildings_bought[i][j] = new MC_Bought(x, y, i, j, "townhall", mc_coin_upgrade, mc_wood_upgrade, mc_stone_upgrade, mc_energy_cost, mc_xp_gain, mc_max_level, 'assets/Main_castle_lvl', 'Main castle', mc_unlockable);
        this.owned++;
    }
}

class Shop_GM{
    constructor(){
        this.count = gm_count[1];
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
        buildings_bought[i][j] = new GM_Bought(x, y, i, j, "producer", gm_coin_upgrade, gm_wood_upgrade, gm_stone_upgrade, gm_energy_cost, gm_xp_gain, gm_max_level, 'assets/Gold_mine_lvl', 'Gold Mine', gm_unlockable);
        this.owned++;
    }
}

class Shop_SWM{
    constructor(){
        this.count = swm_count[1];
        this.owned = 0;
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
        buildings_bought[i][j] = new SWM_Bought(x, y, i, j, "producer", swm_coin_upgrade, swm_wood_upgrade, swm_stone_upgrade, swm_energy_cost, swm_xp_gain, swm_max_level, 'assets/Sawmill_lvl', 'Sawmill', swm_unlockable);
        this.owned++;
    }
}


class Shop_QRY{
    constructor(){
        this.count = qry_count[1];
        this.owned = 0;
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
        buildings_bought[i][j] = new QRY_Bought(x, y, i, j, "producer", qry_coin_upgrade, qry_wood_upgrade, qry_stone_upgrade, qry_energy_cost, qry_xp_gain, qry_max_level, 'assets/Quarry_lvl', 'Quarry', qry_unlockable);
        this.owned++;
    }
}

class Shop_GS{
    constructor(){
        this.count = gs_count[1];
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
        buildings_bought[i][j] = new GS_Bought(x, y, i, j, "storage", gs_coin_upgrade, gs_wood_upgrade, gs_stone_upgrade, gs_energy_cost, gs_xp_gain, gs_max_level, 'assets/Gold_storage_lvl', 'Gold Storage', gs_unlockable);
        this.owned++;
    }
}

class Shop_WS{
    constructor(){
        this.count = ws_count[1];
        this.owned = 0;
        this.coin_cost = ws_coin_upgrade[1];
        this.wood_cost = ws_wood_upgrade[1];
        this.stone_cost = ws_stone_upgrade[1];
        this.energy_cost = ws_energy_cost[1];
        this.xp_gain = ws_xp_gain[1];
    }

    update(){
        let ws_card = document.getElementById("wood-storage-card");
        let ws_cost = ws_card.getElementsByClassName("resource-amount");
        let ws_counts = ws_card.getElementsByClassName("building-count")[0];

        ws_cost[0].innerHTML = this.coin_cost;
        ws_cost[1].innerHTML = this.wood_cost;
        ws_cost[2].innerHTML = this.stone_cost;
        ws_cost[3].innerHTML = this.energy_cost;
        ws_cost[4].innerHTML = this.xp_gain;

        if(this.count == 0){
            //Stane cherno i s katinar
            //Trqbva da nameri nai malkiqt level na koito shte poluchish nova sgrada
            for(let i = 1;i <= mc_max_level;i++){
                if(ws_count[i] == 1){
                    ws_card.getElementsByClassName("unlockable")[0].getElementsByTagName("label")[0].innerHTML = `${i}`;                    
                    break;
                }
            }

            ws_counts.innerHTML = "";
            ws_card.style.backgroundColor = "gray";
            ws_card.style.opacity = "0.8";
            ws_card.getElementsByClassName("status-img")[0].src = "/assets/Locked.png";
        }else{
            ws_counts.innerHTML = `${this.owned} / ${this.count}`;
            if(this.count == this.owned){
                ws_card.style.backgroundColor = "gray";
                ws_card.style.opacity = "0.8";
                if(this.count == ws_count[mc_max_level]){
                    //Postroil si vsichkite
                    //Tumen bekgraund + check
                    ws_card.getElementsByClassName("status-img")[0].src = "/assets/Checked.png";
                }else{
                    //Stane cherno i s katinar
                    //Trqbva da nameri nai malkiqt level na koito shte poluchish nova sgrada
                    for(let i = 1;i <= mc_max_level;i++){
                        if(ws_count[i] > this.count){
                            ws_card.getElementsByClassName("unlockable")[0].getElementsByTagName("label")[0].innerHTML = `${i}`;
                            break;
                        }
                    }
                    ws_card.getElementsByClassName("status-img")[0].src = "/assets/Locked.png";

                }
            }else{
                //Normalen transparent background
                ws_card.style.backgroundColor = "transparent";
                ws_card.style.opacity = "1";
                ws_card.getElementsByClassName("status")[0].style.display = "none";
            }
        }
    }

    buy(x, y, i, j){
        buildings_bought[i][j] = new WS_Bought(x, y, i, j, "storage", ws_coin_upgrade, ws_wood_upgrade, ws_stone_upgrade, ws_energy_cost, ws_xp_gain, ws_max_level, 'assets/Wood_storage_lvl', 'Wood Storage', ws_unlockable);
        this.owned++;
    }
}

class Shop_SS{
    constructor(){
        this.count = ss_count[1];
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
        buildings_bought[i][j] = new SS_Bought(x, y, i, j, "storage", ss_coin_upgrade, ss_wood_upgrade, ss_stone_upgrade, ss_energy_cost, ss_xp_gain, ss_max_level, 'assets/Stone_storage_lvl', 'Stone Storage', ss_unlockable);
        this.owned++;
    }
}

class Shop_WNM{
    constructor(){
        this.count = wnm_count[1];
        this.owned = 1;
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
        buildings_bought[i][j] = new WNM_Bought(x, y, i, j, "storage", wnm_coin_upgrade, wnm_wood_upgrade, wnm_stone_upgrade, wnm_energy_cost, wnm_xp_gain, wnm_max_level, 'assets/Windmill_lvl', 'Windmill', wnm_unlockable);
        this.owned++;
    }
}

let mc = new Shop_MC(); 

let gm = new Shop_GM();
let swm = new Shop_SWM();
let qry = new Shop_QRY();

let gs = new Shop_GS();
let ws = new Shop_WS();
let ss = new Shop_SS();
let wnm = new Shop_WNM();


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
