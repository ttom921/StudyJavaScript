const util = {
    generatedId() {
        return Math.random().toString(36).substr(2);
    }
}
export default util;