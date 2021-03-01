import React from 'react';
import { useSelector } from 'react-redux';

import '../ProfileDetails/profileDetails.css'

const ProfileDetails = ({toggleDetails}) => {
    const allDrinks = useSelector(allDrinks => allDrinks.user_reducer.allDrinkValues);
    const guestDrinks = useSelector(guest => guest.guest_reducer.guestTable);

    return (
        <div className="drink-detail-container" 
             onClick={() => toggleDetails(false)}
        > 
           <div>
            <section className="beer-details">
                <p>beer: {allDrinks ? allDrinks.beerTable.beer : guestDrinks.beer}</p>
                <p>pint: {allDrinks ? allDrinks.beerTable.pint_beer : guestDrinks.pint_beer}</p>
                <p>tall beer: {allDrinks ? allDrinks.beerTable.tall_beer : guestDrinks.tall_beer}</p>
                <p>forty: {allDrinks ? allDrinks.beerTable.forty : guestDrinks.forty}</p>
                <p>craft: {allDrinks ? allDrinks.beerTable.craft : guestDrinks.craft}</p>
                <p>craft-pint: {allDrinks ? allDrinks.beerTable.craft_pint : guestDrinks.craft_pint}</p>
                <p>tall craft: {allDrinks ? allDrinks.beerTable.craft_tall : guestDrinks.craft_tall}</p>
                <p>seltzer: {allDrinks ? allDrinks.beerTable.seltzer : guestDrinks.seltzer}</p>
                <p>tall seltzer: {allDrinks ? allDrinks.beerTable.tall_seltzer : guestDrinks.tall_seltzer}</p>
                <p>smirnoff ice: {allDrinks ? allDrinks.beerTable.smirnoff_ice : guestDrinks.smirnoff_ice}</p>
                <p>6%: {allDrinks ? allDrinks.beerTable.six_percent : guestDrinks.six_percent}</p>
                <p>7%: {allDrinks ? allDrinks.beerTable.seven_percent : guestDrinks.seven_percent}</p>
                <p>8%:: {allDrinks ? allDrinks.beerTable.eight_percent : guestDrinks.eight_percent}</p>
                <p>9%: {allDrinks ? allDrinks.beerTable.nine_percent : guestDrinks.nine_percent}</p>
                <p>10%: {allDrinks ? allDrinks.beerTable.ten_percent : guestDrinks.ten_percent}</p>
            </section>
            <section className="cocktail-details">
                <p>margarita: {allDrinks ? allDrinks.cocktailTable.margarita : guestDrinks.margarita}</p>
                <p>bloody mary: {allDrinks ? allDrinks.cocktailTable.bloody_mary : guestDrinks.bloody_mary}</p>
                <p>mimosa: {allDrinks ? allDrinks.cocktailTable.mimosa : guestDrinks.mimosa}</p>
                <p>martini: {allDrinks ? allDrinks.cocktailTable.martini : guestDrinks.martini}</p>
                <p>mojito: {allDrinks ? allDrinks.cocktailTable.mojito : guestDrinks.mojito}</p>
                <p>gin and tonic: {allDrinks ? allDrinks.cocktailTable.gin_and_tonic : guestDrinks.gin_and_tonic}</p>
                <p>moscow_mule: {allDrinks ? allDrinks.cocktailTable.moscow_mule : guestDrinks.moscow_mule}</p>
                <p>paloma: {allDrinks ? allDrinks.cocktailTable.paloma : guestDrinks.paloma}</p>
                <p>daiquiri: {allDrinks ? allDrinks.cocktailTable.daiquiri : guestDrinks.daiquiri}</p>
                <p>long island: {allDrinks ? allDrinks.cocktailTable.long_island : guestDrinks.long_island}</p>
                <p>misc: {allDrinks ? allDrinks.cocktailTable.misc : guestDrinks.misc}</p>
            </section>
            <section className="wine-details">
                <p>red wine: {allDrinks ? allDrinks.wineTable.red_wine : guestDrinks.red_wine}</p>
                <p>white wine: {allDrinks ? allDrinks.wineTable.white_wine : guestDrinks.white_wine}</p>
                <p>sangria: {allDrinks ? allDrinks.wineTable.sangria : guestDrinks.sangria}</p>
                <p>champagne: {allDrinks ? allDrinks.wineTable.champagne : guestDrinks.champagne}</p>
            </section>
            <section className="liquor-details">
                <p>tequila shot: {allDrinks ? allDrinks.liquorTable.tequila_shot : guestDrinks.tequila_shot}</p>
                <p>vodka shot: {allDrinks ? allDrinks.liquorTable.vodka_shot : guestDrinks.vodka_shot}</p>
                <p>whiskey shot: {allDrinks ? allDrinks.liquorTable.whiskey_shot : guestDrinks.whiskey_shot}</p>
                <p>bourbon: {allDrinks ? allDrinks.liquorTable.bourbon : guestDrinks.bourbon}</p>
                <p>scotch: {allDrinks ? allDrinks.liquorTable.scotch : guestDrinks.scotch}</p>
                <p>brandy: {allDrinks ? allDrinks.liquorTable.brandy : guestDrinks.brandy}</p>
            </section>
            <section className="binge-details">
                <p>beer bong: {allDrinks ? allDrinks.bingeTable.beer_bong : guestDrinks.beer_bong}</p>
                <p>shotgun: {allDrinks ? allDrinks.bingeTable.shotgun : guestDrinks.shotgun}</p>
                <p>boilermaker: {allDrinks ? allDrinks.bingeTable.boilermaker : guestDrinks.boilermaker}</p>
            </section>
            </div> 
        </div>
        
    )
}

export default ProfileDetails
