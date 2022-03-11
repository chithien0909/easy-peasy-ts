import { createStore } from 'easy-peasy';
import model, {StoreModel} from "./models";

const store = createStore<StoreModel>(model)

export default store
