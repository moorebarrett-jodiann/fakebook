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
        let superObj = super.getInfo();
        const monetize = '<i class="fa-solid fa-check"></i>';
        const dontMonetize = '<i class="fa-solid fa-xmark"></i>';
        return `
            <h2><span class="profile-label">${superObj['name']}</span> (ID: ${superObj['id']})</h2>
            <table>
                <tbody>
                    <tr>
                        <td><span class="profile-label">User Name: </span></td>
                        <td><p>${superObj['userName']}</p></td>
                    </tr>
                    <tr>
                        <td><span class="profile-label">Email: </span></td>
                        <td><p>${superObj['email']}</p></td>
                    </tr>
                    <tr>
                        <td><span class="profile-label">Pages: </span></td>
                        <td><p>${this.pages.join(', ')}</p></td>
                    </tr>
                    <tr>
                        <td><span class="profile-label">Groups: </span></td>
                        <td><p>${this.groups.join(', ')}</p></td>
                    </tr>
                    <tr>
                        <td><span class="profile-label">Monetized Subscription: </span></td>
                        <td><p>${(this.canMonetize) ? monetize : dontMonetize}</p></td>
                    </tr>
                </tbody>
            </table>
        `;
    }
}

export default Subscriber;
