DOM ম্যানিপুলেশন-এর এই পর্যায়ে আমরা শিখবো কীভাবে কোনো এলিমেন্টকে পরিবর্তন করা, মুছে ফেলা এবং সিএসএস (CSS) ক্লাস নিয়ন্ত্রণ করা যায়। নিচে বিস্তারিত আলোচনা করা হলো:

## ১. Replacing Elements (এলিমেন্ট প্রতিস্থাপন করা)

পুরানো কোনো এলিমেন্টের জায়গায় নতুন একটি এলিমেন্ট বসানোর জন্য দুটি প্রধান পদ্ধতি রয়েছে।

### (ক) `replaceWith()` - আধুনিক পদ্ধতি

এটি সরাসরি টার্গেট এলিমেন্টের ওপর কল করা হয়।

```javascript
const oldElement = document.querySelector('#old');
const newElement = document.createElement('h2');
newElement.textContent = "আমি নতুন এলিমেন্ট!";

// oldElement-কে সরিয়ে newElement বসবে
oldElement.replaceWith(newElement);

```

### (খ) `replaceChild()` - পুরনো পদ্ধতি

এটি Parent এলিমেন্টের ওপর কল করতে হয়।

```javascript
const parent = document.querySelector('#parent');
const oldChild = document.querySelector('#child');
const newChild = document.createElement('div');
newChild.textContent = "প্রতিস্থাপিত চাইল্ড";

parent.replaceChild(newChild, oldChild); // (নতুন, পুরনো)

```

## ২. Removing Elements (এলিমেন্ট মুছে ফেলা)

DOM থেকে কোনো এলিমেন্ট সরাতে নিচের পদ্ধতিগুলো ব্যবহার করা হয়।

### (ক) `remove()`

এটি সবচেয়ে সহজ উপায়। সরাসরি এলিমেন্টটিকে মুছে দেয়।

```javascript
const item = document.querySelector('.delete-me');
item.remove(); // এলিমেন্টটি ভ্যানিশ হয়ে যাবে

```

### (খ) `removeChild()`

এটি Parent এলিমেন্টের ভেতর থেকে নির্দিষ্ট কোনো Child-কে মুছে ফেলতে ব্যবহৃত হয়।

```javascript
const list = document.querySelector('ul');
const firstItem = list.firstElementChild;
list.removeChild(firstItem);

```

## ৩. Adding/Removing CSS Classes (সিএসএস ক্লাস নিয়ন্ত্রণ)

জাভাস্ক্রিপ্টে ক্লাসের কাজ করার জন্য `classList` প্রপার্টি সবচেয়ে কার্যকর। এটি ব্যবহার করে আমরা ডাইনামিক ডিজাইন তৈরি করি।

### (ক) Class যোগ করা (`add`)

```javascript
const box = document.querySelector('.box');
box.classList.add('active', 'highlight'); // একসাথে একাধিক ক্লাস যোগ করা যায়

```

### (খ) Class মুছে ফেলা (`remove`)

```javascript
box.classList.remove('highlight');

```

### (গ) Class টগল করা (`toggle`)

এটি খুবই কাজের! যদি ক্লাসটি থাকে তবে মুছে ফেলবে, আর না থাকলে যোগ করবে (যেমন: Dark Mode বাটনের জন্য)।

```javascript
box.classList.toggle('dark-mode');

```

### (ঘ) Class আছে কি না পরীক্ষা করা (`contains`)

এটি `true` অথবা `false` রিটার্ন করে।

```javascript
if (box.classList.contains('active')) {
    console.log("বক্সটি এখন একটিভ আছে।");
}

```

## একটি পূর্ণাঙ্গ উদাহরণ (HTML + JS)

```html
<div id="container">
    <p id="message" class="info">হ্যালো, আমি একটি টেক্সট!</p>
    <button onclick="updateUI()">সব পরিবর্তন করো</button>
</div>

<script>
function updateUI() {
    const msg = document.querySelector('#message');

    // ১. ক্লাস পরিবর্তন (CSS)
    msg.classList.remove('info');
    msg.classList.add('success');

    // ২. এলিমেন্ট প্রতিস্থাপন (Replace)
    const newMsg = document.createElement('h3');
    newMsg.textContent = "কাজ সম্পন্ন হয়েছে!";
    msg.replaceWith(newMsg);
}
</script>

<style>
.info { color: gray; }
.success { color: green; font-weight: bold; }
</style>

```

### সংক্ষেপে মনে রাখার টিপস:

* **Replace:** সরাসরি বদলাতে `replaceWith()`, আর প্যারেন্টের মাধ্যমে বদলাতে `replaceChild()`।
* **Remove:** নিজের জন্য `remove()`, চাইল্ডের জন্য `removeChild()`।
* **Classes:** সব সময় `classList` ব্যবহার করার চেষ্টা করবেন কারণ এটি `className` এর চেয়ে নিরাপদ এবং সহজ।

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Replacing and Removing Elements</title>
</head>
<body>
    <div>
        <h2>This is H2</h2>
    </div>
    <p>This paragraph is removed</p>
    <script>
        h2 = document.querySelector('h2')
        // console.log(h2.textContent)
        h1 = document.createElement('h1')
        h1.textContent = 'This is the replaced form'
        // h2.replaceWith(h1)
        div = document.querySelector('div')
        // console.log(div)
        div.replaceChild(h1, h2)

        p = document.querySelector('p')
        // p.remove()
        document.body.removeChild(p)
    </script>
</body>
</html>
```

```html

```