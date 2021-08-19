import { render } from '@testing-library/react';
import Cohorts from './Cohorts';
import data, { cohorts } from './mocks/cohort-data.js'

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }))
})

test("Renders Cohort's List", async () => {
  await render(<Cohorts />);

   expect(cohorts).toEqual(
    expect.arrayContaining([
      expect.objectContaining({"id": 1, "name": "MOCK name", "startDate": "MOCK date"}),
      expect.objectContaining({"id": 2, "name": "MOCK name 2", "startDate": "MOCK date 2"})
    ])
  );

}
);

test("Renders Cohort's Name", async () => {
  await render(<Cohorts />);
  const cohort = cohorts[0];
  expect(cohort.name).toEqual("MOCK name")
}
);

test("Renders Cohort's Date", async () => {
  await render(<Cohorts />);
  const cohort = cohorts[0];
  expect(cohort.startDate).toEqual("MOCK date")
}
);


test("Renders Cohort's Name Two", async () => {
  await render(<Cohorts />);
  const cohort = cohorts[1];
  expect(cohort.name).toEqual("MOCK name 2")
}
);

test("Renders Cohort's Date Two", async () => {
  await render(<Cohorts />);
  const cohort = cohorts[1];
  expect(cohort.startDate).toEqual("MOCK date 2")
}
);

test("Renders Cohort's Name Three", async () => {
  await render(<Cohorts />);
  const cohort = cohorts[2];
  expect(cohort.name).toEqual("MOCK name 3")
}
);

test("Renders Cohort's Date Three", async () => {
  await render(<Cohorts />);
  const cohort = cohorts[2];
  expect(cohort.startDate).toEqual("MOCK date 3")
}
);
