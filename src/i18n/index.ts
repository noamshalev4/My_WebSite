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
        title: "About Me",
        description: "I am a Junior Full Stack Developer with expertise in Java, Spring Boot, React, and SQL. Transitioning from a career as a Sous Chef, I bring adaptability, leadership, and problem-solving skills to software development. In 2024, I completed a 760-hour Full Stack Development course at John Bryce Academy with a GPA of 90, gaining hands-on experience in frontend and backend technologies. Currently, I specialize in building high-quality, user-friendly web applications with a focus on clean code, intuitive design, and AI-driven solutions."
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
        title: "אודותיי",
        description: "אני מפתח פולסטאק ג'וניור עם התמחות ב-Java, Spring Boot, React ו-SQL. לאחר קריירה כשף-סו-שף, אני מביא איתי יכולת הסתגלות, כישורי מנהיגות ופתרון בעיות לעולם הפיתוח. בשנת 2024 סיימתי קורס פולסטאק אינטנסיבי של 760 שעות במכללת John Bryce עם ממוצע 90, שבו רכשתי ניסיון מעשי הן בצד הלקוח והן בצד השרת. כיום אני מתמחה בבניית יישומי ווב איכותיים וידידותיים למשתמש, עם דגש על קוד נקי, עיצוב אינטואיטיבי ופתרונות מבוססי AI."
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
