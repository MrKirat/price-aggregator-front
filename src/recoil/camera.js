import { atom } from 'recoil';

const isCameraEnabledState = atom({
    key: 'isCameraEnabledState',
    default: false
});

export default isCameraEnabledState;