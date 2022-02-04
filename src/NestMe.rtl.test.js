import { render, screen } from '@testing-library/react';
import { NestMe } from './NestMe';
import { formElCount } from "./setupTests";

test('RTL Render getAllByRole({ hidden: true })', () => {
  render(<NestMe count={formElCount}/>);

  const forms = screen.getAllByRole(/form/i, { hidden: true });
  expect(forms).toHaveLength(formElCount);
});

test('RTL Render getAllByRole({ hidden: false })', () => {
  render(<NestMe count={formElCount}/>);

  const forms = screen.getAllByRole(/form/i, { hidden: false });
  expect(forms).toHaveLength(formElCount);
});

test('RTL Render findAllByTestId()', () => {
  render(<NestMe count={formElCount}/>);

  const forms = screen.getAllByTestId('my-form-id');
  expect(forms).toHaveLength(formElCount);
});
