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
        description: "I build exceptional digital experiences as a Full Stack Developer with expertise in Java, Spring, React, and TypeScript. I specialize in building scalable, user-centric applications with a focus on both backend functionality and frontend design. I deliver high-quality solutions tailored to client needs, ensuring performance, responsiveness, and maintainability in every project.",
      },
      about: {
        title: 'About Me',
        description: 'Passionate developer with experience in building modern web applications.',
        frontend: {
          title: 'Frontend Development',
          description: 'Creating responsive and interactive user interfaces with modern frameworks and tools.'
        },
        backend: {
          title: 'Backend Development',
          description: 'Building scalable server-side applications and RESTful APIs.'
        },
        performance: {
          title: 'Web Performance',
          description: 'Optimizing web applications for speed, accessibility, and user experience.'
        }
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
        greeting: 'היי, אני',
        name: 'נועם שלו',
        role: 'מפתח פול סטאק',
        description: 'אני בונה חוויות דיגיטליות יוצאות דופן כמפתח Full Stack עם מומחיות ב-Java, Spring, React ו-TypeScript. אני מתמחה בבניית אפליקציות סקלאביליות וממוקדות משתמש, עם דגש על פונקציונליות צד-שרת ועיצוב צד-לקוח. אני מספק פתרונות איכותיים המותאמים לצרכים של הלקוח, תוך שמירה על ביצועים, רספונסיביות ויכולת תחזוקה בכל פרויקט.',
      },
      about: {
        title: 'אודותיי',
        description: 'אני מפתח פולסטאק ג\'וניור עם התמחות ב-<span style="direction: ltr; unicode-bidi: embed;">Java</span>, <span style="direction: ltr; unicode-bidi: embed;">Spring Boot</span>, <span style="direction: ltr; unicode-bidi: embed;">React</span> ו-<span style="direction: ltr; unicode-bidi: embed;">SQL</span>. לאחר קריירה כשף-סו-שף, אני מביא איתי יכולת הסתגלות, כישורי מנהיגות ופתרון בעיות לעולם הפיתוח. בשנת 2024 סיימתי קורס פולסטאק אינטנסיבי של 760 שעות במכללת <span style="direction: ltr; unicode-bidi: embed;">John Bryce</span> עם ממוצע 90, שבו רכשתי ניסיון מעשי הן בצד הלקוח והן בצד השרת. כיום אני מתמחה בבניית יישומי ווב איכותיים וידידותיים למשתמש, עם דגש על קוד נקי, עיצוב אינטואיטיבי ופתרונות מבוססי <span style="direction: ltr; unicode-bidi: embed;">AI</span>.',
        frontend: {
          title: 'פיתוח צד לקוח',
          description: 'יצירת ממשקי משתמש רספונסיביים ואינטראקטיביים עם כלים ופריימוורקים מודרניים'
        },
        backend: {
          title: 'פיתוח צד שרת',
          description: 'בניית אפליקציות צד שרת סקלאביליות ו-APIs'
        },
        performance: {
          title: 'ביצועי רשת',
          description: ''
        }
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
