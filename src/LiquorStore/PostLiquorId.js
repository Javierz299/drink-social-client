import liquorStore from './LiquorStore';

const postLiquorId = (e) => {
    const liquorId = e.target.id;
    // pass this in to a component and render form?
    console.log('id',liquorStore[liquorId])
};

export default postLiquorId