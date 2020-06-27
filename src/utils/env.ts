export const isNotProd = process.env.NODE_ENV !== 'production';
export const isProd = !isNotProd;
