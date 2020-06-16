import authors from '../../content/authors.json';
import { IAuthor } from '../types';

export function getAllAuthors(): IAuthor[] {
  return authors;
}
