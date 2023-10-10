<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: {}
### 
Explain: We know that `let` variable is a `block scope` and cannot be `redeclared`. Here defined a variable `greeting` with `let` and assign a value `{}`. Which is right decleare so when we console that the answer is the assigned value which is `{}`.
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12"
###
Explain: Here declare a function named `sum` which is two parameter `a` and `b`. When call this function and set two value `1` and `"2"` and when run it answer is `"12"`.Because here `1` is a number but `"2"` is a string. We know that if any number declare in the `""` that is a string. That's why the answer is `"12"`. 
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: Answer: A: ['🍕', '🍫', '🥑', '🍔']
###
Explain: Here declare an `array` named `food` which is 4 items and an `object` named `info` which is a property that's `key` is `favoriteFood` and `value` is `food[0]` that means `"🍕"`. In the 3rd line reassign a value of `info.favoriteFood` to `"🍝"` then change the value of `favoriteFood` in the `info` object from `"🍕"` to `"🍝"`.But when console the array `food` then it's value is not change. Because When reassigning the value of `info.favoriteFood` dose not effect the orginal `food array`. Because they are separate value with there own values.
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: Hi there, undefined
### 
Explain: Here declare a function named `sayHi` which is a parameter `name`. The function return `Hi there, ${name}`. When `console` the function or call then answer is `Hi there, undefined`. Because when call the function by `sayHi()` then no `parameter` pass the function that means `parameter` is not `defined` that's why the result is 'Hi there, undefined'.
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3
### 
Explain: There is an `array` it contains 4 elements `[0,1,2,3]` and a variable initilized  to `0`. Then use the `forEach` method to iterate through each element of the `nums` array and increment the count variable by `1` if the element `num` is truthy.
 At first `num` set `0` that is first element of the array and the condition `if(num)` evalutes to `false`. Because `0` is a `falsy` value in `javaScript` and count remain `0`. The `num` set `1,2,3` one by one and every time the condition `if(num)` evalutes to `true` Because every element is `truthy` value and at the same time `count` is incremented by `1` in three times that's why `count` contains the value is `3`.
</p>
</details>