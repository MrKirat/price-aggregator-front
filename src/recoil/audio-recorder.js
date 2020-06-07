import { atom } from 'recoil';

const isAudioRecorderEnabledState = atom({
    key: 'isAudioRecorderEnabledState',
    default: false
});

export default isAudioRecorderEnabledState;