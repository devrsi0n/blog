import authors from '../../content/authors.json';
import { IAuthor } from '../types';

export function getAuthors(): IAuthor[] {
  return authors;
}
