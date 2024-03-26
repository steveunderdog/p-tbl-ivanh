document.addEventListener('DOMContentLoaded', function() {
    const planOptionsIvan = document.querySelectorAll('.plan-option-ivan');
    const planContentsIvan = document.querySelectorAll('.plan-content-ivan');

    planOptionsIvan.forEach(function(option) {
        option.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Update 'selected' class for options
            planOptionsIvan.forEach(function(option) {
                option.classList.remove('selected');
            });
            this.classList.add('selected');

            // Toggle 'active' class for contents
            planContentsIvan.forEach(function(content) {
                if (content.getAttribute('data-plan') === selectedPlan) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// JavaScript for expandable section
document.addEventListener('DOMContentLoaded', function() {
    const expandableSectionIvan = document.querySelector('.expandable-section-ivan');
    const expandableContentIvan = document.querySelector('.expandable-content-ivan');

    expandableSectionIvan.addEventListener('click', function() {
        expandableContentIvan.style.display = expandableContentIvan.style.display === 'none' ? 'block' : 'none';
    });
});

// JavaScript for opening schedule embed and hiding package details
document.addEventListener('DOMContentLoaded', function() {
    const founder15BookNowBtnIvan = document.getElementById('founder15-book-now-ivan');
    const founder15ScheduleEmbedIvan = document.getElementById('founder15-schedule-embed-ivan');
    const founder15PackageDetailsIvan = document.getElementById('founder15-package-details-ivan');
    const founder15BackToFeaturesIvan = document.getElementById('founder15-back-to-features-ivan');

    founder15BookNowBtnIvan.addEventListener('click', function(event) {
        event.preventDefault();
        founder15ScheduleEmbedIvan.style.display = 'block';
        founder15PackageDetailsIvan.style.display = 'none';
        founder15BackToFeaturesIvan.style.display = 'block';
    });

    founder15BackToFeaturesIvan.addEventListener('click', function() {
        founder15ScheduleEmbedIvan.style.display = 'none';
        founder15PackageDetailsIvan.style.display = 'block';
        founder15BackToFeaturesIvan.style.display = 'none';
    });

    const growthBookNowBtnIvan = document.getElementById('growth-book-now-ivan');
    const growthScheduleEmbedIvan = document.getElementById('growth-schedule-embed-ivan');
    const growthPackageDetailsIvan = document.getElementById('growth-package-details-ivan');
    const growthBackToFeaturesIvan = document.getElementById('growth-back-to-features-ivan');

    growthBookNowBtnIvan.addEventListener('click', function(event) {
        event.preventDefault();
        growthScheduleEmbedIvan.style.display = 'block';
        growthPackageDetailsIvan.style.display = 'none';
        growthBackToFeaturesIvan.style.display = 'block';
    });

    growthBackToFeaturesIvan.addEventListener('click', function() {
        growthScheduleEmbedIvan.style.display = 'none';
        growthPackageDetailsIvan.style.display = 'block';
        growthBackToFeaturesIvan.style.display = 'none';
    });

    const accelerateBookNowBtnIvan = document.getElementById('accelerate-book-now-ivan');
    const accelerateScheduleEmbedIvan = document.getElementById('accelerate-schedule-embed-ivan');
    const acceleratePackageDetailsIvan = document.getElementById('accelerate-package-details-ivan');
    const accelerateBackToFeaturesIvan = document.getElementById('accelerate-back-to-features-ivan');

    accelerateBookNowBtnIvan.addEventListener('click', function(event) {
        event.preventDefault();
        accelerateScheduleEmbedIvan.style.display = 'block';
        acceleratePackageDetailsIvan.style.display = 'none';
        accelerateBackToFeaturesIvan.style.display = 'block';
    });

    accelerateBackToFeaturesIvan.addEventListener('click', function() {
        accelerateScheduleEmbedIvan.style.display = 'none';
        acceleratePackageDetailsIvan.style.display = 'block';
        accelerateBackToFeaturesIvan.style.display = 'none';
    });
});
