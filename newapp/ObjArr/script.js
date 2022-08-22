'use strict';
class IndexMap {
    constructor () {
        this.counterIndex = 0;
        this.collection = {};
    }
    set(key, value){
        this.collection = {...this.collection,
            [key] : {value,
                     index: this.counterIndex}};
        this.counterIndex ++;     
    }
    getKeyByIndex(index) {
        for (const [key, value] of Object.entries(this.collection)){
            if( value.index === index) {
                return key
            }
        }
    }
    has(key){
        return(key in this.collection);
    }
    hasIndex(index){
        return Boolean(this.getByIndex(index));
    }  
    get(key) {
        return(key in this.collection) ? this.collection[key] : null;
    }
    getByIndex(index){
        const keyNeeded = this.getKeyByIndex(index);
        return this.get(keyNeeded);
    }
    remove(key) { 
        const removedKeyIndex = this.collection[key].index;
        if (key in this.collection){
            delete this.collection[key];
        }
        for (let i = removedKeyIndex + 1; i < this.counterIndex; i++){
            const nextValueKey = this.getKeyByIndex(i);
            this.collection[nextValueKey].index = i - 1;
        }
        this.counterIndex--;
    }
    size(){
        return this.counterIndex;
    }
}

const Tui = new IndexMap()
