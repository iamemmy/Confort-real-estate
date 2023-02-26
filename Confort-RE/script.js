const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('side-toggler');

toggleBtn.addEventListener('click', e=> sidebar.classList.toggle('show'))