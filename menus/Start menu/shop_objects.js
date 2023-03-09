let shop_buildings = new Map();

class Shop_Buildings{
    constructor(bld_count, count, owned, coin_upgrade, wood_upgrade, stone_upgrade, energy_cost, xp_gain, card_name){
        this.bld_count = bld_count;
        this.count = count;
        this.owned = owned;
        this.coin_cost = coin_upgrade[1];
        this.wood_cost = wood_upgrade[1];
        this.stone_cost = stone_upgrade[1];
        this.energy_cost = energy_cost[1];
        this.xp_gain = xp_gain[1];
        this.card_name = card_name;
    }

    update(){
        let card = document.getElementById(this.card_name);
        let cost = card.getElementsByClassName("resource-amount");
        let counts = card.getElementsByClassName("building-count")[0];

        cost[0].innerHTML = this.coin_cost;
        cost[1].innerHTML = this.wood_cost;
        cost[2].innerHTML = this.stone_cost;
        cost[3].innerHTML = this.energy_cost;
        cost[4].innerHTML = this.xp_gain;

        if(this.count == 0){
            //Stane cherno i s katinar
            //Trqbva da nameri nai malkiqt level na koito shte poluchish nova sgrada
            card.getElementsByClassName("status")[0].style.display = "flex";
            card.getElementsByClassName("building-img")[0].style.cursor = "auto";
            for(let i = 1;i <= mc_max_level;i++){
                if(this.bld_count[i] == 1){
                    card.getElementsByClassName("unlockable")[0].getElementsByTagName("label")[0].innerHTML = `${i}`;                    
                    break;
                }
            }

            counts.innerHTML = "";
            card.style.backgroundColor = "gray";
            card.style.opacity = "0.8";
            card.getElementsByClassName("status-img")[0].src = "/assets/Locked.png";
        }else{
            counts.innerHTML = `${this.owned} / ${this.count}`;
            if(this.count == this.owned){
                card.getElementsByClassName("status")[0].style.display = "flex";
                card.getElementsByClassName("building-img")[0].style.cursor = "auto";
                card.style.backgroundColor = "gray";
                card.style.opacity = "0.8";
                if(this.count == this.bld_count[mc_max_level]){
                    //Postroil si vsichkite
                    //Tumen bekgraund + check
                    card.getElementsByClassName("status-img")[0].src = "/assets/Checked.png";
                    card.getElementsByClassName("unlockable")[0].style.display = "none";
                    card.getElementsByClassName("status-img")[0].style.marginBottom = "4vh";
                }else{
                    //Stane cherno i s katinar
                    //Trqbva da nameri nai malkiqt level na koito shte poluchish nova sgrada
                    for(let i = 1;i <= mc_max_level;i++){
                        if(this.bld_count[i] > this.count){
                            card.getElementsByClassName("unlockable")[0].getElementsByTagName("label")[0].innerHTML = `${i}`;
                            break;
                        }
                    }
                    card.getElementsByClassName("status-img")[0].src = "/assets/Locked.png";

                }
            }else{
                //Normalen transparent background
                card.getElementsByClassName("building-img")[0].style.cursor = "pointer";
                card.style.backgroundColor = "transparent";
                card.style.opacity = "1";
                card.getElementsByClassName("status")[0].style.display = "none";
            }
        }
    }
}

class Shop_MC extends Shop_Buildings{
    buy(x, y, i, j){
        buildings_bought[i][j] = new MC_Bought(x, y, i, j, "townhall", mc_coin_upgrade, mc_wood_upgrade, mc_stone_upgrade, mc_energy_cost, mc_xp_gain, mc_max_level, 'assets/Main_castle_lvl', 'Main castle', mc_unlockable);
        this.owned++;
    }
}

class Shop_GM extends Shop_Buildings{
    buy(x, y, i, j){
        buildings_bought[i][j] = new GM_Bought(x, y, i, j, "producer", gm_coin_upgrade, gm_wood_upgrade, gm_stone_upgrade, gm_energy_cost, gm_xp_gain, gm_max_level, 'assets/Gold_mine_lvl', 'Gold Mine', gm_unlockable);
        this.owned++;
    }
}

class Shop_SWM extends Shop_Buildings{
    buy(x, y, i, j){
        buildings_bought[i][j] = new SWM_Bought(x, y, i, j, "producer", swm_coin_upgrade, swm_wood_upgrade, swm_stone_upgrade, swm_energy_cost, swm_xp_gain, swm_max_level, 'assets/Sawmill_lvl', 'Sawmill', swm_unlockable);
        this.owned++;
    }
}


class Shop_QRY extends Shop_Buildings{
    buy(x, y, i, j){
        buildings_bought[i][j] = new QRY_Bought(x, y, i, j, "producer", qry_coin_upgrade, qry_wood_upgrade, qry_stone_upgrade, qry_energy_cost, qry_xp_gain, qry_max_level, 'assets/Quarry_lvl', 'Quarry', qry_unlockable);
        this.owned++;
    }
}

class Shop_GS extends Shop_Buildings{
    buy(x, y, i, j){
        buildings_bought[i][j] = new GS_Bought(x, y, i, j, "storage", gs_coin_upgrade, gs_wood_upgrade, gs_stone_upgrade, gs_energy_cost, gs_xp_gain, gs_max_level, 'assets/Gold_storage_lvl', 'Gold Storage', gs_unlockable);
        this.owned++;
    }
}

class Shop_WS extends Shop_Buildings{
    buy(x, y, i, j){
        buildings_bought[i][j] = new WS_Bought(x, y, i, j, "storage", ws_coin_upgrade, ws_wood_upgrade, ws_stone_upgrade, ws_energy_cost, ws_xp_gain, ws_max_level, 'assets/Wood_storage_lvl', 'Wood Storage', ws_unlockable);
        this.owned++;
    }
}

class Shop_SS extends Shop_Buildings{
    buy(x, y, i, j){
        buildings_bought[i][j] = new SS_Bought(x, y, i, j, "storage", ss_coin_upgrade, ss_wood_upgrade, ss_stone_upgrade, ss_energy_cost, ss_xp_gain, ss_max_level, 'assets/Stone_storage_lvl', 'Stone Storage', ss_unlockable);
        this.owned++;
    }
}

class Shop_WNM extends Shop_Buildings{
    buy(x, y, i, j){
        buildings_bought[i][j] = new WNM_Bought(x, y, i, j, "storage", wnm_coin_upgrade, wnm_wood_upgrade, wnm_stone_upgrade, wnm_energy_cost, wnm_xp_gain, wnm_max_level, 'assets/Windmill_lvl', 'Windmill', wnm_unlockable);
        this.owned++;
    }
}

// count, owned, coin_upgrade, wood_upgrade, stone_upgrade, energy_cost, xp_gain, card_name

let mc = new Shop_MC(mc_count, mc_count[1], 1, mc_coin_upgrade, mc_wood_upgrade, mc_stone_upgrade, mc_energy_cost, mc_xp_gain, "main-castle-card"); 

let gm = new Shop_GM(gm_count, gm_count[1], 1, gm_coin_upgrade, gm_wood_upgrade, gm_stone_upgrade, gm_energy_cost, gm_xp_gain, "gold-mine-card");
let swm = new Shop_SWM(swm_count, swm_count[1], 0, swm_coin_upgrade, swm_wood_upgrade, swm_stone_upgrade, swm_energy_cost, swm_xp_gain, "sawmill-card");
let qry = new Shop_QRY(qry_count, qry_count[1], 0, qry_coin_upgrade, qry_wood_upgrade, qry_stone_upgrade, qry_energy_cost, qry_xp_gain, "quarry-card");

let gs = new Shop_GS(gs_count, gs_count[1], 0, gs_coin_upgrade, gs_wood_upgrade, gs_stone_upgrade, gs_energy_cost, gs_xp_gain, "gold-storage-card");
let ws = new Shop_WS(ws_count, ws_count[1], 0, ws_coin_upgrade, ws_wood_upgrade, ws_stone_upgrade, ws_energy_cost, ws_xp_gain, "wood-storage-card");
let ss = new Shop_SS(ss_count, ss_count[1], 0, ss_coin_upgrade, ss_wood_upgrade, ss_stone_upgrade, ss_energy_cost, ss_xp_gain, "stone-storage-card");
let wnm = new Shop_WNM(wnm_count, wnm_count[1], 1, wnm_coin_upgrade, wnm_wood_upgrade, wnm_stone_upgrade, wnm_energy_cost, wnm_xp_gain, "windmill-card");


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
