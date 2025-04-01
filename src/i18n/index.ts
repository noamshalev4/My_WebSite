import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
      },
      hero: {
        greeting: "Hi, I'm",
        name: "Noam Shalev",
        role: "Full Stack Developer",
        description: "I build exceptional digital experiences.",
      },
      about: {
        title: "About Me",
        description:
          "Passionate developer with experience in building modern web applications.",
      },
      projects: {
        title: "My Projects",
        viewProject: "View Project",
        viewGithub: "View Code",
      },
      skills: {
        title: "Skills",
      },
      contact: {
        title: "Get in Touch",
        email: "Email",
        message: "Message",
        send: "Send Message",
      },
      footer: {
        name: "Noam Shalev",
      },
    },
  },
  he: {
    translation: {
      nav: {
        home: "בית",
        about: "אודות",
        projects: "פרויקטים",
        skills: "כישורים",
        contact: "צור קשר",
      },
      hero: {
        greeting: "היי, אני",
        name: "נועם שלו",
        role: "מפתח פול סטאק",
        description: "אני בונה חוויות דיגיטליות יוצאות דופן.",
      },
      about: {
        title: "אודותיי",
        description: "מפתח נלהב עם ניסיון בבניית אפליקציות ווב מודרניות.",
      },
      projects: {
        title: "הפרויקטים שלי",
        viewProject: "צפה בפרויקט",
        viewGithub: "צפה בקוד",
      },
      skills: {
        title: "כישורים",
      },
      contact: {
        title: "צור קשר",
        email: "אימייל",
        message: "הודעה",
        send: "שלח הודעה",
      },
      footer: {
        name: "נועם שלו",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
