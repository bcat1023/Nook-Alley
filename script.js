if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/serviceworker.js");
}


function errorHang(error) {
    console.error(error)
    document.getElementById('errorReportF').value = `${error}`;
    document.getElementById('errorReport').innerHTML = `<i class="fa-solid fa-terminal"></i> ${error}`;
    document.getElementById('error').style.display = 'block';
}


let tabStored = 0;
var desktopTabs = ["flex", "flex", "flex", "flex"]
// desktop
var mobileTabs = ["block", "block", "block", "block"]
// mobile
let dead = false;
function tab(tabX, resize) {
    try {

        // Recall Flag Detection
        // This is used for updating the format when the screen changes, its for responsive design it
        // works by replacing the tabX variable that is given to the function with a backed up version.
        // True: Recall flag passed, replace the value of tabX with tabStored. AKA use the last known value.
        // False: No flag passed, use the current tabX value and update the tabStored value to reflect the current value.
        if (resize == true) {
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
        if (window.innerWidth > '864') {
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
        if (dead == false) {
            dead = true
            window.addEventListener("resize", function (e) {
                console.debug(`EventListener fired, calling tab() with recall flag`)
                tab(NaN, true)
            });
            console.assert(`Dead trip fired, event listener registered`)
        }

    } catch (error) {
        errorHang(error);
    }
}

var currentProject;
function projectShowcase(project) {
    var source = ['TitanNetworkPromo', 'TheIdeaGrailsPromo', "CiscoVEN401SEPromo", "FCC-IDPromo"]
    // Source Array | Project > PromoFile

    tv = document.getElementById('projectVideo') // Root <video> player
    ch0 = document.getElementById('projectVideoSrc0') // WebM Channel
    ch1 = document.getElementById('projectVideoSrc1') // mp4 Channel

    // Select the filename from the source array with the project number
    fileName = source[project] 
    // Compose url's to find the filenames
    webM = `/videos/webm/${fileName}.webm`
    mp4 = `/videos/legacy/${fileName}.mp4`
    
    // Kinda weird leftover roller script
    var roller = document.getElementById(`roller${project}`);
    var activeRoller = document.getElementsByClassName('activeRoller')

    if(ch0.src.includes(source[project])) { // If video is already set to right file return 0;
        console.debug(`Check AlreadyPlaying passed ${ch0.src} = ${webM}`)
    } else {
        ch0.src = webM // Set the WebM channel to the webM file
        ch1.src = mp4  // Set the mp4 channel to the mp4 file
        tv.load() // Load the files
        tv.play()
        console.debug(`Check AlreadyPlaying failed, switching content ${ch0.src} != ${webM}`)

        try {
            activeRoller[0].classList.remove('activeRoller'); // Select element with activeRoller class and remove its class
        } catch (err) {
            console.warn(err + "\n\nThis is technically an error, but is it really? its more of a this shouldn't have run but did because im too lazy to have it not run so really its fineee ;) Its a lazy error :)")
            // Ignore this, ill fix it someday
        }
        roller.classList = 'activeRoller projectRollup'
        // Give the current project roller the ActiveRoller class
    }
}

//================================================
// To be used with Netlify Redirects:           ||
//    nookalley.com/projects will reverse proxy ||
//    to nookalley.com/#projects and this script||
//    wil handle it.                            ||
//================================================
var url = window.location.href;
if (url.indexOf('/' + 'projects') != -1) {
    tab(1)
}
if (url.indexOf('/' + 'about') != -1) {
    tab(2)
}
if (url.indexOf('/' + 'contact') != -1) {
    tab(3)
}

/*

  ===================================================
  ||For SEO:                                       ||
  ||    In oder for proper SEO, links are required ||
  ||in the navigation buttons, however navigation  ||
  ||is purely JS powered here, as a result I have  ||
  ||this code to allow me to use href's but stop   ||
  ||HTTPS navigation and us JS to switch the tabs  ||
  ||while keeping good SEO and a proper link index.||
  ===================================================

*/
function handleLinkClick(event) {
    event.preventDefault();
}