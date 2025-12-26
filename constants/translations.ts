
import { Language, Translations } from '../types';

export const translations: Translations = {
  // Header
  navHome: {
    [Language.FR]: 'Accueil',
    [Language.EN]: 'Home',
    [Language.HT]: 'Akèy',
  },
  navFormations: {
    [Language.FR]: 'Formations',
    [Language.EN]: 'Training',
    [Language.HT]: 'Fòmasyon',
  },
  navBlog: {
    [Language.FR]: 'Blog',
    [Language.EN]: 'Blog',
    [Language.HT]: 'Blòg',
  },
  navAbout: {
    [Language.FR]: 'À propos',
    [Language.EN]: 'About Us',
    [Language.HT]: 'Sou Nou',
  },
  searchPlaceholder: {
    [Language.FR]: 'Rechercher sur tout le site...',
    [Language.EN]: 'Search entire site...',
    [Language.HT]: 'Chèche sou tout sit la...',
  },

  // Auth & Admin
  login: {
    [Language.FR]: 'Connexion',
    [Language.EN]: 'Login',
    [Language.HT]: 'Koneksyon',
  },
  blogAdmin: {
    [Language.FR]: 'Administration du Blog',
    [Language.EN]: 'Blog Admin',
    [Language.HT]: 'Administrasyon Blòg',
  },
  dashboard: {
    [Language.FR]: 'Tableau de bord',
    [Language.EN]: 'Dashboard',
    [Language.HT]: 'Tablodbò',
  },
  logout: {
    [Language.FR]: 'Déconnexion',
    [Language.EN]: 'Logout',
    [Language.HT]: 'Dekoneksyon',
  },
  settings: {
    [Language.FR]: 'Paramètres',
    [Language.EN]: 'Settings',
    [Language.HT]: 'Paramèt',
  },
  createPost: {
    [Language.FR]: 'Créer un article',
    [Language.EN]: 'Create New Post',
    [Language.HT]: 'Kreye Nouvo Atik',
  },
  editPost: {
    [Language.FR]: "Modifier l'article",
    [Language.EN]: 'Edit Post',
    [Language.HT]: 'Modifye Atik',
  },
  exportData: {
    [Language.FR]: "Télécharger le fichier",
    [Language.EN]: "Download File",
    [Language.HT]: "Telechaje Dosye",
  },
  copyCode: {
    [Language.FR]: "Copier le code",
    [Language.EN]: "Copy Code",
    [Language.HT]: "Kopye Kòd",
  },
  codeCopied: {
    [Language.FR]: "Code copié !",
    [Language.EN]: "Code Copied!",
    [Language.HT]: "Kòd Kopye!",
  },
  persistenceTitle: {
    [Language.FR]: "Sauvegarde manuelle (fichier local)",
    [Language.EN]: "Manual Save (Local File)",
    [Language.HT]: "Sovgad Manyèl (Dosye Lokal)",
  },
  persistenceDesc: {
    [Language.FR]: "Les articles créés ici sont stockés dans votre navigateur. Pour qu'ils fassent partie intégrante du site web, vous devez mettre à jour le fichier source.",
    [Language.EN]: "Posts created here are stored in your browser. To make them a permanent part of the website, you must update the source file.",
    [Language.HT]: "Atik ki kreye isit la estoke nan navigatè ou a. Pou fè yo tounen yon pati pèmanan nan sit entènèt la, ou dwe mete ajou dosye sous la.",
  },
  persistenceStep1: {
    [Language.FR]: "1. Cliquez sur 'Copier le code' ci-dessous.",
    [Language.EN]: "1. Click 'Copy Code' below.",
    [Language.HT]: "1. Klike sou 'Kopye Kòd' anba a.",
  },
  persistenceStep2: {
    [Language.FR]: "2. Ouvrez le fichier 'constants/blogData.ts' dans votre projet.",
    [Language.EN]: "2. Open the file 'constants/blogData.ts' in your project.",
    [Language.HT]: "2. Louvri dosye 'constants/blogData.ts' nan pwojè ou a.",
  },
  persistenceStep3: {
    [Language.FR]: "3. Remplacez TOUT le contenu par le code copié.",
    [Language.EN]: "3. Replace ALL content with the copied code.",
    [Language.HT]: "3. Ranplase TOUT kontni an ak kòd la kopye.",
  },
  
  // GitHub Sync Translations
  githubSettingsTitle: {
    [Language.FR]: "Configuration GitHub",
    [Language.EN]: "GitHub Configuration",
    [Language.HT]: "Konfigirasyon GitHub",
  },
  githubSettingsDesc: {
    [Language.FR]: "Configurez les détails de votre dépôt pour activer la sauvegarde automatique.",
    [Language.EN]: "Configure your repository details to enable automatic saving.",
    [Language.HT]: "Konfigure detay depo ou yo pou pèmèt sovgad otomatik.",
  },
  githubTitle: {
    [Language.FR]: "Sauvegarde Automatique (GitHub)",
    [Language.EN]: "Automated Save (GitHub)",
    [Language.HT]: "Sovgad Otomatik (GitHub)",
  },
  githubDesc: {
    [Language.FR]: "Connectez-vous à GitHub pour sauvegarder directement les modifications dans le code source.",
    [Language.EN]: "Connect to GitHub to save changes directly to the source code.",
    [Language.HT]: "Konekte ak GitHub pou sove chanjman yo dirèkteman nan kòd sous la.",
  },
  repoOwner: {
    [Language.FR]: "Propriétaire du dépôt",
    [Language.EN]: "Repo Owner",
    [Language.HT]: "Pwopriyetè Depo",
  },
  repoName: {
    [Language.FR]: "Nom du dépôt",
    [Language.EN]: "Repo Name",
    [Language.HT]: "Non Depo",
  },
  filePath: {
    [Language.FR]: "Chemin du fichier",
    [Language.EN]: "File Path",
    [Language.HT]: "Chemen Dosye",
  },
  githubToken: {
    [Language.FR]: "Token d'accès personnel (PAT)",
    [Language.EN]: "Personal Access Token (PAT)",
    [Language.HT]: "Jeton Aksè Pèsonèl (PAT)",
  },
  saveSettings: {
    [Language.FR]: "Enregistrer la configuration",
    [Language.EN]: "Save Configuration",
    [Language.HT]: "Sove Konfigirasyon",
  },
  saveToGithub: {
    [Language.FR]: "Sauvegarder",
    [Language.EN]: "Save",
    [Language.HT]: "Sove",
  },
  saving: {
    [Language.FR]: "Sauvegarde en cours...",
    [Language.EN]: "Saving changes...",
    [Language.HT]: "Sove chanjman...",
  },
  publishingToGithub: {
    [Language.FR]: "Traitement en cours...",
    [Language.EN]: "Processing...",
    [Language.HT]: "Pwosesis...",
  },
  githubSuccess: {
    [Language.FR]: "Modifications enregistrées avec succès !",
    [Language.EN]: "Changes saved successfully!",
    [Language.HT]: "Chanjman sove avèk siksè!",
  },
  githubError: {
    [Language.FR]: "Erreur lors de la sauvegarde.",
    [Language.EN]: "Error saving changes.",
    [Language.HT]: "Erè nan sove chanjman.",
  },

  username: {
    [Language.FR]: "Nom d'utilisateur",
    [Language.EN]: 'Username',
    [Language.HT]: 'Non itilizatè',
  },
  nameLabel: {
    [Language.FR]: "Nom",
    [Language.EN]: 'Name',
    [Language.HT]: 'Non',
  },
  password: {
    [Language.FR]: 'Mot de passe',
    [Language.EN]: 'Password',
    [Language.HT]: 'Modpas',
  },
  newPassword: {
    [Language.FR]: 'Nouveau mot de passe',
    [Language.EN]: 'New Password',
    [Language.HT]: 'Nouvo modpas',
  },
  changePassword: {
    [Language.FR]: 'Changer le mot de passe',
    [Language.EN]: 'Change Password',
    [Language.HT]: 'Chanje modpas',
  },
  passwordChangedSuccess: {
    [Language.FR]: 'Mot de passe mis à jour avec succès.',
    [Language.EN]: 'Password updated successfully.',
    [Language.HT]: 'Modpas mete ajou avèk siksè.',
  },
  userManagement: {
    [Language.FR]: 'Gestion des utilisateurs',
    [Language.EN]: 'User Management',
    [Language.HT]: 'Jesyon itilizatè',
  },
  role: {
    [Language.FR]: 'Rôle',
    [Language.EN]: 'Role',
    [Language.HT]: 'Wòl',
  },
  title: {
    [Language.FR]: 'Titre',
    [Language.EN]: 'Title',
    [Language.HT]: 'Tit',
  },
  authorLabel: {
    [Language.FR]: 'Auteur',
    [Language.EN]: 'Author',
    [Language.HT]: 'Otè',
  },
  dateLabel: {
    [Language.FR]: 'Date de publication',
    [Language.EN]: 'Publication Date',
    [Language.HT]: 'Dat piblikasyon',
  },
  readTimeLabel: {
    [Language.FR]: 'Temps de lecture',
    [Language.EN]: 'Read Time',
    [Language.HT]: 'Tan lekti',
  },
  descriptionLabel: {
    [Language.FR]: 'Description',
    [Language.EN]: 'Description',
    [Language.HT]: 'Deskripsyon',
  },
  contentLabel: {
    [Language.FR]: 'Contenu',
    [Language.EN]: 'Content',
    [Language.HT]: 'Kontni',
  },
  imageUrl: {
    [Language.FR]: "URL de l'image",
    [Language.EN]: 'Image URL',
    [Language.HT]: 'URL Imaj',
  },
  submit: {
    [Language.FR]: 'Soumettre',
    [Language.EN]: 'Submit',
    [Language.HT]: 'Soumèt',
  },
  update: {
    [Language.FR]: 'Mettre à jour',
    [Language.EN]: 'Update',
    [Language.HT]: 'Mizajou',
  },
  cancel: {
    [Language.FR]: 'Annuler',
    [Language.EN]: 'Cancel',
    [Language.HT]: 'Anile',
  },
  delete: {
    [Language.FR]: 'Supprimer',
    [Language.EN]: 'Delete',
    [Language.HT]: 'Efase',
  },
  hide: {
    [Language.FR]: 'Mettre en brouillon',
    [Language.EN]: 'Unpublish',
    [Language.HT]: 'Mete an bouyon',
  },
  show: {
    [Language.FR]: 'Publier',
    [Language.EN]: 'Publish',
    [Language.HT]: 'Pibliye',
  },
  status: {
    [Language.FR]: 'Statut',
    [Language.EN]: 'Status',
    [Language.HT]: 'Estati',
  },
  visible: {
    [Language.FR]: 'Visible',
    [Language.EN]: 'Visible',
    [Language.HT]: 'Vizib',
  },
  hidden: {
    [Language.FR]: 'Masqué',
    [Language.EN]: 'Hidden',
    [Language.HT]: 'Kache',
  },
  draft: {
    [Language.FR]: 'Brouillon',
    [Language.EN]: 'Draft',
    [Language.HT]: 'Bouyon',
  },
  published: {
    [Language.FR]: 'Publié',
    [Language.EN]: 'Published',
    [Language.HT]: 'Pibliye',
  },
  saveAsDraft: {
    [Language.FR]: 'Enregistrer en brouillon',
    [Language.EN]: 'Save as Draft',
    [Language.HT]: 'Sove kòm Bouyon',
  },
  preview: {
    [Language.FR]: 'Aperçu',
    [Language.EN]: 'Preview',
    [Language.HT]: 'Apèsi',
  },
  publish: {
    [Language.FR]: 'Publier',
    [Language.EN]: 'Publish',
    [Language.HT]: 'Pibliye',
  },
  actions: {
    [Language.FR]: 'Actions',
    [Language.EN]: 'Actions',
    [Language.HT]: 'Aksyon',
  },
  loginError: {
    [Language.FR]: "Identifiants invalides",
    [Language.EN]: 'Invalid credentials',
    [Language.HT]: 'Idantifikasyon envalid',
  },
  backToBlog: {
    [Language.FR]: "Retour au blog",
    [Language.EN]: "Back to Blog",
    [Language.HT]: "Retounen nan Blog",
  },
  backToDashboard: {
    [Language.FR]: "Retour au tableau de bord",
    [Language.EN]: "Back to Dashboard",
    [Language.HT]: "Retounen nan tablodbò",
  },
  newPostSuccess: {
    [Language.FR]: "Article publié avec succès !",
    [Language.EN]: "Post published successfully!",
    [Language.HT]: "Atik pibliye avèk siksè!",
  },
  updatePostSuccess: {
    [Language.FR]: "Article mis à jour avec succès !",
    [Language.EN]: "Post updated successfully!",
    [Language.HT]: "Atik mete ajou avèk siksè!",
  },
  draftSavedSuccess: {
    [Language.FR]: "Brouillon enregistré avec succès !",
    [Language.EN]: "Draft saved successfully!",
    [Language.HT]: "Bouyon sove avèk siksè!",
  },
  activityLog: {
    [Language.FR]: "Journal d'activité (Admin)",
    [Language.EN]: "Activity Log (Admin Only)",
    [Language.HT]: "Jounal Aktivite (Admin Sèlman)",
  },
  noActivity: {
    [Language.FR]: "Aucune activité enregistrée.",
    [Language.EN]: "No activity recorded.",
    [Language.HT]: "Pa gen aktivite anrejistre.",
  },
  confirmDelete: {
    [Language.FR]: "Êtes-vous sûr de vouloir supprimer cet article ?",
    [Language.EN]: "Are you sure you want to delete this post?",
    [Language.HT]: "Èske ou asire ou vle efase atik sa a?",
  },
  confirmHide: {
    [Language.FR]: "Êtes-vous sûr de vouloir dépublier cet article (brouillon) ?",
    [Language.EN]: "Are you sure you want to unpublish this post (draft)?",
    [Language.HT]: "Èske ou asire ou vle depibliye atik sa a (bouyon)?",
  },
  confirmShow: {
    [Language.FR]: "Êtes-vous sûr de vouloir publier cet article ?",
    [Language.EN]: "Are you sure you want to publish this post?",
    [Language.HT]: "Èske ou asire ou vle pibliye atik sa a?",
  },
  closePreview: {
    [Language.FR]: "Fermer l'aperçu",
    [Language.EN]: "Close Preview",
    [Language.HT]: "Fèmen Apèsi",
  },
  share: {
    [Language.FR]: 'Partager',
    [Language.EN]: 'Share',
    [Language.HT]: 'Pataje',
  },
  linkCopied: {
    [Language.FR]: 'Lien copié !',
    [Language.EN]: 'Link copied!',
    [Language.HT]: 'Lyen kopye!',
  },

  // Hero Section
  heroTitle: {
    [Language.FR]: 'Expertise en MicroFinance et Innovation Technologique',
    [Language.EN]: 'Expertise in MicroFinance and Technological Innovation',
    [Language.HT]: 'Ekspètiz nan Mikwofinans ak Inovasyon Teknolojik',
  },
  heroSubtitle: {
    [Language.FR]: 'Nous soutenons les institutions de microfinance avec des solutions adaptées et innovantes.',
    [Language.EN]: 'We support microfinance institutions with tailored and innovative solutions.',
    [Language.HT]: 'Nou sipòte enstitisyon mikwofinans yo ak solisyon adapte ak inovatif.',
  },
  discover: {
    [Language.FR]: 'Découvrir',
    [Language.EN]: 'Discover',
    [Language.HT]: 'Dekouvri',
  },

  // Services Section
  qualityTraining: {
    [Language.FR]: 'Formations de qualité',
    [Language.EN]: 'Quality Training',
    [Language.HT]: 'Fòmasyon Kalite',
  },
  qualityTrainingDesc: {
    [Language.FR]: 'Des formations adaptées aux besoins des IMF.',
    [Language.EN]: 'Training adapted to the needs of MFIs.',
    [Language.HT]: 'Fòmasyon adapte a bezwen IMF yo.',
  },
  advancedDataAnalysis: {
    [Language.FR]: 'Analyse de données avancée',
    [Language.EN]: 'Advanced Data Analysis',
    [Language.HT]: 'Analiz Done Avanse',
  },
  advancedDataAnalysisDesc: {
    [Language.FR]: 'Analyse de données avancée et pertinente.',
    [Language.EN]: 'Advanced and relevant data analysis.',
    [Language.HT]: 'Analiz done avanse ak enpòtan.',
  },
  innovativeStrategies: {
    [Language.FR]: 'Stratégies innovantes',
    [Language.EN]: 'Innovative Strategies',
    [Language.HT]: 'Estrateji Inovatè',
  },
  innovativeStrategiesDesc: {
    [Language.FR]: 'Stratégies innovantes pour le secteur financier.',
    [Language.EN]: 'Innovative strategies for the financial sector.',
    [Language.HT]: 'Estrateji inovatif pou sektè finansye a.',
  },
  inDepthStudies: {
    [Language.FR]: 'Études approfondies',
    [Language.EN]: 'In-depth Studies',
    [Language.HT]: 'Etid Apwofondi',
  },
  cuttingEdgeTech: {
    [Language.FR]: 'Technologies de pointe',
    [Language.EN]: 'Cutting-Edge Technologies',
    [Language.HT]: 'Teknoloji Dènye Kri',
  },

  // About Snippet Section
  aboutMicroFormS: {
    [Language.FR]: 'À propos de MicroFormS',
    [Language.EN]: 'About MicroFormS',
    [Language.HT]: 'Sou MicroFormS',
  },
  aboutMicroFormSDesc: {
    [Language.FR]: "MicroFormS, fondée en 2019, est dédiée à la recherche en microfinance, offrant des études, formations et stratégies innovantes intégrant l'intelligence artificielle pour répondre aux besoins des institutions.",
    [Language.EN]: 'MicroFormS, founded in 2019, is dedicated to microfinance research, offering studies, training, and innovative strategies integrating artificial intelligence to meet the needs of institutions.',
    [Language.HT]: 'MicroFormS, ki te fonde an 2019, dedye a rechèch mikwofinans, li ofri etid, fòmasyon ak estrateji inovatif ki entegre entèlijans atifisyèl pou reponn a bezwen enstitisyon yo.',
  },
  expertiseQuote: {
    [Language.FR]: 'Une expertise au service de la microfinance.',
    [Language.EN]: 'Expertise at the service of microfinance.',
    [Language.HT]: 'Yon ekspètiz nan sèvis mikwofinans.',
  },
  
  // Projects Section
  ourProjects: {
    [Language.FR]: 'Nos Projets',
    [Language.EN]: 'Our Projects',
    [Language.HT]: 'Pwojè Nou Yo',
  },
  ourProjectsDesc: {
    [Language.FR]: 'Découvrez nos projets innovants en microfinance et recherche.',
    [Language.EN]: 'Discover our innovative projects in microfinance and research.',
    [Language.HT]: 'Dekouvri pwojè inovatif nou yo nan mikwofinans ak rechèch.',
  },
  techInnovations: {
    [Language.FR]: 'Innovations Technologiques',
    [Language.EN]: 'Technological Innovations',
    [Language.HT]: 'Inovasyon Teknolojik',
  },
  techInnovationsDesc: {
    [Language.FR]: "Nous intégrons l'intelligence artificielle pour optimiser la collecte et l'analyse des données dans le secteur de la microfinance, répondant ainsi aux besoins des institutions financières et non financières.",
    [Language.EN]: 'We integrate artificial intelligence to optimize data collection and analysis in the microfinance sector, thus meeting the needs of financial and non-financial institutions.',
    [Language.HT]: 'Nou entegre entèlijans atifisyèl pou optimize koleksyon ak analiz done nan sektè mikwofinans lan, konsa nou reponn a bezwen enstitisyon finansye ak non-finansye yo.',
  },

  // Connect Section
  connectTitle: {
    [Language.FR]: 'Connectons-nous',
    [Language.EN]: "Let's Connect",
    [Language.HT]: 'An n Konekte',
  },
  connectSubtitle: {
    [Language.FR]: "Nous sommes toujours heureux d'avoir de vos nouvelles. Contactez-nous par les canaux ci-dessous.",
    [Language.EN]: "We're always happy to hear from you. Reach out through the channels below.",
    [Language.HT]: 'Nou toujou kontan tande pale de ou. Kontakte nou atravè kanal ki anba yo.',
  },
  connectEmailTitle: {
    [Language.FR]: 'Par Courriel',
    [Language.EN]: 'By Email',
    [Language.HT]: 'Pa Imèl',
  },
  connectEmailDesc: {
    [Language.FR]: 'Le meilleur moyen de nous poser des questions détaillées.',
    [Language.EN]: 'The best way for detailed inquiries.',
    [Language.HT]: 'Pi bon fason pou poze kesyon detaye.',
  },
  connectPhoneTitle: {
    [Language.FR]: 'Par Téléphone',
    [Language.EN]: 'By Phone',
    [Language.HT]: 'Pa Telefòn',
  },
  connectPhoneDesc: {
    [Language.FR]: 'Pour une conversation directe, appelez-nous pendant les heures de bureau.',
    [Language.EN]: 'For a direct conversation, call us during business hours.',
    [Language.HT]: 'Pou yon konvèsasyon dirèk, rele nou pandan lè biwo.',
  },
  connectSocialTitle: {
    [Language.FR]: 'Suivez-nous sur les réseaux sociaux',
    [Language.EN]: 'Follow Us on Social Media',
    [Language.HT]: 'Swiv Nou sou Rezo Sosyal yo',
  },
  
  // Footer
  support: {
    [Language.FR]: 'Support',
    [Language.EN]: 'Support',
    [Language.HT]: 'Sipò',
  },
  contactUs: {
    [Language.FR]: 'Contactez-nous',
    [Language.EN]: 'Contact Us',
    [Language.HT]: 'Kontakte Nou',
  },
  
  // About Page
  whoWeAre: {
    [Language.FR]: 'Qui sommes nous ?',
    [Language.EN]: 'Who are we?',
    [Language.HT]: 'Kiyès Nou Ye?',
  },
  whoWeAreDesc: {
    [Language.FR]: "MicroFormS est un organisme dédié à la recherche et aux métiers des Institutions de Microfinance (IMF) en prenant en compte prioritairement des besoins exprimés par les établissements financiers et non financiers. Fondée en 2019 par des praticiens et experts en microfinance, MicroFormS est co-dirigée par Walner Sainrisma et Johnson Occin. Elle œuvre dans le secteur de la microfinance à travers des études approfondies, des formations de qualité et des stratégies innovantes, en intégrant les technologies de pointe, telle que l’intelligence artificielle, pour faciliter la collecte et l’analyse des données. MicroFormS se veut être un acteur clé autour de problématiques liées à la microfinance et à l’inclusion financière, mais aussi plus largement à l’économie sociale. Aussi compte-t-il contribuer dans l'évolution et la modernisation du secteur de la microfinance pour renforcer la performance et la pérennité des pratiques des organismes de microfinance.",
    [Language.EN]: "MicroFormS is an organization dedicated to research and the professions of Microfinance Institutions (MFIs), primarily considering the needs expressed by financial and non-financial establishments. Founded in 2019 by microfinance practitioners and experts, MicroFormS is co-directed by Walner Sainrisma and Johnson Occin. It operates in the microfinance sector through in-depth studies, quality training, and innovative strategies, integrating cutting-edge technologies, such as artificial intelligence, to facilitate data collection and analysis. MicroFormS aims to be a key player in issues related to microfinance and financial inclusion, as well as the broader social economy. It also intends to contribute to the evolution and modernization of the microfinance sector to enhance the performance and sustainability of microfinance organizations' practices.",
    [Language.HT]: "MicroFormS se yon òganizasyon ki dedye a rechèch ak metye Enstitisyon Mikwofinans (IMF) yo, ki pran an konsiderasyon priyoritèman bezwen enstitisyon finansye ak non-finansye yo eksprime. Te fonde an 2019 pa pratikan ak ekspè nan mikwofinans, MicroFormS se ko-dirije pa Walner Sainrisma ak Johnson Occin. Li travay nan sektè mikwofinans lan atravè etid apwofondi, fòmasyon kalite, ak estrateji inovatif, nan entegre teknoloji dènye kri, tankou entèlijans atifisyèl, pou fasilite koleksyon ak analiz done yo. MicroFormS vle vin yon aktè kle nan pwoblèm ki gen rapò ak mikwofinans ak enklizyon finansye, men tou pi lajman nan ekonomi sosyal la. Li gen entansyon kontribye tou nan evolisyon ak modènizasyon sektè mikwofinans lan pou ranfòse pèfòmans ak dirabilite pratik òganizasyon mikwofinans yo.",
  },
  ourMission: {
    [Language.FR]: 'Notre Mission',
    [Language.EN]: 'Our Mission',
    [Language.HT]: 'Misyon Nou',
  },
  ourMissionDesc: {
    [Language.FR]: "Notre Mission est de promouvoir la recherche et l'innovation dans le secteur de la microfinance, afin de répondre aux besoins spécifiques des institutions financières et non financières. À travers des formations spécialisées, des recherches approfondies et des stratégies de développement, l’organisme vise à renforcer les pratiques des organisations de microfinance par l’intégration de nouvelles technologies afin d’améliorer leur efficacité et l’impact de leurs services.",
    [Language.EN]: "Our Mission is to promote research and innovation in the microfinance sector to meet the specific needs of financial and non-financial institutions. Through specialized training, in-depth research, and development strategies, the organization aims to strengthen the practices of microfinance organizations by integrating new technologies to improve their efficiency and the impact of their services.",
    [Language.HT]: "Misyon nou se ankouraje rechèch ak inovasyon nan sektè mikwofinans lan pou reponn a bezwen espesifik enstitisyon finansye ak non-finansye yo. Atravè fòmasyon espesyalize, rechèch apwofondi, ak estrateji devlopman, òganizasyon an vize ranfòse pratik òganizasyon mikwofinans yo pa entegrasyon nouvo teknoloji pou amelyore efikasite yo ak enpak sèvis yo.",
  },
  ourVision: {
    [Language.FR]: 'Notre Vision',
    [Language.EN]: 'Our Vision',
    [Language.HT]: 'Vizyon Nou',
  },
  ourVisionDesc: {
    [Language.FR]: 'Être l’organisme de référence en microfinance, reconnu pour son excellence en recherche, en formation et en innovation stratégique, pour une microfinance plus inclusive au service du développement économique et social à l’échelle mondiale.',
    [Language.EN]: 'To be the benchmark organization in microfinance, recognized for its excellence in research, training, and strategic innovation, for a more inclusive microfinance serving economic and social development on a global scale.',
    [Language.HT]: 'Pou nou se òganizasyon referans nan mikwofinans, rekonèt pou ekselans li nan rechèch, fòmasyon, ak inovasyon estratejik, pou yon mikwofinans ki pi enklizif nan sèvis devlopman ekonomik ak sosyal sou yon echèl mondyal.',
  },
  ourTeam: {
    [Language.FR]: 'Notre Equipe',
    [Language.EN]: 'Our Team',
    [Language.HT]: 'Ekip Nou an',
  },
  ourTeamDesc: {
    [Language.FR]: "Notre force réside dans la diversité et l'expertise de notre équipe. Composée de professionnels spécialisés en microfinance, intelligence artificielle (IA), recherche et développement, nous offrons des solutions innovantes pour répondre aux défis du secteur. L'intégration de l'IA dans la microfinance est au cœur de notre approche. Nous explorons les applications de l'IA pour améliorer l'efficacité des institutions financières, gérer les risques, et personnaliser les services aux clients. Par le biais de recherches approfondies, de formations spécialisées et de stratégies de développement, nous soutenons les entreprises à la transition numérique et à l'optimisation de leurs pratiques. Notre équipe s'engage à transformer les défis en opportunités, tout en contribuant à une microfinance plus inclusive et innovante.",
    [Language.EN]: "Our strength lies in the diversity and expertise of our team. Composed of professionals specializing in microfinance, artificial intelligence (AI), research, and development, we offer innovative solutions to meet the sector's challenges. The integration of AI in microfinance is at the heart of our approach. We explore AI applications to improve the efficiency of financial institutions, manage risks, and personalize customer services. Through in-depth research, specialized training, and development strategies, we support companies in their digital transition and the optimization of their practices. Our team is committed to turning challenges into opportunities while contributing to a more inclusive and innovative microfinance.",
    [Language.HT]: "Fòs nou chita nan divèsite ak ekspètiz ekip nou an. Konpoze de pwofesyonèl ki espesyalize nan mikwofinans, entèlijans atifisyèl (IA), rechèch, ak devlopman, nou ofri solisyon inovatif pou reponn a defi sektè a. Entegrasyon IA nan mikwofinans se nan kè apwòch nou an. Nou eksplore aplikasyon IA pou amelyore efikasite enstitisyon finansye yo, jere risk yo, ak pèsonalize sèvis kliyan yo. Atravè rechèch apwofondi, fòmasyon espesyalize, ak estrateji devlopman, nou sipòte konpayi yo nan tranzisyon dijital yo ak optimize pratik yo. Ekip nou an angaje pou transfòme defi yo an opòtinite pandan y ap kontribye nan yon mikwofinans ki pi enklizif ak inovatif.",
  },
  member: {
    [Language.FR]: 'Membre',
    [Language.EN]: 'Member',
    [Language.HT]: 'Manm',
  },
  readMore: {
    [Language.FR]: 'Lire la suite',
    [Language.EN]: 'Read More',
    [Language.HT]: 'Li Plis',
  },
  readLess: {
    [Language.FR]: 'Moins',
    [Language.EN]: 'Read Less',
    [Language.HT]: 'Mwens',
  },
  charlyName: {
    [Language.FR]: 'Charly Camilien VICTOR',
    [Language.EN]: 'Charly Camilien VICTOR',
    [Language.HT]: 'Charly Camilien VICTOR',
  },
  charlyTitle: {
    [Language.FR]: 'Chargé de recherche, Ph.D',
    [Language.EN]: 'Research Officer, Ph.D',
    [Language.HT]: 'Chajman rechèch, Ph.D',
  },
  charlyDesc: {
    [Language.FR]: "Titulaire d’un doctorat en sociologie (Université de Haute-Alsace), et d’un master en économie sociale et solidaire (Université Lumière Lyon 2), double baccalauréat en Sciences Economiques et en Psychologie (Université d’Etat d’Haïti), il est spécialiste en analyse économique et porte un intérêt particulier aux politiques de développement, de coopération et de solidarité, tant à l’échelle internationale que locale, notamment dans des contextes d’urgence et de crise.",
    [Language.EN]: "Holder of a doctorate in sociology (University of Haute-Alsace), and a master's in social and solidarity economy (Lumière Lyon 2 University), double bachelor's in Economic Sciences and Psychology (State University of Haiti), he is a specialist in economic analysis and has a particular interest in development, cooperation, and solidarity policies, both internationally and locally, especially in emergency and crisis contexts.",
    [Language.HT]: "Li gen yon doktora nan sosyoloji (Université de Haute-Alsace), ak yon metriz nan ekonomi sosyal ak solidè (Université Lumière Lyon 2), yon doub lisans nan Syans Ekonomik ak nan Sikoloji (Université d'Etat d'Haïti), li se yon espesyalis nan analiz ekonomik epi li gen yon enterè patikilye nan politik devlopman, koperasyon ak solidarite, tou de sou plan entènasyonal ak lokal, sitou nan kontèks ijans ak kriz.",
  },
  johnyName: {
    [Language.FR]: 'Johny ST LOUIS',
    [Language.EN]: 'Johny ST LOUIS',
    [Language.HT]: 'Johny ST LOUIS',
  },
  johnyTitle: {
    [Language.FR]: 'Formateur',
    [Language.EN]: 'Trainer',
    [Language.HT]: 'Fòmatè',
  },
  johnyDesc: {
    [Language.FR]: "Avec un baccalauréat en Sciences Économiques (Université d’Etat d’Haïti) et une double expertise en économie sociale et solidaire (Master 2, Université Lumière Lyon II) et en développement régional et territorial (Maitrise en cours, UQAR), il allie analyse stratégique et action sur le territoire. Johny possède plus de 10 ans depuis qu’il s’investit dans l’éducation financière, le développement économique territorial et les initiatives collectives. Il accompagne les coopératives, les VSLA et les projets communautaires dans leur structuration et leur accès au financement.",
    [Language.EN]: "With a bachelor's degree in Economic Sciences (State University of Haiti) and dual expertise in social and solidarity economy (Master 2, Lumière Lyon II University) and in regional and territorial development (Master's in progress, UQAR), he combines strategic analysis and territorial action. Johny has over 10 years of experience in financial education, territorial economic development, and collective initiatives. He supports cooperatives, VSLAs, and community projects in their structuring and access to financing.",
    [Language.HT]: "Ak yon lisans nan Syans Ekonomik (Université d'Etat d'Haïti) ak yon ekspètiz doub nan ekonomi sosyal ak solidè (Master 2, Université Lumière Lyon II) ak nan devlopman rejyonal ak teritoryal (Metriz an kou, UQAR), li konbine analiz estratejik ak aksyon sou teritwa a. Johny gen plis pase 10 zan depi li envesti nan edikasyon finansye, devlopman ekonomik teritoryal ak inisyativ kolektif. Li akonpaye koperativ, VSLA ak pwojè kominotè nan estriktirasyon yo ak aksè yo nan finansman.",
  },
  johnsonName: {
    [Language.FR]: 'Johnson OCCIN',
    [Language.EN]: 'Johnson OCCIN',
    [Language.HT]: 'Johnson OCCIN',
  },
  johnsonTitle: {
    [Language.FR]: 'Formateur',
    [Language.EN]: 'Trainer',
    [Language.HT]: 'Fòmatè',
  },
  johnsonDesc: {
    [Language.FR]: "Expert en microfinance avec plus de dix ans d’expérience dans l’analyse de crédit, Johnson est titulaire d’un Master en microfinance (Université Libre de Bruxelles) et d’un baccalauréat en administration publique (Université d’Etat d’Haïti). Son parcours allie une solide expertise technique à un engagement marqué pour l'inclusion financière et le développement, particulièrement dans les contextes émergents.",
    [Language.EN]: "An expert in microfinance with over ten years of experience in credit analysis, Johnson holds a Master's in microfinance (Free University of Brussels) and a bachelor's degree in public administration (State University of Haiti). His career combines solid technical expertise with a strong commitment to financial inclusion and development, particularly in emerging contexts.",
    [Language.HT]: "Ekspè nan mikwofinans ak plis pase dis ane eksperyans nan analiz kredi, Johnson gen yon Metriz nan mikwofinans (Université Libre de Bruxelles) ak yon lisans nan administrasyon piblik (Université d'Etat d'Haïti). Karyè li konbine yon gwo ekspètiz teknik ak yon angajman fò pou enklizyon finansye ak devlopman, patikilyèman nan kontèks émergents.",
  },
  robinsonName: {
    [Language.FR]: 'Robinson PIERRE-GILLES',
    [Language.EN]: 'Robinson PIERRE-GILLES',
    [Language.HT]: 'Robinson PIERRE-GILLES',
  },
  robinsonTitle: {
    [Language.FR]: 'Chargé des opérations',
    [Language.EN]: 'Operations Manager',
    [Language.HT]: 'Chajman Operasyon',
  },
  robinsonDesc: {
    [Language.FR]: "Titulaire d’une licence en sciences administratives, Robinson Pierre-Gilles se spécialise dans l’analyse financière, la conformité et l’audit. Il possède plus de 15 ans d’expériences dans la formation et le développement des coopératives en Haïti. Son parcours allie une solide expertise technique à un engagement marqué dans l’accompagnement des entreprises notamment l’optimisation de leurs ressources et la prise de décisions stratégiques.",
    [Language.EN]: "Holder of a degree in administrative sciences, Robinson Pierre-Gilles specializes in financial analysis, compliance, and auditing. He has over 15 years of experience in training and developing cooperatives in Haiti. His career combines solid technical expertise with a strong commitment to supporting businesses, particularly in optimizing their resources and making strategic decisions.",
    [Language.HT]: "Li gen yon lisans nan syans administratif, Robinson Pierre-Gilles espesyalize nan analiz finansye, konfòmite ak odit. Li gen plis pase 15 ane eksperyans nan fòmasyon ak devlopman koperativ an Ayiti. Karyè li konbine yon gwo ekspètiz teknik ak yon angajman fò nan sipòte biznis, patikilyèman nan optimize resous yo ak pran desizyon estratejik.",
  },
  walnerName: {
    [Language.FR]: 'Walner SAINRISMA',
    [Language.EN]: 'Walner SAINRISMA',
    [Language.HT]: 'Walner SAINRISMA',
  },
  walnerTitle: {
    [Language.FR]: 'Directeur/Fondateur',
    [Language.EN]: 'Director/Founder',
    [Language.HT]: 'Direktè/Fondatè',
  },
  walnerDesc: {
    [Language.FR]: "Titulaire d’un baccalauréat en Sciences comptables (Université d’Etat d’Haïti) et une double maitrise en économie sociale et solidaire (Université Lumière 2) ainsi qu’en développement régional et territorial (Université du Québec à Rimouski). Il possède plus de dix ans d’expérience dans le secteur de la microfinance et en développement communautaire. Il a travaillé aux côtés d’organisations de base, de coopératives et d’initiatives locales visant à renforcer l’autonomie économique des communautés. Passionné par les formes associatives et les alternatives économiques, il fonde MicroFormS afin de promouvoir la formation, l’accompagnement et la recherche en microfinance",
    [Language.EN]: "Holder of a bachelor's degree in Accounting Sciences (State University of Haiti) and a double master's in social and solidarity economy (Lumière 2 University) as well as in regional and territorial development (University of Quebec at Rimouski). He has over ten years of experience in the microfinance sector and in community development. He has worked alongside grassroots organizations, cooperatives, and local initiatives aimed at strengthening the economic autonomy of communities. Passionate about associative forms and economic alternatives, he founded MicroFormS to promote training, support, and research in microfinance.",
    [Language.HT]: "Li gen yon lisans nan Syans Kontablite (Université d'Etat d'Haïti) ak yon metriz doub nan ekonomi sosyal ak solidè (Université Lumière 2) epitou nan devlopman rejyonal ak teritoryal (Université du Québec à Rimouski). Li gen plis pase dis ane eksperyans nan sektè mikwofinans lan ak nan devlopman kominotè. Li te travay bò kote òganizasyon de baz, koperativ, ak inisyativ lokal ki vize ranfòse otonomi ekonomik kominote yo. Pasyone pou fòm asosyatif ak altènativ ekonomik, li te fonde MicroFormS pou ankouraje fòmasyon, akonpayman, ak rechèch nan mikwofinans.",
  },
  ginelName: {
    [Language.FR]: 'Ginel DORLEON',
    [Language.EN]: 'Ginel DORLEON',
    [Language.HT]: 'Ginel DORLEON',
  },
  ginelTitle: {
    [Language.FR]: "Chargé de projets et de recherche",
    [Language.EN]: 'Project and Research Officer',
    [Language.HT]: "Ofisye Pwojè ak Rechèch",
  },
  ginelDesc: {
    [Language.FR]: "Ph.D. en Informatique (Intelligence Artificielle) de l'Université Paul Sabatier, France. Scientifique de recherche passionné par l'IA, axé sur l'utilisation de l'intelligence artificielle pour résoudre des problèmes mondiaux complexes.",
    [Language.EN]: 'Ph.D. in Computer Science (Artificial Intelligence) from Paul Sabatier University, France. Passionate AI Research Scientist focused on using artificial intelligence to solve complex global problems.',
    [Language.HT]: "Ph.D. nan Syans Enfòmatik (Entèlijans Atifisyèl) nan Inivèsite Paul Sabatier, Lafrans. Syantis Rechèch pasyone nan IA, ki konsantre sou itilizasyon entèlijans atifisyèl pou rezoud pwoblèm konplèks mondyal.",
  },

  // Formations Page
  formationsTitle: {
    [Language.FR]: "Façonner l'Avenir de la Microfinance",
    [Language.EN]: 'Shaping the Future of Microfinance',
    [Language.HT]: 'Fòme Lavni Mikwofinans lan',
  },
  formationsSubtitle: {
    [Language.FR]: "Préparez l'avenir de la microfinance avec l'innovation et l'expertise.",
    [Language.EN]: 'Prepare for the future of microfinance with innovation and expertise.',
    [Language.HT]: 'Prepare lavni mikwofinans lan ak inovasyon ak ekspètiz.',
  },
  formationsStrategicDesc: {
    [Language.FR]: 'Développez des stratégies avancées pour naviguer dans les complexités du secteur financier et piloter la croissance institutionnelle.',
    [Language.EN]: 'Develop advanced strategies to navigate the complexities of the financial sector and drive institutional growth.',
    [Language.HT]: 'Devlope estrateji avanse pou navige nan konpleksite sektè finansye a epi kondwi kwasans enstitisyonèl.',
  },
  formationsMicrofinanceDesc: {
    [Language.FR]: 'Formation complète couvrant les principes fondamentaux et les sujets avancés des opérations et de la gestion de la microfinance.',
    [Language.EN]: 'Comprehensive training covering the fundamentals and advanced topics in microfinance operations and management.',
    [Language.HT]: 'Fòmasyon konplè ki kouvri fondamantal yo ak sijè avanse nan operasyon ak jesyon mikwofinans.',
  },
  formationsAiDesc: {
    [Language.FR]: "Apprenez à tirer parti de l'intelligence artificielle pour optimiser l'évaluation des risques, le service client et l'analyse des données en microfinance.",
    [Language.EN]: 'Learn how to leverage Artificial Intelligence to optimize risk assessment, customer service, and data analysis in microfinance.',
    [Language.HT]: 'Aprann kijan pou pwofite de Entèlijans Atifisyèl pou optimize evalyasyon risk, sèvis kliyan, ak analiz done nan mikwofinans.',
  },
  buildIt: {
    [Language.FR]: 'Construisez-le',
    [Language.EN]: 'Build It',
    [Language.HT]: 'Konstwi li',
  },
  strategicTraining: {
    [Language.FR]: 'Formation Stratégique',
    [Language.EN]: 'Strategic Training',
    [Language.HT]: 'Fòmasyon Estratejik',
  },
  microfinanceTraining: {
    [Language.FR]: 'Formation sur la MicroFinance',
    [Language.EN]: 'MicroFinance Training',
    [Language.HT]: 'Fòmasyon sou Mikwofinans',
  },
  aiInFinance: {
    [Language.FR]: 'IA en Finance',
    [Language.EN]: 'AI in Finance',
    [Language.HT]: 'IA nan Finans',
  },

  // Blog Page
  blogTitleAi: {
    [Language.FR]: "Comment l'Intelligence Artificielle Révolutionne la Microfinance",
    [Language.EN]: 'How Artificial Intelligence is Revolutionizing Microfinance',
    [Language.HT]: 'Kijan Entèlijans Atifisyèl Ap Revolisyone Mikwofinans',
  },
  blogDescAi: {
    [Language.FR]: "La microfinance, qui repose sur l’idée d’offrir des services financiers aux populations exclues, est à un tournant majeur grâce à l’intelligence artificielle (IA). De l’amélioration de l’évaluation du risque de crédit à la personnalisation des services, l’IA ouvre de nouvelles perspectives. Explorez comment l’IA peut transformer la microfinance et pourquoi elle représente un levier stratégique pour l’inclusion financière mondiale.",
    [Language.EN]: "Microfinance, based on offering financial services to excluded populations, is at a major turning point thanks to artificial intelligence (AI). From improving credit risk assessment to personalizing services, AI opens up new prospects. Explore how AI can transform microfinance and why it represents a strategic lever for global financial inclusion.",
    [Language.HT]: "Mikwofinans, ki baze sou ofri sèvis finansye bay popilasyon ki eskli, se nan yon gwo chanjman gras a entèlijans atifisyèl (IA). Soti nan amelyore evalyasyon risk kredi rive nan pèsonalize sèvis, IA louvri nouvo pèspektiv. Eksplore kijan IA ka transfòme mikwofinans ak poukisa li reprezante yon levye estratejik pou enklizyon finansye mondyal.",
  },
  blogContentAi: {
    [Language.FR]: "Comment l'IA peut transformer la microfinance ?\n...",
    [Language.EN]: "How can AI transform microfinance?\n...",
    [Language.HT]: "Kijan IA ka transfòme mikwofinans?\n...",
  },
  readTime5min: {
    [Language.FR]: '5 min temps de lecture',
    [Language.EN]: '5 min read time',
    [Language.HT]: '5 min tan lekti',
  },
  blogTitlePioneer: {
    [Language.FR]: 'MicroFormS : Pionnier de la recherche en microfinance et technologies innovantes',
    [Language.EN]: 'MicroFormS: Pioneer in microfinance research and innovative technologies',
    [Language.HT]: 'MicroFormS: Pyonye nan rechèch mikwofinans ak teknoloji inovatif',
  },
  blogDescPioneer: {
    [Language.FR]: "Découvrez comment MicroFormS, fondé par des experts en microfinance, répond aux besoins des institutions financières. Grâce à des études approfondies et des formations de qualité, nous intégrons des technologies avancées, comme l'intelligence artificielle, pour transformer le secteur de la microfinance et relever ses défis.",
    [Language.EN]: "Discover how MicroFormS, founded by microfinance experts, meets the needs of financial institutions. Through in-depth studies and quality training, we integrate advanced technologies, like artificial intelligence, to transform the microfinance sector and meet its challenges.",
    [Language.HT]: "Dekouvri kijan MicroFormS, ki te fonde pa ekspè nan mikwofinans, reponn a bezwen enstitisyon finansye yo. Atravè etid apwofondi ak fòmasyon kalite, nou entegre teknoloji avanse, tankou entèlijans atifisyèl, pou transfòme sektè mikwofinans lan epi relevé defi li yo.",
  },
  readTime1min: {
    [Language.FR]: '1 min temps de lecture',
    [Language.EN]: '1 min read time',
    [Language.HT]: '1 min tan lekti',
  },
  blogTitleInnovation: {
    [Language.FR]: 'MicroFormS : Pionnier de la recherche en microfinance et innovation technologique',
    [Language.EN]: 'MicroFormS: Pioneer in microfinance research and technological innovation',
    [Language.HT]: 'MicroFormS: Pyonye nan rechèch mikwofinans ak inovasyon teknolojik',
  },
  blogDescInnovation: {
    [Language.FR]: "Découvrez comment MicroFormS, fondé par des experts en microfinance, transforme le secteur grâce à des études approfondies, des formations de qualité et l'intégration de technologies avancées comme l'intelligence artificielle pour répondre aux besoins des institutions de microfinance et des acteurs non financiers.",
    [Language.EN]: "Discover how MicroFormS, founded by microfinance experts, is transforming the sector through in-depth studies, quality training, and the integration of advanced technologies like artificial intelligence to meet the needs of microfinance institutions and non-financial actors.",
    [Language.HT]: "Dekouvri kijan MicroFormS, ki te fonde pa ekspè nan mikwofinans, ap transfòme sektè a grasa etid apwofondi, fòmasyon kalite, ak entegrasyon teknoloji avanse tankou entèlijans atifisyèl pou reponn a bezwen enstitisyon mikwofinans ak aktè non-finansye yo.",
  },
  blogTagsAI: {
    [Language.FR]: 'IA & MICROFINANCE',
    [Language.EN]: 'AI & MICROFINANCE',
    [Language.HT]: 'IA & MIKWOFINANS',
  },
  blogTagsExpertise: {
    [Language.FR]: 'Microfinance, Innovation, Expertise',
    [Language.EN]: 'Microfinance, Innovation, Expertise',
    [Language.HT]: 'Mikwofinans, Inovasyon, Ekspètiz',
  },

  // Search Results Page
  searchResultsFor: {
    [Language.FR]: 'Résultats de recherche pour',
    [Language.EN]: 'Search results for',
    [Language.HT]: 'Rezilta rechèch pou',
  },
  noResultsFound: {
    [Language.FR]: 'Aucun résultat trouvé.',
    [Language.EN]: 'No results found.',
    [Language.HT]: 'Pa gen rezilta.',
  },
  searchResultTypePage: {
    [Language.FR]: 'Contenu de la page',
    [Language.EN]: 'Page Content',
    [Language.HT]: 'Kontni Paj',
  },
  searchResultTypeService: {
    [Language.FR]: 'Service',
    [Language.EN]: 'Service',
    [Language.HT]: 'Sèvis',
  },
  searchResultTypeTeam: {
    [Language.FR]: 'Membre de l\'équipe',
    [Language.EN]: 'Team Member',
    [Language.HT]: 'Manm Ekip',
  },
  searchResultTypeFormation: {
    [Language.FR]: 'Formation',
    [Language.EN]: 'Training',
    [Language.HT]: 'Fòmasyon',
  },
  searchResultTypeBlog: {
    [Language.FR]: 'Article de blog',
    [Language.EN]: 'Blog Post',
    [Language.HT]: 'Atik Blòg',
  },
  
  // Language Names
  langNameFR: {
    [Language.FR]: 'Français',
    [Language.EN]: 'French',
    [Language.HT]: 'Franse',
  },
  langNameEN: {
    [Language.FR]: 'Anglais',
    [Language.EN]: 'English',
    [Language.HT]: 'Angle',
  },
  langNameHT: {
    [Language.FR]: 'Créole Haïtien',
    [Language.EN]: 'Haitian Creole',
    [Language.HT]: 'Kreyòl Ayisyen',
  },
};
