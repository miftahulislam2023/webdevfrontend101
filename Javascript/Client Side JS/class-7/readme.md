DOM-এর এই পদ্ধতিগুলো মূলত আমাদের শেখায় কীভাবে একটি নির্দিষ্ট এলিমেন্টের সাপেক্ষে অন্য কোনো এলিমেন্ট বা টেক্সট বসাতে হয়। নিচে বিস্তারিত আলোচনা করা হলো:

## ১. `insertAdjacent` পদ্ধতিসমূহ

এই পদ্ধতিতে চারটি নির্দিষ্ট পজিশন থাকে। আপনার বোঝার সুবিধার্থে একটি ডায়াগ্রাম দেওয়া হলো:

ধরা যাক আমাদের একটি `<div>` আছে:

```html
<div id="container" style="border: 1px solid black; padding: 10px;">
    <p>Existing Child</p>
</div>

```

### (ক) `beforebegin`

এটি টার্গেট এলিমেন্টের ঠিক **আগে** (বাইরে) নতুন কিছু যোগ করে। এটি টার্গেট এলিমেন্টের একটি 'Sibling' বা ভাই-বোন হিসেবে কাজ করে।

* **JS Example:**
```javascript
const target = document.querySelector('#container');
target.insertAdjacentHTML('beforebegin', '<h3>Header Before Container</h3>');

```



### (খ) `afterbegin`

এটি টার্গেট এলিমেন্টের **ভেতরে** একদম শুরুতে নতুন কিছু যোগ করে। এটি এলিমেন্টের প্রথম সন্তানে (First Child) পরিণত হয়।

* **JS Example:**
```javascript
const target = document.querySelector('#container');
target.insertAdjacentHTML('afterbegin', '<span>New First Child</span>');

```



### (গ) `beforeend`

এটি টার্গেট এলিমেন্টের **ভেতরে** একদম শেষে নতুন কিছু যোগ করে। এটি এলিমেন্টের শেষ সন্তানে (Last Child) পরিণত হয়।

* **JS Example:**
```javascript
const target = document.querySelector('#container');
target.insertAdjacentHTML('beforeend', '<span>New Last Child</span>');

```



### (ঘ) `afterend`

এটি টার্গেট এলিমেন্টের ঠিক **পরে** (বাইরে) নতুন কিছু যোগ করে। এটিও একটি 'Sibling' হিসেবে যুক্ত হয়।

* **JS Example:**
```javascript
const target = document.querySelector('#container');
target.insertAdjacentHTML('afterend', '<p>Footer After Container</p>');

```



---

## ২. `insertBefore` পদ্ধতি

এটি একটু পুরনো পদ্ধতি এবং এটি ব্যবহার করতে হলে আপনাকে ওই এলিমেন্টের **Parent (বাবা-মা)** এলিমেন্টকে ধরতে হবে।

**সিলেবাস:** `parentNode.insertBefore(newNode, referenceNode);`

* **HTML:**
```html
<ul id="myList">
    <li>Item 1</li>
    <li id="item2">Item 2</li>
</ul>

```


* **JS Example:**
```javascript
const list = document.getElementById('myList');
const ref = document.getElementById('item2');

const newItem = document.createElement('li');
newItem.textContent = 'Inserted Item';

// এটি 'Item 2' এর ঠিক উপরে 'Inserted Item' বসাবে
list.insertBefore(newItem, ref);

```

### একনজরে পার্থক্য:

| পদ্ধতি | কোথায় বসে? | কার ওপর কল করা হয়? |
| --- | --- | --- |
| **`beforebegin`** | টার্গেট এলিমেন্টের আগে (বাইরে) | টার্গেট এলিমেন্ট |
| **`afterbegin`** | ভেতরে শুরুতে | টার্গেট এলিমেন্ট |
| **`beforeend`** | ভেতরে শেষে | টার্গেট এলিমেন্ট |
| **`afterend`** | টার্গেট এলিমেন্টের পরে (বাইরে) | টার্গেট এলিমেন্ট |
| **`insertBefore`** | রেফারেন্স নোডের আগে | প্যারেন্ট এলিমেন্ট |

আপনি কি এই কোডগুলো প্র্যাকটিস করার জন্য একটি **সম্পূর্ণ HTML ফাইল** চাচ্ছেন যেখানে সবগুলো উদাহরণ একসাথে থাকবে?