import { SetMetadata } from '@nestjs/common';

export const OFFICE_FACTORY = Symbol('OfficeFactory');

/**
 * Office Factory Decorator for denoting an Office Service Factory
 */
export const OfficeFactory = () => SetMetadata(OFFICE_FACTORY, {});
