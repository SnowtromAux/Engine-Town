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
        ctx.drawImage(img, this.x, this.y - 3 * (this.level - 1), this.w, this.h);
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
