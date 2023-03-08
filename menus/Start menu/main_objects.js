class Player{
    constructor(){
        this.city_level = 1;
        this.gems = 150;
        this.coins = 1000000;
        this.wood = 1000000;
        this.stone = 1000000;
        this.energy = 13;
        this.xp = 0;
        this.storage_coin = 1000000;
        this.storage_wood = 1000000;
        this.storage_stone = 1000000;
        this.storage_energy = 2000;
    }

    updateResources(){
        if(this.xp >= levels_xp[this.city_level]){
            this.xp = this.xp - levels_xp[this.city_level];
            this.city_level++;
        }
        addResources();
    }
}

class Buildings_Bought{
    constructor(x, y, src/*, ind1, ind2*/){
        this.x = x;
        this.y = y;
        this.src = src;
        this.level = 1;
        // this.ind1 = ind1;
        // this.ind2 = ind2; 
        this.w = 110;
        this.h = 110;
    }

    draw(){
        ctx.drawImage(this.src, this.x, this.y, this.w, this.h);
    }
}

let player = new Player();