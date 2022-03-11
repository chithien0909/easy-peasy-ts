import {action, Action} from "easy-peasy";

export interface StoreModel {
    name: string;
    course: string;
    setName: Action<this, string>;
}

const model: StoreModel = {
    name: 'Chi Thien',
    course: "Learn easy peasy",
    setName: action((state, payload) => {
        state.name = payload;
    })
}
export default model;
