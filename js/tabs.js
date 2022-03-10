document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work-list__btn').forEach(function (tabsLink) {
    tabsLink.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.work-list__btn').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('work-list__btn-active');
      });
      tabsLink.classList.remove('work-list__btn-active');
      document.querySelectorAll('.description').forEach(function (tabContent) {
        tabContent.classList.remove('description-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('description-active');
      document.querySelector(`[data-path="${path}"]`).classList.add('work-list__btn-active');
    });
  });
})
