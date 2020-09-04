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
                            <h1>Text widget `+globals.textWidgetsCounter+`</h1>
                        </div>
                        <div style="display: flex; width: max-content; flex-direction: row;">
                            <div id='btn-minimize-text-`+globals.textWidgetsCounter+`' class="controller-menu-button"><i class="fa fa-minus minus"></i></div>
                            <div id='btn-remove-text-`+globals.textWidgetsCounter+`' class="controller-menu-button"><i class="fa fa-times times"></i></div>
                        </div>
                    </div>
                    <div class="text-controller-options text-subwidget-visible-`+globals.textWidgetsCounter+`">
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

function removeTextWidget(id) {
    document.getElementById("text-widget-" + id).remove();
    document.getElementById("text-widget-controller-options-" + id).remove();
}

    $(document).on('click', 'div[id^="btn-remove-text-"]', function() {
        removeTextWidget(this.id.match(/\d+$/i));
    });

    $(document).on('input', 'textarea[id^="textarea-widget-"]', function() {
        // Update text
        var text = document.getElementById(this.id).value;
        var textWidget = $('#text-widget-' + this.id.match(/\d+$/i));
        textWidget.text(text);

        // Find id of current page
        var pageId = textWidget.closest( ".content__page" ).attr('id').match(/\d+$/i)[0];

        // Sum of heights of child widgets of current page
        var widgetsOnPageHeight = 0;
        $('#content__page_' + pageId + ' > *').each(function() {
            widgetsOnPageHeight += $(this).height();
        });
        console.log(widgetsOnPageHeight);
        var contentPageHeight = $('#content__page_' + pageId).height();

        // Prepare new text
        var textNextPage = [];
        // if it overflows it means that the last widget is overflowing
        var lastTextWidget = $('#content__page_' + pageId).find('.text-widget').last();

        // Check whether it overflows
        if (widgetsOnPageHeight > contentPageHeight) {
            while (widgetsOnPageHeight > contentPageHeight) {
                console.log("TEXT IS OVERFLOWING!");
                widgetsOnPageHeight -= lastTextWidget.height();

                // Split text
                var textOverflowed = lastTextWidget.text().split(' ');
                // Pop last char
                var lastChar = textOverflowed.pop();
                textNextPage.unshift(lastChar);
                // Join text after pop
                lastTextWidget.text(textOverflowed.join(' '));
                widgetsOnPageHeight += lastTextWidget.height();
                
                // Decide where to place next text
                if (document.getElementById('content__page_' + (parseInt(pageId) + 1))) {
                    // This page exists, find text widget there
                    var textId = $('#content__page_' + (parseInt(pageId) + 1)).find('.text-widget').first().attr('id').match(/\d+$/i)[0];
                
                    // Append new text 
                    console.log("IF CASE");
                    console.log($('#text-widget-' + textId).text());
                    console.log('textarea-widget-' + textId + ' ===> ' + lastChar + ' ' + $('#text-widget-' + textId).text());
                    $('#textarea-widget-' + textId).val(lastChar + ' ' + $('#text-widget-' + textId).text());
                    $('#textarea-widget-' + textId).focus();
                    console.log(textNextPage.length);
                    console.log(textNextPage.join('').length);
                    $('#textarea-widget-' + textId).prop('selectionEnd', textNextPage.join(' ').length);
                    $('#text-widget-' + textId).text(lastChar + ' '+ $('#text-widget-' + textId).text());

                    // Delete text from first textarea
                    console.log('textarea-widget-' + textWidget.attr('id').match(/\d+$/i)[0] + ' ===> ' + textOverflowed.join(' '));
                    $('#textarea-widget-' + textWidget.attr('id').match(/\d+$/i)[0]).val(textOverflowed.join(' '));
                    $('#text-widget-' + textWidget.attr('id').match(/\d+$/i)[0]).text(textOverflowed.join(' '));
                } else {
                    // Next page does not exist, add page
                    addPage(globals);
                    // Add row widget
                    addRowWidget(globals, rootWidget = 'page', rootWidgetId = globals.pagesCounter);
                    // Add inside text widget
                    addTextWidget((globals.rowWidgetsCounter - 1), globals);
                    // Bond it
                    console.log('#text-widget-' + (globals.textWidgetsCounter - 1));
                    $('#text-widget-' + (globals.textWidgetsCounter - 1)).addClass('bonded');
                    // Append new text 
                    console.log("ELSE CASE");
                    console.log('textarea-widget-' + (globals.textWidgetsCounter - 1) + ' ===> ' + textNextPage.join(' '));
                    $('#textarea-widget-' + (globals.textWidgetsCounter - 1)).val(textNextPage.join(' '));
                    $('#textarea-widget-' + (globals.textWidgetsCounter - 1)).focus();
                    console.log(textNextPage.length);
                    //$('#textarea-widget-' + (globals.textWidgetsCounter - 1)).prop('selectionEnd', textNextPage.length);
                    $('#text-widget-' + (globals.textWidgetsCounter - 1)).text(textNextPage.join(' '));

                    // Delete text from first textarea
                    console.log('textarea-widget-' + textWidget.attr('id').match(/\d+$/i)[0] + ' ===> ' + textOverflowed.join(' '));
                    $('#textarea-widget-' + textWidget.attr('id').match(/\d+$/i)[0]).val(textOverflowed.join(' '));
                    $('#text-widget-' + textWidget.attr('id').match(/\d+$/i)[0]).text(textOverflowed.join(' '));
                }
            }
        }/*
        else if ((widgetsOnPageHeight < contentPageHeight) && (document.getElementById('content__page_' + (parseInt(pageId) + 1)))) {
            // Prepare previous text
            var textPrevPage = lastTextWidget.text().split(' ');

            // If there exists next page and there exists a bonded first element
            while ((widgetsOnPageHeight < contentPageHeight) && (document.getElementById('content__page_' + (parseInt(pageId) + 1)))) {
                var firstTextWidget = $('#content__page_' + (parseInt(pageId) + 1)).find('.text-widget').first();
                if (firstTextWidget.hasClass('bonded')) {
                    // Split text
                    var textExceeded = firstTextWidget.text().split(' ');
                    // Pop last char
                    var firstChar = textExceeded.shift();
                    textPrevPage.push(firstChar);
                    // Join text after pop
                    lastTextWidget.text(textPrevPage.join(' '));
                    firstTextWidget.text(textExceeded.join(' '));
                    widgetsOnPageHeight += lastTextWidget.height();

                    console.log("THE 2nd IF CASE");
                    console.log('textarea-widget-' + firstTextWidget.attr('id') + ' ===> ' + textPrevPage.join(' '));
                    $('#textarea-widget-' + firstTextWidget.attr('id').match(/\d+$/i)[0]).val(textPrevPage.join(' '));
                    $('#text-widget-' + textId).text(textNextPage.join(' '));

                    // Delete text from first textarea
                    console.log('textarea-widget-' + firstTextWidget.attr('id').match(/\d+$/i)[0] + ' ===> ' + textExceeded.join(' '));
                    $('#textarea-widget-' + textWidget.attr('id').match(/\d+$/i)[0]).val(textExceeded.join(' '));
                    $('#text-widget-' + textWidget.attr('id').match(/\d+$/i)[0]).text(textExceeded.join(' '));
                } else {
                    // Nothing happens
                    break;
                }
            }
        }*/
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

    