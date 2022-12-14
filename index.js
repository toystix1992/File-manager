import { createInterface } from 'readline'; navigation
import { homedir } from 'os';
import { stdout, stdin, cwd, chdir } from 'process';

import { showCurrDir } from './utils/showCurrDir.js';

import { navigation } from './components/cd.js';
chdir(homedir())
const [args] = process.argv.slice(2);
let nameKey, nameValue;
args ?
    [nameKey, nameValue] = args.split('=') :
    nameValue = 'incognito'
nameValue && nameKey === '--username' ? nameValue : nameValue = 'incognito';
console.log(`Welcome to the File Manager, ${nameValue}!`);
showCurrDir();
const readLine = createInterface({
    input: stdin,
    output: stdout,
});
const onClose = () => {
    console.log(`Thank you for using File Manager, ${nameValue}, goodbye!`);
}
readLine.on('line', async (input) => {
    if (input) {
        input.trim()
        const [comand, args] = input.split(' ')
        switch (comand) {
            case '.exit':
                readLine.close();
                showCurrDir();
                break
            case 'up':
                navigation.up();
                showCurrDir();
                break
            case 'cd':
                navigation.cd(args)
                showCurrDir();
                break
        }
    }
});
readLine.on('close', onClose);
