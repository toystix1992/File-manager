import { getAbsPath } from '../utils/getAbsPath.js'

const up = () => {
    try {
        process.chdir('../');
    } catch (e) {
        console.log(e);
    }
}

const cd = (inputPath) => {
    const absPath = getAbsPath(inputPath);
    try {
        process.chdir(absPath);
    } catch (e) {
        console.log(e);
    }
}

export const navigation = {
    up,
    cd
}
