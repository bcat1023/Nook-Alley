var currentProject;
function projectShowcase(project) {
    var source = ['paradoxicalPromo', 'TitanNetworkPromo', 'QRMachinePromo', 'TheIdeaGrailsPromo', "CiscoVEN401SEPromo", "FCC-IDPromo"]
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

console.log("Project Showcase ready")