// INITIAL DATA SEEDING (Seed if not found in localStorage)
const INITIAL_COURSES = [
  {
    id: "py-1",
    title: "Python Dasar",
    category: "Pemrograman",
    instructor: "Siti Rahma, S.Kom",
    level: "Pemula",
    rating: 4.7,
    reviewsCount: "1.8k",
    price: 0, // Free
    duration: 18,
    materiCount: 7,
    enrolled: true,
    syllabus: [
      { id: "py-1-1", title: "Pengenalan dan Instalasi Python", duration: "10 menit", type: "video" },
      { id: "py-1-2", title: "Tipe Data dan Variabel di Python", duration: "15 menit", type: "video" },
      { id: "py-1-3", title: "Operator Aritmatika dan Logika", duration: "12 menit", type: "video" },
      { id: "py-1-4", title: "Pengkondisian Menggunakan IF, ELIF, ELSE", duration: "18 menit", type: "video" },
      { id: "py-1-5", title: "Perulangan FOR dan WHILE Loop", duration: "20 menit", type: "video" },
      { id: "py-1-6", title: "Mendefinisikan Fungsi (def) dan Parameter", duration: "22 menit", type: "video" },
      { id: "py-1-7", title: "Penanganan Error dengan Try Except", duration: "14 menit", type: "video" }
    ],
    exams: {
      id: "quiz-py",
      title: "Python Dasar — Quiz 3",
      kkm: 75,
      duration: 30, // 30 minutes
      questions: [
        { q: "Apa output dari kode berikut?", code: "x = [1, 2, 3]\nprint(x[1])", choices: ["0", "1", "2", "3"], ans: 2, exp: "Index array / list dimulai dari 0. Maka x[1] adalah elemen kedua dari list [1, 2, 3], yaitu 2." },
        { q: "Manakah cara yang benar untuk mendefinisikan fungsi di Python?", code: "", choices: ["function greet():", "def greet():", "func greet():", "define greet():"], ans: 1, exp: "Di Python, kata kunci 'def' digunakan untuk mendefinisikan fungsi (contoh: def nama_fungsi():)." },
        { q: "Apa tipe data dari `3.14` di Python?", code: "print(type(3.14))", choices: ["<class 'int'>", "<class 'double'>", "<class 'float'>", "<class 'number'>"], ans: 2, exp: "Bilangan desimal di Python direpresentasikan oleh tipe data 'float'." },
        { q: "Manakah operator perbandingan identitas di Python?", code: "", choices: ["==", "!=", "is", ">="], ans: 2, exp: "Operator 'is' digunakan untuk mengevaluasi apakah kedua variabel menunjuk objek memori yang sama (identitas)." },
        { q: "Apa output dari kode berikut?", code: "print(7 // 2)", choices: ["3", "3.5", "4", "3.0"], ans: 0, exp: "Operator '//' adalah pembagian bulat (floor division). Hasil dari 7 // 2 adalah 3." },
        { q: "Cara membuat list kosong di Python?", code: "", choices: ["list = {}", "list = []", "list = ()", "list = <>"], ans: 1, exp: "List kosong di Python dideklarasikan dengan kurung siku [] atau dengan constructor list()." },
        { q: "Apa fungsi dari method `.append()` pada list?", code: "nums = [1,2,3]\nnums.append(4)", choices: ["Menghapus elemen terakhir", "Menambah elemen di awal", "Menambah elemen di akhir", "Menggabungkan dua list"], ans: 2, exp: "Method '.append()' digunakan untuk menyisipkan/menambahkan satu nilai baru di ujung akhir list." },
        { q: "Manakah sintaks yang benar untuk melakukan perulangan for sebanyak 5 kali?", code: "", choices: ["for i in range(0,5):", "foreach i in range(5):", "for i = 0 to 5:", "loop i in 0..5:"], ans: 0, exp: "range(0,5) akan menghasilkan deret angka 0, 1, 2, 3, 4. Struktur loopingnya: for i in range(0,5):." },
        { q: "Apa perbedaan `break` dan `continue` dalam loop?", code: "", choices: ["Tidak ada perbedaan", "break keluar loop, continue ke iterasi berikutnya", "break ke iterasi berikutnya, continue keluar loop", "Keduanya menghentikan program"], ans: 1, exp: "break memecahkan dan menghentikan seluruh proses loop secara paksa, sedangkan continue melompati sisa baris kode saat ini dan lanjut ke iterasi berikutnya." },
        { q: "Apa output dari: print('Hello'[0])?", code: "", choices: ["H", "e", "l", "o"], ans: 0, exp: "String di Python bertindak seperti array karakter, sehingga index [0] mengambil karakter pertama, yaitu 'H'." }
      ]
    }
  },
  {
    id: "ds-1",
    title: "Data Science Fundamental",
    category: "Data & AI",
    instructor: "Dr. Ahmad Fauzi",
    level: "Intermediate",
    rating: 4.8,
    reviewsCount: "2.3k",
    price: 249000,
    duration: 24,
    materiCount: 5,
    enrolled: true,
    syllabus: [
      { id: "ds-1-1", title: "Definisi Data Science & Alur Kerja Kerja Data", duration: "12 menit", type: "video" },
      { id: "ds-1-2", title: "Statistika Deskriptif untuk Data Analyst", duration: "18 menit", type: "video" },
      { id: "ds-1-3", title: "Manipulasi Tabel dengan Pandas Library", duration: "25 menit", type: "video" },
      { id: "ds-1-4", title: "Visualisasi Grafik dengan Matplotlib", duration: "22 menit", type: "video" },
      { id: "ds-1-5", title: "Pengenalan Linear Regression Model", duration: "20 menit", type: "video" }
    ],
    exams: {
      id: "quiz-ds",
      title: "Data Science — Mid Test",
      kkm: 70,
      duration: 45,
      questions: [
        { q: "Library Python manakah yang paling sering digunakan untuk representasi data tabular?", choices: ["NumPy", "Matplotlib", "Pandas", "Scikit-Learn"], ans: 2, exp: "Pandas menyediakan struktur DataFrame yang optimal untuk membaca dan manipulasi data baris-kolom (tabular)." },
        { q: "Apakah perbedaan supervised learning dan unsupervised learning?", choices: ["Supervised menggunakan data berlabel, unsupervised tidak", "Supervised dijalankan offline, unsupervised online", "Unsupervised membutuhkan GPU, supervised tidak", "Keduanya sama saja"], ans: 0, exp: "Supervised learning melatih model dengan input-output berlabel, sedangkan unsupervised mengelompokkan data tanpa target label sebelumnya." },
        { q: "Algoritma mana yang digunakan untuk klasifikasi?", choices: ["Linear Regression", "Logistic Regression", "K-Means Clustering", "Principal Component Analysis"], ans: 1, exp: "Logistic regression adalah algoritma supervised learning yang memprediksi nilai biner kelas (klasifikasi)." },
        { q: "Apa kegunaan dari standard deviasi?", choices: ["Mengukur nilai tengah", "Mengukur penyebaran data dari rata-rata", "Menghitung korelasi dua variabel", "Mengganti data kosong"], ans: 1, exp: "Standar deviasi menggambarkan seberapa jauh data tersebar dari rata-rata nilai tengahnya." },
        { q: "Method Pandas manakah untuk membaca data dari file CSV?", choices: ["read_excel()", "load_csv()", "read_csv()", "open_csv()"], ans: 2, exp: "Fungsi pd.read_csv() adalah method standar untuk memuat file CSV menjadi DataFrame Pandas." }
      ]
    }
  },
  {
    id: "ux-1",
    title: "UI/UX Design Mastery",
    category: "Desain",
    instructor: "Rani Kartika, M.Des",
    level: "Intermediate",
    rating: 4.8,
    reviewsCount: "3.1k",
    price: 200000,
    duration: 24,
    materiCount: 4,
    enrolled: false,
    syllabus: [
      { id: "ux-1-1", title: "Prinsip Dasar UI & UX Design", duration: "15 menit", type: "video" },
      { id: "ux-1-2", title: "Penyusunan User Persona & User Journey Map", duration: "25 menit", type: "video" },
      { id: "ux-1-3", title: "Wireframing dan Layouting Rendah Presisi", duration: "20 menit", type: "video" },
      { id: "ux-1-4", title: "Membuat Interactive Prototype di Figma", duration: "30 menit", type: "video" }
    ],
    exams: {
      id: "quiz-ux",
      title: "UI/UX Design — Final Test",
      kkm: 80,
      duration: 30,
      questions: [
        { q: "Apakah tujuan utama dari pembuatan Wireframe?", choices: ["Menentukan skema warna akhir", "Menyusun kerangka tata letak visual dasar tanpa dekorasi", "Menulis kode CSS", "Melakukan uji coba ke ribuan user"], ans: 1, exp: "Wireframe berfokus pada struktur tata letak informasi di layar, mengabaikan warna dan visual detail." },
        { q: "Manakah urutan proses Design Thinking yang tepat?", choices: ["Define - Ideate - Prototype - Test - Empathize", "Empathize - Define - Ideate - Prototype - Test", "Ideate - Prototype - Test - Empathize - Define", "Test - Prototype - Ideate - Define - Empathize"], ans: 1, exp: "Tahapan standar menurut d.school Stanford adalah Empathize (Memahami), Define (Mendefinisikan), Ideate (Menemukan Ide), Prototype (Membangun), dan Test (Menguji)." }
      ]
    }
  },
  {
    id: "sec-1",
    title: "Ethical Hacking & Cybersecurity",
    category: "Cybersecurity",
    instructor: "Rizky Firmansyah, CEH",
    level: "Advanced",
    rating: 5.0,
    reviewsCount: "892",
    price: 399000,
    duration: 40,
    materiCount: 4,
    enrolled: false,
    syllabus: [
      { id: "sec-1-1", title: "Fase Pengintaian (Reconnaissance) Menggunakan Nmap", duration: "18 menit", type: "video" },
      { id: "sec-1-2", title: "Menemukan Vulnerability & SQL Injection Exploit", duration: "28 menit", type: "video" },
      { id: "sec-1-3", title: "Network Sniffing Menggunakan Wireshark", duration: "22 menit", type: "video" },
      { id: "sec-1-4", title: "Langkah-langkah Hardening Server Linux", duration: "25 menit", type: "video" }
    ],
    exams: {
      id: "quiz-sec",
      title: "Ethical Hacking — Certification Exam",
      kkm: 75,
      duration: 60,
      questions: [
        { q: "Protokol keamanan mana yang digunakan untuk mengenkripsi traffic HTTP web?", choices: ["SSL/TLS", "FTP", "DNSSEC", "SMTP"], ans: 0, exp: "SSL/TLS membungkus HTTP menjadi HTTPS untuk mengenkripsi komunikasi data browser-server." }
      ]
    }
  }
];

const INITIAL_USERS = [
  { id: "usr-01", name: "Budi S.", email: "siswa@edulearn.id", password: "password", role: "Siswa", status: "Aktif", twoFactor: false },
  { id: "usr-02", name: "Siti Rahma", email: "instruktur@edulearn.id", password: "password", role: "Instruktur", status: "Aktif", twoFactor: false },
  { id: "usr-03", name: "Rizky Firmansyah", email: "admin@edulearn.id", password: "password", role: "Admin", status: "Aktif", twoFactor: false }
];

const INITIAL_FORUMS = {
  "py-1": [
    { id: "post-1", user: "Budi S.", avatar: "BS", text: "Halo, untuk kuis Python Dasar No. 7 apakah ada penjelasannya?", time: "2 jam lalu", replies: [] },
    { id: "post-2", user: "Siti Rahma, S.Kom", avatar: "SR", text: "Tentu Budi! Method .append() itu menambahkan data di ujung akhir list ya.", time: "1 jam lalu", replies: [] }
  ],
  "ds-1": [
    { id: "post-3", user: "Ahmad Fauzi", avatar: "AF", text: "Selamat datang di modul Data Science! Silakan ajukan pertanyaan di sini.", time: "3 hari lalu", replies: [] }
  ]
};

// GLOBAL STATES
let currentUser = null;
let allCourses = [];
let allUsers = [];
let allForums = {};
let allTransactions = [];
let isCatalogLoading = false;
let catalogFilterTimeout = null;

// EXAM SESSION STATES
let activeExam = null; 
let activeExamStartTime = null;

// VIDEO PLAYER STATES
let currentVideoPlaying = false;
let currentVideoTimer = 0;
let currentVideoDuration = 300; 
let currentVideoInterval = null;

// INITIAL LOAD
function loadDataFromStorage() {
  // Safeguard: Reset seed if the browser has old storage without default test accounts
  if (localStorage.getItem('edulearn_seeded')) {
    const tempUsers = JSON.parse(localStorage.getItem('edulearn_users') || '[]');
    const hasSiswa = tempUsers.some(u => u.email === "siswa@edulearn.id");
    if (!hasSiswa) {
      localStorage.removeItem('edulearn_seeded');
    }
  }

  if (!localStorage.getItem('edulearn_seeded')) {
    localStorage.setItem('edulearn_courses', JSON.stringify(INITIAL_COURSES));
    localStorage.setItem('edulearn_users', JSON.stringify(INITIAL_USERS));
    localStorage.setItem('edulearn_forums', JSON.stringify(INITIAL_FORUMS));
    localStorage.setItem('edulearn_transactions', JSON.stringify([
      { date: "24/06/2026", user: "Budi S.", course: "Python Dasar", method: "GoPay", price: 0, status: "SUCCESS" },
      { date: "24/06/2026", user: "Budi S.", course: "Data Science Fundamental", method: "Virtual Account", price: 249000, status: "SUCCESS" }
    ]));
    localStorage.setItem('edulearn_seeded', 'true');
    
    currentUser = null;
  } else {
    currentUser = JSON.parse(localStorage.getItem('edulearn_current_user'));
  }
  
  allCourses = JSON.parse(localStorage.getItem('edulearn_courses'));
  allUsers = JSON.parse(localStorage.getItem('edulearn_users'));
  allForums = JSON.parse(localStorage.getItem('edulearn_forums'));
  allTransactions = JSON.parse(localStorage.getItem('edulearn_transactions')) || [];
}

function saveDataToStorage() {
  localStorage.setItem('edulearn_current_user', JSON.stringify(currentUser));
  localStorage.setItem('edulearn_courses', JSON.stringify(allCourses));
  localStorage.setItem('edulearn_users', JSON.stringify(allUsers));
  localStorage.setItem('edulearn_forums', JSON.stringify(allForums));
  localStorage.setItem('edulearn_transactions', JSON.stringify(allTransactions));
}

// NAVIGATION SYSTEM
const studentTabLabels = [
  { text: "📊 Dashboard Siswa", screenIdx: 0 },
  { text: "📚 Katalog Kursus", screenIdx: 1 },
  { text: "✏️ Ujian Online", screenIdx: 2 },
  { text: "🏆 Hasil & Sertifikat", screenIdx: 3 }
];

function buildNavigationUI() {
  const linksWrap = document.getElementById('navLinksContainer');
  const tabsWrap = document.getElementById('screenTabsBar');
  linksWrap.innerHTML = '';
  tabsWrap.innerHTML = '';
  
  if (!currentUser) return;

  if (currentUser.role === "Siswa") {
    linksWrap.innerHTML = `
      <a href="#" id="top-nav-beranda" class="active" onclick="handleTopNavLinkClick('beranda', 0); return false;">Beranda</a>
      <a href="#" id="top-nav-kursus" onclick="handleTopNavLinkClick('kursus', 0); return false;">Kursus Saya</a>
      <a href="#" id="top-nav-jelajahi" onclick="handleTopNavLinkClick('jelajahi', 1); return false;">Jelajahi</a>
    `;
    
    studentTabLabels.forEach(tab => {
      const tabEl = document.createElement('div');
      tabEl.className = 'tab';
      tabEl.id = `tab-el-${tab.screenIdx}`;
      tabEl.textContent = tab.text;
      tabEl.onclick = () => showScreenTab(tab.screenIdx);
      tabsWrap.appendChild(tabEl);
    });
  } else if (currentUser.role === "Instruktur") {
    linksWrap.innerHTML = `
      <a href="#" class="active" onclick="showScreenTab(5); return false;">Instruktur Panel</a>
    `;
    tabsWrap.innerHTML = `
      <div class="tab active" id="tab-el-5" onclick="showScreenTab(5)">👨‍🏫 Dashboard Instruktur</div>
    `;
  } else if (currentUser.role === "Admin") {
    linksWrap.innerHTML = `
      <a href="#" class="active" onclick="showScreenTab(6); return false;">Admin Panel</a>
    `;
    tabsWrap.innerHTML = `
      <div class="tab active" id="tab-el-6" onclick="showScreenTab(6)">🛡️ Panel Admin Sistem</div>
    `;
  }
  
  document.getElementById('dropdownUserName').textContent = currentUser.name;
  document.getElementById('dropdownUserRole').textContent = currentUser.role;
  document.getElementById('userAvatar').textContent = getAvatarInitials(currentUser.name);
  document.getElementById('userNameDisplay').textContent = currentUser.name;
  document.getElementById('roleSwitcher').value = currentUser.role;
}

function handleTopNavLinkClick(type, screenIdx) {
  const berandaBtn = document.getElementById('top-nav-beranda');
  const kursusBtn = document.getElementById('top-nav-kursus');
  const jelajahiBtn = document.getElementById('top-nav-jelajahi');
  
  if (type === 'beranda') {
    if (berandaBtn) {
      berandaBtn.classList.add('active');
      if (kursusBtn) kursusBtn.classList.remove('active');
      if (jelajahiBtn) jelajahiBtn.classList.remove('active');
    }
    showScreenTab(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (type === 'kursus') {
    if (kursusBtn) {
      kursusBtn.classList.add('active');
      if (berandaBtn) berandaBtn.classList.remove('active');
      if (jelajahiBtn) jelajahiBtn.classList.remove('active');
    }
    showScreenTab(0);
    setTimeout(() => {
      const target = document.getElementById('enrolledCoursesGrid');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  } else if (type === 'jelajahi') {
    if (jelajahiBtn) {
      jelajahiBtn.classList.add('active');
      if (berandaBtn) berandaBtn.classList.remove('active');
      if (kursusBtn) kursusBtn.classList.remove('active');
    }
    showScreenTab(1);
  }
}

function showScreenTab(screenIdx) {
  const allScreens = document.querySelectorAll('.screen');
  allScreens.forEach(s => s.classList.remove('active'));
  
  const targetScreen = document.getElementById(`s${screenIdx}`);
  if (targetScreen) targetScreen.classList.add('active');
  
  const allTabs = document.querySelectorAll('.tab');
  allTabs.forEach(t => t.classList.remove('active'));
  
  const activeTab = document.getElementById(`tab-el-${screenIdx}`);
  if (activeTab) activeTab.classList.add('active');
  
  // Sync Top Nav Active Class
  const links = document.querySelectorAll('#navLinksContainer a');
  if (currentUser && currentUser.role === "Siswa") {
    const berandaBtn = document.getElementById('top-nav-beranda');
    const kursusBtn = document.getElementById('top-nav-kursus');
    const jelajahiBtn = document.getElementById('top-nav-jelajahi');
    
    if (screenIdx === 0) {
      if (berandaBtn && kursusBtn) {
        if (!berandaBtn.classList.contains('active') && !kursusBtn.classList.contains('active')) {
          links.forEach(l => l.classList.remove('active'));
          berandaBtn.classList.add('active');
        }
      }
    } else if (screenIdx === 1) {
      links.forEach(l => l.classList.remove('active'));
      if (jelajahiBtn) jelajahiBtn.classList.add('active');
    } else {
      links.forEach(l => l.classList.remove('active'));
    }
  } else {
    links.forEach(l => l.classList.remove('active'));
    const firstLink = document.querySelector('#navLinksContainer a');
    if (firstLink) firstLink.classList.add('active');
  }
  
  if (screenIdx === 0 && currentUser.role === "Siswa") {
    renderStudentDashboard();
  } else if (screenIdx === 1 && currentUser.role === "Siswa") {
    triggerCatalogShimmer();
  } else if (screenIdx === 2 && currentUser.role === "Siswa") {
    initUjianScreenView();
  } else if (screenIdx === 3 && currentUser.role === "Siswa") {
    initHasilScreenView();
  } else if (screenIdx === 5 && currentUser.role === "Instruktur") {
    renderInstructorDashboard();
  } else if (screenIdx === 6 && currentUser.role === "Admin") {
    renderAdminDashboard();
  }
}

// AUTH
function checkAuthStatus() {
  if (!currentUser) {
    document.getElementById('authModalBackdrop').classList.add('show');
    switchAuthTab('login');
  } else {
    document.getElementById('authModalBackdrop').classList.remove('show');
    buildNavigationUI();
    if (currentUser.role === "Siswa") {
      showScreenTab(0);
    } else if (currentUser.role === "Instruktur") {
      showScreenTab(5);
    } else if (currentUser.role === "Admin") {
      showScreenTab(6);
    }
  }
}

function switchAuthTab(type) {
  const loginArea = document.getElementById('authLoginArea');
  const regArea = document.getElementById('authRegisterArea');
  const loginTabBtn = document.getElementById('authTabLoginBtn');
  const regTabBtn = document.getElementById('authTabRegisterBtn');
  
  if (type === 'login') {
    loginArea.style.display = 'block';
    regArea.style.display = 'none';
    loginTabBtn.style.color = 'var(--navy)';
    loginTabBtn.style.borderBottom = '3px solid var(--navy)';
    regTabBtn.style.color = 'var(--sub)';
    regTabBtn.style.borderBottom = 'none';
    document.getElementById('authModalTitle').textContent = 'Masuk ke EduLearn';
  } else {
    loginArea.style.display = 'none';
    regArea.style.display = 'block';
    loginTabBtn.style.color = 'var(--sub)';
    loginTabBtn.style.borderBottom = 'none';
    regTabBtn.style.color = 'var(--navy)';
    regTabBtn.style.borderBottom = '3px solid var(--navy)';
    document.getElementById('authModalTitle').textContent = 'Daftar Akun EduLearn';
  }
}

function processLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassword').value;
  const isGoogle = document.getElementById('loginGoogleSim').checked;
  const is2FA = document.getElementById('login2faSim').checked;

  if (isGoogle) {
    alert('Simulasi: Berhasil masuk via Google OAuth 2.0 (FR-02)');
    currentUser = JSON.parse(JSON.stringify(allUsers[0])); 
    currentUser.role = "Siswa";
    saveAndRestart();
    return;
  }

  if (!email || !pass) {
    alert('Harap isi alamat email dan password!');
    return;
  }

  const found = allUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!found || found.password !== pass) {
    alert('Email atau Password tidak valid!');
    return;
  }
  
  if (is2FA || found.twoFactor) {
    const code = prompt("2FA Keamanan Ganda (FR-02) Aktif.\nSebuah SMS/Email OTP dikirim. Harap masukkan 6 digit kode OTP (Gunakan: 123456):");
    if (code !== "123456") {
      alert("Kode OTP salah! Gagal melakukan autentikasi.");
      return;
    }
  }

  currentUser = found;
  
  if (!currentUser.enrolledCourses) {
    currentUser.enrolledCourses = ["py-1"];
    currentUser.completedLectures = { "py-1": ["py-1-1", "py-1-2"] };
    currentUser.studyHours = 10;
    currentUser.certsCount = 0;
    currentUser.examAttempts = {};
    currentUser.examPassed = {};
    currentUser.examScores = {};
    currentUser.examHistory = [];
  }

  saveAndRestart();
}

function processRegister() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass = document.getElementById('regPassword').value;
  const role = document.getElementById('regRole').value;

  if (!name || !email || !pass) {
    alert('Harap lengkapi semua field!');
    return;
  }
  
  const emailExists = allUsers.some(u => u.email.toLowerCase() === email.toLowerCase());
  if (emailExists) {
    alert('Gagal registrasi: Email sudah terdaftar di sistem!');
    return;
  }

  if (pass.length < 6) {
    alert('Gagal registrasi: Password harus minimal 6 karakter!');
    return;
  }

  const newUser = {
    id: "usr-" + Date.now(),
    name: name,
    email: email,
    password: pass,
    role: role,
    status: "Pending", 
    twoFactor: false
  };

  allUsers.push(newUser);
  localStorage.setItem('edulearn_users', JSON.stringify(allUsers));
  
  alert('Registrasi akun baru berhasil! Akun Anda membutuhkan verifikasi Admin sebelum dapat digunakan. Gunakan akun demo yang tersedia untuk menguji langsung.');
  switchAuthTab('login');
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('edulearn_current_user');
  location.reload();
}

function saveAndRestart() {
  localStorage.setItem('edulearn_current_user', JSON.stringify(currentUser));
  location.reload();
}

function toggleProfileDropdown(e) {
  e.stopPropagation();
  document.getElementById('profileDropdown').classList.toggle('show');
}

document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('profileDropdown');
  const userPill = document.querySelector('.user-pill');
  if (dropdown && !dropdown.contains(e.target) && (!userPill || !userPill.contains(e.target))) {
    dropdown.classList.remove('show');
  }
});

function handleRoleSwitch(newRole) {
  currentUser.role = newRole;
  localStorage.setItem('edulearn_current_user', JSON.stringify(currentUser));
  location.reload();
}

function openProfileSettings() {
  const dropdown = document.getElementById('profileDropdown');
  if (dropdown) dropdown.classList.remove('show');
  
  document.getElementById('profileNameInput').value = currentUser.name;
  document.getElementById('profileEmailInput').value = currentUser.email;
  document.getElementById('profile2faInput').checked = currentUser.twoFactor || false;
  document.getElementById('profileSettingsModalBackdrop').classList.add('show');
}

function closeProfileSettings() {
  document.getElementById('profileSettingsModalBackdrop').classList.remove('show');
}

function saveProfileSettings() {
  const name = document.getElementById('profileNameInput').value.trim();
  const twoFa = document.getElementById('profile2faInput').checked;
  if (!name) {
    alert('Nama tidak boleh kosong!');
    return;
  }
  currentUser.name = name;
  currentUser.twoFactor = twoFa;
  
  const uIdx = allUsers.findIndex(u => u.id === currentUser.id);
  if (uIdx !== -1) {
    allUsers[uIdx].name = name;
    allUsers[uIdx].twoFactor = twoFa;
  }
  
  saveDataToStorage();
  location.reload();
}

function getAvatarInitials(name) {
  if (!name) return 'US';
  const p = name.split(' ');
  if (p.length >= 2) return (p[0][0] + p[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}


// ══════════════════════════════════════════
//  SISWA CODE (STUDENT ACTIONS)
// ══════════════════════════════════════════
function renderStudentDashboard() {
  document.getElementById('welcomeHeading').textContent = `Selamat Datang, ${currentUser.name}! 👋`;
  
  const certsCount = currentUser.certsCount || 0;
  const activeCount = currentUser.enrolledCourses.length;
  
  let pendingExams = 0;
  currentUser.enrolledCourses.forEach(cId => {
    const course = allCourses.find(c => c.id === cId);
    if (course && course.exams) {
      const examId = course.exams.id;
      if (!currentUser.examPassed[examId]) {
        pendingExams++;
      }
    }
  });

  let totalSyllabusChapters = 0;
  let completedSyllabusChapters = 0;
  currentUser.enrolledCourses.forEach(cId => {
    const course = allCourses.find(c => c.id === cId);
    if (course) {
      totalSyllabusChapters += course.syllabus.length;
      const completedList = currentUser.completedLectures[cId] || [];
      completedSyllabusChapters += completedList.length;
    }
  });
  
  const progPct = totalSyllabusChapters > 0 ? Math.round((completedSyllabusChapters / totalSyllabusChapters) * 100) : 0;
  
  document.getElementById('dashOverallProgress').textContent = `${progPct}%`;
  document.getElementById('statCerts').textContent = certsCount;
  document.getElementById('statActiveCourses').textContent = activeCount;
  document.getElementById('statPendingExams').textContent = pendingExams;
  
  const calcHours = 10 + (completedSyllabusChapters * 2.5);
  currentUser.studyHours = Math.round(calcHours);
  document.getElementById('statStudyHours').textContent = `${currentUser.studyHours} jam`;
  localStorage.setItem('edulearn_current_user', JSON.stringify(currentUser));

  const grid = document.getElementById('enrolledCoursesGrid');
  grid.innerHTML = '';
  
  if (currentUser.enrolledCourses.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 28px; background: #fff; border-radius: var(--radius); border: 1px solid var(--border);">
        <p style="color:var(--sub)">Anda belum mendaftar di kursus apa pun. Jelajahi katalog dan temukan kursus.</p>
      </div>
    `;
    return;
  }

  currentUser.enrolledCourses.forEach((cId, idx) => {
    const course = allCourses.find(c => c.id === cId);
    if (!course) return;
    
    const completedList = currentUser.completedLectures[cId] || [];
    const coursePct = Math.round((completedList.length / course.syllabus.length) * 100);
    
    const card = document.createElement('div');
    const styleClasses = ['navy-top', 'green-top', 'orange-top', 'purple-top'];
    const barClasses = ['', 'green', 'orange', 'purple'];
    const tagClasses = ['', 'green-tag', 'orange-tag', 'purple-tag'];
    
    const cClass = styleClasses[idx % 4];
    const bClass = barClasses[idx % 4];
    const tClass = tagClasses[idx % 4];
    
    let tagIcon = "💻 Pemrograman";
    if (course.category === "Desain") tagIcon = "🎨 Desain";
    else if (course.category === "Data & AI") tagIcon = "📊 Data & AI";
    else if (course.category === "Bisnis") tagIcon = "💼 Bisnis";
    else if (course.category === "Cybersecurity") tagIcon = "🛡️ Cybersecurity";

    card.className = `course-card ${cClass}`;
    card.innerHTML = `
      <div>
        <div class="course-tag ${tClass}">${tagIcon}</div>
        <h4>${course.title}</h4>
        <div class="course-meta">${completedList.length} dari ${course.syllabus.length} materi selesai</div>
        <div class="prog-label"><span>Progress Belajar</span><span class="pct">${coursePct}%</span></div>
        <div class="prog-bar"><div class="prog-fill ${bClass}" style="width:${coursePct}%"></div></div>
      </div>
      <button class="btn-continue ${bClass}" onclick="openCoursePlayer('${course.id}')" style="margin-top: 10px;">Lanjutkan Belajar →</button>
    `;
    grid.appendChild(card);
  });

  const examGrid = document.getElementById('upcomingExamsGrid');
  examGrid.innerHTML = '';
  
  let examAddedCount = 0;
  currentUser.enrolledCourses.forEach(cId => {
    const course = allCourses.find(c => c.id === cId);
    if (course && course.exams) {
      const exam = course.exams;
      const passed = currentUser.examPassed[exam.id] || false;
      const score = currentUser.examScores[exam.id] || 0;
      const attempts = currentUser.examAttempts[exam.id] || 0;
      
      const card = document.createElement('div');
      card.style.cssText = "background:#fff; border-radius:var(--radius); padding:16px 20px; box-shadow:var(--shadow); border:1px solid var(--border); display:flex; align-items:center; gap:14px;";
      
      let badge = '📝';
      let statText = `${exam.duration} menit · ${exam.questions.length} soal (KKM: ${exam.kkm})`;
      let btnHtml = `<button onclick="startExamFlow('${course.id}')" style="margin-left:auto; padding:7px 14px; background:var(--navy); color:#fff; border:none; border-radius:6px; font-size:12px; font-weight:600; cursor:pointer;">Mulai Ujian</button>`;
      
      if (passed) {
        badge = '✅';
        statText = `Lulus dengan nilai ${score}/100! (Percobaan: ${attempts})`;
        btnHtml = `<button onclick="viewPassedExamResult('${exam.id}')" style="margin-left:auto; padding:7px 14px; background:#E8F8EF; color:var(--green); border:1px solid var(--green); border-radius:6px; font-size:12px; font-weight:600; cursor:pointer;">Lihat Hasil</button>`;
      } else if (attempts > 0) {
        badge = attempts >= 3 ? '🔒' : '⏳';
        statText = `Percobaan: ${attempts}/3. Nilai terakhir: ${score}`;
        
        if (attempts >= 3) {
          btnHtml = `<button disabled style="margin-left:auto; padding:7px 14px; background:#eee; color:#aaa; border:none; border-radius:6px; font-size:12px; font-weight:600; cursor:not-allowed;">Terkunci</button>`;
        } else {
          btnHtml = `<button onclick="startExamFlow('${course.id}')" style="margin-left:auto; padding:7px 14px; background:var(--orange); color:#fff; border:none; border-radius:6px; font-size:12px; font-weight:600; cursor:pointer;">Coba Ulang</button>`;
        }
      }
      
      card.innerHTML = `
        <div style="width:44px; height:44px; background:#FEF3E7; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:20px;">${badge}</div>
        <div>
          <div style="font-weight:600; font-size:14px;">${exam.title}</div>
          <div style="font-size:12px; color:var(--sub); margin-top:2px;">${statText}</div>
        </div>
        ${btnHtml}
      `;
      examGrid.appendChild(card);
      examAddedCount++;
    }
  });

  if (examAddedCount === 0) {
    examGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 20px; color: var(--sub);">
        Tidak ada jadwal kuis untuk kursus terdaftar Anda.
      </div>
    `;
  }
}

// 2. RENDER KATALOG & ADVANCED FILTERS (FR-03, FR-04)
let activeFilterCategory = "Semua";

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  
  if (isCatalogLoading) {
    grid.innerHTML = '';
    for (let i = 0; i < 4; i++) {
      const skeletonCard = document.createElement('div');
      skeletonCard.className = 'skeleton-card';
      skeletonCard.innerHTML = `
        <div class="skeleton-img skeleton"></div>
        <div class="skeleton-title skeleton"></div>
        <div class="skeleton-text skeleton" style="width: 80%;"></div>
        <div class="skeleton-text skeleton" style="width: 50%;"></div>
        <div class="skeleton-price skeleton"></div>
      `;
      grid.appendChild(skeletonCard);
    }
    return;
  }
  
  grid.innerHTML = '';
  
  const searchVal = document.getElementById('catalogSearchInput').value.trim().toLowerCase();
  
  // UAT Advanced Filters
  const diffVal = document.getElementById('filterDifficulty').value; // Semua, Pemula, Intermediate, Advanced
  const priceVal = document.getElementById('filterPrice').value; // Semua, Gratis, Berbayar
  
  const filtered = allCourses.filter(c => {
    const matchesCat = activeFilterCategory === "Semua" || c.category === activeFilterCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchVal) || 
                          c.instructor.toLowerCase().includes(searchVal) ||
                          c.category.toLowerCase().includes(searchVal);
                          
    const matchesDiff = diffVal === "Semua" || c.level === diffVal;
    
    let matchesPrice = true;
    if (priceVal === "Gratis") matchesPrice = c.price === 0;
    else if (priceVal === "Berbayar") matchesPrice = c.price > 0;
    
    return matchesCat && matchesSearch && matchesDiff && matchesPrice;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px; background: #fff; border-radius: var(--radius); border: 1px solid var(--border);">
        <p style="color:var(--sub); font-size: 14px;">Tidak ada kursus yang cocok dengan kriteria pencarian.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((c, idx) => {
    const isEnrolled = currentUser.enrolledCourses.includes(c.id);
    const colorClasses = ['navy', 'green', 'purple', 'orange'];
    const hClass = colorClasses[idx % 4];
    
    const card = document.createElement('div');
    card.className = 'kursus-card';
    
    let btnText = "Daftar Sekarang";
    let btnAction = `triggerPaymentEnroll('${c.id}')`;
    let btnClass = "";
    
    if (isEnrolled) {
      btnText = "Buka Ruang Belajar";
      btnAction = `openCoursePlayer('${c.id}')`;
      btnClass = "green";
    } else if (c.price === 0) {
      btnText = "Gabung Gratis";
      btnAction = `enrollCourseDirectly('${c.id}')`;
      btnClass = "primary";
    } else {
      btnText = `Daftar - Rp ${c.price.toLocaleString('id-ID')}`;
    }

    card.innerHTML = `
      <div class="kursus-header ${hClass}">
        <span class="badge-level">${c.level}</span>
        <div>
          <h3>${c.title}</h3>
          <div class="instructor">${c.instructor}</div>
        </div>
      </div>
      <div class="kursus-body">
        <div>
          <div class="kursus-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-val">${c.rating}</span>
            <span class="rating-count">(${c.reviewsCount} review)</span>
          </div>
          <div class="kursus-info">
            <span>⏱ ${c.duration} jam</span><span>📄 ${c.materiCount} materi</span><span>🏅 Sertifikat</span>
          </div>
        </div>
        <div>
          <div class="kursus-price">${c.price === 0 ? "GRATIS" : "Rp " + c.price.toLocaleString('id-ID')}</div>
          <button class="btn-daftar ${btnClass}" onclick="${btnAction}">${btnText}</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterCategoryTab(category) {
  activeFilterCategory = category;
  
  const tabs = document.querySelectorAll('#catalogCategories .ftab');
  tabs.forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-category') === category);
  });
  
  triggerCatalogShimmer();
}

function handleSearchFilter() {
  triggerCatalogShimmer();
}

function enrollCourseDirectly(courseId) {
  if (!currentUser.enrolledCourses.includes(courseId)) {
    currentUser.enrolledCourses.push(courseId);
    currentUser.completedLectures[courseId] = []; 
    
    // Add transaction to ledger (Gratis)
    const course = allCourses.find(c => c.id === courseId);
    const trans = {
      date: new Date().toLocaleDateString('id-ID'),
      user: currentUser.name,
      course: course.title,
      method: "Sistem (Gratis)",
      price: 0,
      status: "SUCCESS"
    };
    allTransactions.unshift(trans);
    saveDataToStorage();
    syncTransactionToSupabase(trans);
    
    renderCatalog();
    showScreenTab(0);
  }
}

// 3. PEMBAYARAN MIDTRANS & LIVE LEDGER (FR-05, FR-15)
let activePaymentCourseId = null;
let activePaymentMethod = 'gopay';

function triggerPaymentEnroll(courseId) {
  if (!currentUser) {
    alert("Anda harus login terlebih dahulu!");
    return;
  }
  
  const course = allCourses.find(c => c.id === courseId);
  if (!course) return;
  
  activePaymentCourseId = courseId;
  activePaymentMethod = 'gopay';
  
  document.getElementById('payCourseTitle').textContent = course.title;
  document.getElementById('payCoursePrice').textContent = `Rp ${course.price.toLocaleString('id-ID')}`;
  
  document.getElementById('paymentModalBackdrop').classList.add('show');
  document.getElementById('paymentMainForm').style.display = 'block';
  document.getElementById('paymentLoadingArea').style.display = 'none';
  document.getElementById('paymentResultArea').style.display = 'none';
  document.getElementById('paymentModalFooter').style.display = 'flex';
  
  selectPaymentMethod('gopay', document.querySelector('.payment-method-btn'));
}

function closePaymentModal() {
  document.getElementById('paymentModalBackdrop').classList.remove('show');
}

function selectPaymentMethod(method, btnEl) {
  activePaymentMethod = method;
  
  document.querySelectorAll('.payment-method-btn').forEach(btn => btn.classList.remove('selected'));
  btnEl.classList.add('selected');
  
  document.getElementById('payArea_gopay').style.display = 'none';
  document.getElementById('payArea_wallet').style.display = 'none';
  document.getElementById('payArea_va').style.display = 'none';
  document.getElementById('payArea_cc').style.display = 'none';
  
  document.getElementById(`payArea_${method}`).style.display = 'block';
}

function executePaymentSim(success) {
  document.getElementById('paymentMainForm').style.display = 'none';
  document.getElementById('paymentModalFooter').style.display = 'none';
  document.getElementById('paymentLoadingArea').style.display = 'block';
  
  setTimeout(() => {
    document.getElementById('paymentLoadingArea').style.display = 'none';
    document.getElementById('paymentResultArea').style.display = 'block';
    
    const icon = document.getElementById('paymentResultIcon');
    const title = document.getElementById('paymentResultTitle');
    const desc = document.getElementById('paymentResultText');
    const primaryBtn = document.getElementById('paymentResultPrimaryBtn');
    const secondaryBtn = document.getElementById('paymentResultSecondaryBtn');
    
    // Log payment attempt to ledger
    const course = allCourses.find(c => c.id === activePaymentCourseId);
    let payMethodName = "GoPay";
    if (activePaymentMethod === 'wallet') payMethodName = "OVO / DANA";
    else if (activePaymentMethod === 'va') payMethodName = "Transfer VA";
    else if (activePaymentMethod === 'cc') payMethodName = "Kartu Kredit";
    
    const transRecord = {
      date: new Date().toLocaleDateString('id-ID'),
      user: currentUser.name,
      course: course.title,
      method: payMethodName,
      price: course.price,
      status: success ? "SUCCESS" : "FAILED"
    };
    
    allTransactions.unshift(transRecord);
    saveDataToStorage();
    syncTransactionToSupabase(transRecord);

    if (success) {
      icon.textContent = '✅';
      title.textContent = 'Pembayaran Sukses!';
      desc.textContent = 'Notifikasi webhook Midtrans dikirim secara aman. Enrollment Anda telah diaktifkan.';
      primaryBtn.textContent = 'Mulai Belajar';
      primaryBtn.onclick = () => finishPaymentFlow(true);
      secondaryBtn.style.display = 'none';
    } else {
      icon.textContent = '❌';
      title.textContent = 'Pembayaran Gagal / Expired';
      desc.textContent = 'Transaksi ditolak oleh Payment Gateway bank pengirim (Simulasi FR-05 Gagal).';
      primaryBtn.textContent = 'Coba Lagi';
      primaryBtn.onclick = () => finishPaymentFlow(false);
      secondaryBtn.style.display = 'none';
    }
  }, 1800);
}

function finishPaymentFlow(success) {
  closePaymentModal();
  if (success) {
    if (!currentUser.enrolledCourses.includes(activePaymentCourseId)) {
      currentUser.enrolledCourses.push(activePaymentCourseId);
      currentUser.completedLectures[activePaymentCourseId] = [];
    }
    saveDataToStorage();
    openCoursePlayer(activePaymentCourseId);
  } else {
    showScreenTab(1);
  }
}

// 4. COURSE PLAYER & VIDEOS SYLLABUS
let activePlayerCourse = null;
let activePlayerLectureIndex = 0;

function openCoursePlayer(courseId) {
  const course = allCourses.find(c => c.id === courseId);
  if (!course) return;
  
  activePlayerCourse = course;
  activePlayerLectureIndex = 0;
  
  document.getElementById('playerCourseTitle').textContent = course.title;
  document.getElementById('playerCourseDesc').textContent = `Video kuliah berkualitas tinggi. Instruktur mengulas seluruh materi penting dari ${course.title}. Dokumen PDF tambahan tersedia di tab Attachment.`;
  document.getElementById('playerCourseInstructor').textContent = course.instructor;
  document.getElementById('playerCourseRating').textContent = course.rating;
  
  renderPlayerSyllabus();
  renderForumDiscussion(courseId);
  stopMockVideo();
  resetMockVideoPlayer();
  
  showScreenTab(4);
}

function renderPlayerSyllabus() {
  const cId = activePlayerCourse.id;
  const list = document.getElementById('playerSyllabusList');
  list.innerHTML = '';
  
  const completedList = currentUser.completedLectures[cId] || [];
  
  activePlayerCourse.syllabus.forEach((lec, idx) => {
    const isCompleted = completedList.includes(lec.id);
    const isActive = activePlayerLectureIndex === idx;
    
    const div = document.createElement('div');
    div.className = `syllabus-item ${isActive ? 'active' : ''}`;
    div.onclick = (e) => {
      if (e.target.type !== "checkbox") {
        selectLecture(idx);
      }
    };
    
    div.innerHTML = `
      <input type="checkbox" ${isCompleted ? 'checked' : ''} onclick="handleLectureCheckboxToggle('${lec.id}', this.checked, event)">
      <div class="syllabus-item-info">
        <div class="title">${idx+1}. ${lec.title}</div>
        <div class="duration">⏱ ${lec.duration}</div>
      </div>
    `;
    list.appendChild(div);
  });
  
  const total = activePlayerCourse.syllabus.length;
  const completedCount = completedList.length;
  const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;
  
  document.getElementById('playerSyllabusCount').textContent = `${completedCount} dari ${total} selesai`;
  document.getElementById('playerSyllabusPercent').textContent = `${pct}%`;
  
  const examBtn = document.getElementById('playerUjianBtn');
  if (activePlayerCourse.exams) {
    examBtn.style.display = 'block';
    if (pct < 60) {
      examBtn.textContent = `✏️ Kunci Ujian (Selesaikan min. 60% materi)`;
      examBtn.style.opacity = '0.5';
      examBtn.style.cursor = 'not-allowed';
      examBtn.disabled = true;
    } else {
      examBtn.textContent = `✏️ Ikuti ${activePlayerCourse.exams.title}`;
      examBtn.style.opacity = '1';
      examBtn.style.cursor = 'pointer';
      examBtn.disabled = false;
    }
  } else {
    examBtn.style.display = 'none';
  }
}

function handleLectureCheckboxToggle(lectureId, isChecked, event) {
  event.stopPropagation();
  const cId = activePlayerCourse.id;
  if (!currentUser.completedLectures[cId]) {
    currentUser.completedLectures[cId] = [];
  }
  
  const completedList = currentUser.completedLectures[cId];
  if (isChecked) {
    if (!completedList.includes(lectureId)) {
      completedList.push(lectureId);
    }
  } else {
    const idx = completedList.indexOf(lectureId);
    if (idx !== -1) {
      completedList.splice(idx, 1);
    }
  }
  
  saveDataToStorage();
  renderPlayerSyllabus();
}

function selectLecture(idx) {
  activePlayerLectureIndex = idx;
  stopMockVideo();
  resetMockVideoPlayer();
  renderPlayerSyllabus();
}

// 4.1 Mock Video Canvas Simulation
let canvasAnimationId = null;

function resetMockVideoPlayer() {
  currentVideoPlaying = false;
  currentVideoTimer = 0;
  
  const canvas = document.getElementById('videoCanvasMock');
  const ctx = canvas.getContext('2d');
  canvas.width = 640;
  canvas.height = 360;
  
  ctx.fillStyle = '#1A1A2E';
  ctx.fillRect(0, 0, 640, 360);
  
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.font = 'bold 20px Poppins, sans-serif';
  ctx.fillText('EduLearn Streaming Video (Adaptive 1080p)', 320, 160);
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = '13px Inter, sans-serif';
  
  const lectureName = activePlayerCourse.syllabus[activePlayerLectureIndex].title;
  ctx.fillText(`Bab ${activePlayerLectureIndex+1}: ${lectureName}`, 320, 200);
  
  document.getElementById('videoPlayOverlayBtn').style.display = 'flex';
  document.getElementById('vidPlayPauseBtn').textContent = '▶';
  document.getElementById('vidTimeLabel').textContent = `00:00 / 05:00`;
}

function toggleMockVideo() {
  if (currentVideoPlaying) {
    stopMockVideo();
  } else {
    startMockVideo();
  }
}

let speedMult = 1;
function changeVidSpeed(val) {
  speedMult = parseFloat(val);
}

function startMockVideo() {
  currentVideoPlaying = true;
  document.getElementById('videoPlayOverlayBtn').style.display = 'none';
  document.getElementById('vidPlayPauseBtn').textContent = '⏸';
  
  const canvas = document.getElementById('videoCanvasMock');
  const ctx = canvas.getContext('2d');
  
  let frame = 0;
  
  function drawFrame() {
    if (!currentVideoPlaying) return;
    
    ctx.fillStyle = '#0D1257';
    ctx.fillRect(0, 0, 640, 360);
    
    ctx.strokeStyle = '#293593';
    ctx.lineWidth = 4;
    ctx.beginPath();
    for (let x = 0; x < 640; x += 10) {
      const y = 180 + Math.sin((x + frame) * 0.02) * 50;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x < 640; x += 10) {
      const y = 180 + Math.cos((x - frame) * 0.015) * 35;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    ctx.fillStyle = '#fff';
    ctx.font = '15px Poppins, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`SEDANG MEMUTAR: Bab ${activePlayerLectureIndex+1}`, 30, 40);
    
    ctx.font = '12px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    const name = activePlayerCourse.syllabus[activePlayerLectureIndex].title;
    ctx.fillText(name, 30, 60);
    
    ctx.fillStyle = '#E8F8EF';
    ctx.font = '10px Courier New, monospace';
    ctx.fillText(`STREAM-RATE: ~4200kbps | RESOLUSI: 1080p60 | SPEED: ${speedMult}x`, 30, 320);
    
    frame += 2 * speedMult;
    canvasAnimationId = requestAnimationFrame(drawFrame);
  }
  
  drawFrame();
  
  currentVideoInterval = setInterval(() => {
    currentVideoTimer += speedMult;
    if (currentVideoTimer >= currentVideoDuration) {
      currentVideoTimer = currentVideoDuration;
      stopMockVideo();
      
      const activeLec = activePlayerCourse.syllabus[activePlayerLectureIndex];
      const completedList = currentUser.completedLectures[activePlayerCourse.id];
      if (!completedList.includes(activeLec.id)) {
        completedList.push(activeLec.id);
        saveDataToStorage();
        renderPlayerSyllabus();
        alert(`Materi '${activeLec.title}' selesai ditonton! Progress belajar terupdate.`);
      }
    }
    
    const formatTime = (sec) => {
      const m = Math.floor(sec/60).toString().padStart(2, '0');
      const s = (sec%60).toString().padStart(2, '0');
      return `${m}:${s}`;
    };
    
    document.getElementById('vidTimeLabel').textContent = `${formatTime(currentVideoTimer)} / ${formatTime(currentVideoDuration)}`;
  }, 1000);
}

function stopMockVideo() {
  currentVideoPlaying = false;
  document.getElementById('videoPlayOverlayBtn').style.display = 'flex';
  document.getElementById('vidPlayPauseBtn').textContent = '▶';
  
  if (canvasAnimationId) {
    cancelAnimationFrame(canvasAnimationId);
  }
  if (currentVideoInterval) {
    clearInterval(currentVideoInterval);
  }
}

// Player tabs switching
function switchPlayerTab(idx, tabEl) {
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
  tabEl.classList.add('active');
  
  document.getElementById('pt0').classList.remove('active');
  document.getElementById('pt1').classList.remove('active');
  document.getElementById('pt2').classList.remove('active');
  
  const pt3 = document.getElementById('pt3');
  if (pt3) pt3.classList.remove('active');
  
  document.getElementById(`pt${idx}`).classList.add('active');
}

function renderForumDiscussion(courseId) {
  const commentList = document.getElementById('forumCommentsList');
  commentList.innerHTML = '';
  
  const comments = allForums[courseId] || [];
  document.getElementById('forumCommentsCount').textContent = comments.length;
  
  comments.forEach(post => {
    const comDiv = document.createElement('div');
    comDiv.className = 'forum-comment';
    
    let formattedText = post.text;
    if (formattedText.includes('@')) {
      formattedText = formattedText.replace(/(@[a-zA-Z0-9_À-ÿ]+)/g, '<span class="mention">$1</span>');
    }

    comDiv.innerHTML = `
      <div class="forum-comment-avatar">${post.avatar}</div>
      <div class="forum-comment-body">
        <div class="forum-comment-meta">
          <span class="user">${post.user}</span>
          <span class="time">${post.time}</span>
        </div>
        <div class="forum-comment-text">${formattedText}</div>
      </div>
    `;
    commentList.appendChild(comDiv);
  });
  
  commentList.scrollTop = commentList.scrollHeight;
}

function submitForumComment() {
  const input = document.getElementById('forumCommentInput');
  const text = input.value.trim();
  if (!text) return;
  
  const courseId = activePlayerCourse.id;
  if (!allForums[courseId]) allForums[courseId] = [];
  
  const newPost = {
    id: "post-" + Date.now(),
    user: currentUser.name,
    avatar: getAvatarInitials(currentUser.name),
    text: text,
    time: "Baru saja"
  };
  
  allForums[courseId].push(newPost);
  saveDataToStorage();
  syncForumPostToSupabase(newPost, courseId);
  renderForumDiscussion(courseId);
  input.value = '';
  
  if (text.toLowerCase().includes('@instruktur') || text.toLowerCase().includes('@siti') || text.toLowerCase().includes('@ahmad')) {
    setTimeout(() => {
      const insReply = {
        id: "post-" + (Date.now() + 100),
        user: activePlayerCourse.instructor,
        avatar: getAvatarInitials(activePlayerCourse.instructor),
        text: `Halo @${currentUser.name}, terima kasih pertanyaannya. Terkait materi ini, pastikan Anda memahami code block dan latihan di slide PPT Attachment ya. Semangat belajarnya!`,
        time: "Baru saja"
      };
      allForums[courseId].push(insReply);
      saveDataToStorage();
      syncForumPostToSupabase(insReply, courseId);
      renderForumDiscussion(courseId);
    }, 1500);
  }
}

// 4.3 Python console simulator runner
function runPythonMockCode() {
  const code = document.getElementById('playgroundCodeInput').value;
  const term = document.getElementById('playgroundTerminal');
  term.textContent = ">>> Menjalankan program Python...\n";
  
  setTimeout(() => {
    try {
      const lines = code.split('\n');
      let output = "";
      let variables = {};
      
      for (let line of lines) {
        line = line.trim();
        if (!line || line.startsWith("#")) continue;
        
        // Variable assignment: x = value
        const varMatch = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*)$/);
        if (varMatch) {
          const varName = varMatch[1];
          let varValRaw = varMatch[2].trim();
          
          try {
            let expr = varValRaw;
            for (let k in variables) {
              expr = expr.replace(new RegExp('\\b' + k + '\\b', 'g'), variables[k]);
            }
            let parsedVal = eval(expr);
            variables[varName] = parsedVal;
          } catch(e) {
            variables[varName] = varValRaw.replace(/['"]/g, ''); // strip quotes
          }
          continue;
        }
        
        // Print statement: print(...)
        const printMatch = line.match(/^print\((.*)\)$/);
        if (printMatch) {
          let inside = printMatch[1].trim();
          if (variables[inside] !== undefined) {
            output += variables[inside] + "\n";
          } else {
            try {
              let expr = inside;
              for (let k in variables) {
                expr = expr.replace(new RegExp('\\b' + k + '\\b', 'g'), variables[k]);
              }
              let evaluated = eval(expr);
              output += evaluated + "\n";
            } catch(e) {
              if ((inside.startsWith('"') && inside.endsWith('"')) || (inside.startsWith("'") && inside.endsWith("'"))) {
                output += inside.substring(1, inside.length - 1) + "\n";
              } else {
                output += inside + "\n";
              }
            }
          }
          continue;
        }
        
        output += `Error: Baris '${line}' diabaikan (hanya print & variabel sederhana didukung).\n`;
      }
      
      term.textContent += output || "Program selesai dijalankan (no output).\n";
    } catch(e) {
      term.textContent += "Kesalahan runtime: " + e.message + "\n";
    }
  }, 400);
}


// ══════════════════════════════════════════
//  UJIAN ONLINE ENGINE (CONSTRAINTS)
// ══════════════════════════════════════════
function startExamFromPlayer() {
  stopMockVideo();
  startExamFlow(activePlayerCourse.id);
}

function startExamFlow(courseId) {
  const course = allCourses.find(c => c.id === courseId);
  if (!course || !course.exams) return;
  
  if (!currentUser.enrolledCourses.includes(courseId)) {
    alert("Kesalahan: Anda belum terdaftar di kursus ini!");
    return;
  }
  
  const exam = course.exams;
  
  if (!currentUser.examAttempts[exam.id]) {
    currentUser.examAttempts[exam.id] = 0;
  }
  
  // UAT: LOCK EXAM ON ATTEMPT >= 3
  if (currentUser.examAttempts[exam.id] >= 3 && !currentUser.examPassed[exam.id]) {
    alert("Kunci Keamanan: Anda telah melebihi batas maksimal pengerjaan ujian (3 kali mencoba)!");
    return;
  }
  
  activeExam = {
    courseId: courseId,
    examId: exam.id,
    title: exam.title,
    kkm: exam.kkm,
    questions: JSON.parse(JSON.stringify(exam.questions)), 
    currentQuestionIndex: 0,
    answeredArray: new Array(exam.questions.length).fill(null),
    timeLeftSeconds: exam.duration * 60
  };
  
  shuffleArray(activeExam.questions);
  activeExamStartTime = new Date();
  showScreenTab(2);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function initUjianScreenView() {
  const noExam = document.getElementById('noActiveExamView');
  const activeExamArea = document.getElementById('activeExamView');
  
  if (!activeExam) {
    noExam.style.display = 'block';
    activeExamArea.style.display = 'none';
  } else {
    noExam.style.display = 'none';
    activeExamArea.style.display = 'grid';
    
    document.getElementById('activeExamTitle').textContent = `Ujian: ${activeExam.title}`;
    
    renderExamQuestion();
    buildExamDots();
    startExamTimer();
  }
}

let examTimerIntervalId = null;

function startExamTimer() {
  if (examTimerIntervalId) clearInterval(examTimerIntervalId);
  
  examTimerIntervalId = setInterval(() => {
    if (!activeExam) {
      clearInterval(examTimerIntervalId);
      return;
    }
    
    activeExam.timeLeftSeconds--;
    
    if (activeExam.timeLeftSeconds <= 0) {
      clearInterval(examTimerIntervalId);
      document.getElementById('timer').textContent = '⏱ 00:00';
      alert('Waktu ujian telah habis! Sistem secara otomatis mensubmit jawaban Anda (Auto-Submit).');
      autoSubmitExam();
      return;
    }
    
    const m = Math.floor(activeExam.timeLeftSeconds / 60).toString().padStart(2, '0');
    const s = (activeExam.timeLeftSeconds % 60).toString().padStart(2, '0');
    document.getElementById('timer').textContent = `⏱ ${m}:${s}`;
  }, 1000);
}

function simFastForwardTimer() {
  if (!activeExam) return;
  activeExam.timeLeftSeconds = 5; 
  alert("Waktu dipercepat ke 5 detik untuk menguji fungsionalitas auto-submit!");
}

function renderExamQuestion() {
  const qIdx = activeExam.currentQuestionIndex;
  const q = activeExam.questions[qIdx];
  
  document.getElementById('soalCounter').textContent = `Pertanyaan ${qIdx + 1} dari ${activeExam.questions.length}`;
  document.getElementById('soalText').textContent = `Soal No. ${qIdx + 1}: ${q.q}`;
  
  const cb = document.getElementById('codeBlock');
  if (q.code) {
    cb.style.display = 'block';
    cb.textContent = q.code;
  } else {
    cb.style.display = 'none';
  }
  
  const progressFill = document.getElementById('soalFill');
  const pct = Math.round(((qIdx + 1) / activeExam.questions.length) * 100);
  progressFill.style.width = `${pct}%`;
  
  const wrapper = document.getElementById('choicesWrap');
  wrapper.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  
  q.choices.forEach((ch, idx) => {
    const isSelected = activeExam.answeredArray[qIdx] === idx;
    const choiceDiv = document.createElement('div');
    choiceDiv.className = `choice ${isSelected ? 'selected' : ''}`;
    choiceDiv.innerHTML = `
      <div class="choice-radio"></div>
      <span><strong>${letters[idx]}.</strong> ${ch}</span>
    `;
    
    choiceDiv.onclick = () => {
      activeExam.answeredArray[qIdx] = idx;
      document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
      choiceDiv.classList.add('selected');
      buildExamDots();
    };
    
    wrapper.appendChild(choiceDiv);
  });
}

function buildExamDots() {
  const wrap = document.getElementById('soalDots');
  wrap.innerHTML = '';
  
  activeExam.questions.forEach((_, i) => {
    const d = document.createElement('div');
    const isCurrent = activeExam.currentQuestionIndex === i;
    const isDone = activeExam.answeredArray[i] !== null;
    
    d.className = `sdot ${isCurrent ? 'current' : ''} ${isDone ? 'done' : ''}`;
    d.textContent = i + 1;
    d.onclick = () => {
      activeExam.currentQuestionIndex = i;
      renderExamQuestion();
      buildExamDots();
    };
    wrap.appendChild(d);
  });
}

function nextSoal() {
  if (activeExam && activeExam.currentQuestionIndex < activeExam.questions.length - 1) {
    activeExam.currentQuestionIndex++;
    renderExamQuestion();
    buildExamDots();
  }
}

function prevSoal() {
  if (activeExam && activeExam.currentQuestionIndex > 0) {
    activeExam.currentQuestionIndex--;
    renderExamQuestion();
    buildExamDots();
  }
}

function confirmSubmitExam() {
  const answeredCount = activeExam.answeredArray.filter(x => x !== null).length;
  const total = activeExam.questions.length;
  
  if (answeredCount < total) {
    const conf = confirm(`Anda baru menjawab ${answeredCount} dari ${total} soal. Yakin ingin mensubmit kuis sekarang?`);
    if (!conf) return;
  }
  
  submitExamFinal();
}

function autoSubmitExam() {
  submitExamFinal();
}

// GRADE & ATTEMPTS
let latestGradedResult = null;

function submitExamFinal() {
  clearInterval(examTimerIntervalId);
  
  const total = activeExam.questions.length;
  let correctCount = 0;
  
  activeExam.questions.forEach((q, idx) => {
    const studentAns = activeExam.answeredArray[idx];
    if (studentAns === q.ans) {
      correctCount++;
    }
  });
  
  const score = Math.round((correctCount / total) * 100);
  const isPassed = score >= activeExam.kkm;
  
  const diffMs = new Date() - activeExamStartTime;
  const diffSec = Math.floor(diffMs / 1000);
  const mSpent = Math.floor(diffSec / 60);
  const sSpent = diffSec % 60;
  const durationText = `${mSpent} menit ${sSpent} detik`;
  
  const examId = activeExam.examId;
  currentUser.examAttempts[examId]++;
  currentUser.examScores[examId] = score;
  
  if (isPassed) {
    currentUser.examPassed[examId] = true;
    currentUser.certsCount++;
    startConfetti();
  } else {
    currentUser.examPassed[examId] = currentUser.examPassed[examId] || false;
  }
  
  let certId = "";
  if (isPassed) {
    certId = `EDU-${new Date().getFullYear()}-${activeExam.courseId.toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;
  }
  
  const resultRecord = {
    examId: examId,
    courseId: activeExam.courseId,
    examTitle: activeExam.title,
    score: score,
    totalQuestions: total,
    correctCount: correctCount,
    wrongCount: total - correctCount,
    isPassed: isPassed,
    kkm: activeExam.kkm,
    durationText: durationText,
    attempt: currentUser.examAttempts[examId],
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    certificateId: certId,
    questionsReview: activeExam.questions.map((q, idx) => ({
      question: q.q,
      code: q.code || null,
      choices: q.choices,
      studentAns: activeExam.answeredArray[idx],
      correctAns: q.ans,
      explanation: q.exp || "Kunci jawaban yang benar ditandai pada review."
    }))
  };
  
  currentUser.examHistory.push(resultRecord);
  latestGradedResult = resultRecord;
  
  saveDataToStorage();
  activeExam = null;
  
  showScreenTab(3);
}

// 4. HASIL SCREEN & SCORES HISTORY (UAT COMPLIANT)
function initHasilScreenView() {
  const noHasil = document.getElementById('noHasilView');
  const activeHasil = document.getElementById('activeHasilView');
  
  if (!latestGradedResult) {
    if (currentUser.examHistory && currentUser.examHistory.length > 0) {
      latestGradedResult = currentUser.examHistory[currentUser.examHistory.length - 1];
    }
  }

  if (!latestGradedResult) {
    noHasil.style.display = 'block';
    activeHasil.style.display = 'none';
  } else {
    noHasil.style.display = 'none';
    activeHasil.style.display = 'block';
    renderResultsPage();
  }
}

function renderResultsPage() {
  const res = latestGradedResult;
  
  const hero = document.getElementById('hasilHero');
  const badge = document.getElementById('hasilBadge');
  const title = document.getElementById('hasilExamTitle');
  const dateMeta = document.getElementById('hasilDateMeta');
  
  title.textContent = res.examTitle;
  dateMeta.textContent = `${res.date} · Percobaan ke-${res.attempt}`;
  
  if (res.isPassed) {
    hero.className = "hasil-hero";
    badge.textContent = "✅ SELAMAT! Anda LULUS";
  } else {
    hero.className = "hasil-hero failed";
    badge.textContent = "❌ MAAF! Anda TIDAK LULUS";
  }
  
  document.getElementById('hasilScoreNum').textContent = res.score;
  document.getElementById('hasilKkmVal').textContent = res.kkm;
  
  const statusLabel = document.getElementById('hasilStatusLabel');
  const scoreBar = document.getElementById('hasilScoreBarFill');
  
  if (res.isPassed) {
    statusLabel.textContent = "LULUS ✓";
    statusLabel.className = "val green";
    scoreBar.className = "score-bar-fill";
    document.getElementById('hasilSertifCard').style.display = 'flex';
    document.getElementById('hasilSertifMeta').innerHTML = `${res.examTitle} — EduLearn Certified<br>ID: ${res.certificateId} | Valid: Seumur Hidup`;
  } else {
    statusLabel.textContent = "TIDAK LULUS ✗";
    statusLabel.className = "val red";
    scoreBar.className = "score-bar-fill red-fill";
    document.getElementById('hasilSertifCard').style.display = 'none';
  }
  
  scoreBar.style.width = `${res.score}%`;
  document.getElementById('hasilCorrectRatioLabel').textContent = `Benar ${res.correctCount}/${res.totalQuestions} soal`;
  
  document.getElementById('hasilStatsCorrect').textContent = res.correctCount;
  document.getElementById('hasilStatsWrong').textContent = res.wrongCount;
  document.getElementById('hasilStatsDuration').textContent = res.durationText;
  document.getElementById('hasilStatsAttempts').textContent = `${res.attempt} dari 3`;
  
  // Render Attempts History Table for this Quiz (UAT scenario)
  renderAttemptHistoryTable(res.examId);
  
  const reviewContainer = document.getElementById('hasilReviewContainer');
  reviewContainer.innerHTML = '';
  
  const letters = ['A', 'B', 'C', 'D'];
  res.questionsReview.forEach((item, idx) => {
    const isCorrect = item.studentAns === item.correctAns;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'review-item';
    
    let answerText = "Tidak menjawab";
    if (item.studentAns !== null && item.studentAns !== undefined) {
      answerText = `${letters[item.studentAns]}. ${item.choices[item.studentAns]}`;
    }
    
    let codeHtml = "";
    if (item.code) {
      codeHtml = `<div class="code-block" style="margin: 8px 0;">${item.code}</div>`;
    }
    
    itemDiv.innerHTML = `
      <div class="review-question-header">
        <span class="ri-num">${idx + 1}.</span>
        <span class="ri-ans">${item.question}</span>
        <span class="ri-badge ${isCorrect ? 'ok' : 'no'}">${isCorrect ? '✓ Benar' : '✗ Salah'}</span>
      </div>
      ${codeHtml}
      <div class="review-question-body">
        <div>• Jawaban Anda: <strong style="color: ${isCorrect ? 'var(--green)' : 'var(--red)'};">${answerText}</strong></div>
        <div>• Kunci Jawaban: <strong style="color: var(--green);">${letters[item.correctAns]}. ${item.choices[item.correctAns]}</strong></div>
        <div class="ri-explanation">💡 <strong>Pembahasan:</strong> ${item.explanation}</div>
      </div>
    `;
    reviewContainer.appendChild(itemDiv);
  });
  
  // Disable or enable Retry button (Limit max 3)
  const retryBtn = document.getElementById('hasilRetryButton');
  const attempts = currentUser.examAttempts[res.examId] || 0;
  
  if (!res.isPassed && attempts < 3) {
    document.getElementById('hasilActionRetryBtnWrap').style.display = 'block';
    retryBtn.disabled = false;
    retryBtn.textContent = "Coba Ulang Ujian";
    retryBtn.style.cssText = "padding:10px 24px; background:var(--navy); color:#fff; cursor:pointer;";
  } else if (attempts >= 3 && !res.isPassed) {
    document.getElementById('hasilActionRetryBtnWrap').style.display = 'block';
    retryBtn.disabled = true;
    retryBtn.textContent = "Percobaan Habis (Terkunci)";
    retryBtn.style.cssText = "padding:10px 24px; background:#ccc; color:#666; cursor:not-allowed;";
  } else {
    document.getElementById('hasilActionRetryBtnWrap').style.display = 'none';
  }
}

function renderAttemptHistoryTable(examId) {
  const tbody = document.getElementById('hasilHistoryTableBody');
  tbody.innerHTML = '';
  
  const history = currentUser.examHistory.filter(h => h.examId === examId);
  
  if (history.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--sub);">Belum ada riwayat pengerjaan.</td></tr>`;
    return;
  }
  
  history.forEach(h => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>Percobaan #${h.attempt}</strong></td>
      <td>${h.date}</td>
      <td>${h.durationText}</td>
      <td><strong>${h.score}/100</strong></td>
      <td><span class="status-pill ${h.isPassed ? 'success' : 'danger'}">${h.isPassed ? 'LULUS' : 'GAGAL'}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function retryExamFromResults() {
  if (latestGradedResult) {
    startExamFlow(latestGradedResult.courseId);
  }
}

function viewPassedExamResult(examId) {
  const found = currentUser.examHistory.find(h => h.examId === examId && h.isPassed);
  if (found) {
    latestGradedResult = found;
    showScreenTab(3);
  }
}

// 5. MOCK CERTIFICATE SVG/CANVAS RENDERER
function handleDownloadSertifClick() {
  if (!latestGradedResult || !latestGradedResult.isPassed) return;
  
  document.getElementById('certModalBackdrop').classList.add('show');
  
  const container = document.getElementById('canvasCertContainer');
  container.innerHTML = '';
  
  const course = allCourses.find(c => c.id === latestGradedResult.courseId);
  const instructor = course ? course.instructor.split(',')[0] : "Direksi EduLearn";
  
  const canvas = generateCertificateCanvas(currentUser.name, latestGradedResult.examTitle, latestGradedResult.date, latestGradedResult.certificateId, instructor);
  container.appendChild(canvas);
}

function closeCertModal() {
  document.getElementById('certModalBackdrop').classList.remove('show');
}

function generateCertificateCanvas(userName, examTitle, date, certId, instructor) {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#FFFDF2';
  ctx.fillRect(0, 0, 800, 600);
  
  ctx.strokeStyle = '#F1C40F';
  ctx.lineWidth = 14;
  ctx.strokeRect(7, 7, 786, 586);
  
  ctx.strokeStyle = '#1A237E';
  ctx.lineWidth = 2;
  ctx.strokeRect(22, 22, 756, 556);
  
  ctx.textAlign = 'center';
  
  ctx.fillStyle = '#1E3799';
  ctx.font = 'bold 22px Poppins, sans-serif';
  ctx.fillText('EduLearn Online Certified Diploma', 400, 75);
  
  ctx.fillStyle = '#1A237E';
  ctx.font = 'bold 38px Poppins, sans-serif';
  ctx.fillText('SERTIFIKAT KELULUSAN', 400, 140);
  
  ctx.font = 'italic 15px Inter, sans-serif';
  ctx.fillStyle = '#5C6880';
  ctx.fillText('Sertifikat ini secara resmi dianugerahkan kepada:', 400, 205);
  
  ctx.font = 'bold 30px Poppins, sans-serif';
  ctx.fillStyle = '#1A237E';
  ctx.fillText(userName, 400, 260);
  
  ctx.font = '15px Inter, sans-serif';
  ctx.fillStyle = '#5C6880';
  ctx.fillText('Atas kelulusan evaluasi uji kompetensi digital pada materi kursus:', 400, 315);
  
  ctx.font = 'bold 24px Poppins, sans-serif';
  ctx.fillStyle = '#27AE60';
  ctx.fillText(examTitle, 400, 360);
  
  ctx.font = '13.5px Inter, sans-serif';
  ctx.fillStyle = '#5C6880';
  ctx.fillText(`Diterbitkan pada tanggal ${date} dengan kriteria kelulusan KKM terpenuhi.`, 400, 410);
  
  ctx.font = '11px Courier New, monospace';
  ctx.fillStyle = '#795548';
  ctx.fillText(`ID VERIFIKASI QR: ${certId}`, 400, 440);
  
  ctx.font = 'italic 16px cursive';
  ctx.fillStyle = '#2C3E50';
  ctx.fillText(instructor, 200, 505);
  ctx.strokeStyle = '#B0BEC5';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(100, 515); ctx.lineTo(300, 515); ctx.stroke();
  ctx.font = '10px Inter, sans-serif';
  ctx.fillStyle = '#78909C';
  ctx.fillText('Dosen Instruktur Pengampu', 200, 530);
  
  ctx.fillStyle = '#000';
  ctx.fillRect(560, 460, 80, 80);
  
  ctx.fillStyle = '#fff';
  ctx.fillRect(566, 466, 68, 68);
  ctx.fillStyle = '#000';
  ctx.fillRect(572, 472, 22, 22);
  ctx.fillRect(602, 472, 22, 22);
  ctx.fillRect(572, 502, 22, 22);
  
  ctx.fillRect(602, 502, 10, 10);
  ctx.fillRect(614, 514, 10, 10);
  
  return canvas;
}

function triggerCertDownload() {
  const container = document.getElementById('canvasCertContainer');
  const canvas = container.querySelector('canvas');
  if (!canvas) return;
  
  const link = document.createElement('a');
  link.download = `Sertifikat_${currentUser.name.replace(/ /g, '_')}_${latestGradedResult.examTitle.replace(/ /g, '_')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}


// ══════════════════════════════════════════
//  INSTRUKTUR CODE (INSTRUCTOR ACTIONS)
// ══════════════════════════════════════════
function renderInstructorDashboard() {
  const insCoursesCount = allCourses.length; 
  document.getElementById('insTotalCourses').textContent = insCoursesCount;
  
  const mockEarnings = allCourses.reduce((sum, c) => sum + (c.enrolled ? c.price * 12 : 0), 0);
  document.getElementById('insTotalRevenue').textContent = `Rp ${mockEarnings.toLocaleString('id-ID')}`;

  const tbody = document.getElementById('insCourseTableBody');
  tbody.innerHTML = '';
  
  allCourses.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${c.title}</strong></td>
      <td>${c.category}</td>
      <td>📁 ${c.syllabus.length} Bab Materi</td>
      <td>${c.price === 0 ? '<span class="status-pill success">Gratis</span>' : 'Rp ' + c.price.toLocaleString('id-ID')}</td>
      <td>
        <button class="btn-action" onclick="alert('Kelola materi untuk: ${c.title} (FR-07)')">✏️ Edit Materi</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  const select = document.getElementById('insSelectCourse');
  select.innerHTML = '';
  allCourses.forEach(c => {
    if (c.exams) {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.title;
      select.appendChild(opt);
    }
  });
  
  if (allCourses.length > 0) {
    loadQuestionsForInstructor(select.value);
  }
}

function loadQuestionsForInstructor(courseId) {
  const course = allCourses.find(c => c.id === courseId);
  if (!course || !course.exams) {
    document.getElementById('insCourseExamDetailsWrap').style.display = 'none';
    return;
  }
  
  document.getElementById('insCourseExamDetailsWrap').style.display = 'block';
  document.getElementById('insExamKkm').textContent = course.exams.kkm;
  document.getElementById('insExamDuration').textContent = course.exams.duration;
  document.getElementById('insExamQCount').textContent = course.exams.questions.length;
}

function openCreateCourseModal() {
  document.getElementById('createCourseModalBackdrop').classList.add('show');
}
function closeCreateCourseModal() {
  document.getElementById('createCourseModalBackdrop').classList.remove('show');
}

function submitCreateCourse() {
  const title = document.getElementById('newCourseTitle').value.trim();
  const category = document.getElementById('newCourseCat').value;
  const level = document.getElementById('newCourseLevel').value;
  const price = parseInt(document.getElementById('newCoursePrice').value) || 0;
  const initialChaptersCount = parseInt(document.getElementById('newCourseChapters').value) || 1;
  const desc = document.getElementById('newCourseDesc').value.trim();

  if (!title) {
    alert("Judul kursus tidak boleh kosong!");
    return;
  }

  const syllabus = [];
  for (let i = 1; i <= initialChaptersCount; i++) {
    syllabus.push({
      id: `lec-${Date.now()}-${i}`,
      title: `Materi Bab ${i}: Pengenalan Konsep Utama ${title}`,
      duration: "15 menit",
      type: "video"
    });
  }

  const newCourse = {
    id: "course-" + Date.now(),
    title: title,
    category: category,
    instructor: currentUser.name + ", S.Kom",
    level: level,
    rating: 5.0,
    reviewsCount: "0",
    price: price,
    duration: initialChaptersCount * 2,
    materiCount: initialChaptersCount,
    enrolled: false,
    syllabus: syllabus,
    exams: {
      id: "quiz-" + Date.now(),
      title: `${title} — Final Exam`,
      kkm: 75,
      duration: 30,
      questions: [
        { q: "Manakah pernyataan yang paling benar tentang dasar materi ini?", choices: ["Pernyataan A", "Pernyataan B", "Pernyataan C", "Pernyataan D"], ans: 0, exp: "Pembahasan kuis baru." }
      ]
    }
  };

  allCourses.push(newCourse);
  saveDataToStorage();
  syncCourseToSupabase(newCourse);
  closeCreateCourseModal();
  renderInstructorDashboard();
  alert("Sukses: Kursus baru dan set syllabus berhasil diterbitkan di sistem! (FR-07)");
}

function openAddQuestionModal() {
  document.getElementById('addQuestionModalBackdrop').classList.add('show');
}
function closeAddQuestionModal() {
  document.getElementById('addQuestionModalBackdrop').classList.remove('show');
}

function submitAddQuestion() {
  const courseId = document.getElementById('insSelectCourse').value;
  const qText = document.getElementById('newQText').value.trim();
  const qCode = document.getElementById('newQCode').value.trim();
  const optA = document.getElementById('newQOptA').value.trim();
  const optB = document.getElementById('newQOptB').value.trim();
  const optC = document.getElementById('newQOptC').value.trim();
  const optD = document.getElementById('newQOptD').value.trim();
  const correct = parseInt(document.getElementById('newQCorrect').value);

  if (!qText || !optA || !optB || !optC || !optD) {
    alert("Harap lengkapi pertanyaan dan seluruh pilihan jawaban!");
    return;
  }

  const course = allCourses.find(c => c.id === courseId);
  if (course && course.exams) {
    course.exams.questions.push({
      q: qText,
      code: qCode || null,
      choices: [optA, optB, optC, optD],
      ans: correct,
      exp: "Jawaban ditambahkan oleh instruktur pengampu."
    });
    
    saveDataToStorage();
    syncCourseToSupabase(course);
    closeAddQuestionModal();
    loadQuestionsForInstructor(courseId);
    
    document.getElementById('newQText').value = '';
    document.getElementById('newQCode').value = '';
    document.getElementById('newQOptA').value = '';
    document.getElementById('newQOptB').value = '';
    document.getElementById('newQOptC').value = '';
    document.getElementById('newQOptD').value = '';
    
    alert("Soal kuis baru berhasil disimpan ke Bank Soal! (FR-09)");
  }
}


// ══════════════════════════════════════════
//  ADMIN CODE & TRANSACTIONS (FR-14, FR-15)
// ══════════════════════════════════════════
function renderAdminDashboard() {
  let totalEarnings = 0;
  
  document.getElementById('admTotalUsers').textContent = allUsers.length;
  
  // calculate total dynamic earnings from ledger
  allTransactions.forEach(t => {
    if (t.status === "SUCCESS") {
      totalEarnings += t.price;
    }
  });

  document.getElementById('admTotalRevenue').textContent = `Rp ${totalEarnings.toLocaleString('id-ID')}`;
  document.getElementById('admTotalEnrollments').textContent = allTransactions.length;

  renderAdminUserTable();
  renderAdminTransactionLedger();
  renderFinancialChart();
}

function renderAdminTransactionLedger() {
  const tbody = document.getElementById('adminTransactionLedgerBody');
  tbody.innerHTML = '';
  
  if (allTransactions.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--sub);">Belum ada riwayat transaksi keuangan.</td></tr>`;
    return;
  }
  
  allTransactions.forEach(t => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${t.date}</td>
      <td><strong>${t.user}</strong></td>
      <td>${t.course}</td>
      <td>💳 ${t.method}</td>
      <td><strong>Rp ${t.price.toLocaleString('id-ID')}</strong></td>
      <td><span class="status-pill ${t.status === 'SUCCESS' ? 'success' : 'danger'}">${t.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderAdminUserTable() {
  const searchVal = document.getElementById('adminUserSearchInput').value.trim().toLowerCase();
  const tbody = document.getElementById('admUserTableBody');
  tbody.innerHTML = '';
  
  allUsers.forEach(u => {
    const match = u.name.toLowerCase().includes(searchVal) || u.email.toLowerCase().includes(searchVal);
    if (!match) return;
    
    const tr = document.createElement('tr');
    let badgeClass = "success";
    if (u.status === "Pending") badgeClass = "pending";
    else if (u.status === "Nonaktif") badgeClass = "danger";
    
    let actionsHtml = "";
    if (u.status === "Pending") {
      actionsHtml = `<button class="btn-action primary" onclick="verifyUserAdmin('${u.id}')">Verifikasi Akun</button>`;
    } else {
      actionsHtml = `
        <button class="btn-action" onclick="toggleUserStatus('${u.id}')">${u.status === 'Aktif' ? 'Nonaktifkan' : 'Aktifkan'}</button>
        <button class="btn-action" onclick="switchUserRoleAdmin('${u.id}')">Ubah Peran</button>
      `;
    }

    tr.innerHTML = `
      <td><strong>${u.name}</strong></td>
      <td>${u.email}</td>
      <td>${u.role}</td>
      <td><span class="status-pill ${badgeClass}">${u.status}</span></td>
      <td>${actionsHtml}</td>
    `;
    tbody.appendChild(tr);
  });
}

function filterAdminUserTable() {
  renderAdminUserTable();
}

function verifyUserAdmin(userId) {
  const found = allUsers.find(u => u.id === userId);
  if (found) {
    found.status = "Aktif";
    saveDataToStorage();
    syncUserToSupabase(found);
    renderAdminUserTable();
    alert(`Akun ${found.name} telah berhasil diverifikasi oleh Admin!`);
  }
}

function toggleUserStatus(userId) {
  const found = allUsers.find(u => u.id === userId);
  if (found) {
    found.status = found.status === "Aktif" ? "Nonaktif" : "Aktif";
    saveDataToStorage();
    syncUserToSupabase(found);
    renderAdminUserTable();
    alert(`Status akun ${found.name} berhasil diubah.`);
  }
}

function switchUserRoleAdmin(userId) {
  const found = allUsers.find(u => u.id === userId);
  if (found) {
    const newRole = found.role === "Siswa" ? "Instruktur" : "Siswa";
    const conf = confirm(`Ubah hak akses akun ${found.name} menjadi ${newRole}?`);
    if (conf) {
      found.role = newRole;
      saveDataToStorage();
      syncUserToSupabase(found);
      renderAdminUserTable();
      alert(`Hak akses akun ${found.name} berhasil diubah menjadi ${newRole}.`);
    }
  }
}


// ══════════════════════════════════════════
//  INITIALIZATION ON LOAD
// ══════════════════════════════════════════
function goToHome() {
  if (currentUser) {
    if (currentUser.role === "Siswa") showScreenTab(0);
    else if (currentUser.role === "Instruktur") showScreenTab(5);
    else if (currentUser.role === "Admin") showScreenTab(6);
  }
}

window.onload = async function() {
  loadDataFromStorage();
  initTheme();
  await loadDataFromSupabase();
  checkAuthStatus();
};

// ── SUPABASE CLOUD POSTGRES INTEGRATION ──
const SUPABASE_URL = 'https://yenrphiduusuvgpjcegf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllbnJwaGlkdXVzdXZncGpjZWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzODA3ODAsImV4cCI6MjA5Nzk1Njc4MH0.D2ugq1BFwGhrqvWqB0rQu6Lo5Ay0QEeHrdGhVtyZhTo';
const _supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

async function loadDataFromSupabase() {
  if (!_supabase) return;
  
  try {
    // 1. Fetch Users
    const { data: users, error: errU } = await _supabase.from('users').select('*');
    if (errU) throw errU;
    if (users && users.length > 0) {
      allUsers = users.map(u => ({
        id: u.id,
        name: u.name,
        email: u.email,
        password: u.password,
        role: u.role,
        status: u.status,
        twoFactor: u.two_factor,
        enrolledCourses: typeof u.enrolled_courses === 'string' ? JSON.parse(u.enrolled_courses) : u.enrolled_courses,
        completedLectures: typeof u.completed_lectures === 'string' ? JSON.parse(u.completed_lectures) : u.completed_lectures,
        studyHours: u.study_hours,
        certsCount: u.certs_count,
        examAttempts: typeof u.exam_attempts === 'string' ? JSON.parse(u.exam_attempts) : u.exam_attempts,
        examPassed: typeof u.exam_passed === 'string' ? JSON.parse(u.exam_passed) : u.exam_passed,
        examScores: typeof u.exam_scores === 'string' ? JSON.parse(u.exam_scores) : u.exam_scores,
        examHistory: typeof u.exam_history === 'string' ? JSON.parse(u.exam_history) : u.exam_history
      }));
      localStorage.setItem('edulearn_users', JSON.stringify(allUsers));
    }
    
    // 2. Fetch Courses
    const { data: courses, error: errC } = await _supabase.from('courses').select('*');
    if (errC) throw errC;
    if (courses && courses.length > 0) {
      allCourses = courses.map(c => ({
        id: c.id,
        title: c.title,
        category: c.category,
        instructor: c.instructor,
        level: c.level,
        rating: c.rating,
        reviewsCount: c.reviews_count,
        price: c.price,
        duration: c.duration,
        materiCount: c.materi_count,
        enrolled: c.enrolled,
        syllabus: typeof c.syllabus === 'string' ? JSON.parse(c.syllabus) : c.syllabus,
        exams: typeof c.exams === 'string' ? JSON.parse(c.exams) : c.exams
      }));
      localStorage.setItem('edulearn_courses', JSON.stringify(allCourses));
    }
    
    // 3. Fetch Forums
    const { data: forums, error: errF } = await _supabase.from('forums').select('*').order('created_at', { ascending: true });
    if (errF) throw errF;
    if (forums) {
      allForums = {};
      forums.forEach(f => {
        if (!allForums[f.course_id]) {
          allForums[f.course_id] = [];
        }
        allForums[f.course_id].push({
          id: f.id,
          user: f.user_name,
          avatar: f.avatar,
          text: f.text,
          time: f.time_label,
          replies: typeof f.replies === 'string' ? JSON.parse(f.replies) : f.replies
        });
      });
      localStorage.setItem('edulearn_forums', JSON.stringify(allForums));
    }
    
    // 4. Fetch Transactions
    const { data: trans, error: errT } = await _supabase.from('transactions').select('*').order('created_at', { ascending: false });
    if (errT) throw errT;
    if (trans) {
      allTransactions = trans.map(t => ({
        date: t.date,
        user: t.user_name,
        course: t.course,
        method: t.method,
        price: t.price,
        status: t.status
      }));
      localStorage.setItem('edulearn_transactions', JSON.stringify(allTransactions));
    }
    
    // 5. Restore current user session
    const savedSession = localStorage.getItem('edulearn_current_user');
    if (savedSession) {
      const savedUser = JSON.parse(savedSession);
      const latestUser = allUsers.find(u => u.id === savedUser.id);
      if (latestUser) {
        currentUser = latestUser;
        localStorage.setItem('edulearn_current_user', JSON.stringify(currentUser));
      }
    }
    
    showToast("Database Terkoneksi", "Berhasil menyinkronkan data secara real-time dengan PostgreSQL Supabase.", "success");
  } catch (error) {
    console.error("Supabase load error:", error);
    showToast("Supabase Mode Offline", "Gagal menghubungi database cloud, menggunakan data lokal sementara.", "warning");
  }
}

async function syncUserToSupabase(u) {
  if (!_supabase) return;
  try {
    const { error } = await _supabase.from('users').upsert({
      id: u.id,
      name: u.name,
      email: u.email,
      password: u.password,
      role: u.role,
      status: u.status,
      two_factor: u.twoFactor || false,
      enrolled_courses: u.enrolledCourses || [],
      completed_lectures: u.completedLectures || {},
      study_hours: u.studyHours || 0,
      certs_count: u.certsCount || 0,
      exam_attempts: u.examAttempts || {},
      exam_passed: u.examPassed || {},
      exam_scores: u.examScores || {},
      exam_history: u.examHistory || []
    });
    if (error) throw error;
  } catch (err) {
    console.error("Sync user failed:", err);
  }
}

async function syncCourseToSupabase(c) {
  if (!_supabase) return;
  try {
    const { error } = await _supabase.from('courses').upsert({
      id: c.id,
      title: c.title,
      category: c.category,
      instructor: c.instructor,
      level: c.level,
      rating: c.rating || 4.5,
      reviews_count: c.reviewsCount || '0',
      price: c.price || 0,
      duration: c.duration || 0,
      materi_count: c.materiCount || 0,
      enrolled: c.enrolled || false,
      syllabus: c.syllabus || [],
      exams: c.exams || {}
    });
    if (error) throw error;
  } catch (err) {
    console.error("Sync course failed:", err);
  }
}

async function syncForumPostToSupabase(p, courseId) {
  if (!_supabase) return;
  try {
    const { error } = await _supabase.from('forums').upsert({
      id: p.id,
      course_id: courseId,
      user_name: p.user,
      avatar: p.avatar,
      text: p.text,
      time_label: p.time,
      replies: p.replies || []
    });
    if (error) throw error;
  } catch (err) {
    console.error("Sync forum failed:", err);
  }
}

async function syncTransactionToSupabase(t) {
  if (!_supabase) return;
  try {
    const { error } = await _supabase.from('transactions').insert({
      date: t.date,
      user_name: t.user,
      course: t.course,
      method: t.method,
      price: t.price,
      status: t.status
    });
    if (error) throw error;
  } catch (err) {
    console.error("Sync transaction failed:", err);
  }
}

// ── CUSTOM TOAST NOTIFICATION SYSTEM ──
function showToast(title, message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  else if (type === 'error') icon = '❌';
  else if (type === 'warning') icon = '⚠️';
  
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;
  
  container.appendChild(toast);
  
  // Slide out and remove toast after 3.5 seconds
  setTimeout(() => {
    toast.style.animation = 'toastFadeOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3500);
}

// Override default window.alert with elegant toast notification
window.alert = function(message) {
  let title = "Notifikasi";
  let type = "info";
  const msgLower = message.toLowerCase();
  
  if (msgLower.includes("berhasil") || msgLower.includes("sukses")) {
    title = "Sukses";
    type = "success";
  } else if (msgLower.includes("gagal") || msgLower.includes("salah") || msgLower.includes("error") || msgLower.includes("kesalahan") || msgLower.includes("kunci") || msgLower.includes("ditolak")) {
    title = "Perhatian";
    type = "error";
  } else if (msgLower.includes("harap") || msgLower.includes("minimal") || msgLower.includes("kosong")) {
    title = "Validasi Form";
    type = "warning";
  }
  
  showToast(title, message, type);
};

// ── DARK/LIGHT MODE THEME SYSTEM ──
function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  const toggleBtn = document.getElementById('themeToggleBtn');
  
  if (newTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (toggleBtn) toggleBtn.textContent = '☀️';
    localStorage.setItem('edulearn_theme', 'dark');
    showToast('Tema Gelap', 'Berhasil mengubah tampilan ke mode malam.', 'success');
  } else {
    document.body.classList.remove('dark-theme');
    if (toggleBtn) toggleBtn.textContent = '🌙';
    localStorage.setItem('edulearn_theme', 'light');
    showToast('Tema Terang', 'Berhasil mengubah tampilan ke mode siang.', 'success');
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('edulearn_theme') || 'light';
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (toggleBtn) toggleBtn.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-theme');
    if (toggleBtn) toggleBtn.textContent = '🌙';
  }
}

// ── CANVAS CONFETTI GRADUATION CELEBRATION ──
let confettiActive = false;
let confettiParticles = [];
const confettiColors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];

function startConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  
  canvas.style.display = 'block';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  confettiActive = true;
  confettiParticles = [];
  
  // Create particles
  for (let i = 0; i < 150; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * canvas.height,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0
    });
  }
  
  requestAnimationFrame(drawConfettiFrame);
  
  // Stop spawning after 5 seconds
  setTimeout(() => {
    confettiActive = false;
    setTimeout(() => {
      canvas.style.display = 'none';
    }, 1000);
  }, 5000);
}

function drawConfettiFrame() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas || !confettiActive) return;
  
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  confettiParticles.forEach((p, idx) => {
    p.tiltAngle += p.tiltAngleIncremental;
    p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
    p.x += Math.sin(p.tiltAngle);
    p.tilt = Math.sin(p.tiltAngle - idx/3) * 15;
    
    ctx.beginPath();
    ctx.lineWidth = p.r;
    ctx.strokeStyle = p.color;
    ctx.moveTo(p.x + p.tilt + p.r/2, p.y);
    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r/2);
    ctx.stroke();
    
    // Reset off-screen particles
    if (p.y > canvas.height) {
      confettiParticles[idx] = {
        x: Math.random() * canvas.width,
        y: -20,
        r: p.r,
        d: p.d,
        color: p.color,
        tilt: p.tilt,
        tiltAngleIncremental: p.tiltAngleIncremental,
        tiltAngle: p.tiltAngle
      };
    }
  });
  
  if (confettiActive) {
    requestAnimationFrame(drawConfettiFrame);
  }
}

// ── SKELETON SHIMMER LOADER TRIGGER ──
function triggerCatalogShimmer(callback) {
  isCatalogLoading = true;
  renderCatalog();
  if (catalogFilterTimeout) clearTimeout(catalogFilterTimeout);
  catalogFilterTimeout = setTimeout(() => {
    isCatalogLoading = false;
    if (callback) callback();
    renderCatalog();
  }, 400);
}

// ── DYNAMIC WEEKLY REVENUE CHART POPULATOR ──
function renderFinancialChart() {
  const chartWrap = document.getElementById('adminRevenueChartWrap');
  if (!chartWrap) return;
  
  const days = [
    { label: 'Sen', val: 0 },
    { label: 'Sel', val: 0 },
    { label: 'Rab', val: 0 },
    { label: 'Kam', val: 0 },
    { label: 'Jum', val: 0 },
    { label: 'Sab', val: 0 },
    { label: 'Min', val: 0 }
  ];
  
  // Set default mockup baseline
  days[0].val = 1200000;
  days[1].val = 1800000;
  days[2].val = 1050000;
  days[3].val = 2700000;
  days[4].val = 3600000;
  days[5].val = 2400000;
  days[6].val = 4200000;
  
  // Overlay real purchase amounts
  allTransactions.forEach(t => {
    if (t.status === 'SUCCESS' && t.price > 0) {
      if (t.date) {
        const parts = t.date.split('/');
        if (parts.length === 3) {
          const dateObj = new Date(parts[2], parts[1] - 1, parts[0]);
          let dayIdx = dateObj.getDay(); 
          let mappedIdx = dayIdx === 0 ? 6 : dayIdx - 1; // map 0 (Sunday) to index 6
          if (mappedIdx >= 0 && mappedIdx < 7) {
            days[mappedIdx].val += t.price;
          }
        }
      }
    }
  });
  
  const maxVal = Math.max(...days.map(d => d.val)) || 1;
  chartWrap.innerHTML = '';
  
  days.forEach(d => {
    const pct = (d.val / maxVal) * 130; // max height 130px
    const formattedVal = d.val >= 1000000 ? (d.val / 1000000).toFixed(1) + 'M' : (d.val / 1000).toFixed(0) + 'k';
    
    const container = document.createElement('div');
    container.className = 'chart-bar-container';
    container.innerHTML = `
      <div class="chart-bar" style="height: 0px;" data-val="${formattedVal}"></div>
      <div class="chart-label">${d.label}</div>
    `;
    chartWrap.appendChild(container);
    
    setTimeout(() => {
      const bar = container.querySelector('.chart-bar');
      if (bar) bar.style.height = `${pct}px`;
    }, 50);
  });
}
