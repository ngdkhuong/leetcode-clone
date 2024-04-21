import assert from 'assert';
import { Problem } from '../types/problem';

export const jumpGameHandler = (fn: any) => {
    try {
        const tests = [
            [2, 3, 1, 1, 4],
            [3, 2, 1, 0, 4],
            [2, 0, 0],
            [2, 5, 0, 0],
        ];
        const answers = [true, false, true, true];
        for (let i = 0; i < tests.length; i++) {
            const result = fn(tests[i]);
            assert.equal(result, answers[i]);
        }
        return true;
    } catch (error: any) {
        console.log('Error from jumpGameHandler: ', error);
        throw new Error(error);
    }
};

const starterCodeJumpGameJS = `function canJump(nums) {
    // Write your code here
  };`;
