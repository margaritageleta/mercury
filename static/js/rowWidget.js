function addRowWidget(globals) {

    const widget = document.createElement('div');
    widget.setAttribute("id", "row-widget-" + globals.rowWidgetsCounter);
    console.log(globals.rowWidgetsCounter);

    widget.className = 'row-widget';
    widget.innerHTML = `<div id="row-widget-content-`+globals.rowWidgetsCounter+`"></div>`;
    document.getElementById('content__page_1').appendChild(widget);

    const widgetController = document.createElement('div');
    widgetController.setAttribute("id", "row-widget-controller-" + globals.rowWidgetsCounter);
    widgetController.className = 'row-widget-controller';
    widgetController.innerHTML = `<div>
        <div>
            <div>
                <div class='controller-menu'>
                    <div>
                        <h1>Row widget `+globals.rowWidgetsCounter+`</h1>
                    </div>
                    <input id='btn-remove-row-`+globals.rowWidgetsCounter+`' type='button' value='Remove widget'/>
                </div>
                <div id="row-widget-controller-options-` + globals.rowWidgetsCounter+`" class="controller-options">
                    <input id="slider-margin-top-row-`+globals.rowWidgetsCounter+`" type="range" name="margin-row-`+globals.rowWidgetsCounter+`" min="0" max="50" value="0" step="1"/>
                    <input id="slider-margin-bottom-row-`+globals.rowWidgetsCounter+`" type="range" name="margin-row-`+globals.rowWidgetsCounter+`" min="0" max="50" value="0" step="1"/>
                    <input id="slider-margin-left-row-`+globals.rowWidgetsCounter+`" type="range" name="margin-row-`+globals.rowWidgetsCounter+`" min="0" max="50" value="0" step="1"/>
                    <input id="slider-margin-right-row-`+globals.rowWidgetsCounter+`" type="range" name="margin-row-`+globals.rowWidgetsCounter+`" min="0" max="50" value="0" step="1"/>
                </div>
                <div style="width: 100%; display: flex; justify-content: center;">
                        <input id="btn-add-text-widget-row-`+globals.rowWidgetsCounter+`" type="button" value="Add text element"/>
                        <input id="btn-add-splitter-row-`+globals.rowWidgetsCounter+`" type="button" value="Add splitter"/>
                        <input id="btn-add-image-widget-row-`+(globals.rowWidgetsCounter++)+`" type="button" value="Add image"/>
                </div>
            </div>
        </div>
    </div>`;

    document.getElementById('widgets-controllers').appendChild(widgetController);

}

function removeRow(id) {
    document.getElementById("row-widget-" + id).remove();
    document.getElementById("row-widget-controller-" + id).remove();
}