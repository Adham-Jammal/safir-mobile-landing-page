function toggleTab(tabId) {
    var tabContent = document.getElementById(tabId);
    var arrowIcon = document.getElementById('arrow1');

    if (tabContent.style.display === 'block') {
      tabContent.style.display = 'none';
      arrowIcon.src = 'arrow-down.png';
    } else {
      tabContent.style.display = 'block';
      arrowIcon.src = 'arrow-up.png';
    }
  }
