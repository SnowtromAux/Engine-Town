class Tile{
    constructor(x, y, type, ind1, ind2, occupied){
      this.x = x;
      this.y = y;
      this.type = type;
      this.ind1 = ind1;
      this.ind2 = ind2;
      this.occupied = occupied;
      this.hasBuilding = false;
      this.buildsrc = undefined;
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



class GM_Bought{
    constructor(x, y, ind1, ind2){
        this.x = x;
        this.y = y;
        this.ind1 = ind1;
        this.ind2 = ind2;
        this.src =  `/assets/Gold_mine_lvl1.png`;
        this.level = 1;
        this.w = 110;
        this.h = 110;
    }

    draw(){
        let img = new Image();
        img.src = this.src;
        if(this.level == 1)ctx.drawImage(img, this.x, this.y - 5, this.w, this.h);
        else if(this.level == 2)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 3)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 4)ctx.drawImage(img, this.x, this.y - 6, this.w, this.h);
        else if(this.level == 5)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 6)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 7)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 8)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 9)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 10)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else if(this.level == 11)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else ctx.drawImage(img, this.x, this.y - 15, this.w, this.h);
    }

    upgradeBuilding(){
        if(this.level == gm_max_level)return;

        this.level++;
        
        if(gm_coin_upgrade[this.level] > player.coins || 
           gm_wood_upgrade[this.level] > player.wood || 
           gm_stone_upgrade[this.level] > player.stone || 
           gm_energy_cost + player.energy > player.storage_energy){
            this.level--;
        }else{
            this.src = `/assets/Gold_mine_lvl${this.level}.png`;
            this.showUpgrade();
            player.coins -= gm_coin_upgrade[this.level];
            player.wood -= gm_wood_upgrade[this.level];
            player.stone -= gm_stone_upgrade[this.level];
            player.energy += gm_energy_cost[this.level];
            player.xp += gm_xp_gain[this.level];
            player.updateResources();
        }
    }

    showInfo(){

    }

    showUpgrade(){
        if(this.level == gm_max_level){
            document.getElementById("upgrade-image").src = `/assets/Gold_mine_lvl${this.level}.png`;
            document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Gold mine lvl (${this.level})`;
            const upgrade_container = document.getElementById("upg-resources");
            let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
            resources_upgrade[0].innerHTML = "Maxed"
            resources_upgrade[1].innerHTML = "Maxed";
            resources_upgrade[2].innerHTML = "Maxed";
            resources_upgrade[3].innerHTML = "Maxed";
            resources_upgrade[4].innerHTML = "Maxed";
            return;
        }

        document.getElementById("upgrade-image").src = `/assets/Gold_mine_lvl${this.level + 1}.png`;
        document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Gold mine lvl (${this.level})`;

        const upgrade_container = document.getElementById("upg-resources");
        let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
        resources_upgrade[0].innerHTML = gm_coin_upgrade[this.level + 1];
        resources_upgrade[1].innerHTML = gm_wood_upgrade[this.level + 1];
        resources_upgrade[2].innerHTML = gm_stone_upgrade[this.level + 1];
        resources_upgrade[3].innerHTML = gm_energy_cost[this.level + 1];
        resources_upgrade[4].innerHTML = gm_xp_gain[this.level + 1];
    }

    openInfoAndUpgrade(){
        const bottom_bar = document.getElementById("bottom-middle-bar");
        bottom_bar.style.display = "flex";
        document.getElementById("building-text-holder").innerHTML = `Gold mine (lvl ${this.level})`;
    }
}

class SWM_Bought{
    constructor(x, y, ind1, ind2){
        this.x = x;
        this.y = y;
        this.ind1 = ind1;
        this.ind2 = ind2;
        this.src =  `/assets/Sawmill_lvl1.png`;
        this.level = 1;
        this.w = 110;
        this.h = 110;
    }

    draw(){
        let img = new Image();
        img.src = this.src;
        if(this.level == 1)ctx.drawImage(img, this.x, this.y - 5, this.w, this.h);
        else if(this.level == 2)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 3)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 4)ctx.drawImage(img, this.x, this.y - 6, this.w, this.h);
        else if(this.level == 5)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 6)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 7)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 8)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 9)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 10)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else if(this.level == 11)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else ctx.drawImage(img, this.x, this.y - 15, this.w, this.h);
    }

    upgradeBuilding(){
        if(this.level == swm_max_level)return;

        this.level++;
        
        if(swm_coin_upgrade[this.level] > player.coins || 
           swm_wood_upgrade[this.level] > player.wood || 
           swm_stone_upgrade[this.level] > player.stone || 
           swm_energy_cost + player.energy > player.storage_energy){
            this.level--;
        }else{
            this.src = `/assets/Sawmill_lvl${this.level}.png`;
            this.showUpgrade();
            player.coins -= swm_coin_upgrade[this.level];
            player.wood -= swm_wood_upgrade[this.level];
            player.stone -= swm_stone_upgrade[this.level];
            player.energy += swm_energy_cost[this.level];
            player.xp += swm_xp_gain[this.level];
            player.updateResources();
        }
    }

    showInfo(){

    }

    showUpgrade(){
        if(this.level == swm_max_level){
            document.getElementById("upgrade-image").src = `/assets/Sawmill_lvl${this.level}.png`;
            document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Sawmill lvl (${this.level})`;
            const upgrade_container = document.getElementById("upg-resources");
            let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
            resources_upgrade[0].innerHTML = "Maxed"
            resources_upgrade[1].innerHTML = "Maxed";
            resources_upgrade[2].innerHTML = "Maxed";
            resources_upgrade[3].innerHTML = "Maxed";
            resources_upgrade[4].innerHTML = "Maxed";
            return;
        }

        document.getElementById("upgrade-image").src = `/assets/Sawmill_lvl${this.level + 1}.png`;
        document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Sawmill lvl (${this.level})`;

        const upgrade_container = document.getElementById("upg-resources");
        let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
        resources_upgrade[0].innerHTML = swm_coin_upgrade[this.level + 1];
        resources_upgrade[1].innerHTML = swm_wood_upgrade[this.level + 1];
        resources_upgrade[2].innerHTML = swm_stone_upgrade[this.level + 1];
        resources_upgrade[3].innerHTML = swm_energy_cost[this.level + 1];
        resources_upgrade[4].innerHTML = swm_xp_gain[this.level + 1];
    }

    openInfoAndUpgrade(){
        const bottom_bar = document.getElementById("bottom-middle-bar");
        bottom_bar.style.display = "flex";
        document.getElementById("building-text-holder").innerHTML = `Sawmill (lvl ${this.level})`;
    }
}

class QRY_Bought{
    constructor(x, y, ind1, ind2){
        this.x = x;
        this.y = y;
        this.ind1 = ind1;
        this.ind2 = ind2;
        this.src =  `/assets/Quarry_lvl1.png`;
        this.level = 1;
        this.w = 110;
        this.h = 110;
    }

    draw(){
        let img = new Image();
        img.src = this.src;
        if(this.level == 1)ctx.drawImage(img, this.x, this.y - 5, this.w, this.h);
        else if(this.level == 2)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 3)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 4)ctx.drawImage(img, this.x, this.y - 6, this.w, this.h);
        else if(this.level == 5)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 6)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 7)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 8)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 9)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 10)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else if(this.level == 11)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else ctx.drawImage(img, this.x, this.y - 15, this.w, this.h);
    }

    upgradeBuilding(){
        if(this.level == qry_max_level)return;

        this.level++;
        
        if(qry_coin_upgrade[this.level] > player.coins || 
           qry_wood_upgrade[this.level] > player.wood || 
           qry_stone_upgrade[this.level] > player.stone || 
           qry_energy_cost + player.energy > player.storage_energy){
            this.level--;
        }else{
            this.src = `/assets/Quarry_lvl${this.level}.png`;
            this.showUpgrade();
            player.coins -= qry_coin_upgrade[this.level];
            player.wood -= qry_wood_upgrade[this.level];
            player.stone -= qry_stone_upgrade[this.level];
            player.energy += qry_energy_cost[this.level];
            player.xp += qry_xp_gain[this.level];
            player.updateResources();
        }
    }

    showInfo(){

    }

    showUpgrade(){
        if(this.level == qry_max_level){
            document.getElementById("upgrade-image").src = `/assets/Quarry_lvl${this.level}.png`;
            document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Quarry lvl (${this.level})`;
            const upgrade_container = document.getElementById("upg-resources");
            let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
            resources_upgrade[0].innerHTML = "Maxed"
            resources_upgrade[1].innerHTML = "Maxed";
            resources_upgrade[2].innerHTML = "Maxed";
            resources_upgrade[3].innerHTML = "Maxed";
            resources_upgrade[4].innerHTML = "Maxed";
            return;
        }

        document.getElementById("upgrade-image").src = `/assets/Quarry_lvl${this.level + 1}.png`;
        document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Quarry lvl (${this.level})`;

        const upgrade_container = document.getElementById("upg-resources");
        let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
        resources_upgrade[0].innerHTML = qry_coin_upgrade[this.level + 1];
        resources_upgrade[1].innerHTML = qry_wood_upgrade[this.level + 1];
        resources_upgrade[2].innerHTML = qry_stone_upgrade[this.level + 1];
        resources_upgrade[3].innerHTML = qry_energy_cost[this.level + 1];
        resources_upgrade[4].innerHTML = qry_xp_gain[this.level + 1];
    }

    openInfoAndUpgrade(){
        const bottom_bar = document.getElementById("bottom-middle-bar");
        bottom_bar.style.display = "flex";
        document.getElementById("building-text-holder").innerHTML = `Quarry (lvl ${this.level})`;
    }
}

class GS_Bought{
    constructor(x, y, ind1, ind2){
        this.x = x;
        this.y = y;
        this.ind1 = ind1;
        this.ind2 = ind2;
        this.src =  `/assets/Gold_storage_lvl1.png`;
        this.level = 1;
        this.w = 110;
        this.h = 110;
    }

    draw(){
        let img = new Image();
        img.src = this.src;
        if(this.level == 1)ctx.drawImage(img, this.x, this.y - 5, this.w, this.h);
        else if(this.level == 2)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 3)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 4)ctx.drawImage(img, this.x, this.y - 6, this.w, this.h);
        else if(this.level == 5)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 6)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 7)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 8)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 9)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 10)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else if(this.level == 11)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else ctx.drawImage(img, this.x, this.y - 15, this.w, this.h);
    }

    upgradeBuilding(){
        if(this.level == gs_max_level)return;

        this.level++;
        
        if(gs_coin_upgrade[this.level] > player.coins || 
           gs_wood_upgrade[this.level] > player.wood || 
           gs_stone_upgrade[this.level] > player.stone || 
           gs_energy_cost + player.energy > player.storage_energy){
            this.level--;
        }else{
            this.src = `/assets/Gold_storage_lvl${this.level}.png`;
            this.showUpgrade();
            player.coins -= gs_coin_upgrade[this.level];
            player.wood -= gs_wood_upgrade[this.level];
            player.stone -= gs_stone_upgrade[this.level];
            player.energy += gs_energy_cost[this.level];
            player.xp += gs_xp_gain[this.level];
            player.updateResources();
        }
    }

    showInfo(){

    }

    showUpgrade(){
        if(this.level == gs_max_level){
            document.getElementById("upgrade-image").src = `/assets/Gold_storage_lvl${this.level}.png`;
            document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Gold storage lvl (${this.level})`;
            const upgrade_container = document.getElementById("upg-resources");
            let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
            resources_upgrade[0].innerHTML = "Maxed"
            resources_upgrade[1].innerHTML = "Maxed";
            resources_upgrade[2].innerHTML = "Maxed";
            resources_upgrade[3].innerHTML = "Maxed";
            resources_upgrade[4].innerHTML = "Maxed";
            return;
        }

        document.getElementById("upgrade-image").src = `/assets/Gold_storage_lvl${this.level + 1}.png`;
        document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Gold storage lvl (${this.level})`;

        const upgrade_container = document.getElementById("upg-resources");
        let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
        resources_upgrade[0].innerHTML = gs_coin_upgrade[this.level + 1];
        resources_upgrade[1].innerHTML = gs_wood_upgrade[this.level + 1];
        resources_upgrade[2].innerHTML = gs_stone_upgrade[this.level + 1];
        resources_upgrade[3].innerHTML = gs_energy_cost[this.level + 1];
        resources_upgrade[4].innerHTML = gs_xp_gain[this.level + 1];
    }

    openInfoAndUpgrade(){
        const bottom_bar = document.getElementById("bottom-middle-bar");
        bottom_bar.style.display = "flex";
        document.getElementById("building-text-holder").innerHTML = `Gold Storage (lvl ${this.level})`;
    }
}



class WS_Bought{
    constructor(x, y, ind1, ind2){
        this.x = x;
        this.y = y;
        this.ind1 = ind1;
        this.ind2 = ind2;
        this.src =  `/assets/Wood_storage_lvl1.png`;
        this.level = 1;
        this.w = 110;
        this.h = 110;
    }

    draw(){
        let img = new Image();
        img.src = this.src;
        if(this.level == 1)ctx.drawImage(img, this.x, this.y - 5, this.w, this.h);
        else if(this.level == 2)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 3)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 4)ctx.drawImage(img, this.x, this.y - 6, this.w, this.h);
        else if(this.level == 5)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 6)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 7)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 8)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 9)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 10)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else if(this.level == 11)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else ctx.drawImage(img, this.x, this.y - 15, this.w, this.h);
    }

    upgradeBuilding(){
        if(this.level == ws_max_level)return;

        this.level++;
        
        if(ws_coin_upgrade[this.level] > player.coins || 
           ws_wood_upgrade[this.level] > player.wood || 
           ws_stone_upgrade[this.level] > player.stone || 
           ws_energy_cost + player.energy > player.storage_energy){
            this.level--;
        }else{
            this.src = `/assets/Wood_storage_lvl${this.level}.png`;
            this.showUpgrade();
            player.coins -= ws_coin_upgrade[this.level];
            player.wood -= ws_wood_upgrade[this.level];
            player.stone -= ws_stone_upgrade[this.level];
            player.energy += ws_energy_cost[this.level];
            player.xp += ws_xp_gain[this.level];
            player.updateResources();
        }
    }

    showInfo(){

    }

    showUpgrade(){
        if(this.level == ws_max_level){
            document.getElementById("upgrade-image").src = `/assets/Wood_storage_lvl${this.level}.png`;
            document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Wood storage lvl (${this.level})`;
            const upgrade_container = document.getElementById("upg-resources");
            let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
            resources_upgrade[0].innerHTML = "Maxed"
            resources_upgrade[1].innerHTML = "Maxed";
            resources_upgrade[2].innerHTML = "Maxed";
            resources_upgrade[3].innerHTML = "Maxed";
            resources_upgrade[4].innerHTML = "Maxed";
            return;
        }

        document.getElementById("upgrade-image").src = `/assets/Wood_storage_lvl${this.level + 1}.png`;
        document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Wood storage lvl (${this.level})`;

        const upgrade_container = document.getElementById("upg-resources");
        let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
        resources_upgrade[0].innerHTML = ws_coin_upgrade[this.level + 1];
        resources_upgrade[1].innerHTML = ws_wood_upgrade[this.level + 1];
        resources_upgrade[2].innerHTML = ws_stone_upgrade[this.level + 1];
        resources_upgrade[3].innerHTML = ws_energy_cost[this.level + 1];
        resources_upgrade[4].innerHTML = ws_xp_gain[this.level + 1];
    }

    openInfoAndUpgrade(){
        const bottom_bar = document.getElementById("bottom-middle-bar");
        bottom_bar.style.display = "flex";
        document.getElementById("building-text-holder").innerHTML = `Wood Storage (lvl ${this.level})`;
    }
}



class SS_Bought{
    constructor(x, y, ind1, ind2){
        this.x = x;
        this.y = y;
        this.ind1 = ind1;
        this.ind2 = ind2;
        this.src =  `/assets/Stone_storage_lvl1.png`;
        this.level = 1;
        this.w = 110;
        this.h = 110;
    }

    draw(){
        let img = new Image();
        img.src = this.src;
        if(this.level == 1)ctx.drawImage(img, this.x, this.y - 5, this.w, this.h);
        else if(this.level == 2)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 3)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 4)ctx.drawImage(img, this.x, this.y - 6, this.w, this.h);
        else if(this.level == 5)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 6)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 7)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 8)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 9)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 10)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else if(this.level == 11)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else ctx.drawImage(img, this.x, this.y - 15, this.w, this.h);
    }

    upgradeBuilding(){
        if(this.level == ws_max_level)return;

        this.level++;
        
        if(ss_coin_upgrade[this.level] > player.coins || 
           ss_wood_upgrade[this.level] > player.wood || 
           ss_stone_upgrade[this.level] > player.stone || 
           ss_energy_cost + player.energy > player.storage_energy){
            this.level--;
        }else{
            this.src = `/assets/Stone_storage_lvl${this.level}.png`;
            this.showUpgrade();
            player.coins -= ss_coin_upgrade[this.level];
            player.wood -= ss_wood_upgrade[this.level];
            player.stone -= ss_stone_upgrade[this.level];
            player.energy += ss_energy_cost[this.level];
            player.xp += ss_xp_gain[this.level];
            player.updateResources();
        }
    }

    showInfo(){

    }

    showUpgrade(){
        if(this.level == ss_max_level){
            document.getElementById("upgrade-image").src = `/assets/Stone_storage_lvl${this.level}.png`;
            document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Stone storage lvl (${this.level})`;
            const upgrade_container = document.getElementById("upg-resources");
            let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
            resources_upgrade[0].innerHTML = "Maxed"
            resources_upgrade[1].innerHTML = "Maxed";
            resources_upgrade[2].innerHTML = "Maxed";
            resources_upgrade[3].innerHTML = "Maxed";
            resources_upgrade[4].innerHTML = "Maxed";
            return;
        }

        document.getElementById("upgrade-image").src = `/assets/Stone_storage_lvl${this.level + 1}.png`;
        document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Stone storage lvl (${this.level})`;

        const upgrade_container = document.getElementById("upg-resources");
        let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
        resources_upgrade[0].innerHTML = ss_coin_upgrade[this.level + 1];
        resources_upgrade[1].innerHTML = ss_wood_upgrade[this.level + 1];
        resources_upgrade[2].innerHTML = ss_stone_upgrade[this.level + 1];
        resources_upgrade[3].innerHTML = ss_energy_cost[this.level + 1];
        resources_upgrade[4].innerHTML = ss_xp_gain[this.level + 1];
    }

    openInfoAndUpgrade(){
        const bottom_bar = document.getElementById("bottom-middle-bar");
        bottom_bar.style.display = "flex";
        document.getElementById("building-text-holder").innerHTML = `Stone Storage (lvl ${this.level})`;
    }
}

class MC_Bought{
    constructor(x, y, ind1, ind2){
        this.x = x;
        this.y = y;
        this.ind1 = ind1;
        this.ind2 = ind2;
        this.src = `/assets/Main_castle_lvl1.png`;
        this.level = 1;
        this.w = 110;
        this.h = 110;
    }

    draw(){
        let img = new Image();
        img.src = this.src;
        if(this.level == 1)ctx.drawImage(img, this.x, this.y - 5, this.w, this.h);
        else if(this.level == 2)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 3)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 4)ctx.drawImage(img, this.x, this.y - 6, this.w, this.h);
        else if(this.level == 5)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 6)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 7)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 8)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 9)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 10)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else if(this.level == 11)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else ctx.drawImage(img, this.x, this.y - 15, this.w, this.h);
    }

    upgradeBuilding(){
        if(this.level == mc_max_level)return;

        this.level++;
        
        if(mc_coin_upgrade[this.level] > player.coins || 
           mc_wood_upgrade[this.level] > player.wood || 
           mc_stone_upgrade[this.level] > player.stone || 
           mc_energy_cost + player.energy > player.storage_energy){
            this.level--;
        }else{
            this.src = `/assets/Main_castle_lvl${this.level}.png`;
            this.showUpgrade();
            player.coins -= mc_coin_upgrade[this.level];
            player.wood -= mc_wood_upgrade[this.level];
            player.stone -= mc_stone_upgrade[this.level];
            player.energy += mc_energy_cost[this.level];
            player.xp += mc_xp_gain[this.level];
            player.updateResources();
        }
    }

    showInfo(){

    }

    showUpgrade(){
        if(this.level == mc_max_level){
            document.getElementById("upgrade-image").src = `/assets/Main_castle_lvl${this.level}.png`;
            document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Main castle lvl (${this.level})`;
            const upgrade_container = document.getElementById("upg-resources");
            let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
            resources_upgrade[0].innerHTML = "Maxed"
            resources_upgrade[1].innerHTML = "Maxed";
            resources_upgrade[2].innerHTML = "Maxed";
            resources_upgrade[3].innerHTML = "Maxed";
            resources_upgrade[4].innerHTML = "Maxed";
            return;
        }

        document.getElementById("upgrade-image").src = `/assets/Main_castle_lvl${this.level + 1}.png`;
        document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Main castle lvl (${this.level})`;

        const upgrade_container = document.getElementById("upg-resources");
        let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
        resources_upgrade[0].innerHTML = mc_coin_upgrade[this.level + 1];
        resources_upgrade[1].innerHTML = mc_wood_upgrade[this.level + 1];
        resources_upgrade[2].innerHTML = mc_stone_upgrade[this.level + 1];
        resources_upgrade[3].innerHTML = mc_energy_cost[this.level + 1];
        resources_upgrade[4].innerHTML = mc_xp_gain[this.level + 1];
    }

    openInfoAndUpgrade(){
        const bottom_bar = document.getElementById("bottom-middle-bar");
        bottom_bar.style.display = "flex";
        document.getElementById("building-text-holder").innerHTML = `Main castle (lvl ${this.level})`;
    }
}

class WNM_Bought{
    constructor(x, y, ind1, ind2){
        this.x = x;
        this.y = y;
        this.ind1 = ind1;
        this.ind2 = ind2;
        this.src = `/assets/Windmill_lvl1.png`;
        this.level = 1;
        this.w = 110;
        this.h = 110;
    }

    draw(){
        let img = new Image();
        img.src = this.src;
        if(this.level == 1)ctx.drawImage(img, this.x, this.y - 5, this.w, this.h);
        else if(this.level == 2)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 3)ctx.drawImage(img, this.x, this.y - 9, this.w, this.h);
        else if(this.level == 4)ctx.drawImage(img, this.x, this.y - 6, this.w, this.h);
        else if(this.level == 5)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 6)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 7)ctx.drawImage(img, this.x, this.y - 8, this.w, this.h);
        else if(this.level == 8)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 9)ctx.drawImage(img, this.x, this.y - 11, this.w, this.h);
        else if(this.level == 10)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else if(this.level == 11)ctx.drawImage(img, this.x, this.y - 12, this.w, this.h);
        else ctx.drawImage(img, this.x, this.y - 15, this.w, this.h);
    }

    upgradeBuilding(){
        if(this.level == wnm_max_level)return;

        this.level++;
        
        if(wnm_coin_upgrade[this.level] > player.coins || 
           wnm_wood_upgrade[this.level] > player.wood || 
           wnm_stone_upgrade[this.level] > player.stone || 
           wnm_energy_cost + player.energy > player.storage_energy){
            this.level--;
        }else{
            this.src = `/assets/Windmill_lvl${this.level}.png`;
            this.showUpgrade();
            player.coins -= wnm_coin_upgrade[this.level];
            player.wood -= wnm_wood_upgrade[this.level];
            player.stone -= wnm_stone_upgrade[this.level];
            player.energy += wnm_energy_cost[this.level];
            player.xp += wnm_xp_gain[this.level];
            player.updateResources();
        }
    }

    showInfo(){

    }

    showUpgrade(){
        if(this.level == wnm_max_level){
            document.getElementById("upgrade-image").src = `/assets/Windmill_lvl${this.level}.png`;
            document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Windmill lvl (${this.level})`;
            const upgrade_container = document.getElementById("upg-resources");
            let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
            resources_upgrade[0].innerHTML = "Maxed"
            resources_upgrade[1].innerHTML = "Maxed";
            resources_upgrade[2].innerHTML = "Maxed";
            resources_upgrade[3].innerHTML = "Maxed";
            resources_upgrade[4].innerHTML = "Maxed";
            return;
        }

        document.getElementById("upgrade-image").src = `/assets/Windmill_lvl${this.level + 1}.png`;
        document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `Windmill lvl (${this.level})`;

        const upgrade_container = document.getElementById("upg-resources");
        let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
        resources_upgrade[0].innerHTML = wnm_coin_upgrade[this.level + 1];
        resources_upgrade[1].innerHTML = wnm_wood_upgrade[this.level + 1];
        resources_upgrade[2].innerHTML = wnm_stone_upgrade[this.level + 1];
        resources_upgrade[3].innerHTML = wnm_energy_cost[this.level + 1];
        resources_upgrade[4].innerHTML = wnm_xp_gain[this.level + 1];
    }

    openInfoAndUpgrade(){
        const bottom_bar = document.getElementById("bottom-middle-bar");
        bottom_bar.style.display = "flex";
        document.getElementById("building-text-holder").innerHTML = `Windmill (lvl ${this.level})`;
    }
}