'use strict';

/*--------------------------------------------------------------------------- *
 * Fakebook
 * Jodi-Ann Barrett
 * 
 * */

import User from './User.js';

class Subscriber extends User {

    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize = true) {
        super(id, name, userName, email)
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() {
        return this.#pages;
    }
    
    get groups() {
        return this.#groups;
    }
    
    get canMonetize() {
        return this.#canMonetize;
    }

    getInfo() {
        return `
            ${super.getInfo()}
            ${this.pages}
            ${this.groups}
            ${this.canMonetize}
        `;
    }
}

export default Subscriber;
