function addRowWidget(globals, rootWidget = null, rootWidgetId = null) {

    const widget = document.createElement('div');
    widget.setAttribute("id", "row-widget-" + globals.rowWidgetsCounter);
    console.log(globals.rowWidgetsCounter);

    widget.className = 'row-widget';
    widget.innerHTML = `<div id="row-widget-content-`+globals.rowWidgetsCounter+`"></div>`;
    if (rootWidget == 'splitter') {
        document.getElementById('splitter-widget-' + rootWidgetId).appendChild(widget);
    } else {
        document.getElementById('content__page_1').appendChild(widget);
    }

    const widgetController = document.createElement('div');
    widgetController.setAttribute("id", "row-widget-controller-" + globals.rowWidgetsCounter);
    widgetController.className = 'row-widget-controller';
    widgetControllerMenu = ''
    if (rootWidget == null) {
        widgetControllerMenu = `
        <div id='btn-minimize-row-`+globals.rowWidgetsCounter+`' class="controller-menu-button"><i class="fa fa-minus minus"></i></div>
        <div id='btn-remove-row-`+globals.rowWidgetsCounter+`' class="controller-menu-button"><i class="fa fa-times times"></i></div>
        `
    } else {
        widgetControllerMenu = `
        <div id='btn-minimize-row-`+globals.rowWidgetsCounter+`' class="controller-menu-button"><i class="fa fa-minus minus"></i></div>
        `
    }
    widgetController.innerHTML = `<div>
        <div>
            <div>
                <div class='controller-menu'>
                    <div>
                        <h1>Row widget `+globals.rowWidgetsCounter+`</h1>
                    </div>
                    <div style="display: flex; width: max-content; flex-direction: row;">
                        `+ widgetControllerMenu +`
                    </div>
                </div>
                <div class="row-controller-options row-subwidget-visible-`+globals.rowWidgetsCounter+`">
                    <div>
                        <div>
                            <label>Top row margin</label>
                            <input id="slider-margin-top-row-`+globals.rowWidgetsCounter+`" type="range" name="margin-row-`+globals.rowWidgetsCounter+`" min="0" max="50" value="0" step="1"/>
                        </div>
                        <div>
                            <label>Bottom row margin</label>
                            <input id="slider-margin-bottom-row-`+globals.rowWidgetsCounter+`" type="range" name="margin-row-`+globals.rowWidgetsCounter+`" min="0" max="50" value="0" step="1"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Left row margin</label>
                            <input id="slider-margin-left-row-`+globals.rowWidgetsCounter+`" type="range" name="margin-row-`+globals.rowWidgetsCounter+`" min="0" max="50" value="0" step="1"/>
                        </div>
                        <div>
                            <label>Right row margin</label>
                            <input id="slider-margin-right-row-`+globals.rowWidgetsCounter+`" type="range" name="margin-row-`+globals.rowWidgetsCounter+`" min="0" max="50" value="0" step="1"/>
                        </div>
                    </div>
                </div>
                <div id="row-widget-controller-options-` + globals.rowWidgetsCounter+`" class="row-subwidget-visible-`+globals.rowWidgetsCounter+`">
                    
                </div>
                <div style="width: 100%; display: flex; justify-content: center;" class="row-subwidget-visible-`+globals.rowWidgetsCounter+`">
                        <input id="btn-add-text-widget-row-`+globals.rowWidgetsCounter+`" type="button" value="Add text element"/>
                        <input id="btn-add-splitter-widget-row-`+globals.rowWidgetsCounter+`" type="button" value="Add splitter"/>
                        <input id="btn-add-image-widget-row-`+(globals.rowWidgetsCounter++)+`" type="button" value="Add image"/>
                </div>
            </div>
        </div>
    </div>`;

    if (rootWidget == 'splitter') {
        document.getElementById('splitter-widget-controller-options-' + rootWidgetId).appendChild(widgetController);
    } else {
        document.getElementById('widgets-controllers').appendChild(widgetController);
    }
}

function removeRow(id) {
    document.getElementById("row-widget-" + id).remove();
    document.getElementById("row-widget-controller-" + id).remove();
}
