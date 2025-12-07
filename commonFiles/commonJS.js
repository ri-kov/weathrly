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

   if (menu && dropdown) {
        menu.addEventListener('mouseenter', () => {
            dropdown.style.width = '120px';
        });

        menu.addEventListener('mouseleave', (e) => {
            if (!dropdown.contains(e.relatedTarget)) {
                dropdown.style.width = '0';
            }
        });

        dropdown.addEventListener('mouseenter', () => {
            dropdown.style.width = '120px';
        });

        dropdown.addEventListener('mouseleave', (e) => {
            if (!menu.contains(e.relatedTarget)) {
                dropdown.style.width = '0';
            }
        });
    }