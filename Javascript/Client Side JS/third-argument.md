# ১. `addEventListener` এর ৩য় আর্গুমেন্ট (The 3rd Argument)

সাধারণত আমরা `addEventListener` এ দুটি আর্গুমেন্ট ব্যবহার করি (ইভেন্টের নাম এবং ফাংশন)। তবে একটি **অপশনাল ৩য় আর্গুমেন্টও** দেওয়া যায়, যা একটি `Boolean` (সত্য/মিথ্যা) বা একটি `Object` হতে পারে।

## ক. বুলিয়ান ভ্যালু (Boolean Value)

যদি আপনি ৩য় আর্গুমেন্ট হিসেবে `true` পাস করেন, তাহলে ইভেন্টটি **Capturing Phase**-এ কাজ করবে। ডিফল্টভাবে এটি `false` থাকে, অর্থাৎ ইভেন্ট **Bubbling Phase**-এ কাজ করে।

> **সতর্কতা:** যদি আপনি `true` দিয়ে কোনো লিসেনার যোগ করেন, তবে সেটি রিমুভ (`removeEventListener`) করার সময়ও আপনাকে ৩য় আর্গুমেন্ট হিসেবে `true` দিতে হবে।

**উদাহরণ:**

```javascript
function handler() {
  console.log("ইভেন্টটি ক্যাপচার করা হয়েছে!");
}

// যোগ করা (Capturing mode এ)
document.addEventListener("click", handler, true);

// রিমুভ করা (অবশ্যই true দিতে হবে)
document.removeEventListener("click", handler, true);

```

## খ. অপশনস অবজেক্ট (Options Object)

শুধুমাত্র `true` বা `false` দেওয়ার বদলে আপনি একটি অবজেক্ট পাস করতে পারেন যা ইভেন্টের আচরণ আরও স্পষ্টভাবে নিয়ন্ত্রণ করে। এই অবজেক্টে ৩টি প্রধান প্রপার্টি থাকতে পারে: `capture`, `once`, এবং `passive`।

**১. `capture: true**`
এটি বুলিয়ান `true` এর মতোই কাজ করে। এটি ইভেন্টটিকে ক্যাপচারিং ফেজে (Capturing Phase) হ্যান্ডেল করে।

```javascript
document.addEventListener("click", handleClick, { capture: true });

```

**২. `once: true**`
যদি আপনি চান ইভেন্টটি **মাত্র একবার** ঘটুক এবং তারপর অটোমেটিক রিমুভ হয়ে যাক, তবে এটি ব্যবহার করবেন।

```javascript
document.addEventListener("click", () => {
  console.log("আমি মাত্র একবারই রান হবো!");
}, { once: true });

```

**৩. `passive: true**`
এটি ব্রাউজারকে জানায় যে, এই ইভেন্ট হ্যান্ডলারটি `preventDefault()` কল করবে না। এটি মোবাইল ডিভাইসে স্ক্রলিং (Scrolling) পারফরম্যান্স বাড়াতে খুব গুরুত্বপূর্ণ। ব্রাউজার আগে থেকেই জানে যে স্ক্রলিং আটকানো হবে না, তাই স্ক্রলিং খুব মসৃণ (Smooth) হয়।

> **নোট:** Chrome এবং Firefox-এ `touchmove` এবং `mousewheel` ইভেন্টগুলোর জন্য `passive` ডিফল্টভাবে `true` থাকে। আপনি যদি স্ক্রলিং আটকাতে চান, তবে আপনাকে স্পষ্টভাবে `passive: false` সেট করতে হবে।

```javascript
// স্ক্রলিং ফাস্ট হবে, কারণ আমরা ব্রাউজারকে বলেছি আমরা ডিফল্ট অ্যাকশন থামাবো না
document.addEventListener("touchmove", handleScroll, { passive: true });

```

# ২. ইভেন্ট অবজেক্ট (The Event Object)

যখন কোনো ইভেন্ট ঘটে, তখন ব্রাউজার আপনার ফাংশনে একটি `Event Object` পাঠায়। এই অবজেক্টে ইভেন্ট সম্পর্কিত সব তথ্য থাকে। নিচে এর গুরুত্বপূর্ণ প্রপার্টিগুলো উদাহরণসহ দেওয়া হলো:

* **`type`**: ইভেন্টের নাম (যেমন: "click", "submit")।
* **`target`**: যে এলিমেন্টটিতে **আসলে** ইভেন্টটি ঘটেছে।
* **`currentTarget`**: যে এলিমেন্টটিতে আপনি ইভেন্ট লিসেনার (`addEventListener`) **যুক্ত করেছেন**।
* **`timeStamp`**: ইভেন্টটি কখন ঘটেছে তার সময় (মিলি-সেকেন্ডে)। এটি দুটি ইভেন্টের মধ্যবর্তী সময় মাপতে কাজে লাগে।
* **`isTrusted`**: ইভেন্টটি যদি ব্রাউজার নিজে তৈরি করে (যেমন মাউস ক্লিক) তবে `true` হবে। আর যদি জাভাস্ক্রিপ্ট কোড দিয়ে তৈরি করা হয়, তবে `false` হবে।

**বাস্তব উদাহরণ:**

ধরি, আপনার একটি `div` আছে এবং তার ভেতরে একটি `button` আছে। আপনি `div`-এ ইভেন্ট লিসেনার লাগিয়েছেন।

```html
<div id="parent">
  <button id="child">আমাকে ক্লিক করুন</button>
</div>

```

```javascript
const parent = document.getElementById("parent");

parent.addEventListener("click", function(event) {
  console.log("Type:", event.type); 
  // আউটপুট: "click"

  console.log("Target:", event.target.tagName); 
  // আউটপুট: "BUTTON" (কারণ আপনি বাটনে ক্লিক করেছেন)

  console.log("CurrentTarget:", event.currentTarget.tagName); 
  // আউটপুট: "DIV" (কারণ লিসেনারটি এই ডিভ-এর সাথে যুক্ত)
  
  console.log("Timestamp:", event.timeStamp); 
  // আউটপুট: 1245.5 (পেইজ লোড হওয়ার পর অতিক্রান্ত সময়)
  
  console.log("IsTrusted:", event.isTrusted); 
  // আউটপুট: true (কারণ আপনি নিজে ক্লিক করেছেন)
});

```

# এক নজরে সারসংক্ষেপ (Summary)

| ফিচার | কাজ |
  |
| **`capture: true`** | ইভেন্ট উপর থেকে নিচে (Capturing Phase) ধরা হবে। |
| **`once: true`** | ইভেন্টটি একবার রান হয়ে নিজে নিজেই ডিলিট হয়ে যাবে। |
| **`passive: true`** | স্ক্রলিং পারফরম্যান্স বাড়ায় (বলে দেয় যে `preventDefault` কল হবে না)। |
| **`target`** | যেই এলিমেন্টে ক্লিক করা হয়েছে। |
| **`currentTarget`** | যেই এলিমেন্টে `addEventListener` লাগানো আছে। |