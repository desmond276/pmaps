// Element movement
// To dos:
// 1) Make sure elements stay within bounds of parent
// 2) Fix weird behavior; elements sometimes jumping away from cursor
$(function() {
// alert('hi');

	var element = document.getElementsByClassName('.draggable'),
	    x = 0, y = 0;
	    console.log(element);

	interact('.draggable')
		.draggable({
			snap: {
		  		targets: [
		    		interact.createSnapGrid({ x: 30, y: 30 })
				],
			  	range: Infinity,
				relativePoints: [ { x: 0, y: 0 } ]
			},
			restrict: {
		  		restriction: element.parentNode,
	  			elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
		  		endOnly: true
			}
		})
		.on('dragmove', function (event) {
			var target = event.target,
	        // keep the dragged position in the data-x/data-y attributes
	        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
	        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	    // translate the element
	    target.style.webkitTransform =
	    target.style.transform =
	      'translate(' + x + 'px, ' + y + 'px)';

	    // update the posiion attributes
	    target.setAttribute('data-x', x);
	    target.setAttribute('data-y', y);
			// console.log(event);
			// x += event.dx;
			// y += event.dy;

			// event.target.style.webkitTransform =
			// event.target.style.transform =
			//     'translate(' + x + 'px, ' + y + 'px)';
		});

	/**
		param: id (string)
	**/
	function getContainerWidth(elName){
		return $('#' + elName).width();
	}

	/**
		param:  id (string)
	**/
	function getContainerHeight(elName){
		return $('#' + elName).height();
	}

	console.log('width: ' + getContainerWidth('object_container'));
	console.log('height: ' + getContainerHeight('object_container'));
});



