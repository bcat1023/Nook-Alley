if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/serviceworker.js");
 }

let tabStored= 0;

var desktopTabs = ["flex", "flex", "flex", "flex"]
// desktop
var mobileTabs = ["block", "block", "block", "block"]
// mobile
let dead = false;
function tab(tabX, resize) {
    
    // Recall Flag Detection
    // This is used for updating the format when the screen changes, its for responsive design it
    // works by replacing the tabX variable that is given to the function with a backed up version.
    // True: Recall flag passed, replace the value of tabX with tabStored. AKA use the last known value.
    // False: No flag passed, use the current tabX value and update the tabStored value to reflect the current value.
    if(resize == true) {
        console.debug(`Recall flag has been passed, tabStored will not be updated`)
        tabX = tabStored;
    } else {
        tabStored = tabX;
        console.debug(`tabStored update to ${tabStored}`)
    } 

    // Mobile V Desktop format
    // This checks the windows width to detect which format array to use.
    // x > 864: Use the desktopTabs array, AKA use the desktop format.
    // x < 864: Use the mobileTabs array, AKA use the mobile format.
    if(window.innerWidth > '864') {
        tabDisplay = desktopTabs;
    } else {
        tabDisplay = mobileTabs;
    }

    // Tab Navigation
    // This part wipes the page by setting each tabs display value to none
    // This block of code is horribly written and needs to be replaced ASAP
    // There is a corretly written and proper block of code in this file that will be used to rewrite this
    // TODO: replace this with aforementioned code
    document.getElementById(0).style.display = 'none';
    document.getElementById(1).style.display = 'none';
    document.getElementById(2).style.display = 'none';
    document.getElementById(3).style.display = 'none';
    // TOP: Tab Pages | MIDDLE: Navigation Items | BOTTOM: Rollout slip
    document.getElementById(`nav0`).className = 'navitem';
    document.getElementById(`nav1`).className = 'navitem';
    document.getElementById(`nav2`).className = 'navitem';
    document.getElementById(`nav3`).className = 'navitem';

    // This part is more reasonable, prob should rewrite it still?

    // Tab renderer
    // This block of code is responsible for displaying the tab selected
    // This block of code uses the tabX value to select the correct tab, then sets its display
    // value to the matching value in the tabDisplay array, it also updated the navitem to light up
    // this is a relativly verbose operation that also contains the code that makes this site responsive
    // and be able to update its format on the fly. This also contins a deadswitch, a switch that only
    // fires once and never fires again regardless how many times its called.
    document.getElementById(tabX).style.display = tabDisplay[tabX];
    document.getElementById(`nav${tabX}`).className = 'navitem active';
    console.debug(`Switched to tab ${[tabX]} with ${tabDisplay[tabX]}`)
    console.debug(`tab() tabX = ${tabX}`)
    if(dead == false) {
        dead = true
        window.addEventListener("resize", function(e) {
            console.debug(`EventListener fired, calling tab() with recall flag`)
            tab(NaN, true)
        });
        console.assert(`Dead trip fired, event listener registered`)
    }
}


function projectShowcase(project) {
    var sources = ["/videos/video1.mp4", "/videos/video2.mp4", "/videos/video3.mp4", "/videos/video1.mp4"]
    var path = document.getElementById('projectVideo').attributes.getNamedItem('src');
    var roller = document.getElementById(`roller${project}`);
    var activeRoller = document.getElementsByClassName('activeRoller')
    if(path.value == sources[project]) {
        return;
    } else {
        path.value = sources[project]
        try {
            activeRoller[0].classList.remove('activeRoller');
        } catch(err) {
            console.warn(err + "\n\nThis is technically an error, but is it really? its more of a this shouldn't have run but did because im too lazy to have it not run so really its fineee ;) Its a lazy error :)")
        }
        roller.classList = 'activeRoller projectRollup'
    }
}

