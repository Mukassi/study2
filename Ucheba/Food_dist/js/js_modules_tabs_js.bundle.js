"use strict";
(self["webpackChunkfood_dist"] = self["webpackChunkfood_dist"] || []).push([["js_modules_tabs_js"],{

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(){
    
    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsParent = document.querySelector(".tabheader__items"),
          tabsContent = document.querySelectorAll(".tabcontent");

    function hideTabContent (){
        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach( tab =>{
            tab.classList.remove("tabheader__item_active");
        });
    }   
    function showTabContent(i = 0){
            tabsContent[i].classList.remove('hide');
            tabsContent[i].classList.add('show', 'fade');
            tabs[i].classList.add("tabheader__item_active");
    }   

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', event => {
        const target = event.target;

        if( target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) =>{
                if ( item == target){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

        
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({tabs});

/***/ })

}]);
//# sourceMappingURL=js_modules_tabs_js.bundle.js.map