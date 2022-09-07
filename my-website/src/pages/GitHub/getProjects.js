
export const getProjects = (_project) => {
    let project = {};
    project["name"] = _project.name;
    project["path"] = _project.clone_url;
    project["languages"] = _project.topics;
    project["description"] = _project.description;
    return project;
    
}
