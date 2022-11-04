
window.addEventListener('load', getProjects());
const projects = document.getElementById('grid-container');

function getProjects(){
    fetch('http://localhost:3000/allprojects')
        .then(data => data.json())
        .then((projects) => {
            if(projects.length > 0){
                projects.map(renderProjects);
            }
            else{
                const content = document.getElementById('projects');
                const response = `<h6 style="margin-top:20px">No projects added.</h6>`
                content.innerHTML = content.innerHTML + response;
            }
        });
}

function renderProjects(project) {
    const projectsHtml = projects.innerHTML;
    const newProject = `
    <div class="grid-item">
        <div class="card" style="width: 22rem;">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 ${(project.priority.toLowerCase())}">
                    <i class="bi bi-star-fill "></i> 
                    ${project.priority} Priority
                </h6>
                <h5 class="card-title">${project.title}</h5>
                
                <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div class="info-grid">
                    <p class="card-text">
                        <i class="bi bi-calendar-range"></i>
                        ${(project.due.split("T")[0])}
                    </p>
                    <p class="card-text">
                        ● ${(project.status)}
                    </p>
                </div>
                <button type="button" class="btn btn-outline-success card-btn" onclick="handleUpdate('${project._id}')">Mark as Completed</button>
                <button type="button" class="btn btn-outline-dark card-btn" onclick="handleDelete('${project._id}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>`;
    projects.innerHTML = projectsHtml + newProject;
}


function handleUpdate(id){
    fetch('http://localhost:3000/updateproject', 
    {
        method: 'PATCH',
        body: JSON.stringify({ id: id }),
        headers: { 'Accept': 'application/json',
        'Content-Type': 'application/json' }
    })
    .then((response) => {
        projects.innerHTML = ``;
        getProjects()
    });
}

function handleDelete(id){
    fetch('http://localhost:3000/deleteproject', 
    {
        method: 'DELETE',
        body: JSON.stringify({ id: id }),
        headers: { 'Accept': 'application/json',
        'Content-Type': 'application/json' }
    })
    .then((response) => {
        projects.innerHTML = ``;
        getProjects()
    });
}
