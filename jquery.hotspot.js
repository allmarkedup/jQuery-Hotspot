// JQuery 'Hotspot' plugin
// Written by Mark Perkins, mark@allmarkedup.com
// License: http://unlicense.org/ (i.e. do what you want with it!)

;(function($) {
	
	var defaults = {
		rows : 2,
		cols : 2,
		currentRow : 0,
		currentCol : 0
	};
	
	$.fn.hotspot = function( options )
	{
		return this.each(function(){

			var opts = $.extend({}, defaults, options), // set options
			$item = $(this);
		
			var offset = $item.offset();
			opts.itemLeft = offset.left;
			opts.itemTop = offset.top;
		
			opts.hotspotWidth = $item.outerWidth() / opts.cols;
			opts.hotspotHeight = $item.outerHeight() / opts.rows;
		
			$item.bind('click',function( e ){
				var hs = getHotSpot( opts, e );
				$item.trigger('clicked.hotspot', [hs.row, hs.col] );
			});
		
			$item.bind('mousemove', function(e){
				var hs = getHotSpot( opts, e );
				if ( opts.currentRow !== hs.row || opts.currentCol !== hs.col )
				{
					opts.currentRow = hs.row;
					opts.currentCol = hs.col;
					$item.trigger('changed.hotspot', [hs.row, hs.col]);
				}
			});
		
			$item.hover(function(){}, function(e){
				$item.trigger('changed.hotspot', [0,0]);
				opts.currentRow = 0;
				opts.currentCol = 0;
			});
		});
	};
	
	function getHotSpot( opts, e )
	{
		var mousepos = getRelativePosition( opts, e );
		return {
			col : Math.ceil( mousepos.x / opts.hotspotWidth ),
			row : Math.ceil( mousepos.y / opts.hotspotHeight )
		};		
	}
	
	function getRelativePosition( opts, e )
	{
		var x = e.pageX - opts.itemLeft;
		var y = e.pageY - opts.itemTop;
		return { x : x, y : y }
	}
	
})(jQuery);