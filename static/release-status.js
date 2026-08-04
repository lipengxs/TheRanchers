(function () {
    window.ranchersReleaseStatus = {
        reviewedAt: '2026-08-03',
        status: 'Under source review',
        officialSite: 'https://ranchers.game/',
        steamStore: 'https://store.steampowered.com/app/1501310/The_Ranchers/',
        sourceRegister: '/release-date'
    };

    window.ranchersTrack = function (eventName, parameters) {
        if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, parameters || {});
        }
    };

    document.addEventListener('click', function (event) {
        var link = event.target.closest('[data-analytics-event]');
        if (link) window.ranchersTrack(link.getAttribute('data-analytics-event'));
    });
}());
