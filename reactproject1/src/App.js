window.addEventListener("DOMContentLoaded", domLoaded)

    function domLoaded(){
        const tabButtons = document.querySelectorAll('.nav-link');

        // Add click event listener to each tab button
        tabButtons.forEach(function (tabButton) {
            tabButton.addEventListener('click', function (event) {
                // Prevent default behavior of the link
                event.preventDefault();

                // Remove "active" class from all tab buttons
                tabButtons.forEach(function (btn) {
                    btn.classList.remove('active');
                });

                // Add "active" class to the clicked tab button
                tabButton.classList.add('active');
            });
        });
    }