!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports={init:function(){!function(t){n.dropWidth=t}(120),function(t){n.dropHeight=t}(120),$("body").on("mouseover",".dropzone",function(t){$(t.currentTarget).addClass("hoverover")}).on("mouseout",".dropzone",function(t){$(t.currentTarget).removeClass("hoverover")})},getDropDimensions:function(){return n},getElArr:function(){return r},getGridCoordinates:function(){return o}};var r=[],n={dropHeight:0,dropWidth:0},o={initXCoord:0,initYCoord:0,initRowSize:0,initColSize:11}},function(t,e,r){var n=r(0),o=r(2),a=r(3),i=r(5);$(function(){n.init(),i.disableTextWrapper(),i.enableTextWrapper();var t=n.getDropDimensions();o.startGrid(),o.initDzArr(),o.addXDZ(),o.addYDZ(),o.deleteXDZ(),o.deleteYDZ(),o.deleteEls(),a.init(t.dropHeight,t.dropWidth,n.getElArr()),interact(".draggable").draggable({snap:{relativePoints:[{x:.5,y:.5}],endOnly:!0},restrict:{restriction:"parent",elementRect:{top:0,left:0,bottom:1,right:1},endOnly:!0},inertia:!1}).on("dragmove",function(t){a.dragMove(t)}).on("mousedown mouseup",function(t){a.toggleSelection(t)}).on("dragend",function(t){a.updateDragEndStates(t)}).on("mouseover",function(t){a.elMouseOver(t)}).on("mouseout",function(t){a.removeAnchor(t)}),interact(".dropzone").dropzone({overlap:.1,ondragenter:function(t){var e=interact.getElementRect(t.target),r={x:e.left+e.width/2,y:e.top+e.height/2};t.draggable.draggable({snap:{targets:[r]}}),o.DZHighlight(t)},ondrop:function(t){o.onDropUpdatePos(t),o.stopDZHighlight(t)},ondragleave:function(t){o.onLeaveUpdatePos(t),t.draggable.draggable({snap:!1}),o.stopDZHighlight(t)}}).on("click",function(t){})})},function(t,e,r){r(0);function n(t,e){$("#object_container").append('<div class="dropzone first" data-xCoordDZ='+t+" data-yCoordDZ="+e+">"),$(".dropzone[data-xCoordDZ="+t+"][data-yCoordDZ="+e+"]").css({left:$(".dropzone.first").width()*t,top:$(".dropzone.first").height()*e,position:"absolute"})}function o(t,e){$(".dropzone[data-xCoordDZ="+t+"][data-yCoordDZ="+e+"]").remove()}function a(t,e){var r=$(".dropzone.first").width()*(t+1),n=$(".dropzone.first").height()*(e+1);$("#object_container").css({width:r,height:n}),$("#object_container_overlay").css({width:r,height:n})}var l=0,s=0,c=11,d=3,u=new Array(12),f=0,g={initXCoord:0,initYCoord:0,initRowSize:3,initColSize:11};t.exports={startGrid:function(){for(s=0;s<=3;s++)for(n(0,s),l=1;l<=11;l++)n(l,s);a(11,3)},initDzArr:function(){for(i=0;i<12;i++)u[i]=new Array(4)},addXDZ:function(){$(".button_horizontal").click(function(){if(c++,0!=d){var t=0;for(t=0;t<=d;t++)n(c,t)}else n(c,d);for(u.length=c+1,i=c;i<c+1;i++)u[i]=new Array(d+1);a(c,d)})},addYDZ:function(){$(".button_vertical").click(function(){if(d++,0!=c){var t=0;for(t=0;t<=c;t++)n(t,d)}else n(c,d);for(i=0;i<c+1;i++)u[i].length++;a(c,d)})},deleteXDZ:function(){$(".button_delete_horizontal").click(function(){if(c>0){for(tempCount=0;tempCount<=d;tempCount++)o(c,tempCount);c--,u.length=c+1}a(c,d)})},deleteYDZ:function(){$(".button_delete_vertical").click(function(){if(d>0){for(tempCount=0;tempCount<=c;tempCount++)o(tempCount,d);for(i=0;i<c+1;i++)u[i].length--;d--}a(c,d)})},deleteEls:function(){$(".delete_elements").click(function(){for(var t=$(".selected").length,e=0;e<t;e++)elArr.pop();$(".selected").remove()})},getGridCoordinates:function(){return g},DZHighlight:function(t){$(t.target).addClass("hoverover")},stopDZHighlight:function(t){$(t.target).removeClass("hoverover")},onDropUpdatePos:function(t){var e=$(t.target).attr("data-xCoordDZ"),r=$(t.target).attr("data-yCoordDZ");u[e][r]=1,$(t.draggable).attr("data-xCoordEl",e),$(t.draggable).attr("data-yCoordEl",r),f=0},onLeaveUpdatePos:function(t){if(1==++f){var e=$(t.target).attr("data-xCoordDZ"),r=$(t.target).attr("data-yCoordDZ");u[e][r]=0}}}},function(t,e,r){var n=r(4);t.exports={init:function(t,e,r){!function(t,e,r){$("body").on("click",".dropzone",function(n){var o=$(event.target).attr("data-xCoordDZ"),a=$(event.target).attr("data-yCoordDZ");!function(t,e,r,n,o,a){var i=parseInt($(t.target).css("left")),l=parseInt($(t.target).css("top")),s=n*o/4,c=d3.select("svg"),d=d3.symbol().type(d3.symbolSquare).size(s);a.push({x:n/2,y:o/2,test:"test data"});var u=c.selectAll().data([{x:n/2,y:o/2,test:"test data"}]).enter().append("path").attr("d",d).attr("fill","black").attr("stroke","#000").attr("stroke-width",1).attr("transform",function(t){return"translate("+(i+o/2)+", "+(l+n/2)+")"}).attr("class","draggable").attr("id","tmp").attr("data-x",i+o/2).attr("data-y",l+n/2);console.log(u);var f=d3.select("#tmp").node().getBBox(),g=f.x+f.width/2,p=f.y+f.height/2,h=document.getElementById("tmp"),b=(parseFloat(h.getAttribute("data-x"))||0)-g,v=(parseFloat(h.getAttribute("data-y"))||0)-p;h.style.webkitTransform=h.style.transform="translate("+b+"px, "+v+"px)",h.setAttribute("data-x",b),h.setAttribute("data-y",v),$("#tmp").removeAttr("id"),h.setAttribute("data-xCoordEl",e),h.setAttribute("data-yCoordEl",r)}(n,o,a,t,e,r)})}(t,e,r)},dragMove:function(t){var e=$(".selected");if(e.length>0)for(var r=e.length,n=0;n<r;n++){var o=(parseFloat(e[n].getAttribute("data-x"))||0)+t.dx,a=(parseFloat(e[n].getAttribute("data-y"))||0)+t.dy;e[n].style.webkitTransform=e[n].style.transform="translate("+o+"px, "+a+"px)",e[n].setAttribute("data-x",o),e[n].setAttribute("data-y",a)}else t.target&&-1==t.target.getAttribute("class").indexOf("selected")&&($(t.target).addClass("selected"),$(t.target).attr("stroke","red"));$(".elAnchor").remove(),-1==t.target.getAttribute("class").indexOf("dragging")&&$(t.target).addClass("dragging")},toggleSelection:function(t){"mouseup"==t.type&&t.target&&(-1!=t.toElement.getAttribute("class").indexOf("selected")?-1==t.target.getAttribute("class").indexOf("dragend")&&($(t.target).removeClass("selected"),$(t.target).attr("stroke","black")):-1==t.target.getAttribute("class").indexOf("selected")&&($(t.target).addClass("selected"),$(t.target).attr("stroke","red")),-1!=t.target.getAttribute("class").indexOf("dragend")&&$(t.target).removeClass("dragend"))},updateDragEndStates:function(t){$(t.target).removeClass("dragging"),$(t.target).addClass("dragend")},elMouseOver:function(t){$(".elAnchor")[0]&&$("#groupAnchors").remove();var e=parseFloat($(t.target).attr("data-x")),r=parseFloat($(t.target).attr("data-y")),o=t.target.getBBox(),a=(new DOMPoint(t.x,t.y),t.path[1].createSVGPoint());a.x=0,a.y=0;o.x,o.width;var i=o.y+o.height/2;a.y=a.y+i;for(;1!=t.path[0].isPointInStroke(a);)a.x++;var l=d3.select("svg").append("g").attr("id","groupAnchors");l.append("circle").attr("r",4.5).attr("class","elAnchor").attr("id","rightAnchor").attr("fill","red").attr("transform",function(){return"translate("+(e+a.x)+", "+(r+a.y)+")"}),l.append("circle").attr("r",4.5).attr("class","elAnchor").attr("id","leftAnchor").attr("fill","red").attr("transform",function(){return"translate("+(e-a.x)+", "+(r+a.y)+")"}),a.x=0,a.y=0,a.y=a.y+i;for(;1!=t.path[0].isPointInStroke(a);)a.y++;l.append("circle").attr("r",4.5).attr("class","elAnchor").attr("id","bottomAnchor").attr("fill","red").attr("transform",function(){return"translate("+(e+a.x)+", "+(r+a.y)+")"}),a.y=0,a.y=a.y+i;for(;1!=t.path[0].isPointInStroke(a);)a.y--;l.append("circle").attr("r",4.5).attr("class","elAnchor").attr("id","topAnchor").attr("fill","red").attr("point-events","visible").attr("transform",function(){return"translate("+(e+a.x)+", "+(r+a.y)+")"}),$(".elAnchor").on("mousedown mouseup",function(t){"mousedown"==t.type&&t.target&&($("body").disableTextSelect(),n.tempLineCreation()),"mouseup"==t.type&&t.target?($("body").enableTextSelect(),n.lineCreation()):$("body").on("mouseup",function(t){n.onBodyDeleteLine()})}),$(".elAnchor").on("click",function(t){console.log("hi")}).on("mouseout",function(t){null!=t.toElement&&(-1!=t.toElement.getAttribute("class").indexOf("dropzone")&&-1!=t.toElement.getAttribute("class").indexOf("elAnchor")||$("#groupAnchors").remove())})},removeAnchor:function(t){null!=t.toElement&&"elAnchor"!=t.toElement.getAttribute("class")&&$("#groupAnchors").remove()}}},function(t,e){t.exports={tempLineCreation:function(){var t=$("#object_container").offset(),e=interact.getElementRect(event.target);firstAnchorCenter={x:e.left+e.width/2,y:e.top+e.height/2};var r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("id","line1"),r.setAttribute("fill","none"),r.setAttribute("stroke","black"),r.setAttribute("stroke-width","2"),$("svg").append(r),function(){document.onmousemove=function(e){var n,o,a;null==(e=e||window.event).pageX&&null!=e.clientX&&(n=e.target&&e.target.ownerDocument||document,o=n.documentElement,a=n.body,e.pageX=e.clientX+(o&&o.scrollLeft||a&&a.scrollLeft||0)-(o&&o.clientLeft||a&&a.clientLeft||0),e.pageY=e.clientY+(o&&o.scrollTop||a&&a.scrollTop||0)-(o&&o.clientTop||a&&a.clientTop||0));var i=firstAnchorCenter.x-t.left,l=firstAnchorCenter.y-t.top,s=(firstAnchorCenter.x-t.left+e.pageX)/2,c=firstAnchorCenter.y-t.top,d=(firstAnchorCenter.x-t.left+e.pageX)/2,u=e.pageY-t.top,f=e.pageX-t.left,g=e.pageY-t.top;$(r).attr("d","M "+i+","+l+" L "+s+","+c+" "+d+","+u+" "+f+","+g)}}()},lineCreation:function(){var t=$("#object_container").offset(),e=interact.getElementRect(event.target);secondAnchorCenter={x:e.left+e.width/2,y:e.top+e.height/2};var r=firstAnchorCenter.x-t.left,n=firstAnchorCenter.y-t.top,o=(firstAnchorCenter.x-t.left+(secondAnchorCenter.x-t.left))/2,a=firstAnchorCenter.y-t.top,i=(firstAnchorCenter.x-t.left+(secondAnchorCenter.x-t.left))/2,l=secondAnchorCenter.y-t.top,s=secondAnchorCenter.x-t.left,c=secondAnchorCenter.y-t.top,d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("id","line2"),d.setAttribute("fill","none"),d.setAttribute("stroke","black"),d.setAttribute("stroke-width","2"),d.setAttribute("d","M "+r+","+n+" L "+o+","+a+" "+i+","+l+" "+s+","+c),$("svg").append(d),$("#line1").remove()},onBodyDeleteLine:function(){$("#line1").remove()}}},function(t,e){t.exports={disableTextWrapper:function(){jQuery.fn.disableTextSelect=function(){return this.each(function(){$(this).css({MozUserSelect:"none",webkitUserSelect:"none"}).attr("unselectable","on").bind("selectstart",function(){return!1})})}},enableTextWrapper:function(){jQuery.fn.enableTextSelect=function(){return this.each(function(){$(this).css({MozUserSelect:"",webkitUserSelect:""}).attr("unselectable","off").unbind("selectstart")})}}}}]);