const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = 1;
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  const id = parseInt(event.target.id);
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }

};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

if(document.querySelector(".btn-danger")){
  delBtn=document.querySelectorAll('.btn-danger')
  for (let i = 0; i < delBtn.length; i++) {
    delBtn[i].addEventListener("click", delButtonHandler)
  }
  // document
  // .querySelector('.btn-danger')
  // .addEventListener('click', delButtonHandler);
}