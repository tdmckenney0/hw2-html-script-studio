/**
 * Base Model Class
 */
class Model {
    /**
     * @param {*} obj 
     */
    constructor(obj) {
        this.obj = obj;
    }

    /**
     * @return {string} Lua string. 
     */
    toLua() {
        return "";
    }
}

export default Model;
