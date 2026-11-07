import type { Lang } from '../lib/i18n';
export const experience = {
  tr: [
    {
      company: 'Optimak STU / Logirobotic',
      date: '04/2026 — Devam',
      role: 'Otonom Sistemler ve Yazılım Uygulamaları Uzmanı',
      summary: 'Yazılım uygulamaları, kurumsal entegrasyon ve teknik doğrulama.',
      detail:
        'Üretim ve depo lojistiğinde operatör işlemleri, görev yaşam döngüsü ve iş kurallarını teknik gereksinimlere ve test senaryolarına dönüştürüyorum. REST/JSON iletişimi, MES entegrasyon akışları, zaman aşımı ve görev/geri bildirim tutarlılığının doğrulanmasında görev alıyorum. Teknik dokümantasyon, kullanıcı eğitimi ve kabul kontrolleriyle saha ekiplerini destekliyorum.',
      tech: 'API analizi · Sistem entegrasyonu · Teknik doğrulama',
    },
    {
      company: 'Özel Medar Hastanesi',
      date: '06/2025 — 11/2025',
      role: 'Bilgi İşlem Uzmanı',
      summary: 'Kurumsal altyapı, sağlık bilgi sistemleri ve teknik problem çözme.',
      detail:
        '140’ın üzerinde istemcinin bulunduğu hastanede Medisoft HBYS ve Sonitel PACS uygulamalarının erişim ve iş sürekliliği süreçlerini yürüttüm. Windows Server 2022, Active Directory, Hyper-V (4 sanal makine), SQL Server ve VPN ortamında sorun giderme; laboratuvar RS-232/COM ve yazıcı entegrasyonlarında analiz ve Python yardımcı araçları geliştirme üzerine çalıştım.',
      tech: 'Windows Server · Active Directory · Hyper-V · SQL Server · HBYS/PACS',
    },
    {
      company: 'Bağımsız çalışma',
      date: '10/2024 — 06/2025',
      role: 'Yazılım ve yapay zekâ geliştirme',
      summary: 'Rapor işleme, veri analitiği ve araştırma yazılımları.',
      detail:
        'Yaklaşık 400 Tanita raporundan veri çıkarma ve temizleme süreçlerini yürüttüm; 395 hastayı kapsayan analiz veri setinin hazırlanmasına katkıda bulundum. Klinik değişkenler, antropometrik ölçümler ve anketleri Python/pandas ile eşleştirdim; sınıflandırma ve model değerlendirme çalışmaları yaptım. EEG tabanlı evet/hayır iletişim prototiplerinde sinyal işleme ve özellik çıkarımı üzerine çalıştım.',
      tech: 'Python · Veri işleme · Makine öğrenmesi',
    },
    {
      company: 'Gini Talent',
      date: '11/2024 — 03/2025',
      role: 'Arama sonucu değerlendirme ve kalite analizi',
      summary: 'Arama motoru sonuçlarının uygunluk ve kalite değerlendirmesi.',
      detail:
        'Arama sonuçlarını kullanıcı niyeti, alaka düzeyi ve içerik kalitesi yönünden yönergelere göre değerlendirdim. Veri etiketleme, kalite kontrol ve sonuç tutarlılığı incelemelerinde görev aldım.',
      tech: 'Kalite değerlendirme · Analitik inceleme',
    },
    {
      company: 'MKU Teknoloji / RAITOY',
      date: '07/2024 — 11/2024',
      role: 'Yazılım geliştirme stajı',
      summary: 'Yazılım geliştirme süreçlerinde staj deneyimi.',
      detail:
        'Yapay zekâ, web ve mobil yazılım çalışmalarında Python tabanlı geliştirme, veri hazırlama, uygulama testleri ve hata analizi süreçlerine teknik destek sağladım.',
      tech: 'Yazılım geliştirme · Ekip çalışması',
    },
  ],
  en: [
    {
      company: 'Optimak STU / Logirobotic',
      date: '04/2026 — Present',
      role: 'Autonomous Systems and Software Applications Specialist',
      summary: 'Software applications, enterprise integration and technical validation.',
      detail:
        'I translate operator actions, task lifecycles and business rules in production and warehouse logistics into technical requirements and test scenarios. I contribute to validating REST/JSON communication, MES integration flows, timeouts and task/feedback consistency, and support field teams through technical documentation, user training and acceptance checks.',
      tech: 'API analysis · Systems integration · Technical validation',
    },
    {
      company: 'Private Medar Hospital',
      date: '06/2025 — 11/2025',
      role: 'IT Specialist',
      summary:
        'Enterprise infrastructure, healthcare information systems and technical troubleshooting.',
      detail:
        'Supported access and operational continuity for Medisoft HIS and Sonitel PACS in a hospital with over 140 client devices. Worked on troubleshooting Windows Server 2022, Active Directory, Hyper-V (four VMs), SQL Server and VPN services, and analyzed laboratory RS-232/COM and printer integrations while developing Python helper tools.',
      tech: 'Windows Server · Active Directory · Hyper-V · SQL Server · HIS/PACS',
    },
    {
      company: 'Independent work',
      date: '10/2024 — 06/2025',
      role: 'Software and AI development',
      summary: 'Report processing, data analytics and research software.',
      detail:
        'Extracted and cleaned data from approximately 400 Tanita reports and contributed to a 395-patient analysis dataset. Linked clinical variables, anthropometric measurements and questionnaires with Python/pandas, and worked on classification and model evaluation. Developed signal-processing and feature-extraction prototypes for EEG-based yes/no communication research.',
      tech: 'Python · Data processing · Machine learning',
    },
    {
      company: 'Gini Talent',
      date: '11/2024 — 03/2025',
      role: 'Search result evaluation and quality analysis',
      summary: 'Relevance and quality evaluation of search engine results.',
      detail:
        'Evaluated search results against guidelines for user intent, relevance and content quality. Contributed to data annotation, quality control and review of result consistency.',
      tech: 'Quality evaluation · Analytical review',
    },
    {
      company: 'MKU Teknoloji / RAITOY',
      date: '07/2024 — 11/2024',
      role: 'Software development intern',
      summary: 'Internship experience in software development processes.',
      detail:
        'Provided technical support for Python development, data preparation, application testing and error analysis in AI, web and mobile software work.',
      tech: 'Software development · Team collaboration',
    },
  ],
} satisfies Record<
  Lang,
  Array<{
    company: string;
    date: string;
    role: string;
    summary: string;
    detail: string;
    tech: string;
  }>
>;
export const education = {
  tr: [
    {
      school: 'Ahmet Yesevi Üniversitesi',
      program: 'Yönetim Bilişim Sistemleri',
      degree: 'Lisans',
      status: '2026 — Devam ediyor · Uzaktan eğitim',
    },
    {
      school: 'Anadolu Üniversitesi',
      program: 'İktisat',
      degree: 'Lisans',
      status: '2026 — Devam ediyor · 3. sınıf',
    },
    {
      school: 'Bartın Üniversitesi',
      program: 'Bilgisayar Programcılığı',
      degree: 'Ön lisans',
      status: '2022–2024 · Mezun · GNO 2,78/4,00',
    },
    {
      school: 'Arifiye SATSO Mesleki ve Teknik Anadolu Lisesi',
      program: 'Motorlu Araçlar Teknolojisi',
      degree: 'Lise',
      status: '2022 mezunu',
    },
  ],
  en: [
    {
      school: 'Ahmet Yesevi University',
      program: 'Management Information Systems',
      degree: 'Bachelor’s degree',
      status: '2026 — Present · Distance learning',
    },
    {
      school: 'Anadolu University',
      program: 'Economics',
      degree: 'Bachelor’s degree',
      status: '2026 — Present · Third year',
    },
    {
      school: 'Bartın University',
      program: 'Computer Programming',
      degree: 'Associate degree',
      status: '2022–2024 · Graduated · GPA 2.78/4.00',
    },
    {
      school: 'Arifiye SATSO Vocational and Technical Anatolian High School',
      program: 'Motor Vehicle Technology',
      degree: 'High school',
      status: 'Graduated in 2022',
    },
  ],
} satisfies Record<
  Lang,
  Array<{ school: string; program: string; degree: string; status: string }>
>;

export const certifications = {
  tr: [
    {
      title: 'Uygulamalarla Makine Öğrenmesi ve Derin Öğrenme Atölyesi',
      issuer: 'BTK Akademi',
      year: '2025',
    },
    { title: 'Python Programlama Dili', issuer: 'BTK Akademi', year: '2025' },
    { title: 'DoS / DDoS Saldırıları ve Korunma Yöntemleri', issuer: 'BTK Akademi', year: '' },
    { title: 'Roket Sistemlerine Giriş Eğitimi', issuer: 'T3 Vakfı', year: '2026' },
  ],
  en: [
    {
      title: 'Applied Machine Learning and Deep Learning Workshop',
      issuer: 'BTK Akademi',
      year: '2025',
    },
    { title: 'Python Programming Language', issuer: 'BTK Akademi', year: '2025' },
    { title: 'DoS / DDoS Attacks and Protection Methods', issuer: 'BTK Akademi', year: '' },
    { title: 'Introduction to Rocket Systems', issuer: 'T3 Foundation', year: '2026' },
  ],
} satisfies Record<Lang, Array<{ title: string; issuer: string; year: string }>>;
