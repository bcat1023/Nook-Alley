if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/serviceworker.js");
 }

let tabStored= 0;

var desktopTabs = ["flex", "flex", "flex", "flex"]
// desktop
var mobileTabs = ["block", "block", "block", "block"]
// mobile
let dead = false;
function tab(tabX) {
    tabStored = tab
    
    if(window.innerWidth > '864') {
        tabDisplay = desktopTabs;
    } else {
        tabDisplay = mobileTabs;
    }

    // everything after this point is fucked, rewrite this please... 

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

    document.getElementById(tabX).style.display = tabDisplay[tabX];
    document.getElementById(`nav${tabX}`).className = 'navitem active';
    console.log(`Switched to tab ${[tabX]} with ${tabDisplay[tabX]}`)
    
    if(dead == false) {
        dead = true
        window.addEventListener("resize", function(e) {
            tab(tabX)
        });
        console.assert(`Dead trip fired, event listener registered`)
    }
}


function projectShowcase(project) {
    var sources = ["/videos/video1.mp4", "/videos/video2.mp4", "/videos/video3.mp4"]
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
            console.warn(err + "\n\nThis is technically this is an error, but is it really? its more of a, this shouldn't have run but did because im too lazy to have it not run so really its fineee ;) Its a lazy error :)")
        }
        roller.classList = 'activeRoller projectRollup'
    }
}

