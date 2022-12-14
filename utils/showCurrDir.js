import { cwd } from 'process'

export const  showCurrDir =() => {
    console.log(`You are currently in ${cwd()}`);
}
