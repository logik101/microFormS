// This file is DEPRECATED.
// All blog data is now strictly JSON-only in 'src/constants/blogData.json'
// The application logic has been updated to use the JSON file directly.

import { BlogArticle } from '../types';
import blogDataJson from './blogData.json';

export const blogArticles: BlogArticle[] = blogDataJson as unknown as BlogArticle[];