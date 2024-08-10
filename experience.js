// experience.js

function showExperience(company) {
    // Hide all experience contents
    const experiences = document.querySelectorAll('.experience-content');
    experiences.forEach(exp => exp.style.display = 'none');

    // Show the selected experience content
    document.getElementById(company).style.display = 'block';

    // Remove active class from all company items
    const companyItems = document.querySelectorAll('.company-item');
    companyItems.forEach(item => item.classList.remove('active'));

    // Add active class to the clicked company item
    document.querySelector('.company-item[onclick="showExperience(\'' + company + '\')"]').classList.add('active');
}

// Show the first experience by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showExperience('selfbook');
});
