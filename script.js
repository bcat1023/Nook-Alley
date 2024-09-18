function tab(tab) {
    var tabs = ["flex", "flex", "block", "block"]

    // everything after this point is fucked, rewrite this please... 

    document.getElementById(0).style.display = 'none';
    document.getElementById(1).style.display = 'none';
    // TOP: Tab Pages | Bottom: Navigation Items
    document.getElementById(`nav0`).className = 'navitem';
    document.getElementById(`nav1`).className = 'navitem';

    // This part is more reasonable, prob should rewrite it still?

    document.getElementById(tab).style.display = tabs[tab];
    document.getElementById(`nav${tab}`).className = 'navitem active';
    console.log(tabs[tab])
    
}

function projectShowcase(project) {
    var projects = ["Nook", "Titan", "Filler"]
    console.log(projects[project])
}