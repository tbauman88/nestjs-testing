import { SetMetadata } from '@nestjs/common';

export const OFFICE = Symbol('Office');

/**
 * Office Decorator for denoting an Office Controller
 */
export const Office = (key: string) => SetMetadata(OFFICE, key);
