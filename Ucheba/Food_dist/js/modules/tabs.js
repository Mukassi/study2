function tabs(tabsSelector, tabsContentSelector,tabsParentSelector,activeClass){
    
    const tabs = document.querySelectorAll(tabsSelector),
          tabsParent = document.querySelector(tabsParentSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector);

    function hideTabContent (){
        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach( tab =>{
            tab.classList.remove(activeClass);
        });
    }   
    function showTabContent(i = 0){
            tabsContent[i].classList.remove('hide');
            tabsContent[i].classList.add('show', 'fade');
            tabs[i].classList.add(activeClass);
    }   

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', event => {
        const target = event.target;

        if( target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) =>{
                if ( item == target){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

        
    });
}

export default tabs;