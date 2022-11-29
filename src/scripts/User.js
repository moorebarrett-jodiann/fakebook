'use strict';

/*--------------------------------------------------------------------------- *
 * Fakebook
 * Jodi-Ann Barrett
 * 
 * */

class User {
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() {
        return this.#id;
    }
    
    get name() {
        return this.#name;
    }
    
    get userName() {
        return this.#userName;
    }
    
    get email() {
        return this.#email;
    }

    getInfo() {
        const obj = {};
        obj['id'] = this.id;
        obj['name'] = this.name;
        obj['userName'] = this.userName;
        obj['email'] = this.email;
        return obj;
    }
}

export default User;
