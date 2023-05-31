// Obtener referencias a los elementos del DOM
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const addressInput = document.getElementById('addressInput');
const contactList = document.getElementById('contactList');

// Obtener los contactos desde el almacenamiento local o inicializar si no existen
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Función para renderizar los contactos en la lista
const renderContacts = () => {
  contactList.innerHTML = '';
  contacts.forEach((contact, index) => {
    const listItem = document.createElement('li');
    const nameElement = document.createElement('span');
    nameElement.textContent = 'Nombre: ' + contact.name;
    const phoneElement = document.createElement('span');
    phoneElement.textContent = 'Teléfono: ' + contact.phone;
    const addressElement = document.createElement('span');
    addressElement.textContent = 'Dirección: ' + contact.address;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add('delete-button');

    listItem.appendChild(nameElement);
    listItem.appendChild(phoneElement);
    listItem.appendChild(addressElement);
    listItem.appendChild(deleteButton);
    contactList.appendChild(listItem);

    // Agregar evento para eliminar contacto
    deleteButton.addEventListener('click', () => {
      contacts.splice(index, 1);
      renderContacts();
      saveContacts();
    });
  });
};

// Función para guardar los contactos
const saveContacts = () => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

// Función para agregar un contacto
const addContact = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Evitar el comportamiento predeterminado del Enter (enviar formulario)

    if (document.activeElement === nameInput) {
      phoneInput.focus();
    } else if (document.activeElement === phoneInput) {
      addressInput.focus();
    } else if (document.activeElement === addressInput) {
      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      const address = addressInput.value.trim();

      if (name !== '' && phone !== '' && address !== '') {
        const contact = {
          name: name,
          phone: phone,
          address: address
        };

        contacts.push(contact);
        renderContacts();
        saveContacts();

        nameInput.value = '';
        phoneInput.value = '';
        addressInput.value = '';
        nameInput.focus();
      } else {
        alert('Todos los campos son obligatorios');
      }
    }
  }
};

// Agregar evento al input de nombre para agregar contactos al presionar Enter
nameInput.addEventListener('keydown', addContact);
phoneInput.addEventListener('keydown', addContact);
addressInput.addEventListener('keydown', addContact);

// Renderizar los contactos al cargar la página
document.addEventListener('DOMContentLoaded', renderContacts);