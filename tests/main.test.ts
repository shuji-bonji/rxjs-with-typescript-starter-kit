import { TestScheduler } from 'rxjs/testing';
import { delay } from 'rxjs/operators';
import { beforeEach, describe, expect, it } from 'vitest';

describe('非同期処理のテスト', () => {
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('delay オペレーターのテスト', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const source = cold('a-b-c|');
      const expected = '1000ms a-b-(c|)';

      const result = source.pipe(delay(1000, scheduler));

      expectObservable(result).toBe(expected);
    });
  });
});
