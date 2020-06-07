import { atom } from 'recoil';

const productListState = atom({
    key: 'productListState',
    default: []
});

export default productListState;