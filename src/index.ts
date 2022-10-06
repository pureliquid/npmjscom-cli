import * as readline from 'readline';
import fetch from 'node-fetch';
import { NpmJsQueryResult } from './npmjs-res';
import chalk from 'chalk';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query: string): Promise<string> => new Promise((resolve) => rl.question(query, resolve));

const cycle = async () => {
  const packageName: string = await prompt('package name => ');
  const res = await fetch('https://www.npmjs.com/search/suggestions?q=' + packageName);
  const data: NpmJsQueryResult[] = (await res.json()) as NpmJsQueryResult[];
  data.forEach((e) => console.log(`${chalk.green(e.name)} (${chalk.cyan(e.version)})`));
  await prompt('Press enter to research');
  console.clear();
  await cycle();
};

(async () => {
  await cycle();
})();
