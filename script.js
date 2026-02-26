const countdownEl = document.getElementById('countdown');
if (countdownEl) {
  const target = new Date('2027-04-01T00:00:00');
  const tick = () => {
    const diff = target - new Date();
    if (diff <= 0) return (countdownEl.textContent = 'Writ period has started');
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    countdownEl.textContent = `${days} days, ${hours} hours, ${minutes} minutes`;
  };
  tick();
  setInterval(tick, 60000);
}

document.querySelectorAll('.expand-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('.expand-card').classList.toggle('active');
  });
});

const langToggle = document.getElementById('langToggle');
if (langToggle) {
  let tokPisin = false;
  langToggle.addEventListener('click', () => {
    tokPisin = !tokPisin;
    document.querySelectorAll('[data-en][data-tp]').forEach((el) => {
      el.textContent = tokPisin ? el.dataset.tp : el.dataset.en;
    });
    langToggle.textContent = tokPisin ? 'English' : 'Tok Pisin';
  });
}

const volunteerForm = document.getElementById('volunteerForm');
const volunteerStatus = document.getElementById('volunteerStatus');
const downloadCsvButton = document.getElementById('downloadCsv');
let volunteerRows = [];

if (volunteerForm) {
  volunteerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(volunteerForm);
    const row = {
      name: data.get('name'), ward: data.get('ward'), llg: data.get('llg'),
      district: data.get('district'), phone: data.get('phone'), skills: data.get('skills'), role: data.get('role')
    };
    volunteerRows.push(row);
    volunteerStatus.textContent = `Thank you ${row.name}. Your signup has been saved (${volunteerRows.length} total).`;
    volunteerForm.reset();
  });
}

if (downloadCsvButton) {
  downloadCsvButton.addEventListener('click', () => {
    if (!volunteerRows.length) {
      volunteerStatus.textContent = 'No signups yet to export.';
      return;
    }
    const headers = ['name', 'ward', 'llg', 'district', 'phone', 'skills', 'role'];
    const lines = [headers.join(',')];
    volunteerRows.forEach((row) => {
      lines.push(headers.map((key) => `"${String(row[key] ?? '').replace(/"/g, '""')}"`).join(','));
    });
    const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'volunteers.csv';
    link.click();
    URL.revokeObjectURL(link.href);
  });
}

function wireDemoForm(formId, statusId, message) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form || !status) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = message;
    form.reset();
  });
}

wireDemoForm('pledgeForm', 'pledgeStatus', 'Thank you. Your One Person, One Vote pledge has been recorded.');
wireDemoForm('reportForm', 'reportStatus', 'Thank you. Your report has been submitted to the campaign tracker queue.');
wireDemoForm('donationForm', 'donationStatus', 'Thank you. Receipt uploaded successfully for review.');
wireDemoForm('contactForm', 'contactStatus', 'Thank you for contacting the campaign team. We will respond soon.');
