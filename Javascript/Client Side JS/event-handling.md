# Event Handling
## ১. সেকশন ইন্ট্রো (Section Intro: Deep Dive)

**গভীর তত্ত্ব (Deep Theory):**
জাভাস্ক্রিপ্ট হলো **Event-Driven Language**। ব্রাউজারের একটি "Event Loop" থাকে যা সবসময় চেক করতে থাকে স্ট্যাক (Stack) খালি আছে কিনা এবং কোনো ইভেন্ট কিউ (Queue) তে আছে কিনা।
ইভেন্ট আসলে **Observer Pattern**-এর উপর ভিত্তি করে কাজ করে। অর্থাৎ, একটি সাবজেক্ট (DOM Element) থাকে এবং এক বা একাধিক অবজারভার (Listeners) থাকে যারা ওই সাবজেক্টের পরিবর্তনের জন্য অপেক্ষা করে।

**ইভেন্টের কিছু ধরন (Overview):**

1. **UI Events:** `load`, `resize`, `scroll`.
2. **Focus Events:** `focus`, `blur`, `focusin`.
3. **Mouse Events:** `click`, `dblclick`, `mousemove`.
4. **Wheel Events:** `wheel` (মাউস হুইল ঘোরানো)।
5. **Keyboard Events:** `keydown`, `keyup`.
6. **Form Events:** `submit`, `reset`.
7. **Value Change Events:** `input`, `change`.
8. **Clipboard Events:** `cut`, `copy`, `paste`.
9. **Media Events:** `play`, `pause`, `ended` (ভিডিও/অডিওর জন্য)।
10. **Drag & Drop Events:** `dragstart`, `drop`.
## ২. ইভেন্ট লিসেনার (Event Listeners)

`addEventListener` মেথডটি ৩টি আর্গুমেন্ট নেয়: `event`, `callback function`, এবং `options` (বা `useCapture`)।
`options` অবজেক্ট দিয়ে আপনি ইভেন্টের আচরণ নিয়ন্ত্রণ করতে পারেন। যেমন `{ once: true }` দিলে লিসেনারটি মাত্র একবার কাজ করে নিজে থেকে ডিলিট হয়ে যাবে, যা মেমোরি ম্যানেজমেন্টের জন্য দারুণ।

**কিছু সিনারিও ও উদাহরণ:**

1. **বেসিক ক্লিক:**
```javascript
btn.addEventListener('click', () => console.log('Clicked'));

```


2. **লিসেনার রিমুভ করা (Named Function):**
```javascript
function handleClick() { console.log('Run'); }
btn.addEventListener('click', handleClick);
// পরে রিমুভ করতে:
btn.removeEventListener('click', handleClick);

```


3. **একবার রান করা (Run Once):**
```javascript
btn.addEventListener('click', () => console.log('Only Once'), { once: true });

```

4. অ্যানোনিমাস ফাংশন (Anonymous Function)

অ্যানোনিমাস ফাংশন সরাসরি রিমুভ করা যায় না কারণ `removeEventListener` করার জন্য একই ফাংশনের রেফারেন্স প্রয়োজন হয়।

```javascript
const btn = document.querySelector('#myBtn');

// এটি রিমুভ করা অসম্ভব
btn.addEventListener('click', function() {
    console.log("আমি রিমুভ হবো না!");
});

// সঠিক নিয়ম: নামযুক্ত ফাংশন ব্যবহার করা
function myHandler() {
    console.log("আমাকে রিমুভ করা যাবে।");
}
btn.addEventListener('click', myHandler);
btn.removeEventListener('click', myHandler); // এখন কাজ করবে

```

5. প্যারামিটার পাস করা

অ্যানোনিমাস ফাংশন বা অ্যারো ফাংশন ব্যবহার করে অন্য কোনো ফাংশনে ডেটা পাঠানো যায়।

```javascript
function showMessage(greeting, name) {
    alert(greeting + ', ' + name);
}

// ফাংশন র্যাপার ব্যবহার করে
btn.addEventListener('click', () => {
    showMessage('Hello', 'User');
});

```

6. মাল্টিপল লিসেনার

একটি এলিমেন্টে একাধিক ইভেন্ট লিসেনার থাকলে সেগুলো সিরিয়াল অনুযায়ী কাজ করে।

```javascript
btn.addEventListener('click', () => console.log("প্রথম কাজ"));
btn.addEventListener('click', () => console.log("দ্বিতীয় কাজ"));
// আউটপুট: সিরিয়াল অনুযায়ী দুটিই প্রিন্ট হবে।

```

7. Capture Phase ব্যবহার

ইভেন্ট সাধারণত নিচ থেকে উপরে (Bubbling) যায়, কিন্তু `capture: true` দিলে সেটি উপর থেকে নিচে নামার সময় ধরা পড়ে।

```javascript
// 
document.querySelector('#parent').addEventListener('click', () => {
    console.log("প্যারেন্ট আগে ধরা পড়বে");
}, { capture: true });

document.querySelector('#child').addEventListener('click', () => {
    console.log("চাইল্ড পরে ধরা পড়বে");
});

```

8. Passive Listener

স্ক্রল বা টাচ ইভেন্টের ক্ষেত্রে পারফরম্যান্স ভালো করার জন্য এটি ব্যবহার হয়। এটি ব্রাউজারকে জানায় যে ফাংশনটি `preventDefault()` কল করবে না।

```javascript
window.addEventListener('scroll', () => {
    console.log("স্ক্রল হচ্ছে...");
}, { passive: true });

```

9. DOM লোড হওয়ার পর লিসেনার যোগ করা

যদি আপনার স্ক্রিপ্ট ফাইলের শুরুতে থাকে (হেডারে), তবে DOM পুরোপুরি লোড হওয়া পর্যন্ত অপেক্ষা করতে হয়।

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#myBtn');
    btn.addEventListener('click', () => console.log("DOM তৈরি হওয়ার পর কাজ করছি!"));
});

```

10. কন্ডিশনাল লিসেনার

লজিকের উপর ভিত্তি করে লিসেনার অ্যাড করা।

```javascript
const isLoggedIn = true;

if (isLoggedIn) {
    btn.addEventListener('click', () => {
        console.log("ড্যাশবোর্ডে নিয়ে যাওয়া হচ্ছে...");
    });
} else {
    console.log("লিসেনার অ্যাড করা হয়নি কারণ ইউজার লগইন নেই।");
}
```
## ৩. ইভেন্ট অবজেক্ট (The Event Object)

**গভীর তত্ত্ব (Deep Theory):**
ইভেন্ট অবজেক্ট হলো তথ্যের খনি।

* `target`: যেই এলিমেন্টে ইভেন্টটি শুরু হয়েছে।
* `currentTarget`: যেই এলিমেন্টে লিসেনারটি যুক্ত আছে (বাবলিংয়ের সময় এটি `target` থেকে ভিন্ন হতে পারে)।
* `timeStamp`: পেজ লোড হওয়ার কত মিলি-সেকেন্ড পর ইভেন্ট ঘটেছে।

**কিছু প্রপার্টি ও ব্যবহার:**

1. **`e.target`:** কে ট্রিগার করেছে তা জানা।
2. **`e.type`:** ইভেন্টটি কি 'click' না 'mouseover' তা জানা।
3. **`e.preventDefault()`:** লিংকে ক্লিক করলে অন্য পেজে যাওয়া আটকানো।
```javascript
link.addEventListener('click', (e) => {
   e.preventDefault();
   console.log('কোথাও যাওয়া যাবে না!');
});

```


4. **`e.stopPropagation()`:** প্যারেন্টের কাছে ইভেন্ট যাওয়া আটকানো।
5. **`e.clientX / e.clientY`:** মাউসের অবস্থান।
6. **`e.altKey / e.ctrlKey`:** ক্লিক করার সময় Alt বা Ctrl চেপে ছিল কিনা।
```javascript
btn.addEventListener('click', (e) => {
    if(e.ctrlKey) console.log('Ctrl + Clicked!');
});

```


7. **`e.target.value`:** ইনপুট ফিল্ডের ভ্যালু।
8. **`e.target.id`:** এলিমেন্টের আইডি নেওয়া।
9. **`e.composedPath()`:** ইভেন্টটি কোন কোন এলিমেন্টের মধ্য দিয়ে এসেছে তার অ্যারে।
10. **`e.isTrusted`:** ইভেন্টটি কি ইউজার করেছে (true) নাকি স্ক্রিপ্ট দিয়ে তৈরি (false)।
## ৪. মাউস ইভেন্ট (Mouse Events)

**গভীর তত্ত্ব (Deep Theory):**
মাউস ইভেন্টে কো-অর্ডিনেট বোঝা খুব জরুরি:

* `clientX/Y`: ব্রাউজার উইন্ডোর সাপেক্ষে পজিশন।
* `pageX/Y`: পুরো ডকুমেন্টের সাপেক্ষে পজিশন (স্ক্রল সহ)।
* `offsetX/Y`: যেই এলিমেন্টে ক্লিক করেছেন তার সাপেক্ষে পজিশন।

**কিছু সিনারিও ও উদাহরণ:**

1. **রাইট ক্লিক (Context Menu):**
```javascript
window.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // ডিফল্ট মেনু বন্ধ করা
    console.log('কাস্টম মেনু দেখান');
});

```

2. **ডাবল ক্লিক (`dblclick`):** ফোল্ডার ওপেন করার স্টাইল।
3. **মাউস পজিশন ট্র্যাকার:**
```javascript
window.addEventListener('mousemove', (e) => {
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`;
});

```

4. **Hover Effect (JS দিয়ে):** `mouseenter` এবং `mouseleave`।
5. **Drag and Drop (Basic):** `mousedown` এ ফ্ল্যাগ অন করা, `mousemove` এ পজিশন বদলানো, `mouseup` এ ফ্ল্যাগ অফ করা।
6. **টেক্সট সিলেকশন বন্ধ করা:** `mousedown` এ `e.preventDefault()`।
7. **কোন মাউস বাটন চাপা হয়েছে:** `e.button` (0 = left, 1 = middle, 2 = right)।
8. **Mouse Over vs Enter:** `mouseover` বাবল করে, `mouseenter` বাবল করে না (এটি বেশি নিরাপদ)।
9. **এলিমেন্টের কোণায় ক্লিক ডিটেকশন:** `offsetX` এবং `offsetY` ব্যবহার করে।
10. **ক্লিক হোল্ড (Long Press):** `mousedown` এ টাইমার সেট করা এবং `mouseup` এ ক্লিয়ার করা।
## ৫. কীবোর্ড ইভেন্ট (Keyboard Events)

**গভীর তত্ত্ব (Deep Theory):**
`keydown` অটো-রিপিট হয় (কি চেপে ধরে রাখলে), কিন্তু `keyup` একবারই হয়। অ্যাক্সেসিবিলিটির জন্য কীবোর্ড ইভেন্ট হ্যান্ডেল করা খুব জরুরি। `keyCode` প্রপার্টি এখন deprecated (পুরানো), তাই আধুনিক `key` এবং `code` ব্যবহার করা উচিত।

**কিছু সিনারিও:**

1. **কোন কি চাপা হয়েছে:** `console.log(e.key)`।
2. **ক্যাপসলক ডিটেকশন:** `e.getModifierState("CapsLock")`।
3. **শর্টকাট তৈরি (Ctrl + S):**
```javascript
window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault(); // ব্রাউজারের সেভ ডায়ালগ বন্ধ করা
        console.log('Custom Save triggered');
    }
});

```

4. **গেম মুভমেন্ট:** Arrow keys বা WASD ডিটেকশন।
5. **ইনপুট ফিল্ডে নাম্বার ছাড়া কিছু লিখতে না দেওয়া:**
```javascript
input.addEventListener('keydown', (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
        e.preventDefault();
    }
});

```

6. **Escape দিয়ে মডাল বন্ধ করা:** `if(e.key === 'Escape') closeModal()`.
7. **Enter দিয়ে মেসেজ পাঠানো।**
8. **Shift চেপে মাল্টিপল সিলেক্ট:** চেকবক্স লজিক।
9. **কনামী কোড (Konami Code):** নির্দিষ্ট সিকোয়েন্সে কি চাপলে সিক্রেট আনলক হওয়া।
10. **ট্যাব নেভিগেশন ট্র্যাকিং।**
## ৬. প্রজেক্ট: কী-কোড ডিটেক্টর (KeyCode Mini-Project Extension)

এই প্রজেক্টে আমরা আরও কিছু ফিচার যোগ করব।

**ফিচারসমূহ:**

1. কোন কী (Key) চাপা হয়েছে।
2. কি কোড (Code)।
3. পুরানো `keyCode`।
4. কোনো মেটা কী (Ctrl, Alt, Shift) অ্যাক্টিভ আছে কিনা।

**কোড:**

```javascript
window.addEventListener('keydown', (e) => {
    const insert = document.getElementById('insert');
    
    // অবজেক্ট বানিয়ে লুপ চালানো
    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.code': e.code,
        'e.keyCode': e.keyCode,
        'Ctrl Key?': e.ctrlKey ? 'Yes' : 'No'
    };

    let html = '';
    for (let key in keyCodes) {
        html += `
        <div class="key-box">
            <small>${key}</small>
            <h2>${keyCodes[key]}</h2>
        </div>`;
    }
    insert.innerHTML = html;
});

```

*(চ্যালেঞ্জ: সিএসএস দিয়ে `key-box` গুলোকে ফ্লেক্সবক্স দিয়ে পাশাপাশি সাজান)*
## ৭. ইনপুট ইভেন্ট (Input Events)

**গভীর তত্ত্ব (Deep Theory):**
`change` ইভেন্ট তখনই ফায়ার হয় যখন ইউজার এন্টার মারে বা ইনপুট থেকে বের হয়। কিন্তু `input` ইভেন্ট প্রতিটা ক্যারেক্টার টাইপ করার সাথে সাথেই ফায়ার হয়। রিয়েল-টাইম ভ্যালিডেশনের জন্য `input` সেরা।

**কিছু সিনারিও:**

1. **লাইভ সার্চ ফিল্টার:** লিস্ট ফিল্টার করা।
2. **লাইভ ক্যারেক্টার কাউন্ট (টুইটার স্টাইল):**
```javascript
input.addEventListener('input', (e) => {
    const count = e.target.value.length;
    document.getElementById('counter').innerText = `${count}/100`;
});

```
3. **চেকবক্স টগল:** `e.target.checked` (true/false)।
4. **সিলেক্ট ড্রপডাউন ভ্যালু:** `change` ইভেন্টে `e.target.value`।
5. **Cut/Copy/Paste ডিটেক্ট:**
```javascript
input.addEventListener('paste', (e) => {
    console.log('Paste করা নিষিদ্ধ!');
    e.preventDefault();
});

```
6. **রেঞ্জ স্লাইডার (Volume Control):** `input` ইভেন্ট দিয়ে ভলিউম বাড়ানো কমানো।
7. **ফোকাস এফেক্ট:** `focus` এ ব্যাকগ্রাউন্ড কালার চেঞ্জ।
8. **Blur ভ্যালিডেশন:** ইনপুট থেকে বের হলে চেক করা ইমেইল ঠিক আছে কিনা।
9. **অটো-কমপ্লিট:** টাইপ করার সাথে সাথে সাজেশান দেখানো।
10. **দুটি পাসওয়ার্ড ম্যাচিং চেক:** কনফার্ম পাসওয়ার্ড ফিল্ডে `input` ইভেন্ট।
## ৮. ফর্ম সাবমিশন (Form Submission & FormData)

**গভীর তত্ত্ব (Deep Theory):**
মডার্ন ওয়েবে আমরা ফর্ম সাবমিট করে পেজ রিফ্রেশ করি না। আমরা `AJAX` বা `Fetch API` ব্যবহার করি। `FormData` অবজেক্ট `multipart/form-data` হিসেবে ফাইল আপলোডের জন্যও খুব কাজের।

**কিছু সিনারিও:**

1. **বেসিক প্রিভেনশন:** `e.preventDefault()`।
2. **FormData রিড করা:**
```javascript
const data = new FormData(formElement);
for (let [key, value] of data.entries()) { console.log(key, value); }

```
3. **সাবমিট বাটন ডিসেবল করা:** সাবমিট হওয়ার সময় বাটন `disabled` করে দেওয়া যাতে ডাবল সাবমিট না হয়।
4. **ফর্ম রিসেট:** সাবমিশনের পর `form.reset()`।
5. **ভ্যালিডেশন এরর দেখানো:** ইনপুট খালি থাকলে সাবমিট আটকানো।
6. **JSON অবজেক্ট তৈরি:** FormData থেকে JSON বানিয়ে API তে পাঠানো।
7. **ফাইল আপলোড চেক:** ফাইলের সাইজ চেক করা সাবমিটের আগে।
8. **হিডেন ইনপুট ফিল্ড:** ইউজার আইডি বা টোকেন পাঠানো।
9. **এন্টার কি (Enter Key) হ্যান্ডেল:** ফর্মের মধ্যে এন্টার চাপলে সাবমিট হ্যান্ডেল করা।
10. **AJAX সাবমিশন:**
```javascript
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const response = await fetch('/api', { method: 'POST', body: new FormData(form) });
});

```
## ৯. ইভেন্ট বাবলিং ও ক্যাপচারিং (Bubbling & Capturing)

**গভীর তত্ত্ব (Deep Theory):**
ইভেন্ট ফ্লো এর ৩টি ধাপ:

1. **Capturing Phase:** ইভেন্ট উপর (Window) থেকে নিচে নামে।
2. **Target Phase:** ইভেন্ট টার্গেট এলিমেন্টে পৌঁছায়।
3. **Bubbling Phase:** ইভেন্ট নিচ থেকে আবার উপরে উঠে যায়।
ডিফল্টভাবে ইভেন্ট লিসেনার Bubbling ফেজে কাজ করে।

**কিছু সিনারিও:**

1. **বাবলিং বোঝা:** চাইল্ডে ক্লিক করলে প্যারেন্টের লিসেনার ফায়ার হওয়া।
2. **`stopPropagation`:** বাবলিং বন্ধ করা।
```javascript
child.addEventListener('click', (e) => {
    e.stopPropagation(); // আর উপরে যাবে না
});

```
3. **`stopImmediatePropagation`:** একই এলিমেন্টে অন্য লিসেনার থাকলে সেগুলোও বন্ধ করে দেয়।
4. **প্যারেন্ট থেকে চাইল্ড হ্যান্ডেল:** প্যারেন্টে লিসেনার বসিয়ে বাবলিং এর সুবিধা নেওয়া।
5. **মডাল বা পপ-আপ বন্ধ করা:** মডালের ব্যাকগ্রাউন্ডে (প্যারেন্ট) ক্লিক করলে বন্ধ হবে, কিন্তু মডালের বডিতে (চাইল্ড) ক্লিক করলে বন্ধ হবে না (এখানে `stopPropagation` লাগে)।
6. **Capturing লিসেনার:** `addEventListener(..., {capture: true})`।
7. **নেস্টেড মেনু:** সাব-মেনু ওপেন/ক্লোজ লজিক।
8. **অ্যানালিটিক্স ট্র্যাকিং:** বডির বাবলিং ব্যবহার করে পুরো পেজের সব ক্লিক ট্র্যাক করা।
9. **ফর্ম ভ্যালিডেশন ট্রিকস:** বাবলিং ব্যবহার করে এরর মেসেজ শো করা।
10. **রিয়েক্ট বা ফ্রেমওয়ার্ক:** রিয়েক্ট পর্দার আড়ালে বাবলিং ব্যবহার করেই ইভেন্ট হ্যান্ডেল করে (Synthetic Events)।
## ১০. ইভেন্ট ডেলিগেশন (Event Delegation: Masterclass)

**গভীর তত্ত্ব (Deep Theory):**
ডেলিগেশন মেমোরি লিক (Memory Leak) কমায়। ডাইনামিকলি তৈরি হওয়া এলিমেন্টে (যেমন জাভাস্ক্রিপ্ট দিয়ে পরে যোগ করা লিস্ট আইটেম) সাধারণ লিসেনার কাজ করে না, কিন্তু ডেলিগেশন কাজ করে।

**কিছু সিনারিও:**

1. **টুডু লিস্ট:** নতুন আইটেমে ডিলিট বাটন কাজ করানো।
```javascript
ul.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});

```
2. **টেবিল রো (Table Row) অ্যাকশন:** বিশাল টেবিলের প্রতি রো-তে লিসেনার না বসিয়ে টেবিলে বসানো।
3. **গ্যালারি ইমেজ প্রিভিউ:** গ্যালারি কন্টেইনারে ক্লিক হ্যান্ডেল করে ইমেজ সোর্স নেওয়া।
4. **কীবোর্ড ন্যাভিগেশন মেনু:** মেনুবারে ডেলিগেশন।
5. **ট্যাগ ইনপুট সিস্টেম:** ট্যাগ রিমুভ করা।
6. **ই-কমার্স কার্ট:** আইটেম রিমুভ বা কোয়ান্টিটি বাড়ানো।
7. **কমেন্ট সেকশন:** রিপ্লাই বাটন হ্যান্ডেল করা।
8. **ট্যাব (Tabs) তৈরি:** ট্যাব কন্টেইনারে লিসেনার।
9. **গেমবোর্ড (Tic-Tac-Toe):** প্রতিটি সেলের বদলে বোর্ডে লিসেনার।
10. **`closest()` মেথড ব্যবহার:** ডেলিগেশনে `e.target.closest('.btn')` ব্যবহার করা সবচেয়ে নিরাপদ, কারণ ইউজার আইকনে ক্লিক করতে পারে যা বাটনের ভেতরে।
## ১১. পেজ লোডিং ও উইন্ডো ইভেন্ট (Page & Window Events)

**গভীর তত্ত্ব (Deep Theory):**
DOM লোড হওয়া এবং রিসোর্স (ইমেজ) লোড হওয়ার মধ্যে পার্থক্য আছে। `defer` অ্যাট্রিবিউট ব্যবহার করলে স্ক্রিপ্ট `DOMContentLoaded` এর আগে রান করে, যা আধুনিক প্র্যাকটিস।

**কিছু সিনারিও:**

1. **`DOMContentLoaded`:** HTML রেডি হলে কাজ শুরু।
```javascript
document.addEventListener('DOMContentLoaded', initApp);

```


2. **`load` (Window):** লোডিং স্পিনার বা প্রি-লোডার হাইড করা (সব ইমেজ লোড হওয়ার পর)।
3. **`beforeunload`:** পেজ ক্লোজ করার আগে ওয়ার্নিং দেওয়া।
```javascript
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = ''; // আধুনিক ব্রাউজারে কাস্টম মেসেজ দেখানো যায় না
});

```


4. **`resize`:** রেসপন্সিভ চার্ট রি-ড্র করা বা মেনু হাইড করা।
5. **`scroll` (Infinite Scroll):** পেজের শেষে পৌঁছালে নতুন ডেটা লোড করা।
```javascript
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
   loadMoreImages();
}

```
6. **নেটওয়ার্ক স্ট্যাটাস:** `online` এবং `offline` ইভেন্ট।
```javascript
window.addEventListener('offline', () => alert('ইন্টারনেট সংযোগ বিচ্ছিন্ন!'));

```
7. **ভিজিবিলিটি চেঞ্জ:** ইউজার অন্য ট্যাবে গেলে ভিডিও পজ করা (`document.visibilityState`)।
8. **ফুলস্ক্রিন চেঞ্জ:** ভিডিও প্লেয়ারের জন্য।
9. **হিস্ট্রি চেঞ্জ:** `popstate` (সিঙ্গেল পেজ অ্যাপ্লিকেশনে ব্যাক বাটন হ্যান্ডেলিং)।
10. **প্রিন্ট ইভেন্ট:** `beforeprint` এবং `afterprint` (প্রিন্ট করার সময় স্টাইল বদলানো)।
