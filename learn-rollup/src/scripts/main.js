// Import styles (automatically injected into <head>).
//import '../styles/main.css';

// Import a couple modules for testing.
import { Engine } from './modules/Engine';
//get Singleton
let getHSApi = (function () {
    let engine = null;
    return function () {
        if (!engine) {
            engine = new Engine();
        }
        return engine;
    }
})();
export default getHSApi;
