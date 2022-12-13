// !Do not change test cases
const { describe } = require("@jest/globals");

const simpleTask = require("../tasks/task1");
const removeMiddle = require("../tasks/task2");
const shareApples = require("../tasks/task3");
const shareApples2 = require("../tasks/task4");
const FriendsOfStepa = require("../tasks/task5");
const perimeterOfRectangle = require("../tasks/task6");
const areaOfRectangle = require("../tasks/task7");
const nextNum = require("../tasks/task8");
const prevNum = require("../tasks/task9");
const oppositeNum = require("../tasks/task10");

// cases
const {
  testCasesTask1,
  testCasesTask2,
  testCasesTask3,
  testCasesTask4,
  testCasesTask5,
  testCasesTask6,
  testCasesTask7,
  testCasesTask8,
  testCasesTask9,
  testCasesTask10,
} = require("../utils/cases");

describe("Task1-simpleTask", () => {
  testCasesTask1.forEach((test) => {
    it(`Input: ${test.input} expected: ${test.output}`, () => {
      const res = simpleTask(test.input);
      expect(res).toBe(test.output);
    });
  });
});

describe("Task2-removeMiddle", () => {
  testCasesTask2.forEach((test) => {
    it(`Input: ${test.input} expected: ${test.output}`, () => {
      const res = removeMiddle(test.input);
      expect(res).toBe(test.output);
    });
  });
});

describe("Task3-shareApples", () => {
  testCasesTask3.forEach((test) => {
    it(`Input: ${test.input} expected: ${test.output}`, () => {
      elem = test.input;
      const res = shareApples(elem[0], elem[1]);
      expect(res).toBe(test.output);
    });
  });
});

describe("Task4-shareApples2", () => {
  testCasesTask4.forEach((test) => {
    it(`Input: ${test.input} expected: ${test.output}`, () => {
      elem = test.input;
      const res = shareApples2(elem[0], elem[1]);
      expect(res).toBe(test.output);
    });
  });
});

describe("Task5-FriendsOfStepa", () => {
  testCasesTask5.forEach((test) => {
    it(`Input: ${test.input} expected: ${test.output}`, () => {
      const res = FriendsOfStepa(test.input);
      expect(res).toBe(test.output);
    });
  });
});

describe("Task6-perimeterOfRectangle", () => {
  testCasesTask6.forEach((test) => {
    it(`Input: ${test.input} expected: ${test.output}`, () => {
      elem = test.input;
      const res = perimeterOfRectangle(elem[0], elem[1]);
      expect(res).toBe(test.output);
    });
  });
});

describe("Task7-areaOfRectangle", () => {
  testCasesTask7.forEach((test) => {
    it(`Input: ${test.input} expected: ${test.output}`, () => {
      elem = test.input;
      const res = areaOfRectangle(elem[0], elem[1]);
      expect(res).toBe(test.output);
    });
  });
});

describe("Task8-nextNum", () => {
  testCasesTask8.forEach((test) => {
    it(`Input: ${test.input} expected: ${test.output}`, () => {
      const res = nextNum(test.input);
      expect(res).toBe(test.output);
    });
  });
});

describe("Task9-prevNum", () => {
  testCasesTask9.forEach((test) => {
    it(`Input: ${test.input} expected: ${test.output}`, () => {
      const res = prevNum(test.input);
      expect(res).toBe(test.output);
    });
  });
});

describe("Task10-oppositeNum", () => {
  testCasesTask10.forEach((test) => {
    it(`Input: ${test.input} expected: ${test.output}`, () => {
      const res = oppositeNum(test.input);
      expect(res).toBe(test.output);
    });
  });
});
