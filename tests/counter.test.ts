import { describe, it, expect, beforeEach } from 'vitest';
import { firstValueFrom } from 'rxjs';
import { Counter } from '../src/utils/counter';

describe('Counter', () => {
  let counter: Counter;

  beforeEach(() => {
    counter = new Counter();
  });

  it('should start with count 0', async () => {
    const count = await firstValueFrom(counter.getCount());
    expect(count).toBe(0);
  });

  it('should increment count', async () => {
    counter.increment();
    const count = await firstValueFrom(counter.getCount());
    expect(count).toBe(1);
  });

  it('should decrement count', async () => {
    counter.increment();
    counter.decrement();
    const count = await firstValueFrom(counter.getCount());
    expect(count).toBe(0);
  });

  it('should reset count', async () => {
    counter.increment();
    counter.increment();
    counter.reset();
    const count = await firstValueFrom(counter.getCount());
    expect(count).toBe(0);
  });

  it('should get double count', async () => {
    counter.increment();
    counter.increment();
    const doubleCount = await firstValueFrom(counter.getDoubleCount());
    expect(doubleCount).toBe(4);
  });
});
