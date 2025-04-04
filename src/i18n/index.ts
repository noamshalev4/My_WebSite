import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        greeting: "Hi, I'm",
        name: "Noam Shalev",
        role: "Full Stack Developer",
        description: "I build exceptional digital experiences as a Full Stack Developer with expertise in Java, Spring, React, and TypeScript. I specialize in building scalable, user-centric applications with a focus on both backend functionality and frontend design. I deliver high-quality solutions tailored to client needs, ensuring performance, responsiveness, and maintainability in every project.",
      },
      about: {
        title: 'About Me',
        description: 'I am a junior Full Stack Developer specializing in Java, Spring Boot, React, and SQL. Following a career as a sous-chef, I bring adaptability, leadership skills, and a strong problem-solving mindset into the world of software development. In 2024, I completed an intensive 760-hour Full Stack course at John Bryce College with an average grade of 90, gaining hands-on experience in both frontend and backend development. Today, I focus on building high-quality, user-friendly web applications, with an emphasis on clean code, intuitive design, and AI-driven solutions',
        frontend: {
          title: 'Frontend Development',
          description: 'Creating responsive and interactive user interfaces with modern frameworks and tools'
        },
        backend: {
          title: 'Backend Development',
          description: 'Building scalable server-side applications and RESTful APIs'
        },
        performance: {
          title: 'Web Performance',
          description: 'Optimizing web applications for speed, accessibility, and user experience'
        }
      },
      projects: {
        title: "My Top Projects",
        viewProject: "View Project",
        viewGithub: "View Code",
      },
      skills: {
        title: "Skills",
      },
      contact: {
        title: "Get in Touch",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
      },
      footer: {
        name: "Noam Shalev",
        rights: "All rights reserved."
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
        description: "אני בונה חוויות דיגיטליות יוצאות דופן כמפתח פול סטאק עם התמחות ב־ג'אווה, ספרינג, ריאקט ו־טייפסקריפט. אני מתמחה בבניית אפליקציות ניתנות להרחבה וממוקדות משתמש, עם דגש על פונקציונליות בצד השרת ועיצוב בצד הלקוח. אני מספק פתרונות איכותיים המותאמים לצרכים של הלקוח, תוך שמירה על ביצועים, תגובתיות ויכולת תחזוקה בכל פרויקט.",
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
          description: 'בניית יישומי צד שרת בעלי יכולת התרחבות, תכנון ויישום ממשקי תקשורת יעילים, וניהול תקשורת מאובטחת עם מסדי נתונים'
        },
        performance: {
          title: 'ביצועי רשת',
          description: 'אופטימיזציה של זמני טעינה, שיפור ביצועי צד לקוח ושרת, ושימוש בטכניקות מתקדמות להאצת תגובתיות המערכת וחוויית המשתמש'
        }
      },
      projects: {
        title: "הפרויקטים המובחרים שלי",
        viewProject: "צפה בפרויקט",
        viewGithub: "צפה בקוד",
      },
      skills: {
        title: "כישורים",
      },
      contact: {
        title: "צור קשר",
        name: "שם",
        email: "אימייל",
        message: "הודעה",
        send: "שלח הודעה",
      },
      footer: {
        name: "נועם שלו",
        rights: "כל הזכויות שמורות."
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