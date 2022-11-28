'use strict';

/*--------------------------------------------------------------------------- *
 * Fakebook
 * Jodi-Ann Barrett
 * 
 * */

import { select, onEvent } from './utils.js';
import Subscriber from './Subscriber.js';

/**--------------------------------- Data ----------------------------------- */
const form = select('form');
const gridBox = select('.grid');
const postInput = select('.post-input');
const postFile = select('.post-file');
const fileNameSpan = select('.file-name-selected');
const createPost = select('.create-post');
const message = select('.message');
const subscriber = new Subscriber(
    1, 
    'Jodi-Ann Barrett', 
    'jbarrett', 
    'jbarrett@email.com',
    ['@FoodNetworkCA', '@IslandVybz', '@TED'],
    ['Women in IT', 'International Travellers', 'Netflix Fans'],
);

/**-------------------------------------------------------------------------- */

/**-----------------Timeline Functions and Events---------------------------- */

// submit form
function submitForm(postInput, postFile) {

    try {
        window.URL = window.URL || window.webkitURL;
        let url = URL.createObjectURL(postFile.files[0]);
        let image = select('.avatar').innerHTML;
        let today = new Date();

        // build grid children
        var div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <div class="post-header flexbox">
                ${image}
                <h4>${subscriber.name}</h4>
                <p>${today.toDateString()}</p>
            </div>
            <div class="post-body">
                <p>${postInput.value}</p>
                <img src="${url}"/>
            </div>
        `;
        gridBox.prepend(div);

    } catch (error) {
        message.innerHTML = `<p class="invalid">${error}</p>`;
    }
}

// function to validate form input
function validateFormInput () {
    if(postInput.value === '' && postFile.value === '') {
        message.innerHTML = `<p class="invalid">Your post cannot be empty.</p>`;
    } else {
        submitForm(postInput, postFile);
        postInput.value = '';
        postFile.value = '';
        fileNameSpan.innerText = '';
    }
}

// validate form when add button is clicked
onEvent('click', createPost, function (event) {
    event.preventDefault();
    validateFormInput();
});

// when page is reloaded clear grid and form
onEvent('load', window, () => {
    gridBox.innerHTML = '';
    fileNameSpan.innerText = '';
    form.reset();
});

// when file is selected show the file name to the user
onEvent('change', postFile, function() {
    // extract name of the file:
    fileNameSpan.innerText = this.files[0].name.trim();
});

/**-------------------------------------------------------------------------- */

/**---------------Subscriber Profile Functions and Events-------------------- */

const profilePhoto = select('.avatar');
const overlay = select('.overlay');
const profileInfo = select('.profile-info');
const profileDetails = select('.profile-details');

function retriveSubscriberInfo() {
    profileDetails.innerHTML = `
        <p><span class="profile-label">ID: </span>${subscriber.id}</p>
        <p><span class="profile-label">Name: </span>${subscriber.name}</p>
        <p><span class="profile-label">User Name: </span>${subscriber.userName}</p>
        <p><span class="profile-label">Email: </span>${subscriber.email}</p>
        <p><span class="profile-label">Pages: </span>${subscriber.pages.join(', ')}</p>
        <p><span class="profile-label">Groups: </span>${subscriber.groups.join(', ')}</p>
        <p><span class="profile-label">Monetized Subscription: </span>${subscriber.canMonetize}</p>
    `;
}

onEvent('click', profilePhoto, function () {
  overlay.removeAttribute('style', `
    visibility: hidden;
  `);
  overlay.setAttribute('style', `
    visibility: visible;
  `);
  profileInfo.style.display = 'block';
  retriveSubscriberInfo();
});

onEvent('click', overlay, function () {
  this.removeAttribute('style', `
    visibility: visible;
  `);
  this.setAttribute('style', `
    visibility: hidden;
  `);
  profileInfo.style.display = 'none';
});




/**-------------------------------------------------------------------------- */