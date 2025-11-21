function openDropdown() {
    const dropdown = document.getElementById('dropdownContentPopular');
    if (dropdown) {
        dropdown.style.width = '120px';
    }
}

function closeDropdown() {
    const dropdown = document.getElementById('dropdownContentPopular');
    if (dropdown) {
        dropdown.style.width = '0';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menuPopular');

    if (menu) {
        menu.addEventListener('mouseover', openDropdown);
        menu.addEventListener('mouseout', closeDropdown);
    }
});