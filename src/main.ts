import './style.css'
import { Counter } from './utils/counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>RxJS Counter Example</h1>
    <div class="card">
      <button id="increment" type="button">Increment</button>
      <button id="decrement" type="button">Decrement</button>
      <button id="reset" type="button">Reset</button>
      <p id="count">Count: 0</p>
      <p id="doubleCount">Double Count: 0</p>
    </div>
  </div>
`

const counter = new Counter();
const countElement = document.querySelector<HTMLElement>('#count')!;
const doubleCountElement = document.querySelector<HTMLElement>('#doubleCount')!;

// カウンターの値の変更を購読
counter.getCount().subscribe(count => {
  countElement.textContent = `Count: ${count}`;
});

// 2倍の値を購読
counter.getDoubleCount().subscribe(doubleCount => {
  doubleCountElement.textContent = `Double Count: ${doubleCount}`;
});

// ボタンのイベントハンドラを設定
document.querySelector<HTMLButtonElement>('#increment')!.addEventListener('click', () => {
  counter.increment();
});

document.querySelector<HTMLButtonElement>('#decrement')!.addEventListener('click', () => {
  counter.decrement();
});

document.querySelector<HTMLButtonElement>('#reset')!.addEventListener('click', () => {
  counter.reset();
});