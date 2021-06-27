/**
 * @name LinkBanner
 * @author CT-1409
 * @version 1.0.0
 * @description Allows you to click on a user's banner to open it in the browser
 */

module.exports = class LinkBanner {
    start() {
        document.addEventListener("click", this.link, true);
    }
    stop() {
        document.removeEventListener.bind(document, "click", this.link, true);
    }

    link({target}) {
        console.log(target.style.backgroundImage)
        if (target.classList.contains("banner-2QYc2d") && target.style.backgroundImage) {
            let url = target.style.backgroundImage
            url = url.substring(4, url.length-1).replace(/["']/g, "")
            window.open(url.replace(/(?:\?size=\d{3,4})?$/, "?size=4096"), "_blank");
        }
        
    }
}
