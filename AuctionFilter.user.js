// ==UserScript==
// @name         Auction Filter
// @namespace    Heasleys4hemp.AuctionFilter
// @version      0.2
// @description  Filter Items from the Torn Auction
// @author       Heasleys4hemp [1468764]
// @match        https://www.torn.com/amarket.php*
// @updateURL    https://github.com/Heasleys4hemp/AuctionFilter/raw/master/AuctionFilter.user.js
// ==/UserScript==

//array list of items to hide
var arrList = ['Cricket Bat', 'Psycho Clown Mask', 'Twin Tiger Hooks', 'Old Lady Mask', 'Scarred Man Mask', 'Nun Mask', 'Young Lady Mask', 'Ginger Kid Mask', 'Moustache Man Mask', 'Kama', 'Exotic Gentleman Mask', 'Wushu Double Axes', 'Mini Cooper S'];
//MutationObserver used to monitor specific activity
const observer = new MutationObserver(() => {
    //observing item list div for li's that contain 'Cricket Bat' (now list of items)
    var i=0;
for (; i<arrList.length; i++) {
    const cricket = $("div.items-list-wrap > ul.items-list.t-blue-cont.h > li:contains('"+arrList[i]+"')");
    cricket.hide();
}
});
//set observer to monitor changes in .content-wrapper div on page
const wrapper = document.querySelector('.content-wrapper');
observer.observe(wrapper, { subtree: true, childList: true });
