import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const data = JSON.stringify(updatedContacts, null, 2);
  try {
    await fs.appendFile(PATH_DB, data, 'utf8');
    console.log('Data successfully written to file!');
  } catch (error) {
    console.log('Error writing to file: ', error);
  }
};
