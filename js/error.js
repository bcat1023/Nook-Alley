export function errorHang(error) {
    console.error(error)
    document.getElementById('errorReportF').value = `${error}`;
    document.getElementById('errorReport').innerHTML = `<i class="fa-solid fa-terminal"></i> ${error}`;
    document.getElementById('error').style.display = 'block';
}

export default errorHang;
console.log("Error Handler Ready")