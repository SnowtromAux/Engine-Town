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



class Building_Bought{
    constructor(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock){
        this.x = x;
        this.y = y;
        this.ind1 = ind1;
        this.ind2 = ind2;
        this.type = type;
        this.level = 1;
        this.w = 110;
        this.h = 110;
        this.coin_upgrade = cu;
        this.wood_upgrade = wu;
        this.stone_upgrade = su;
        this.energy_cost = ec;
        this.xp_gain = xg;
        this.max_level = ml;
        this.src_path = sp;
        this.name = name;
        this.unlockable = unlock;
    }

    draw(){
        let img = new Image();
        img.src = `${this.src_path}${this.level}.png`;
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

    changeSpecial(){

    }

    upgradeBuilding(){
        if(this.level == this.max_level)return;

        this.level++;
        
        if(this.coin_upgrade[this.level] > player.coins || 
           this.wood_upgrade[this.level] > player.wood || 
           this.stone_upgrade[this.level] > player.stone || 
           this.energy_cost + player.energy > player.storage_energy ||
           mc.level < this.unlockable[mc.level]){
            this.level--;
        }else{
            this.showUpgrade();
            player.coins -= this.coin_upgrade[this.level];
            player.wood -= this.wood_upgrade[this.level];
            player.stone -= this.stone_upgrade[this.level];
            player.energy += this.energy_cost[this.level];
            player.xp += this.xp_gain[this.level];
            player.updateResources();
            this.changeSpecial();
        }
    }

    showInfo(){

    }

    showUpgrade(){
        if(this.level == this.max_level){
            document.getElementById("upgrade-image").src = `${this.src_path}${this.level}.png`;
            document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `${this.name} lvl (${this.level})`;
            const upgrade_container = document.getElementById("upg-resources");
            let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
            resources_upgrade[0].innerHTML = "Maxed"
            resources_upgrade[1].innerHTML = "Maxed";
            resources_upgrade[2].innerHTML = "Maxed";
            resources_upgrade[3].innerHTML = "Maxed";
            resources_upgrade[4].innerHTML = "Maxed";
            return;
        }

        document.getElementById("upgrade-image").src = `${this.src_path}${this.level + 1}.png`;
        document.getElementById("upgrade-building-name").getElementsByTagName("label")[0].innerHTML = `${this.name} lvl (${this.level})`;

        const upgrade_container = document.getElementById("upg-resources");
        let resources_upgrade = upgrade_container.getElementsByClassName("resource-amount");
        resources_upgrade[0].innerHTML = this.coin_upgrade[this.level + 1];
        resources_upgrade[1].innerHTML = this.wood_upgrade[this.level + 1];
        resources_upgrade[2].innerHTML = this.stone_upgrade[this.level + 1];
        resources_upgrade[3].innerHTML = this.energy_cost[this.level + 1];
        resources_upgrade[4].innerHTML = this.xp_gain[this.level + 1];
    }

    openInfoAndUpgrade(){
        const bottom_bar = document.getElementById("bottom-middle-bar");
        bottom_bar.style.display = "flex";
        document.getElementById("building-text-holder").innerHTML = `${this.name} (lvl ${this.level})`;
    }
}

let imr = 0;
class GM_Bought extends Building_Bought{
    constructor(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock){
        super(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock);
        this.production = gm_production[1];
        this.produced = 0;
        this.capacity = gm_capacity[1];
    }
    changeSpecial(){
        this.production = gm_production[this.level];
        this.capacity = gm_capacity[this.level];
    }
    update(){
        this.produced += (1 / (3600000 / time_loop)) * this.production;
        console.log("Gold: " + Math.floor(this.produced))
    }
}

class SWM_Bought extends Building_Bought{
    constructor(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock){
        super(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock);
        this.production = swm_production[1];//production per hour
        this.produced = 0;
        this.capacity = swm_capacity[1];
    }
    changeSpecial(){
        this.production = swm_production[this.level];
        this.capacity = swm_capacity[this.level];
    }
    update(){
        this.produced += 1 / (3600000 / time_loop) * this.production; 
        console.log("Wood: " + Math.floor(this.produced));
    }
}

class QRY_Bought extends Building_Bought{
    constructor(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock){
        super(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock);
        this.production = qry_production[1];//production per hour
        this.produced = 0;
        this.capacity = qry_capacity[1];
    }
    changeSpecial(){
        this.production = qry_production[this.level];
        this.capacity = qry_capacity[this.level];
    }
    update(){
        this.produced += 1 / (3600000 / time_loop) * this.production; 
        console.log("Stone: " + Math.floor(this.produced));
    }
}


class GS_Bought extends Building_Bought{
    constructor(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock){
        super(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock);
        this.capacity = gs_capacity[1];
    }
    changeSpecial(){
        this.capacity = gs_capacity[this.level];
    }
    update(){

    }
}

class WS_Bought extends Building_Bought{
    constructor(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock){
        super(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock);
        this.capacity = ws_capacity[1];
    }
    changeSpecial(){
        this.capacity = ws_capacity[this.level];
    }
    update(){

    }
}

class SS_Bought extends Building_Bought{
    constructor(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock){
        super(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock);
        this.capacity = ss_capacity[1];
    }
    changeSpecial(){
        this.capacity = ss_capacity[this.level];
    }
    update(){

    }
}

class WNM_Bought extends Building_Bought{
    constructor(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock){
        super(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock);
        this.capacity = wnm_capacity[1];
    }
    changeSpecial(){
        this.capacity = wnm_capacity[this.level];
    }
    update(){

    }
}

class MC_Bought extends Building_Bought{
    constructor(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock){
        super(x, y, ind1, ind2, type, cu, wu, su, ec, xg, ml, sp, name, unlock);
        this.coin_capacity = mc_coin_cap[1];
        this.wood_capacity = mc_wood_cap[1];
        this.stone_capacity = mc_stone_cap[1];
        this.energy_capacity = mc_energy_cap[1];
    }
    changeSpecial(){
        this.coin_capacity = mc_coin_cap[this.level];
        this.wood_capacity = mc_wood_cap[this.level];
        this.stone_capacity = mc_stone_cap[this.level];
        this.energy_capacity = mc_energy_cap[this.level];

        
        gm.count = gm_count[this.level];
        swm.count = swm_count[this.level];
        qry.count = qry_count[this.level];
        gs.count = gs_count[this.level];
        ws.count = ws_count[this.level];
        ss.count = ss_count[this.level];
        wnm.count = wnm_count[this.level];

        gm.update();
        swm.update();
        qry.update();
        gs.update();
        ws.update();
        ss.update();
        wnm.update();


    }
    update(){

    }
}