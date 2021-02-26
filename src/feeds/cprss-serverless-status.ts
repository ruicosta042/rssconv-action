import { transform as transformBase } from '../lib/cprss';

export const file = 'cprss-serverless-status';

export const url = 'https://cprss.s3.amazonaws.com/serverless.email.xml';

export const transform = transformBase;
