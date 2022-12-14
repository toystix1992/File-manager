import { cwd } from 'process';
import { isAbsolute, join } from 'path';

export const getAbsPath = (inputPath) =>
isAbsolute(inputPath) ? inputPath : join(cwd(), inputPath);
