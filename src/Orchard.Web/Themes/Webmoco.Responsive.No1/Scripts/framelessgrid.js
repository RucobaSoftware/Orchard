/*!
* Orchard CMS Webmoco Responsive No. 1 Theme, by Webmoco
* http://www.webmoco.com/templates/
*
* Copyright 2012, Webmoco
* All rights reserved.
*
* This is release under the BSD 2-Clause "Simplified" or "FreeBSD" License (BSD-2-Clause)
* http://www.opensource.org/licenses/BSD-2-Clause
*
* Redistribution and use in source and binary forms, with or without modification, are
* permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the distribution.
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING,
* BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
* SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
* LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
* ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

//Orchard CMS Webmoco Responsive No. 1 Theme, by Webmoco
//http://www.webmoco.com/templates/

//Copyright 2012, Webmoco
//All rights reserved.

//This is release under the BSD 2-Clause "Simplified" or "FreeBSD" License (BSD-2-Clause)
//http://www.opensource.org/licenses/BSD-2-Clause

//Redistribution and use in source and binary forms, with or without modification, are
//permitted provided that the following conditions are met:

//Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
//Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
//THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

var grid = {
    columnCount: 36,
    gutterWidth: 1,         // 1em = 16px
    columnWidth: 4,         // 4em = 64px
    el: document.createElement('ul')
};
grid.el.style.cssText = 'list-style-type: none; width: 100%; height: 100%; position: fixed; z-index: -1; top: 0; margin-top: 0; padding: 0';

var centerline = document.createElement('div');
centerline.style.cssText = 'width: 0px; height: 100%; position: fixed; top: 0; left: 50%; border-left: 1px dashed grey';
var sampleSpans = document.createElement('ul');
sampleSpans.style.cssText = 'list-style-type: none; width: 100%; height: 100%; position: fixed; z-index: -1; top: 50px; margin-top: 0; padding: 0';
var viewport = document.createElement('div');
var viewportCSS = 'position: fixed; z-index: -1; top: 0; left: 50%; border: 1px solid lightBlue;';
var borderBoxCSS = 'box-sizing:border-box; -ms-box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;';
var columnCSS = 'display: block; position: absolute; z-index: -1; height: 100%; left: 50%; padding-top: 100px; background-color: rgba(100,180,200,.15); color: grey;';

function setColumnLeftMargin(num) {
    var offset = grid.columnCount % 2 === 0 ? grid.gutterWidth / 2 : -1*grid.columnWidth/2;
    return num <= grid.columnCount / 2 ? (num - 1) * (grid.columnWidth + grid.gutterWidth) + offset : -1 * ((num - Math.floor(grid.columnCount / 2)) * (grid.columnWidth + grid.gutterWidth) - offset);
}
function setSampleSpanWidth(num) {
    return num * (grid.columnWidth + grid.gutterWidth) - grid.gutterWidth;
}
function drawGrid() {
    document.body.appendChild(grid.el);
    for (var i = 1; i <= grid.columnCount; i++) {
        var newCol = document.createElement('li');
        var newColText = document.createElement('span');
        var newColMarginLeft = setColumnLeftMargin(i);
        newCol.style.cssText = columnCSS + ' width: ' + grid.columnWidth + 'em;' + 'margin-left: ' + newColMarginLeft + 'em';
        newColText.style.cssText = 'font-size: 12px;';
        newColText.innerHTML = 'col' + i + ' <br/>' + newColMarginLeft + 'em' + ' <br/>' + newColMarginLeft*16 + 'px' ;
        grid.el.appendChild(newCol);
        newCol.appendChild(newColText);
    }
}
function drawSampleSpans() {
    document.body.appendChild(sampleSpans);
    var i = grid.columnCount % 2 === 0 ? 2 : 1;
    for (i; i < grid.columnCount; i += 2) {
        var newSampleSpan = document.createElement('li');
        var newSampleSpanText = document.createElement('span');
        var newSampleSpanWidth = setSampleSpanWidth(i);
        newSampleSpan.style.cssText = 'display: block; position: relative; z-index: -1; height: 3em; margin: 0 auto; background-color: rgba(180,100,200,.15); color: grey; width: ' + newSampleSpanWidth + 'em';
        newSampleSpanText.style.cssText = 'font-size: 12px;';
        newSampleSpanText.innerHTML = 'span' + i + ' <br/>' + newSampleSpanWidth + 'em' + ' <br/>' + newSampleSpanWidth*16 + 'px';
        sampleSpans.appendChild(newSampleSpan);
        newSampleSpan.appendChild(newSampleSpanText);
    }
}
function updateScreenWidth() {
    var widthText = document.getElementById('widthText');
    var targetLayout = document.getElementById('targetLayout');
    var width = document.body.offsetWidth;
    widthText.innerText = width;
    if (width >= 1024) {
        targetLayout.innerText = 'desktop and landscape tablet';
        viewport.style.cssText = 'width: 1024px; height: 768px; margin-left: -512px;' + viewportCSS + borderBoxCSS;
    } else if (width < 1024 && width >= 768) {
        targetLayout.innerText = 'portait tablet';
        viewport.style.cssText = 'width: 768px; height: 1024px; margin-left: -384px;' + viewportCSS + borderBoxCSS;
    } else if (width < 768 && width >= 480) {
        targetLayout.innerText = 'landscape smartphone';
        viewport.style.cssText = 'width: 480px; height: 320px; margin-left: -240px;' + viewportCSS + borderBoxCSS;
    } else if (width < 480) {
        targetLayout.innerText = 'portait smartphone';
        viewport.style.cssText = 'width: 320px; height: 480px; margin-left: -160px;' + viewportCSS + borderBoxCSS;
    }
}

function showFramelessGrid() {
    document.body.appendChild(centerline);
    document.body.appendChild(viewport);
    drawGrid();
    drawSampleSpans();
}
