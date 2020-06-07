import { atom } from 'recoil';

const isLoadingState = atom({
    key: 'isLoadingState',
    default: false
});

export default isLoadingState;