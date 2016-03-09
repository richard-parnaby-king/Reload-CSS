/**
 * Get all link tags with rel="stylesheet", then append a timestamp
 * @copyright: Richard Parnaby-King
 * @url: http://richard.parnaby-king.co.uk
 */

//get all link tags that have rel="stylesheet"
var result = document.evaluate("//link[contains(@rel,\"stylesheet\")]",
                                document.documentElement,
                                null,
                                XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);


for (var i=0; i<result.snapshotLength; i++) {
    
    var $this = result.snapshotItem(i),
        oldHref = $this.getAttribute('href');
        
    //Save the exising href in a data attribute so we can append the timestamp to THAT
    // instead of stripping the old timestamp before we can append the new timestamp
    if($this.getAttribute('data-oldhref')) {
        oldHref = $this.getAttribute('data-oldhref');
    }
    else {
        $this.setAttribute('data-oldhref', oldHref);
    }
    
    //append timestamp to path
    $this.setAttribute('href', ''.concat(oldHref, '?', Date.now()));
}