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

const sleep =  (_ms) => {
    return new Promise(resolve => setTimeout(resolve, _ms));
}

const closeMenu = async (_id, _className, _ms,_subsequentFunction, _subsequentFunctionArgs)=>{
    document.getElementById(_id).classList.add(_className);
    await sleep(_ms);
    _subsequentFunction(_subsequentFunctionArgs);
}


const getProjects = (_project, id) => {
    let project = {};
    project["id"] = _project.id;
    project["name"] = _project.name;
    project["path"] = _project.clone_url;
    project["languages"] = _project.topics;
    project["description"] = _project.description;
    return project;
    
}

const getPosition = (_offset, _radius, _division) => {
    return [Math.cos(_offset*2*Math.PI/_division)*_radius+_radius,Math.sin(_offset*2*Math.PI/_division)*_radius+_radius]
  }


export { openWindow, sleep, closeMenu, getProjects, getPosition };
