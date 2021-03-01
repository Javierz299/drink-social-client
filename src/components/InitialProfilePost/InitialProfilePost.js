import axios from 'axios';
import config from '../../config';

import { useSelector } from 'react-redux';

import { initialBeerPost, initialCocktailPost } from '../../LiquorStore/DrinkCarouselValues';
import { initialWinePost, initialLiquorPost } from '../../LiquorStore/DrinkCarouselValues';
import { initialBingePost } from '../../LiquorStore/DrinkCarouselValues';

const InitalProfilePost = () => {
    const dbUserId = useSelector(dbUserId => dbUserId.auth_reducer.dbUserId);

    const beerPost = axios.post(`${config.API_ENDPOINT}/post/userBeerItem`,{ user_id: dbUserId, ...initialBeerPost})
    const cocktailPost = axios.post(`${config.API_ENDPOINT}/post/userCocktailItem`,{ user_id: dbUserId, ...initialCocktailPost})
    const winePost = axios.post(`${config.API_ENDPOINT}/post/userWineItem`,{ user_id: dbUserId, ...initialWinePost})
    const liquorPost = axios.post(`${config.API_ENDPOINT}/post/userLiquorItem`,{ user_id: dbUserId, ...initialLiquorPost})
    const bingePost = axios.post(`${config.API_ENDPOINT}/post/userBingeItem`,{ user_id: dbUserId, ...initialBingePost})
    return axios.all([beerPost,cocktailPost,winePost,liquorPost,bingePost])
};

export default InitalProfilePost;