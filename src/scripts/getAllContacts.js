// export const getAllContacts = async () => {};

// console.log(await getAllContacts());

import { readContacts } from '../utils/readContacts';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.error('Error fetching contacts:', error);
  }
};

getAllContacts();
