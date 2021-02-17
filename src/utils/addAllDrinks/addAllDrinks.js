export const addAllDrinks = (drinks) => {
    const beerTable = Object.entries(drinks.beerTable);
    const cocktailTable = Object.entries(drinks.cocktailTable);
    const wineTable = Object.entries(drinks.wineTable);
    const liquorTable = Object.entries(drinks.liquorTable);
    const bingeTable = Object.entries(drinks.bingeTable);

    const beerTotal = beerTable.reduce((acc,curr) => acc + parseInt(curr[1]),0);
    const cocktailTotal = cocktailTable.reduce((acc,curr) => acc + parseInt(curr[1]),0);
    const wineTotal = wineTable.reduce((acc,curr) => acc + parseInt(curr[1]),0);
    const liquorTotal = liquorTable.reduce((acc,curr) => acc + parseInt(curr[1]),0);
    const bingeTotal = bingeTable.reduce((acc,curr) => acc + parseInt(curr[1]),0);

    return beerTotal + cocktailTotal + wineTotal + liquorTotal + bingeTotal;
};