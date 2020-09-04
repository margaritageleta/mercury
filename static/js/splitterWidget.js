function addSplitterWidget(rowId, globals) {
    const splitterWidget = document.createElement('div');
    splitterWidget.setAttribute("id", "splitter-widget-" + globals.splitterWidgetsCounter);
    splitterWidget.className = 'splitter-widget';
    document.getElementById('row-widget-content-'+rowId).appendChild(splitterWidget);

    const splitterWidgetController = document.createElement('div');
    splitterWidgetController.setAttribute("id", "splitter-widget-controller-" + globals.splitterWidgetsCounter);
    splitterWidgetController.className = 'splitter-widget-controller';
    splitterWidgetController.innerHTML = `
        <div>
            <div>
                <div>
                    <div class="controller-menu">
                        <div>
                            <h1>Splitter widget `+globals.splitterWidgetsCounter+`</h1>
                        </div>
                        <div style="display: flex; width: max-content; flex-direction: row;">
                            <div id='btn-minimize-splitter-`+globals.splitterWidgetsCounter+`' class="controller-menu-button"><i class="fa fa-minus minus"></i></div>
                            <div id='btn-remove-splitter-`+globals.splitterWidgetsCounter+`' class="controller-menu-button"><i class="fa fa-times times"></i></div>
                        </div>
                    </div>
                    <div class="splitter-controller-options splitter-subwidget-visible-`+globals.splitterWidgetsCounter+`">
                        <div>
                            <div>
                                <label>Division %</label>
                                <input id="slider-splitter-division-`+globals.splitterWidgetsCounter+`" type="range" name="slider-splitter-division-`+globals.splitterWidgetsCounter+`" min="25" max="75" value="50" step="1"/>
                            </div>
                            <div>
                                <label>Top row margin</label>
                                <input id="slider-splitter-gap-`+globals.splitterWidgetsCounter+`" type="range" name="slider-splitter-gap-`+globals.splitterWidgetsCounter+`" min="0" max="50" value="0" step="1"/>
                            </div>
                        </div>
                        <div id="splitter-widget-controller-options-` + globals.splitterWidgetsCounter+`">
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    globals.splitterWidgetsCounter++;
    document.getElementById('row-widget-controller-options-'+rowId).appendChild(splitterWidgetController);
}

function removeSplitter(id) {
    document.getElementById("splitter-widget-" + id).remove();
    document.getElementById("splitter-widget-controller-" + id).remove();
}