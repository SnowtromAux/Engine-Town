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
        this.src = document.getElementById("wood-storage-lvl1");
        this.level = 1;
        this.w = 110;
        this.h = 110;
    }

    draw(){
        ctx.drawImage(this.src, this.x, this.y, this.w, this.h);
    }

    upgradeBuilding(){
        this.level++;
        this.src = document.getElementById(`wood-storage-lvl${this.level}`);
        this.draw();
    }

    showInfo(){

    }

    openInfoAndUpgrade(){
        const bottom_bar = document.getElementById("bottom-middle-bar");
        bottom_bar.style.display = "flex";
        document.getElementById("building-text-holder").innerHTML = `Wood Storage (lvl ${this.level})`;
    }
}
