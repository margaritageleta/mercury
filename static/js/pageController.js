function addPage(globals) {
    globals.pagesCounter++;
    const page = document.createElement('div');
    page.className = 'page-wrapper';
    page.innerHTML = `
    <div id="page_`+globals.pagesCounter+`" class="page">
        <div id="content__page_`+globals.pagesCounter+`" class="content__page">
        </div>
    </div>`
    document.getElementById('pages').appendChild(page)
    document.getElementById('pages').appendChild(document.createElement('br'));

    const pageController = document.createElement('div');
    pageController.setAttribute("id", "page-controller-" + globals.pagesCounter);
    pageController.className = 'text-widget-controller';
    pageController.innerHTML = `
        <div>
            <div>
                <div>
                    <div class="controller-menu">
                        <div>
                            <h1>Page widget `+globals.pagesCounter+`</h1>
                        </div>
                        <div style="display: flex; width: max-content; flex-direction: row;">
                            <div id='btn-minimize-text-`+globals.pagesCounter+`' class="controller-menu-button"><i class="fa fa-minus minus"></i></div>
                            <div id='btn-remove-text-`+globals.pagesCounter+`' class="controller-menu-button"><i class="fa fa-times times"></i></div>
                        </div>
                    </div>
                    <div id="page-controllers-`+globals.pagesCounter+`">

                    </div>
                    <div style="width: 100%; display: flex; justify-content: space-around;">
                        <input id="btn-add-row-page-`+globals.pagesCounter+`" type="button" value="Add row element"/>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('widgets-controllers').appendChild(pageController);
}