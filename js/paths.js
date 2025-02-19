//================================================
// To be used with Netlify Redirects:           ||
//    nookalley.com/projects will reverse proxy ||
//    to nookalley.com/#projects and this script||
//    wil handle it.                            ||
//================================================
var url = window.location.href;
if (url.indexOf('/' + 'projects') != -1) {
    tab(1)
    console.log('T1')
}
if (url.indexOf('/' + 'about') != -1) {
    tab(2)
    console.log('T2')
}
if (url.indexOf('/' + 'contact') != -1) {
    tab(3)
    console.log('T3')
}
console.log("Paths ready")
console.log(`Current Path -> ${url}`)
// There is a little bit of extra debug here ill get rid of later