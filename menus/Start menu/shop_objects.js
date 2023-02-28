let shop_buildings = new Map();

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

let ws = new Shop_WS(3);
ws.update(); 
shop_buildings.set("http://127.0.0.1:5500/assets/Wood_storage_lvl1.png", ws);
