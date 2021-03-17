export const addAllDrinks = (drinks) => {
    const beerTable = Object.entries(drinks.beerTable).slice(0,-1);
    const cocktailTable = Object.entries(drinks.cocktailTable).slice(0,-1);
    const wineTable = Object.entries(drinks.wineTable).slice(0,-1);
    const liquorTable = Object.entries(drinks.liquorTable).slice(0,-1);
    const bingeTable = Object.entries(drinks.bingeTable).slice(0,-1);
    //console.log('addAllDrinks in Utils',beerTable)
    const beerTotal = beerTable.reduce((acc,curr) => acc + parseInt(curr[1]),0);
    const cocktailTotal = cocktailTable.reduce((acc,curr) => acc + parseInt(curr[1]),0);
    const wineTotal = wineTable.reduce((acc,curr) => acc + parseInt(curr[1]),0);
    const liquorTotal = liquorTable.reduce((acc,curr) => acc + parseInt(curr[1]),0);
    const bingeTotal = bingeTable.reduce((acc,curr) => acc + parseInt(curr[1]),0);

    return beerTotal + cocktailTotal + wineTotal + liquorTotal + bingeTotal;
};