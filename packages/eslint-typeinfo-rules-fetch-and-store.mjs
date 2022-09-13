// @ts-check
import fs from 'fs';
import { JSDOM } from 'jsdom';

import { RULES_PATH } from './eslint-typeinfo-rules-constants.cjs';

const response = await fetch('https://typescript-eslint.io/rules/#extension-rules');
const html = await response.text();

const dom = new JSDOM(html);
const supportedRulesTable = dom.window.document.querySelector('h2#supported-rules ~ table tbody');
const extensionRulesTable = dom.window.document.querySelector('h2#extension-rules ~ table tbody');
if (!supportedRulesTable || !extensionRulesTable) {
  throw new Error(`could not fetch rules`);
}

const allRules = [...supportedRulesTable.children, ...extensionRulesTable.children];
const rulesRequiringTypeInfo = [];
for (const tr of allRules) {
  const ruleRequiresTypeInfo = tr.querySelector('td[title="requires type information"]');
  if (ruleRequiresTypeInfo) {
    const ruleAnchor = tr.querySelector('td:first-child a');
    if (!ruleAnchor) {
      throw new Error(`found a rule but could not extract rule anchor`);
    }
    const nameOfRule = ruleAnchor.textContent;
    rulesRequiringTypeInfo.push(nameOfRule);
  }
}

await fs.promises.writeFile(RULES_PATH, JSON.stringify(rulesRequiringTypeInfo));
