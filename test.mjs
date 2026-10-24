import test from 'node:test';import assert from 'node:assert/strict';import {sample} from './index.mjs';import {compare} from '../assetparity-backend/compare.mjs';
test('synthetic corpus passes its five declared cases',()=>assert.equal(compare(sample).summary.matching,5));
test('no authentication claim',()=>assert.equal(compare(sample).observationsAuthenticated,false));
