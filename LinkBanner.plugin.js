/**
 * @name LinkBanner
 * @author Echology
 * @version 2.1.0
 * @description Allows you to click on a user's banner to open it in the browser, this will NOT allow you to have your own banner without paying for nitro.
 */

module.exports = class LinkBanner {
    start() {
        document.addEventListener("click", this.link)
    }
    stop() {
        document.removeEventListener("click", this.link)
    }
    link({target}) {
        if (target.style.backgroundImage && target.style.backgroundImage.includes("banner")) {
            let url = target.style.backgroundImage
            url = url.substring(4, url.length-1).replace(/["']/g, "")
            url = url.replace(/(?:\?size=\d{3,4})?$/, "?size=4096")
            window.open(url)
        }
    }
}
