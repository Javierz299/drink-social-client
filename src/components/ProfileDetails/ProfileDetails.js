import React from 'react';
import { useSelector } from 'react-redux';

import '../ProfileDetails/profileDetails.css'

const ProfileDetails = ({toggleDetails}) => {
    const allDrinks = useSelector(allDrinks => allDrinks.user_reducer.allDrinkValues);
    console.log("ALL DRINKS",allDrinks)
    return (
        <div className="drink-detail-container" 
             onClick={() => toggleDetails(false)}
        >
        {allDrinks ? 
           <div>
            <section className="beer-details">
                <p>beer: {allDrinks.beerTable.beer}</p>
                <p>pint: {allDrinks.beerTable.pint_table}</p>
                <p>tall beer: {allDrinks.beerTable.tall_beer}</p>
                <p>forty: {allDrinks.beerTable.forty}</p>
                <p>craft: {allDrinks.beerTable.craft}</p>
                <p>craft-pint: {allDrinks.beerTable.craft_pint}</p>
                <p>tall craft: {allDrinks.beerTable.craft_tall}</p>
                <p>seltzer: {allDrinks.beerTable.seltzer}</p>
                <p>tall seltzer: {allDrinks.beerTable.tall_seltzer}</p>
                <p>smirnoff ice: {allDrinks.beerTable.smirnoff_ice}</p>
                <p>6%: {allDrinks.beerTable.six_percent}</p>
                <p>7%: {allDrinks.beerTable.seven_percent}</p>
                <p>8%:: {allDrinks.beerTable.eight_percent}</p>
                <p>9%: {allDrinks.beerTable.nine_percent}</p>
                <p>10%: {allDrinks.beerTable.ten_percent}</p>
            </section>
            <section className="cocktail-details">
                <p>margarita: {allDrinks.cocktailTable.margaritia}</p>
                <p>bloody mary: {allDrinks.cocktailTable.bloody_mary}</p>
                <p>mimosa: {allDrinks.cocktailTable.mimosa}</p>
                <p>martini: {allDrinks.cocktailTable.martini}</p>
                <p>mojito: {allDrinks.cocktailTable.mojito}</p>
                <p>gin and tonic: {allDrinks.cocktailTable.gin_and_tonic}</p>
                <p>moscow_mule: {allDrinks.cocktailTable.moscow_mule}</p>
                <p>paloma: {allDrinks.cocktailTable.paloma}</p>
                <p>daiquiri: {allDrinks.cocktailTable.daiquiri}</p>
                <p>long island: {allDrinks.cocktailTable.long_island}</p>
            </section>
            <section className="wine-details">
                <p>red wine: {allDrinks.wineTable.red_wine}</p>
                <p>white wine: {allDrinks.wineTable.white_wine}</p>
                <p>sangria: {allDrinks.wineTable.sangria}</p>
                <p>champagne: {allDrinks.wineTable.champagne}</p>
            </section>
            <section className="liquor-details">
                <p>tequila shot: {allDrinks.liquorTable.tequila_shot}</p>
                <p>vodka shot: {allDrinks.liquorTable.vodka_shot}</p>
                <p>whiskey shot: {allDrinks.liquorTable.whiskey_shot}</p>
                <p>bourbon: {allDrinks.liquorTable.bourbon}</p>
                <p>scotch: {allDrinks.liquorTable.scotch}</p>
                <p>brandy: {allDrinks.liquorTable.brandy}</p>
            </section>
            <section className="binge-details">
                <p>beer bong: {allDrinks.bingeTable.beer_bong}</p>
                <p>shotgun: {allDrinks.bingeTable.shotgun}</p>
                <p>boilermaker: {allDrinks.bingeTable.boilermaker}</p>
            </section>
            </div> :
        <div> nothing logged. guest </div>
        }
                
        </div>
        
    )
}

export default ProfileDetails
