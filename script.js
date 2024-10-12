function tab(tab) {
    if(window.innerWidth > '864') {
        var tabs = ["flex", "flex", "flex", "flex"]
        // desktop
    } else {
        var tabs = ["block", "block", "block", "block"]
         // mobile
    }

    // everything after this point is fucked, rewrite this please... 

    document.getElementById(0).style.display = 'none';
    document.getElementById(1).style.display = 'none';
    document.getElementById(2).style.display = 'none';
    document.getElementById(3).style.display = 'none';
    // TOP: Tab Pages | Bottom: Navigation Items
    document.getElementById(`nav0`).className = 'navitem';
    document.getElementById(`nav1`).className = 'navitem';
    document.getElementById(`nav2`).className = 'navitem';
    document.getElementById(`nav3`).className = 'navitem';

    // This part is more reasonable, prob should rewrite it still?

    document.getElementById(tab).style.display = tabs[tab];
    document.getElementById(`nav${tab}`).className = 'navitem active';
    console.log(tabs[tab])
    
}

function projectShowcase(project) {
    var sources = ["/videos/video1.mp4", "/videos/video2.mp4", "/videos/video3.mp4"]
    var path = document.getElementById('projectVideo').attributes.getNamedItem('src');
    if(path.value == sources[project]) {
        return;
    } else {
        path.value = sources[project]
    }
}