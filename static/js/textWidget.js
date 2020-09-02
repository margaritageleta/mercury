function addTextWidget(rowId, globals) {
    const textWidget = document.createElement('p');
    textWidget.setAttribute("id", "text-widget-" + globals.textWidgetsCounter);
    textWidget.className = 'text-widget';
    document.getElementById('row-widget-content-'+rowId).appendChild(textWidget);

    const textWidgetController = document.createElement('div');
    textWidgetController.setAttribute("id", "text-widget-controller-options-" + globals.textWidgetsCounter);
    textWidgetController.className = 'text-widget-controller';
    textWidgetController.innerHTML = `
        <div>
            <div>
                <div>
                    <div class="controller-menu">
                        <div>
                            <h1>Text widget #`+globals.textWidgetsCounter+`</h1>
                        </div>
                        <input id='btn-remove-text-`+globals.textWidgetsCounter+`' type='button' value='Remove widget'/>
                    </div>
                    <div class="text-controller-options">
                        <div class="text-style-options">
                            <div id="bold-text-operator-`+globals.textWidgetsCounter+`" class="text-button"><i class="fa fa-bold"></i></div>
                            <div id="italic-text-operator-`+globals.textWidgetsCounter+`" class="text-button"><i class="fa fa-italic"></i></div>
                            <div id="justify-text-operator-`+globals.textWidgetsCounter+`" class="text-button"><i class="fa fa-align-justify"></i></div>
                            <div id="center-text-operator-`+globals.textWidgetsCounter+`" class="text-button"><i class="fa fa-align-center"></i></div>
                            <div id="left-text-operator-`+globals.textWidgetsCounter+`" class="text-button"><i class="fa fa-align-left"></i></div>
                            <div id="right-text-operator-`+globals.textWidgetsCounter+`" class="text-button"><i class="fa fa-align-right"></i></div>
                            <input type="range" id="scale-text-`+globals.textWidgetsCounter+`" name="scale-text" min="2" max="10" value="4" step="2">
                        </div>
                        <textarea 
                            id="textarea-widget-`+(globals.textWidgetsCounter++)+`" 
                            name="text" 
                            placeholder="Type here widget text"
                            rows="4"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    `;
    console.log('row-widget-controller-options-'+rowId);
    document.getElementById('row-widget-controller-options-'+rowId).appendChild(textWidgetController);
}


    $(document).on('click', 'input[id^="btn-remove-text-"]', function() {
        document.getElementById("text-widget-" + this.id.match(/\d+$/i)).remove();
        document.getElementById("text-widget-controller-options-" + this.id.match(/\d+$/i)).remove();
    });

    $(document).on('input', 'textarea[id^="textarea-widget-"]', function() {
        console.log(this.id);
        var text = document.getElementById(this.id).value;
        console.log(text);
        $('#text-widget-' + this.id.match(/\d+$/i)).text(text);
    });

    $(document).on('click', 'div[id^="bold-text-operator-"]', function() {
        var textWidget = $('#text-widget-' + this.id.match(/\d+$/i));
        var fontWeight = textWidget.css('font-weight');
        console.log(fontWeight);
        if (fontWeight  == 'normal' || fontWeight  == '400') {
            textWidget.css("font-weight", "bold");
        } else {
            textWidget.css("font-weight", "normal");
        }
    });

    $(document).on('click', 'div[id^="italic-text-operator-"]', function() {
        var textWidget = $('#text-widget-' + this.id.match(/\d+$/i));
        var fontStyle = textWidget.css('font-style');
        console.log(fontStyle);
        if (fontStyle  == 'normal') {
            textWidget.css("font-style", "italic");
        } else {
            textWidget.css("font-style", "normal");
        }
    });

    $(document).on('click', 'div[id^="justify-text-operator-"]', function() {
        $('#text-widget-' + this.id.match(/\d+$/i)).css("text-align", "justify");
    });

    $(document).on('click', 'div[id^="center-text-operator-"]', function() {
        $('#text-widget-' + this.id.match(/\d+$/i)).css("text-align", "center");
    });

    $(document).on('click', 'div[id^="left-text-operator-"]', function() {
        $('#text-widget-' + this.id.match(/\d+$/i)).css("text-align", "left");
    });

    $(document).on('click', 'div[id^="right-text-operator-"]', function() {
        $('#text-widget-' + this.id.match(/\d+$/i)).css("text-align", "right");
    });

    $(document).on('input change', 'input[id^="scale-text-"]', function() {
        console.log(this.id);
        var newSize = document.getElementById(this.id).value;
        $('#text-widget-' + this.id.match(/\d+$/i)).css("font-size", newSize + "pt");
    });

    