// Task N1
const startingNum = 5;

const expo = (num, caret, cb) => {
  if (caret === 1) return num;

  return expo(cb(num), (caret -= 1), cb);
};

console.log(expo(startingNum, 3, (num) => num * startingNum));

// Task N2
function createPost(post) {
  // Card
  const postCard = document.createElement("div");
  postCard.setAttribute("class", "post-card");
  // Title
  const postTitle = document.createElement("h1");
  postTitle.textContent = post.title;
  // Body
  const postBody = document.createElement("h2");
  postBody.textContent = post.body;
  // Author
  const postUserId = document.createElement("p");
  postUserId.textContent = `By User: ${post.userId}`;

  postCard.append(postTitle, postBody, postUserId);
  document.body.append(postCard);
}

// Promise
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((posts) => posts.forEach((post) => createPost(post)))
//   .catch((err) => console.log(err));

// Async / Await
const fetchPosts = async (url) => {
  try {
    const rawPosts = await fetch(url);
    const posts = await rawPosts.json();

    posts.forEach((post) => createPost(post));
  } catch (err) {
    console.log(err);
  }
};

fetchPosts("https://jsonplaceholder.typicode.com/posts");

// Task N3
const user = {
  name: "James",
};

const deepCopy = async (object) => {
  return new Promise((resolve, reject) => {
    if (typeof object !== "object" || Array.isArray(object))
      reject("Please pass an object as an argument");
    else resolve(JSON.parse(JSON.stringify(object)));
  });
};

// Promise
// deepCopy(user)
//   .then((res) => {
//     const copy = res;
//     copy.name = "john";
//     console.log(user, copy);
//   })
//   .catch((err) => console.log(err));

// Async / Await
const checkIfCopied = async (obj) => {
  try {
    const copy = await deepCopy(obj);
    copy.name = "john";
    console.log(user, copy);
  } catch (err) {
    console.log(err);
  }
};

checkIfCopied(user);
