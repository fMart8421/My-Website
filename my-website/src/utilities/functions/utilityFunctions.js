const openWindow = (_window) => {
    switch (_window) {
        case "linkedin":
            window.open("https://www.linkedin.com/in/f%C3%A1bio-martins-94aa0923a/");
            break;
        case "instagram":
            window.open("https://www.instagram.com/fabio_mart0");
            break;
        case "email":
            window.location.href = "mailto:fabio.martins.work@gmail.com";
            break;
        case "github":
            window.open("https://github.com/fMart8421");
            break;
        default:
            return;
    }
}

export { openWindow };