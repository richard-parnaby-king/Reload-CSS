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

//add a red border around each link
for (var i=0; i<result.snapshotLength; i++) {
    var $this = result.snapshotItem(i),
        oldHref = $this.getAttribute('href');
    if($this.getAttribute('data-oldhref').length) {
        oldHref = $this.getAttribute('data-oldhref');
    }
    else {
        $this.setAttribute('data-oldhref', oldHref);
    }
    $this.setAttribute('href', ''.concat(oldhref, '?', Date.now()));
}