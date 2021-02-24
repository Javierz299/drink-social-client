import React from 'react';
import { useSelector } from 'react-redux';

import '../ProfileDetails/profileDetails.css'

const ProfileDetails = ({toggleDetails}) => {
    const allDrinks = useSelector(allDrinks => allDrinks.user_reducer.allDrinkValues);
    const guestDrinks = useSelector(guest => guest.guest_reducer.guestTable)
    console.log("ALL DRINKS",allDrinks)
    console.log("GUEST DRINKS",guestDrinks)

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
                <p>misc: {allDrinks.cocktailTable.misc}</p>
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
        <div className="guest-table">
                <section className="beer-details">
                <p>beer: {guestDrinks.beer}</p>
                <p>pint: {guestDrinks.pint_beer}</p>
                <p>tall beer: {guestDrinks.tall_beer}</p>
                <p>forty: {guestDrinks.forty}</p>
                <p>craft: {guestDrinks.craft}</p>
                <p>craft-pint: {guestDrinks.craft_pint}</p>
                <p>tall craft: {guestDrinks.craft_tall}</p>
                <p>seltzer: {guestDrinks.seltzer}</p>
                <p>tall seltzer: {guestDrinks.tall_seltzer}</p>
                <p>smirnoff ice: {guestDrinks.smirnoff_ice}</p>
                <p>6%: {guestDrinks.six_percent}</p>
                <p>7%: {guestDrinks.seven_percent}</p>
                <p>8%:: {guestDrinks.eight_percent}</p>
                <p>9%: {guestDrinks.nine_percent}</p>
                <p>10%: {guestDrinks.ten_percent}</p>
            </section>
            <section className="cocktail-details">
                <p>margarita: {guestDrinks.margaritia}</p>
                <p>bloody mary: {guestDrinks.bloody_mary}</p>
                <p>mimosa: {guestDrinks.mimosa}</p>
                <p>martini: {guestDrinks.martini}</p>
                <p>mojito: {guestDrinks.mojito}</p>
                <p>gin and tonic: {guestDrinks.gin_and_tonic}</p>
                <p>moscow_mule: {guestDrinks.moscow_mule}</p>
                <p>paloma: {guestDrinks.paloma}</p>
                <p>daiquiri: {guestDrinks.daiquiri}</p>
                <p>long island: {guestDrinks.long_island}</p>
                <p>misc: {guestDrinks.misc}</p>
            </section>
            <section className="wine-details">
                <p>red wine: {guestDrinks.red_wine}</p>
                <p>white wine: {guestDrinks.white_wine}</p>
                <p>sangria: {guestDrinks.sangria}</p>
                <p>champagne: {guestDrinks.champagne}</p>
            </section>
            <section className="liquor-details">
                <p>tequila shot: {guestDrinks.tequila_shot}</p>
                <p>vodka shot: {guestDrinks.vodka_shot}</p>
                <p>whiskey shot: {guestDrinks.whiskey_shot}</p>
                <p>bourbon: {guestDrinks.bourbon}</p>
                <p>scotch: {guestDrinks.scotch}</p>
                <p>brandy: {guestDrinks.brandy}</p>
            </section>
            <section className="binge-details">
                <p>beer bong: {guestDrinks.beer_bong}</p>
                <p>shotgun: {guestDrinks.shogun}</p>
                <p>boilermaker: {guestDrinks.boilermaker}</p>
            </section>
            
            </div>
        }
                
        </div>
        
    )
}

export default ProfileDetails
