//shop button trigger
const shop_activate = document.getElementById('shop-activate');
const shop = document.getElementById('shop'); 
let shop_open = false, shop_locked = false;

//Shop building cards
const buildings_list = document.getElementsByClassName("card-wrapper");
let buy_building = {
    image: undefined
}

let selected_building = {
    i: undefined,
    j: undefined
}

shop_activate.addEventListener('click', () => {
    changeShop();
});


function changeShop(){
    if(shop_open)closeShop();
    else openShop();
}

function closeShop(){
    shop_open = false;
    shop.style.right = '-27vw';
    shop_activate.style.right = '0vw';
}

function openShop(){
    if(shop_locked)return;
    shop_open = true;
    shop.style.right = '0vw';
    shop_activate.style.right = '27vw';
}


for(let i = 0;i < buildings_list.length;i++){
    const img = buildings_list[i].getElementsByClassName("building-img")[0];
    img.addEventListener('click', (e) => {
        drawBuyBuilding(e, `${img.src}`);
        shop_locked = true;
    }); 
}

function drawBuyBuilding(e, path){
    buy_building.image = new Image();
    buy_building.image.src = `${path}`;

    ctx.drawImage(buy_building.image, e.pageX, e.pageY, 110, 110);
}



c.addEventListener("mousemove" , (e) => {
    const j = Math.floor(e.pageX / TILE_W * 4 / 3);
    const i = Math.floor(((1.70 * e.pageY - (j % 2) * (TILE_H - 64)))/ TILE_H);
    
    if(i >= MAP_H || j >= MAP_H || i < 0 || j < 0)return;

    if(tiles[i][j].hasBuilding)document.body.style.cursor = "pointer";
    else document.body.style.cursor = "auto";
    


    if(!buy_building.image)return;
    drawEverything();
    closeShop();
    if(!tiles[i][j].occupied)return;
    ctx.drawImage(buy_building.image, tiles[i][j].x + (TILE_W - 110) / 2, tiles[i][j].y + (TILE_H - 110) / 2 - 36 - 5, 110, 110);

})

c.addEventListener("click", (e) => {
    const j = Math.floor(e.pageX / TILE_W * 4 / 3);
    const i = Math.floor(((1.70 * e.pageY - (j % 2) * (TILE_H - 64)))/ TILE_H);

    if(i >= MAP_H || j >= MAP_H || i < 0 || j< 0)return;
    
    if(tiles[i][j].hasBuilding){
        buildings_bought[i][j].openInfoAndUpgrade();
        selected_building.i = i;
        selected_building.j = j;
    }

    if(buy_building.image){
        let cur_building_selected = shop_buildings.get(buy_building.image.src);
        
        drawEverything();

        const building_x = tiles[i][j].x + (TILE_W - 110) / 2;
        const building_y =  tiles[i][j].y + (TILE_H - 110) / 2 - 36;

        if(!tiles[i][j].occupied){
            
        }else if(tiles[i][j].hasBuilding){

        }else if(cur_building_selected.owned == cur_building_selected.count){

        }else if(cur_building_selected.coin_cost > player.coins || cur_building_selected.wood_cost > player.wood || 
                 cur_building_selected.stone_cost > player.stone || cur_building_selected.energy_cost + player.energy > player.storage_energy){

        }else{
            //ctx.drawImage(buy_building.image, building_x, building_y, 110, 110);
            tiles[i][j].hasBuilding = true;
            tiles[i][j].buildsrc = buy_building.image;
            //If the upper one doesnt work
            //tiles[i][j].buildsrc = buy_building.image.src;

            shop_buildings.get(buy_building.image.src).buy(building_x, building_y, i, j);
            shop_buildings.get(buy_building.image.src).update();
            drawEverything();

            player.coins -= cur_building_selected.coin_cost;
            player.wood -= cur_building_selected.wood_cost;
            player.stone -= cur_building_selected.stone_cost;
            player.energy += cur_building_selected.energy_cost;
            player.xp += cur_building_selected.xp_gain;
            player.updateResources();
        }

        buy_building.image = undefined;
        shop_locked = false;
    }
});


const upgrade_info_box = document.getElementById("building-text-holder");
upgrade_info_box.addEventListener("click" , () => {
    document.getElementById("bottom-middle-bar").style.display = "none";
});
 

const upgrade_building = document.getElementById("upgrade-button");
upgrade_building.addEventListener("click", (e) => {
    document.getElementById("upgrade-box").style.display = "flex";
    const bottom_bar = document.getElementById("bottom-middle-bar");
    bottom_bar.style.display = "none";
    buildings_bought[selected_building.i][selected_building.j].showUpgrade();
});

const exit_upgrade_building = document.getElementById("exit-upgrade");
exit_upgrade_building.addEventListener("click" , () => {
    document.getElementById("upgrade-box").style.display = "none";
});

const upg_building = document.getElementById("upg-img-holder");
upg_building.addEventListener("click" , () => {
    buildings_bought[selected_building.i][selected_building.j].upgradeBuilding();
    drawEverything();
});