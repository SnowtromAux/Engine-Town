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

    buy(){
        this.owned++;
    }
}

let ws = new Shop_WS(3);

ws.update(); 

shop_buildings.set("http://127.0.0.1:5500/assets/Wood_storage.png", ws);

class Player{
    constructor(){
        this.city_level = 1;
        this.gems = 150;
        this.coins = 250;
        this.wood = 100;
        this.stone = 100;
        this.energy = 30;
        this.xp = 35;
        this.storage_coin = 500;
        this.storage_wood = 200;
        this.storage_stone = 100;
        this.storage_energy = 50;
    }

    updateResources(){
        addResources();
    }
}


// class CoinStorage{
//     constructor(){
//         this.level = 1;
//     }
// }

// class WoodStorage{
//     constructor(){
//         this.level = 1;
//     }
// }

// class StoneStorage{
//     constructor(){
//         this.level = 1;
//     }
// }

// class EnergyStorage{
//     constructor(){
//         this.level = 1;
//     }
// }

// class MainCastle{
//     constructor(){
//         this.level = 1;
//     }
// }

// let main_castle = new MainCastle();
let player = new Player();
