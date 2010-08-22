jQuery Hotspot plugin
=================

Programatically splits a DOM element into a user-defined grid and triggers custom events when grid squares are moused over or clicked on.

License
-------

http://unlicense.org/ - i.e. do what you want with it :-)

Usage
-----

Call the plugin on any DOM element, passing in a JSON object to define the number of rows and columns to build the (invisible) grid from:

    var item = $('#item');
    item.hotspot({ rows:3, cols:3 }); // split the target into a 3 by 3 grid
    
Then anytime the user's mouse enters a grid square it will trigger a custom event on the element, which also passes through the target row and column numbers.

    item.bind('changed.hotspot', function( e, row, col ){
    	console.log('currently hovering over: row: '+row+' col: '+col );
    });

And anytime a click event happens on the element a similar custom event is triggered:

    item.bind('clicked.hotspot', function( e, row, col ){
    	console.log('CLICKED: row: '+row+' col: '+col );
    });

That's it! See demo.html for a working example