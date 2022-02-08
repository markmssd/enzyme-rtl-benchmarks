// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';

export const formElCount = +process.env.FORM_EL_COUNT || 1000;

Enzyme.configure({ adapter: new Adapter() });

const timers = {};

const TEST_IT_SLOW_THRESHOLD_MS = 1000;
const TEST_FILE_SLOW_THRESHOLD_MS = 5000;

beforeEach(() => {
  const testName = expect.getState().currentTestName;
  timers[testName] = window.performance.now();
});

afterEach(() => {
  const testName = expect.getState().currentTestName;
  const time = Math.round(window.performance.now() - timers[testName]);

  if (time > TEST_IT_SLOW_THRESHOLD_MS) {
    console.warn(`Test assertion ${testName} is taking more than ${TEST_IT_SLOW_THRESHOLD_MS}ms to run, consider optimizing it (${time}ms)`);
  }

  delete timers[testName];
});

beforeAll(() => {
  const testPath = expect.getState().testPath;
  timers[testPath] = window.performance.now();
});

afterAll(() => {
  const testPath = expect.getState().testPath;
  const time = Math.round(window.performance.now() - timers[testPath]);

  if (time > TEST_FILE_SLOW_THRESHOLD_MS) {
    console.warn(`Test file ${testPath} is taking more than ${TEST_FILE_SLOW_THRESHOLD_MS}ms to run, consider optimizing it (${time}ms)`);
  }

  delete timers[testPath];
});
