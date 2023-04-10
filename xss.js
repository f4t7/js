fetch('https://www.elo7.com.br/user/info.do?command=edit')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const fullName = doc.querySelector('input[name="data.fullName"]').value;
    const email = doc.querySelector('input[name="data.email"]').value;
    alert(`Full Name: ${fullName}\nEmail: ${email}`);
  })
  .catch(error => console.log(error));
