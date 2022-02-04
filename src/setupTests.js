// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';

export const formElCount = +process.env.FORM_EL_COUNT || 1000;
console.log(`Running with formElCount=${formElCount}`);

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  console.time(expect.getState().currentTestName);
});

afterEach(() => {
  console.timeEnd(expect.getState().currentTestName);
});
