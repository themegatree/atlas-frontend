import { render} from '@testing-library/react';
import CohortList from './CohortList';
import data, { cohorts } from './mocks/cohort-data.js'

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }))
})

test('Renders CohortList and test the properties of cohorts list', async () => {

  await render(<CohortList cohorts={cohorts} />);

  for (let i = 0; i < cohorts.length; i += 1) {
    expect(cohorts[i]).toHaveProperty('id');
    expect(cohorts[i]).toHaveProperty('name');
    expect(cohorts[i]).toHaveProperty('startDate');

}

});

test('Renders CohortList and test the id field', async () => {

  await render(<CohortList cohorts={cohorts} />);
  expect(cohorts).toHaveLength(3);
  expect(cohorts.map(cohort => cohort.id)).toEqual([
    1,
    2,
    3
  ]);
});

test('Renders CohortList and test the name field', async () => {

  await render(<CohortList cohorts={cohorts} />);
  expect(cohorts).toHaveLength(3);
  expect(cohorts.map(cohort => cohort.name)).toEqual([
    'MOCK name',
    'MOCK name 2',
    'MOCK name 3'
  ]);

});

test('Renders CohortList and test the startDate field', async () => {

  await render(<CohortList cohorts={cohorts} />);
  expect(cohorts).toHaveLength(3);
  expect(cohorts.map(cohort => cohort.startDate)).toEqual([
    'MOCK date',
    'MOCK date 2',
    'MOCK date 3'
  ]);

});



