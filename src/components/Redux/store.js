import thunk from 'redux-thunk';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {winReducer,lossReducer} from './Reducer/scoreReducer'
const initialState={}
const persistConfig = {
    key: 'root',
    storage,
  }
const reducer = combineReducers({
    winReducer,
    lossReducer,

})
const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, initialState,composeEnhancers(applyMiddleware(thunk)));
let persistor = persistStore(store);
export {store,persistor};