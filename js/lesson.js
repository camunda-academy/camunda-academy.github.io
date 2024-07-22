/**
 * 
 *        Author: Nicola Franchini
 *        Responsive modal window javaScript plugin, touch swipe gallery
 *        Just another responsive lightbox plugin, suitable for images, inline contents, iFrames, videos.
 *        The big difference compared to many others plugins is that VenoBox calculates the max width of the image displayed and preserves its height if is taller than the window (so in small devices you can scroll down the content, avoiding vertical microscopic resized images).
 *        https://veno.es/venobox/
 *        https://github.com/nicolafranchini/VenoBox 
 * 
 */

//single elements
new VenoBox({
    selector: '.venobox',
    //share:true
    titleattr: 'title',
    titleStyle: 'pill',
    toolsBackground: 'rgba(255,255,255,0.4)',
    toolsColor: 'black',
    overlayColor: 'rgba(116,104,96,0.8)'
});

//gallery
new VenoBox({
selector: '.myGallery',
overlayColor: 'rgba(242,91,0,0.80)'
});

//videos
new VenoBox({
selector: '.my-video-links',
overlayColor: 'rgba(242,91,0,0.80)'
});


/**
 * 
 * 
 *          SNIPPET code - copy code button
 * 
 */

const copyButtonLabel = "📋";
const tooltipText = "Copy code";

let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
    // browser supports Clipboard API?
    if (navigator.clipboard) {
        let container = document.createElement("div");                
        let button = document.createElement("button");
        let tooltip = document.createElement("span");
        container.setAttribute("class","code-snippet tooltip");
        tooltip.setAttribute("class","tooltiptext");
        tooltip.innerText = tooltipText;        


        button.innerText = copyButtonLabel;
        container.appendChild(tooltip);
        container.appendChild(button);
        block.before(container);

        button.addEventListener("click", async () => {
        await copyCode(block, tooltip, button);
        });
    }
});

async function copyCode(block, tooltip, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    // visual feedback that task is completed
    //button.innerText = "Code copied!";
    tooltip.setAttribute("class","tooltiptext copied");
    tooltip.innerText = "Code copied!"; 

    setTimeout(() => {
        button.innerText = copyButtonLabel;
        tooltip.setAttribute("class","tooltiptext");
        tooltip.innerText = tooltipText; 
    }, 3000);
}