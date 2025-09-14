#1 - var -> পুরো ফাংশনে ব্যবহার করা যায় (চেন্জ করা যায়)
    let -> ব্লকের মধ্যে লেখা আছে সেখানে পাওয়া যাবে (একবার declare করলে আবার একই scope-এ declare করা যায় না। তবে value পরিবর্তন করা যায়।)
    const -> let এর মতো ব্লকের মধ্যে সীমাবদ্ধ (চেন্জ করা যায় না)


#2 - forEach()
অ্যারের প্রতিটি element এর ওপর loop চালায়।
 - map()
 প্রতিটি element কে রূপান্তর করে।
একটি নতুন array return করে, যেখানে পরিবর্তিত মানগুলো থাকে।

-filter()
নির্দিষ্ট শর্ত অনুযায়ী element গুলো ফিল্টার করে।
একটি নতুন array return করে, যেখানে শুধু শর্ত পূরণ করা element থাকে।

#3 - General 
function add(a, b) {
  return a + b;
}

- Arrow Function
const add = (a, b) => a + b;


#4 - Destructuring Assignment হচ্ছে ES6 এ আসা একটি ফিচার, যা দিয়ে array বা object থেকে আলাদা আলাদা মান সহজে বের করা যায়।

#5 - Template Literals হচ্ছে ES6 এ আসা নতুন string feature, যা ব্যাকটিক ( ` ) দিয়ে লেখা হয়।