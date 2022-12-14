var langstrings = {
    "de" :{
        "lang": "Sprache:",
        "softdev": "Softwareentwickler",
        "johndoe": "Jonas Döner",
        "aboutme": "Über Mich",
        "aboutmetext": "Willkommen! Mein Name ist Vladimir Ovchinnikov und ich bin Back-End-Softwareentwickler. Ich unterstütze Sie gerne bei Softwarelösungen, Automatisierung und Entwicklung für Ihr Projekt.",
        "description": "Mein Profil",
        "descriptiontext1": "Aufbauend auf meinem Studium der Informatik, welches ich mit einem Bachelor abschloss, habe ich bereits 8 Jahre Erfahrung mit der Arbeit im Softwareentwicklungsumfeld. Hierbei lag mein Fokus auf der Entwicklung im Backend-Bereich, bei der ich ausreichend Erfahrung mit C#.NET und VB.NET, Oracle-Datenbanken sowie den Umgang mit Versionskontrollsystemen wie Git und SVN sammeln konnte.",
        "descriptiontext2": "Darüber hinaus hatte ich ebenfalls die Möglichkeit, an der Entwicklung von REST-API's mitzuarbeiten.",
        "descriptiontext3": "Des Weiteren habe ich Erfahrung in der Arbeit mit dem Docker-Umfeld, sowie dem Umgang und der Verwaltung von Azure DevOps.",
        "descriptiontext4": "Falls Sie mehr Details über meine Fähigkeiten erfahren wollen, können Sie meinen ",
        "cvlink": "https://raw.githubusercontent.com/wowanator/wowanator.github.io/main/assets/files/CV_de.pdf",
        "cvlinktext": "Lebenslauf downloaden.",
        "skills": "Meine Top-Skills",
        "contact": "Kontaktieren Sie mich",
        "msg": "Nachricht",
    },
    "en": {
        "lang": "Language:",
        "softdev": "Software developer",
        "johndoe": "John Doe",
        "aboutme": "About Me",
        "aboutmetext": "Welcome! My name is Vladimir Ovchinnikov and I am a back-end software developer. I will gladly support you with software solutions, automatization and development for your project.",
        "description": "My Profile",
        "descriptiontext1": "Building upon my degree in Computer Science, which I completed with a Bachelor of Science, I already have 8 years of experience of working in the software development environment. Herein my focus was in development of back-end systems, where I could gain sufficient experience in working with C#.NET and VB.NET, Oracle databases as well as the usage of version control systems such as Git and SVN.",
        "descriptiontext2": "Furthermore, I also had the possibility to collaborate on development of REST-API's.",
        "descriptiontext3": "In addition, I have experience in working with Docker and its' container environment, as well as the handling and management of Azure DevOps.",
        "descriptiontext4": "If you want to evaluate my skills in detail, you are free to ",
        "cvlink": "https://raw.githubusercontent.com/wowanator/wowanator.github.io/main/assets/files/CV_en.pdf",
        "cvlinktext": "download my CV.",
        "skills": "My Top Skills",
        "contact": "Get In Touch With Me",
        "msg": "Message",
    }
};
$(function(){
    $("span").translate({
    default_lang:"en",
    langs:"#lang-switch",
    source: langstrings
    });
});
$(function(){
    $("a").translate({
    default_lang:"en",
    langs:"#lang-switch",
    source: langstrings
    })
})
