// ========================================
// Internationalization (i18n)
// ========================================
const translations = {
    sr: {
        // Login
        loginTitle: 'Gradska Uprava',
        loginSubtitle: 'Sistem za Upravljanje Javnim Prijavama',
        email: 'Email',
        password: 'Lozinka',
        rememberMe: 'Zapamti me',
        forgotPassword: 'Zaboravili ste lozinku?',
        login: 'Prijavi se',
        demoInfo: 'Demo pristup - kliknite "Prijavi se" sa bilo kojim podacima',
        
        // Navigation
        dashboard: 'Dashboard',
        reports: 'Prijave',
        newReport: 'Nova Prijava',
        analytics: 'Analitika',
        services: 'Službe',
        activity: 'Aktivnosti',
        
        // Header
        notifications: 'Obavještenja',
        profile: 'Profil',
        settings: 'Postavke',
        logout: 'Odjavi se',
        
        // Dashboard
        dashboardTitle: 'Pregled Sistema',
        export: 'Export',
        totalReports: 'Ukupno Prijava',
        allTime: 'Sve vrijeme',
        openReports: 'Otvorene Prijave',
        fromLastWeek: 'od prošle sedmice',
        inProgress: 'U Obradi',
        activeWork: 'Aktivne',
        resolved: 'Riješeno',
        thisMonth: 'ovaj mjesec',
        reportsByCategory: 'Prijave po Kategorijama',
        reportsByStatus: 'Prijave po Statusu',
        recentActivity: 'Nedavne Aktivnosti',
        viewAll: 'Pogledaj sve',
        
        // Reports
        reportsTitle: 'Lista Prijava',
        searchReports: 'Pretraži prijave...',
        reset: 'Reset',
        id: 'ID',
        title: 'Naslov',
        category: 'Kategorija',
        location: 'Lokacija',
        date: 'Datum',
        priority: 'Prioritet',
        status: 'Status',
        service: 'Služba',
        showing: 'Prikazano',
        of: 'od',
        
        // New Report
        newReportTitle: 'Kreiranje Nove Prijave',
        reportTitle: 'Naslov Prijave',
        description: 'Opis Problema',
        uploadImage: 'Dodaj Sliku',
        chooseFile: 'Izaberi sliku',
        cancel: 'Otkaži',
        submit: 'Pošalji Prijavu',
        
        // Analytics
        analyticsTitle: 'Analitika i Izvještaji',
        avgResponseTime: 'Prosječno Vrijeme Odgovora',
        resolutionRate: 'Procenat Riješenih',
        avgResolutionTime: 'Prosječno Vrijeme Rješavanja',
        satisfaction: 'Zadovoljstvo Građana',
        monthlyTrend: 'Trend Prijava po Mjesecima',
        topLocations: 'Najčešće Lokacije',
        categoryDistribution: 'Distribucija po Kategorijama',
        
        // Services
        servicesTitle: 'Pregled Službi',
        
        // Activity
        activityTitle: 'Log Aktivnosti',
        
        // Report Details
        reportDetails: 'Detalji Prijave',
        
        // Categories
        roadInfrastructure: 'Putna infrastruktura',
        publicLighting: 'Javna rasvjeta',
        waterSewage: 'Vodovod i kanalizacija',
        electricalGrid: 'Elektro mreža',
        wasteManagement: 'Komunalni otpad',
        publicSpaces: 'Javne površine',
        trafficSignalization: 'Saobraćajna signalizacija',
        other: 'Ostalo',
        
        // Services names
        communal: 'Komunalna',
        electrical: 'Elektrodistribucija',
        water: 'Vodovod',
        roads: 'Putevi',
        lighting: 'Rasvjeta',
        inspection: 'Inspekcija'
    },
    en: {
        // Login
        loginTitle: 'City Administration',
        loginSubtitle: 'Public Incident Reporting System',
        email: 'Email',
        password: 'Password',
        rememberMe: 'Remember me',
        forgotPassword: 'Forgot password?',
        login: 'Sign In',
        demoInfo: 'Demo access - click "Sign In" with any credentials',
        
        // Navigation
        dashboard: 'Dashboard',
        reports: 'Reports',
        newReport: 'New Report',
        analytics: 'Analytics',
        services: 'Services',
        activity: 'Activity',
        
        // Header
        notifications: 'Notifications',
        profile: 'Profile',
        settings: 'Settings',
        logout: 'Logout',
        
        // Dashboard
        dashboardTitle: 'System Overview',
        export: 'Export',
        totalReports: 'Total Reports',
        allTime: 'All time',
        openReports: 'Open Reports',
        fromLastWeek: 'from last week',
        inProgress: 'In Progress',
        activeWork: 'Active',
        resolved: 'Resolved',
        thisMonth: 'this month',
        reportsByCategory: 'Reports by Category',
        reportsByStatus: 'Reports by Status',
        recentActivity: 'Recent Activity',
        viewAll: 'View all',
        
        // Reports
        reportsTitle: 'Reports List',
        searchReports: 'Search reports...',
        reset: 'Reset',
        id: 'ID',
        title: 'Title',
        category: 'Category',
        location: 'Location',
        date: 'Date',
        priority: 'Priority',
        status: 'Status',
        service: 'Service',
        showing: 'Showing',
        of: 'of',
        
        // New Report
        newReportTitle: 'Create New Report',
        reportTitle: 'Report Title',
        description: 'Problem Description',
        uploadImage: 'Upload Image',
        chooseFile: 'Choose image',
        cancel: 'Cancel',
        submit: 'Submit Report',
        
        // Analytics
        analyticsTitle: 'Analytics & Reports',
        avgResponseTime: 'Average Response Time',
        resolutionRate: 'Resolution Rate',
        avgResolutionTime: 'Average Resolution Time',
        satisfaction: 'Citizen Satisfaction',
        monthlyTrend: 'Monthly Trend',
        topLocations: 'Top Locations',
        categoryDistribution: 'Category Distribution',
        
        // Services
        servicesTitle: 'Services Overview',
        
        // Activity
        activityTitle: 'Activity Log',
        
        // Report Details
        reportDetails: 'Report Details',
        
        // Categories
        roadInfrastructure: 'Road Infrastructure',
        publicLighting: 'Public Lighting',
        waterSewage: 'Water & Sewage',
        electricalGrid: 'Electrical Grid',
        wasteManagement: 'Waste Management',
        publicSpaces: 'Public Spaces',
        trafficSignalization: 'Traffic Signalization',
        other: 'Other',
        
        // Services names
        communal: 'Communal',
        electrical: 'Electrical',
        water: 'Water',
        roads: 'Roads',
        lighting: 'Lighting',
        inspection: 'Inspection'
    }
};

// ========================================
// Mock Data
// ========================================
const categories = [
    { id: 'road-infrastructure', name: 'roadInfrastructure' },
    { id: 'public-lighting', name: 'publicLighting' },
    { id: 'water-sewage', name: 'waterSewage' },
    { id: 'electrical-grid', name: 'electricalGrid' },
    { id: 'waste-management', name: 'wasteManagement' },
    { id: 'public-spaces', name: 'publicSpaces' },
    { id: 'traffic-signalization', name: 'trafficSignalization' },
    { id: 'other', name: 'other' }
];

const services = [
    { 
        id: 'communal', 
        name: 'communal',
        icon: '🏛️',
        color: '#3b82f6',
        active: 42,
        completed: 156,
        workload: 65
    },
    { 
        id: 'electrical', 
        name: 'electrical',
        icon: '⚡',
        color: '#f59e0b',
        active: 28,
        completed: 134,
        workload: 45
    },
    { 
        id: 'water', 
        name: 'water',
        icon: '💧',
        color: '#06b6d4',
        active: 35,
        completed: 98,
        workload: 58
    },
    { 
        id: 'roads', 
        name: 'roads',
        icon: '🛣️',
        color: '#64748b',
        active: 51,
        completed: 187,
        workload: 78
    },
    { 
        id: 'lighting', 
        name: 'lighting',
        icon: '💡',
        color: '#eab308',
        active: 19,
        completed: 142,
        workload: 32
    },
    { 
        id: 'inspection', 
        name: 'inspection',
        icon: '🔍',
        color: '#8b5cf6',
        active: 23,
        completed: 89,
        workload: 41
    }
];

let mockReports = [
    {
        id: 1050,
        title: 'Oštećenje asfalta na Ulici Srpskih vladara',
        description: 'Velika rupa na kolovozu koja predstavlja opasnost za vozila i pješake. Dimenzije približno 2x1.5m.',
        category: 'road-infrastructure',
        location: 'Ulica Srpskih vladara 45',
        date: '2025-03-28',
        priority: 'high',
        status: 'open',
        service: 'roads',
        reporter: 'Marko Petrović',
        timeline: [
            { status: 'open', date: '2025-03-28 14:32', description: 'Prijava kreirana' }
        ]
    },
    {
        id: 1049,
        title: 'Neispravna rasvjeta u parku Mladen Stojanović',
        description: 'Četiri stubna svjetla ne rade već dvije sedmice. Park je noću potpuno taman.',
        category: 'public-lighting',
        location: 'Park Mladen Stojanović',
        date: '2025-03-28',
        priority: 'critical',
        status: 'in-review',
        service: 'lighting',
        reporter: 'Ana Nikolić',
        timeline: [
            { status: 'open', date: '2025-03-28 09:15', description: 'Prijava kreirana' },
            { status: 'in-review', date: '2025-03-28 11:20', description: 'Dodijeljena službi Rasvjeta' }
        ]
    },
    {
        id: 1048,
        title: 'Curenje vode na Bulevaru Petra Kočića',
        description: 'Velika količina vode curi iz podzemne cijevi. Vidljiva mokra površina na trotoaru.',
        category: 'water-sewage',
        location: 'Bulevar Petra Kočića 128',
        date: '2025-03-27',
        priority: 'high',
        status: 'in-progress',
        service: 'water',
        reporter: 'Nikola Jovanović',
        timeline: [
            { status: 'open', date: '2025-03-27 16:45', description: 'Prijava kreirana' },
            { status: 'in-review', date: '2025-03-27 17:10', description: 'Dodijeljena službi Vodovod' },
            { status: 'in-progress', date: '2025-03-28 08:00', description: 'Teren poslao ekipu' }
        ]
    },
    {
        id: 1047,
        title: 'Prekid struje - Novi Grad',
        description: 'Cijela ulica bez struje više od 3 sata. Nema zvaničnog obavještenja o planiranom radovima.',
        category: 'electrical-grid',
        location: 'Novi Grad, Ul. Jovana Dučića',
        date: '2025-03-27',
        priority: 'critical',
        status: 'resolved',
        service: 'electrical',
        reporter: 'Jelena Stanić',
        timeline: [
            { status: 'open', date: '2025-03-27 10:20', description: 'Prijava kreirana' },
            { status: 'in-review', date: '2025-03-27 10:25', description: 'Dodijeljena službi Elektro' },
            { status: 'in-progress', date: '2025-03-27 10:40', description: 'Teren poslao ekipu' },
            { status: 'resolved', date: '2025-03-27 14:15', description: 'Kvar otklonjen' }
        ]
    },
    {
        id: 1046,
        title: 'Prepune kante za smeće - centar grada',
        description: 'Sve kante oko Trga Krajine prepune već tri dana. Smeće se prosipa oko kontejnera.',
        category: 'waste-management',
        location: 'Trg Krajine',
        date: '2025-03-26',
        priority: 'medium',
        status: 'in-progress',
        service: 'communal',
        reporter: 'Dragan Savić',
        timeline: [
            { status: 'open', date: '2025-03-26 18:30', description: 'Prijava kreirana' },
            { status: 'in-review', date: '2025-03-27 07:15', description: 'Dodijeljena službi Komunalna' },
            { status: 'in-progress', date: '2025-03-27 09:00', description: 'Teren zakazao odvoz' }
        ]
    },
    {
        id: 1045,
        title: 'Oštećena klupa u Centru Banja Luka',
        description: 'Klupa pored fontane je polomljena i predstavlja opasnost.',
        category: 'public-spaces',
        location: 'Centar Banja Luka, pored fontane',
        date: '2025-03-26',
        priority: 'low',
        status: 'resolved',
        service: 'communal',
        reporter: 'Milica Todorović',
        timeline: [
            { status: 'open', date: '2025-03-26 12:00', description: 'Prijava kreirana' },
            { status: 'in-review', date: '2025-03-26 13:45', description: 'Dodijeljena službi Komunalna' },
            { status: 'in-progress', date: '2025-03-27 08:00', description: 'Započeta intervencija' },
            { status: 'resolved', date: '2025-03-27 15:30', description: 'Klupa zamijenjena' }
        ]
    },
    {
        id: 1044,
        title: 'Neispravni semafor na Trgu oslobođenja',
        description: 'Semafor neprekidno pokazuje crveno svjetlo u svim smjerovima već 2 sata.',
        category: 'traffic-signalization',
        location: 'Trg oslobođenja',
        date: '2025-03-25',
        priority: 'critical',
        status: 'resolved',
        service: 'roads',
        reporter: 'Stefan Popović',
        timeline: [
            { status: 'open', date: '2025-03-25 14:20', description: 'Prijava kreirana' },
            { status: 'in-review', date: '2025-03-25 14:25', description: 'Dodijeljena službi Putevi' },
            { status: 'in-progress', date: '2025-03-25 14:40', description: 'Hitna intervencija' },
            { status: 'resolved', date: '2025-03-25 16:10', description: 'Semafor popravljen' }
        ]
    },
    {
        id: 1043,
        title: 'Illegalno odlaganje građevinskog otpada',
        description: 'Velika količina građevinskog materijala odložena pored kontejnera za smeće.',
        category: 'waste-management',
        location: 'Ul. Mladena Stojanovića 78',
        date: '2025-03-25',
        priority: 'medium',
        status: 'in-progress',
        service: 'inspection',
        reporter: 'Anonimno',
        timeline: [
            { status: 'open', date: '2025-03-25 11:00', description: 'Prijava kreirana' },
            { status: 'in-review', date: '2025-03-25 13:30', description: 'Dodijeljena službi Inspekcija' },
            { status: 'in-progress', date: '2025-03-26 09:00', description: 'Inspektor na terenu' }
        ]
    },
    {
        id: 1042,
        title: 'Zapušena kanalizacija - poplava podruma',
        description: 'Kanalizacija je zapušena što je dovelo do poplave u podrumskim prostorijama nekoliko zgrada.',
        category: 'water-sewage',
        location: 'Ul. Vuka Karadžića 22-28',
        date: '2025-03-24',
        priority: 'critical',
        status: 'resolved',
        service: 'water',
        reporter: 'Upravnik zgrade',
        timeline: [
            { status: 'open', date: '2025-03-24 07:30', description: 'Prijava kreirana' },
            { status: 'in-review', date: '2025-03-24 07:45', description: 'Dodijeljena službi Vodovod' },
            { status: 'in-progress', date: '2025-03-24 08:15', description: 'Hitna intervencija' },
            { status: 'resolved', date: '2025-03-24 16:00', description: 'Kanalizacija prочišćena' }
        ]
    },
    {
        id: 1041,
        title: 'Oštećen put nakon zimskog održavanja',
        description: 'Brojne rupe i oštećenja asfalta nastala tokom zimskog perioda.',
        category: 'road-infrastructure',
        location: 'Put prema Staroj Gradišci',
        date: '2025-03-23',
        priority: 'medium',
        status: 'open',
        service: 'roads',
        reporter: 'Aleksandar Milić',
        timeline: [
            { status: 'open', date: '2025-03-23 15:20', description: 'Prijava kreirana' }
        ]
    },
    {
        id: 1040,
        title: 'Pukla cijev - fontana na ulici',
        description: 'Pukla vodovna cijev stvara fontanu visoku nekoliko metara na glavnoj saobraćajnici.',
        category: 'water-sewage',
        location: 'Ul. Kralja Petra I Karađorđevića',
        date: '2025-03-22',
        priority: 'critical',
        status: 'resolved',
        service: 'water',
        reporter: 'Ivan Došen',
        timeline: [
            { status: 'open', date: '2025-03-22 13:05', description: 'Prijava kreirana' },
            { status: 'in-review', date: '2025-03-22 13:10', description: 'Dodijeljena službi Vodovod' },
            { status: 'in-progress', date: '2025-03-22 13:25', description: 'Hitna intervencija' },
            { status: 'resolved', date: '2025-03-22 18:45', description: 'Cijev zamijenjena' }
        ]
    },
    {
        id: 1039,
        title: 'Nestanak struje - Starčevica',
        description: 'Dio naselja bez električne energije. Pogođeno oko 150 domaćinstava.',
        category: 'electrical-grid',
        location: 'Starčevica, blok A',
        date: '2025-03-21',
        priority: 'high',
        status: 'resolved',
        service: 'electrical',
        reporter: 'Dragana Panić',
        timeline: [
            { status: 'open', date: '2025-03-21 19:20', description: 'Prijava kreirana' },
            { status: 'in-review', date: '2025-03-21 19:25', description: 'Dodijeljena službi Elektro' },
            { status: 'in-progress', date: '2025-03-21 19:50', description: 'Lokalizovan kvar' },
            { status: 'resolved', date: '2025-03-21 22:15', description: 'Struja obnovljena' }
        ]
    },
    {
        id: 1038,
        title: 'Uništena dječija igrališta',
        description: 'Vandali oštetili ljuljašku i tobogan. Potrebna zamjena.',
        category: 'public-spaces',
        location: 'Park kod OŠ "Branko Radičević"',
        date: '2025-03-20',
        priority: 'medium',
        status: 'in-progress',
        service: 'communal',
        reporter: 'Mirjana Savić',
        timeline: [
            { status: 'open', date: '2025-03-20 08:00', description: 'Prijava kreirana' },
            { status: 'in-review', date: '2025-03-20 10:30', description: 'Dodijeljena službi Komunalna' },
            { status: 'in-progress', date: '2025-03-21 09:00', description: 'Procjena štete u toku' }
        ]
    }
];

// Activity log data
const activityLog = [
    { 
        type: 'assignment',
        reportId: 1049,
        title: 'Prijava #1049 dodijeljena službi Rasvjeta',
        description: 'Neispravna rasvjeta u parku Mladen Stojanović',
        time: 'prije 2h',
        icon: '📋'
    },
    {
        type: 'status',
        reportId: 1048,
        title: 'Status promijenjen: Open → In Progress',
        description: 'Prijava #1048 - Curenje vode na Bulevaru Petra Kočića',
        time: 'prije 4h',
        icon: '🔄'
    },
    {
        type: 'resolved',
        reportId: 1047,
        title: 'Prijava #1047 označena kao Resolved',
        description: 'Prekid struje - Novi Grad',
        time: 'prije 6h',
        icon: '✅'
    },
    {
        type: 'new',
        reportId: 1050,
        title: 'Nova prijava kreirana',
        description: 'Oštećenje asfalta na Ulici Srpskih vladara',
        time: 'prije 8h',
        icon: '➕'
    },
    {
        type: 'assignment',
        reportId: 1046,
        title: 'Prijava #1046 dodijeljena službi Komunalna',
        description: 'Prepune kante za smeće - centar grada',
        time: 'prije 1d',
        icon: '📋'
    },
    {
        type: 'resolved',
        reportId: 1045,
        title: 'Prijava #1045 označena kao Resolved',
        description: 'Oštećena klupa u Centru Banja Luka',
        time: 'prije 1d',
        icon: '✅'
    },
    {
        type: 'status',
        reportId: 1043,
        title: 'Status promijenjen: In Review → In Progress',
        description: 'Prijava #1043 - Illegalno odlaganje građevinskog otpada',
        time: 'prije 2d',
        icon: '🔄'
    },
    {
        type: 'resolved',
        reportId: 1044,
        title: 'Prijava #1044 označena kao Resolved',
        description: 'Neispravni semafor na Trgu oslobođenja',
        time: 'prije 3d',
        icon: '✅'
    }
];

// Monthly trend data
const monthlyData = [
    { month: 'Septembar', reports: 85 },
    { month: 'Oktobar', reports: 92 },
    { month: 'Novembar', reports: 78 },
    { month: 'Decembar', reports: 65 },
    { month: 'Januar', reports: 88 },
    { month: 'Februar', reports: 95 },
    { month: 'Mart', reports: 112 }
];

const monthlyDataEN = [
    { month: 'September', reports: 85 },
    { month: 'October', reports: 92 },
    { month: 'November', reports: 78 },
    { month: 'December', reports: 65 },
    { month: 'January', reports: 88 },
    { month: 'February', reports: 95 },
    { month: 'March', reports: 112 }
];

// ========================================
// State Management
// ========================================
let currentLang = 'sr';
let currentTheme = 'light';
let currentPage = 'dashboard';
let currentFilters = {
    search: '',
    status: '',
    category: '',
    priority: ''
};
let currentPage_pagination = 1;
const itemsPerPage = 10;

// ========================================
// Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadTheme();
    setupEventListeners();
});

function initializeApp() {
    // Check if user is logged in (demo mode)
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'true') {
        showMainApp();
    } else {
        showLoginScreen();
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'sr';
    
    currentTheme = savedTheme;
    currentLang = savedLang;
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    updateTranslations();
}

// ========================================
// Event Listeners
// ========================================
function setupEventListeners() {
    // Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Menu toggle (mobile)
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
    
    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.getAttribute('data-page');
            navigateToPage(page);
        });
    });
    
    // Notifications dropdown
    const notificationsBtn = document.getElementById('notificationsBtn');
    const notificationsDropdown = document.getElementById('notificationsDropdown');
    if (notificationsBtn && notificationsDropdown) {
        notificationsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notificationsDropdown.classList.toggle('active');
        });
    }
    
    // User dropdown
    const userMenuBtn = document.getElementById('userMenuBtn');
    const userDropdown = document.getElementById('userDropdown');
    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('active');
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        if (notificationsDropdown) notificationsDropdown.classList.remove('active');
        if (userDropdown) userDropdown.classList.remove('active');
    });
    
    // Filters
    const searchInput = document.getElementById('searchInput');
    const statusFilter = document.getElementById('statusFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const priorityFilter = document.getElementById('priorityFilter');
    const resetFilters = document.getElementById('resetFilters');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilters.search = e.target.value;
            filterReports();
        });
    }
    
    if (statusFilter) {
        statusFilter.addEventListener('change', (e) => {
            currentFilters.status = e.target.value;
            filterReports();
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            currentFilters.category = e.target.value;
            filterReports();
        });
    }
    
    if (priorityFilter) {
        priorityFilter.addEventListener('change', (e) => {
            currentFilters.priority = e.target.value;
            filterReports();
        });
    }
    
    if (resetFilters) {
        resetFilters.addEventListener('click', () => {
            currentFilters = { search: '', status: '', category: '', priority: '' };
            if (searchInput) searchInput.value = '';
            if (statusFilter) statusFilter.value = '';
            if (categoryFilter) categoryFilter.value = '';
            if (priorityFilter) priorityFilter.value = '';
            filterReports();
        });
    }
    
    // New Report Form
    const newReportForm = document.getElementById('newReportForm');
    if (newReportForm) {
        newReportForm.addEventListener('submit', handleNewReportSubmit);
    }
    
    const newReportBtn = document.getElementById('newReportBtn');
    if (newReportBtn) {
        newReportBtn.addEventListener('click', () => {
            navigateToPage('new-report');
        });
    }
    
    const cancelNewReport = document.getElementById('cancelNewReport');
    if (cancelNewReport) {
        cancelNewReport.addEventListener('click', () => {
            navigateToPage('reports');
        });
    }
    
    // Image upload preview
    const reportImage = document.getElementById('reportImage');
    if (reportImage) {
        reportImage.addEventListener('change', handleImageUpload);
    }
    
    // Modal close
    const closeModal = document.getElementById('closeModal');
    const reportModal = document.getElementById('reportModal');
    if (closeModal && reportModal) {
        closeModal.addEventListener('click', () => {
            reportModal.classList.remove('active');
        });
        
        reportModal.addEventListener('click', (e) => {
            if (e.target === reportModal) {
                reportModal.classList.remove('active');
            }
        });
    }
    
    // Export button (mock)
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            showToast('Export funkcionalnost je u pripremi', 'success');
        });
    }
}

// ========================================
// Authentication
// ========================================
function handleLogin(e) {
    e.preventDefault();
    
    // Demo login - accept any credentials
    localStorage.setItem('isLoggedIn', 'true');
    showMainApp();
    showToast(currentLang === 'sr' ? 'Uspješna prijava!' : 'Login successful!', 'success');
}

function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    location.reload();
}

function showLoginScreen() {
    document.getElementById('loginScreen').classList.add('active');
    document.getElementById('mainApp').classList.remove('active');
}

function showMainApp() {
    document.getElementById('loginScreen').classList.remove('active');
    document.getElementById('mainApp').classList.add('active');
    
    // Initialize dashboard
    navigateToPage('dashboard');
}

// ========================================
// Navigation
// ========================================
function navigateToPage(page) {
    currentPage = page;
    
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === page) {
            item.classList.add('active');
        }
    });
    
    // Update pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    
    const pageElement = document.getElementById(`${page}Page`);
    if (pageElement) {
        pageElement.classList.add('active');
    }
    
    // Load page content
    switch (page) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'reports':
            loadReports();
            break;
        case 'new-report':
            loadNewReportForm();
            break;
        case 'analytics':
            loadAnalytics();
            break;
        case 'services':
            loadServices();
            break;
        case 'activity':
            loadActivityLog();
            break;
    }
    
    // Close sidebar on mobile
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.remove('active');
    }
}

// ========================================
// Theme & Language
// ========================================
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    
    localStorage.setItem('theme', currentTheme);
}

function toggleLanguage() {
    currentLang = currentLang === 'sr' ? 'en' : 'sr';
    localStorage.setItem('language', currentLang);
    updateTranslations();
    
    // Reload current page to update content
    navigateToPage(currentPage);
}

function updateTranslations() {
    const t = translations[currentLang];
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });
}

function t(key) {
    return translations[currentLang][key] || key;
}

// ========================================
// Dashboard
// ========================================
function loadDashboard() {
    animateStatsCards();
    renderCategoryChart();
    renderStatusChart();
    renderDashboardActivity();
}

function animateStatsCards() {
    const totalReports = mockReports.length;
    const openReports = mockReports.filter(r => r.status === 'open').length;
    const inProgressReports = mockReports.filter(r => r.status === 'in-progress').length;
    const resolvedReports = mockReports.filter(r => r.status === 'resolved').length;
    
    animateCounter('totalReports', 0, totalReports, 1500);
    animateCounter('openReports', 0, openReports, 1500);
    animateCounter('inProgressReports', 0, inProgressReports, 1500);
    animateCounter('resolvedReports', 0, resolvedReports, 1500);
}

function animateCounter(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

function renderCategoryChart() {
    const categoryChart = document.getElementById('categoryChart');
    if (!categoryChart) return;
    
    const categoryCounts = {};
    categories.forEach(cat => {
        categoryCounts[cat.id] = mockReports.filter(r => r.category === cat.id).length;
    });
    
    const total = Object.values(categoryCounts).reduce((a, b) => a + b, 0);
    
    let html = '<div style="display: flex; flex-direction: column; gap: 1rem;">';
    
    categories.forEach(cat => {
        const count = categoryCounts[cat.id];
        const percentage = total > 0 ? (count / total * 100).toFixed(1) : 0;
        
        html += `
            <div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="font-size: 0.875rem; font-weight: 500;">${t(cat.name)}</span>
                    <span style="font-size: 0.875rem; font-weight: 600; color: var(--primary-500);">${count}</span>
                </div>
                <div class="category-bar">
                    <div class="category-bar-fill" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    categoryChart.innerHTML = html;
}

function renderStatusChart() {
    const statusChart = document.getElementById('statusChart');
    if (!statusChart) return;
    
    const statuses = {
        'open': mockReports.filter(r => r.status === 'open').length,
        'in-review': mockReports.filter(r => r.status === 'in-review').length,
        'in-progress': mockReports.filter(r => r.status === 'in-progress').length,
        'resolved': mockReports.filter(r => r.status === 'resolved').length,
        'closed': mockReports.filter(r => r.status === 'closed').length
    };
    
    const total = Object.values(statuses).reduce((a, b) => a + b, 0);
    
    let html = '<div style="display: flex; flex-direction: column; gap: 1rem;">';
    
    Object.entries(statuses).forEach(([status, count]) => {
        const percentage = total > 0 ? (count / total * 100).toFixed(1) : 0;
        
        html += `
            <div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="font-size: 0.875rem; font-weight: 500; text-transform: capitalize;">${status.replace('-', ' ')}</span>
                    <span style="font-size: 0.875rem; font-weight: 600; color: var(--primary-500);">${count}</span>
                </div>
                <div class="category-bar">
                    <div class="category-bar-fill" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    statusChart.innerHTML = html;
}

function renderDashboardActivity() {
    const container = document.getElementById('dashboardActivityList');
    if (!container) return;
    
    const recentActivity = activityLog.slice(0, 5);
    
    let html = '';
    recentActivity.forEach(activity => {
        html += `
            <div class="activity-item">
                <div class="activity-icon" style="background: rgba(59, 130, 246, 0.1); color: var(--primary-500);">
                    ${activity.icon}
                </div>
                <div class="activity-content">
                    <p class="activity-title">${activity.title}</p>
                    <p class="activity-description">${activity.description}</p>
                    <span class="activity-time">${activity.time}</span>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ========================================
// Reports
// ========================================
function loadReports() {
    populateCategoryFilter();
    filterReports();
}

function populateCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (!categoryFilter) return;
    
    let html = `<option value="">${currentLang === 'sr' ? 'Sve kategorije' : 'All categories'}</option>`;
    categories.forEach(cat => {
        html += `<option value="${cat.id}">${t(cat.name)}</option>`;
    });
    
    categoryFilter.innerHTML = html;
}

function filterReports() {
    let filtered = [...mockReports];
    
    // Apply search filter
    if (currentFilters.search) {
        const searchLower = currentFilters.search.toLowerCase();
        filtered = filtered.filter(r => 
            r.title.toLowerCase().includes(searchLower) ||
            r.description.toLowerCase().includes(searchLower) ||
            r.location.toLowerCase().includes(searchLower) ||
            r.id.toString().includes(searchLower)
        );
    }
    
    // Apply status filter
    if (currentFilters.status) {
        filtered = filtered.filter(r => r.status === currentFilters.status);
    }
    
    // Apply category filter
    if (currentFilters.category) {
        filtered = filtered.filter(r => r.category === currentFilters.category);
    }
    
    // Apply priority filter
    if (currentFilters.priority) {
        filtered = filtered.filter(r => r.priority === currentFilters.priority);
    }
    
    renderReportsTable(filtered);
}

function renderReportsTable(reports) {
    const tbody = document.getElementById('reportsTableBody');
    if (!tbody) return;
    
    // Pagination
    const totalItems = reports.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage_pagination - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const paginatedReports = reports.slice(startIndex, endIndex);
    
    let html = '';
    
    if (paginatedReports.length === 0) {
        html = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 3rem;">
                    <div class="empty-state">
                        <div class="empty-state-title">${currentLang === 'sr' ? 'Nema rezultata' : 'No results'}</div>
                        <div class="empty-state-description">${currentLang === 'sr' ? 'Pokušajte promijeniti filtere' : 'Try adjusting your filters'}</div>
                    </div>
                </td>
            </tr>
        `;
    } else {
        paginatedReports.forEach(report => {
            const categoryName = categories.find(c => c.id === report.category)?.name || 'other';
            const serviceName = services.find(s => s.id === report.service)?.name || '';
            
            html += `
                <tr onclick="showReportDetails(${report.id})">
                    <td style="font-weight: 600;">#${report.id}</td>
                    <td>${report.title}</td>
                    <td>${t(categoryName)}</td>
                    <td>${report.location}</td>
                    <td>${report.date}</td>
                    <td><span class="status-badge priority-${report.priority}">${report.priority}</span></td>
                    <td><span class="status-badge status-${report.status}">${report.status.replace('-', ' ')}</span></td>
                    <td>${t(serviceName)}</td>
                </tr>
            `;
        });
    }
    
    tbody.innerHTML = html;
    
    // Update pagination info
    document.getElementById('showingFrom').textContent = totalItems > 0 ? startIndex + 1 : 0;
    document.getElementById('showingTo').textContent = endIndex;
    document.getElementById('totalItems').textContent = totalItems;
    
    // Render pagination
    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    let html = '';
    
    // Previous button
    html += `
        <button class="pagination-btn" ${currentPage_pagination === 1 ? 'disabled' : ''} onclick="changePage(${currentPage_pagination - 1})">
            &laquo;
        </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage_pagination - 1 && i <= currentPage_pagination + 1)) {
            html += `
                <button class="pagination-btn ${i === currentPage_pagination ? 'active' : ''}" onclick="changePage(${i})">
                    ${i}
                </button>
            `;
        } else if (i === currentPage_pagination - 2 || i === currentPage_pagination + 2) {
            html += `<span style="padding: 0 0.5rem;">...</span>`;
        }
    }
    
    // Next button
    html += `
        <button class="pagination-btn" ${currentPage_pagination === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage_pagination + 1})">
            &raquo;
        </button>
    `;
    
    pagination.innerHTML = html;
}

function changePage(page) {
    currentPage_pagination = page;
    filterReports();
}

function showReportDetails(reportId) {
    const report = mockReports.find(r => r.id === reportId);
    if (!report) return;
    
    const modal = document.getElementById('reportModal');
    const modalBody = document.getElementById('reportModalBody');
    
    const categoryName = categories.find(c => c.id === report.category)?.name || 'other';
    const serviceName = services.find(s => s.id === report.service)?.name || '';
    
    let timelineHtml = '';
    report.timeline.forEach((step, index) => {
        timelineHtml += `
            <div class="timeline-step">
                <div class="timeline-dot"></div>
                <div class="timeline-step-content">
                    <div class="timeline-step-title">${step.description}</div>
                    <div class="timeline-step-time">${step.date}</div>
                </div>
            </div>
        `;
    });
    
    modalBody.innerHTML = `
        <div class="detail-grid">
            <div class="detail-item">
                <div class="detail-label">${t('id')}</div>
                <div class="detail-value">#${report.id}</div>
            </div>
            
            <div class="detail-item">
                <div class="detail-label">${t('status')}</div>
                <div class="detail-value">
                    <span class="status-badge status-${report.status}">${report.status.replace('-', ' ')}</span>
                </div>
            </div>
            
            <div class="detail-item">
                <div class="detail-label">${t('title')}</div>
                <div class="detail-value">${report.title}</div>
            </div>
            
            <div class="detail-item">
                <div class="detail-label">${t('description')}</div>
                <div class="detail-value">${report.description}</div>
            </div>
            
            <div class="detail-item">
                <div class="detail-label">${t('category')}</div>
                <div class="detail-value">${t(categoryName)}</div>
            </div>
            
            <div class="detail-item">
                <div class="detail-label">${t('location')}</div>
                <div class="detail-value">${report.location}</div>
            </div>
            
            <div class="detail-item">
                <div class="detail-label">${t('priority')}</div>
                <div class="detail-value">
                    <span class="status-badge priority-${report.priority}">${report.priority}</span>
                </div>
            </div>
            
            <div class="detail-item">
                <div class="detail-label">${t('service')}</div>
                <div class="detail-value">${t(serviceName)}</div>
            </div>
            
            <div class="detail-item">
                <div class="detail-label">${currentLang === 'sr' ? 'Prijavio' : 'Reported by'}</div>
                <div class="detail-value">${report.reporter}</div>
            </div>
            
            <div class="detail-item">
                <div class="detail-label">${t('date')}</div>
                <div class="detail-value">${report.date}</div>
            </div>
            
            <div class="detail-item" style="grid-column: 1 / -1;">
                <div class="detail-label">${currentLang === 'sr' ? 'Istorija Statusa' : 'Status History'}</div>
                <div class="detail-timeline">
                    ${timelineHtml}
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// ========================================
// New Report
// ========================================
function loadNewReportForm() {
    const categorySelect = document.getElementById('reportCategory');
    if (!categorySelect) return;
    
    let html = '';
    categories.forEach(cat => {
        html += `<option value="${cat.id}">${t(cat.name)}</option>`;
    });
    
    categorySelect.innerHTML = html;
}

function handleNewReportSubmit(e) {
    e.preventDefault();
    
    const title = document.getElementById('reportTitle').value;
    const description = document.getElementById('reportDescription').value;
    const category = document.getElementById('reportCategory').value;
    const priority = document.getElementById('reportPriority').value;
    const location = document.getElementById('reportLocation').value;
    
    // Generate new ID
    const newId = Math.max(...mockReports.map(r => r.id)) + 1;
    
    // Assign service based on category
    const serviceMap = {
        'road-infrastructure': 'roads',
        'public-lighting': 'lighting',
        'water-sewage': 'water',
        'electrical-grid': 'electrical',
        'waste-management': 'communal',
        'public-spaces': 'communal',
        'traffic-signalization': 'roads',
        'other': 'communal'
    };
    
    const newReport = {
        id: newId,
        title,
        description,
        category,
        location,
        date: new Date().toISOString().split('T')[0],
        priority,
        status: 'open',
        service: serviceMap[category] || 'communal',
        reporter: 'Admin Portal',
        timeline: [
            { 
                status: 'open', 
                date: new Date().toLocaleString('sr-RS'), 
                description: currentLang === 'sr' ? 'Prijava kreirana' : 'Report created'
            }
        ]
    };
    
    mockReports.unshift(newReport);
    
    // Reset form
    e.target.reset();
    const imagePreview = document.getElementById('imagePreview');
    if (imagePreview) {
        imagePreview.classList.remove('active');
        imagePreview.innerHTML = '';
    }
    
    showToast(
        currentLang === 'sr' 
            ? `Prijava #${newId} uspješno kreirana!` 
            : `Report #${newId} created successfully!`,
        'success'
    );
    
    // Navigate to reports
    setTimeout(() => {
        navigateToPage('reports');
    }, 1500);
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const imagePreview = document.getElementById('imagePreview');
        if (imagePreview) {
            imagePreview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
            imagePreview.classList.add('active');
        }
    };
    reader.readAsDataURL(file);
}

// ========================================
// Analytics
// ========================================
function loadAnalytics() {
    renderMonthlyChart();
    renderTopLocations();
    renderCategoryDistribution();
}

function renderMonthlyChart() {
    const monthlyChart = document.getElementById('monthlyChart');
    if (!monthlyChart) return;
    
    const data = currentLang === 'sr' ? monthlyData : monthlyDataEN;
    const maxValue = Math.max(...data.map(d => d.reports));
    
    let html = '<div style="display: flex; align-items: flex-end; justify-content: space-between; height: 280px; gap: 1rem;">';
    
    data.forEach(item => {
        const height = (item.reports / maxValue * 100);
        html += `
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                <div style="text-align: center; font-weight: 600; color: var(--primary-500); font-size: 0.875rem;">
                    ${item.reports}
                </div>
                <div style="width: 100%; height: ${height}%; background: linear-gradient(180deg, var(--primary-400) 0%, var(--primary-600) 100%); border-radius: 6px 6px 0 0; transition: all 0.3s ease;"></div>
                <div style="font-size: 0.75rem; color: var(--text-secondary); writing-mode: horizontal-tb; text-align: center;">
                    ${item.month.substring(0, 3)}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    monthlyChart.innerHTML = html;
}

function renderTopLocations() {
    const container = document.getElementById('topLocationsList');
    if (!container) return;
    
    const locationCounts = {};
    mockReports.forEach(report => {
        const location = report.location.split(',')[0];
        locationCounts[location] = (locationCounts[location] || 0) + 1;
    });
    
    const sortedLocations = Object.entries(locationCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8);
    
    let html = '';
    sortedLocations.forEach(([location, count]) => {
        html += `
            <div class="location-item">
                <span class="location-name">${location}</span>
                <span class="location-count">${count}</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderCategoryDistribution() {
    const container = document.getElementById('categoryDistribution');
    if (!container) return;
    
    const categoryCounts = {};
    categories.forEach(cat => {
        categoryCounts[cat.id] = mockReports.filter(r => r.category === cat.id).length;
    });
    
    const total = Object.values(categoryCounts).reduce((a, b) => a + b, 0);
    
    let html = '';
    categories.forEach(cat => {
        const count = categoryCounts[cat.id];
        const percentage = total > 0 ? (count / total * 100) : 0;
        
        html += `
            <div class="category-item">
                <div>
                    <div class="category-name">${t(cat.name)}</div>
                    <div class="category-bar">
                        <div class="category-bar-fill" style="width: ${percentage}%"></div>
                    </div>
                </div>
                <span class="category-count">${count}</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ========================================
// Services
// ========================================
function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    let html = '';
    
    services.forEach(service => {
        const workloadClass = service.workload < 50 ? 'workload-low' : service.workload < 75 ? 'workload-medium' : 'workload-high';
        
        html += `
            <div class="service-card">
                <div class="service-header">
                    <div class="service-icon" style="background: ${service.color}22; color: ${service.color};">
                        ${service.icon}
                    </div>
                    <div>
                        <div class="service-title">${t(service.name)}</div>
                    </div>
                </div>
                
                <div class="service-stats">
                    <div class="service-stat">
                        <span class="service-stat-label">${currentLang === 'sr' ? 'Aktivni slučajevi' : 'Active cases'}</span>
                        <span class="service-stat-value">${service.active}</span>
                    </div>
                    
                    <div class="service-stat">
                        <span class="service-stat-label">${currentLang === 'sr' ? 'Završeni slučajevi' : 'Completed cases'}</span>
                        <span class="service-stat-value">${service.completed}</span>
                    </div>
                    
                    <div class="workload-indicator">
                        <div class="workload-label">${currentLang === 'sr' ? 'Opterećenje' : 'Workload'}: ${service.workload}%</div>
                        <div class="workload-bar">
                            <div class="workload-bar-fill ${workloadClass}" style="width: ${service.workload}%"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    servicesGrid.innerHTML = html;
}

// ========================================
// Activity Log
// ========================================
function loadActivityLog() {
    const timeline = document.getElementById('activityTimeline');
    if (!timeline) return;
    
    let html = '';
    
    activityLog.forEach(activity => {
        const iconColors = {
            'assignment': 'rgba(59, 130, 246, 0.2)',
            'status': 'rgba(245, 158, 11, 0.2)',
            'resolved': 'rgba(16, 185, 129, 0.2)',
            'new': 'rgba(139, 92, 246, 0.2)'
        };
        
        html += `
            <div class="timeline-item">
                <div class="timeline-icon" style="background: ${iconColors[activity.type] || iconColors['new']}; color: var(--text-primary); font-size: 1.125rem;">
                    ${activity.icon}
                </div>
                <div class="timeline-content">
                    <div class="timeline-title">${activity.title}</div>
                    <div class="timeline-description">${activity.description}</div>
                    <div class="timeline-time">${activity.time}</div>
                </div>
            </div>
        `;
    });
    
    timeline.innerHTML = html;
}

// ========================================
// Toast Notifications
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.className = `toast ${type}`;
    toast.querySelector('.toast-message').textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// ========================================
// Make functions global for inline onclick handlers
// ========================================
window.changePage = changePage;
window.showReportDetails = showReportDetails;
