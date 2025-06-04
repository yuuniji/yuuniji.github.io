// 获取浏览器语言
function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.split('-')[0]; // 获取主要语言代码
}

// 获取存储的语言偏好
function getStoredLanguage() {
    return localStorage.getItem('preferredLanguage');
}

// 设置语言偏好
function setStoredLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
}

// 重定向到对应语言版本
function redirectToLanguage(lang) {
    const currentPath = window.location.pathname;
    const supportedLanguages = ['zh', 'en', 'ja'];
    
    // 如果当前路径已经包含语言代码，则替换它
    const pathParts = currentPath.split('/');
    if (supportedLanguages.includes(pathParts[1])) {
        pathParts[1] = lang;
    } else {
        // 否则在路径开头插入语言代码
        pathParts.splice(1, 0, lang);
    }
    
    const newPath = pathParts.join('/');
    window.location.href = newPath;
}

// 初始化语言设置
function initLanguage() {
    const storedLang = getStoredLanguage();
    if (storedLang) {
        // 如果用户之前选择过语言，使用存储的语言
        redirectToLanguage(storedLang);
    } else {
        // 否则使用浏览器语言
        const browserLang = getBrowserLanguage();
        const supportedLanguages = ['zh', 'en', 'ja'];
        
        if (supportedLanguages.includes(browserLang)) {
            redirectToLanguage(browserLang);
        } else {
            // 如果浏览器语言不支持，使用默认语言（中文）
            redirectToLanguage('zh');
        }
    }
}

// 页面加载完成后初始化语言设置
document.addEventListener('DOMContentLoaded', initLanguage); 