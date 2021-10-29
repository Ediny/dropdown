const dropdown = document.getElementById('dropdown');
const dropdownContent = document.getElementById('dropdown-content');

let tests = 'none';

function dropdownClick() {
    if(tests === 'none') {
        return dropdownContent.style.display = 'block';
    } else {
        return dropdownContent.style.display = 'none';
    }
}