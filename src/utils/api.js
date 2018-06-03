
// const url = 'http://localhost:3001';
const url = 'https://us-central1-react-redux-readable.cloudfunctions.net/app';
const headers = { 
  'Authorization': 'readable-project',
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

//CATEGORIES
export const fetchCategories = () => 
  fetch(`${url}/categories`, { headers })
  .then(res => res.json())

  
//POSTS
export const fetchPosts = () =>
  fetch(`${url}/posts`, { headers })
  .then(res => res.json())

export const fetchPostsByCategory = (category) =>
  fetch(`${url}/${category}/posts`, { headers })
  .then(res => res.json())

export const sendVotePost = (id, vote) =>
  fetch(`${url}/posts/${id}`, {
    headers,
    method: 'POST',
    body: JSON.stringify({ option: vote})
  })
  .then(res => res.json())

export const fetchSinglePost = (id) =>
  fetch(`${url}/posts/${id}`, { headers })
  .then(res => res.json())

export const fetcheditPost = (id, title, body) =>
  fetch(`${url}/posts/${id}`, { 
    headers,
    method: 'PUT',
    body: JSON.stringify({ body, title }),
   })
  .then(res => res.json())

export const fetchDeletePost = (id) =>
   fetch(`${url}/posts/${id}`, { 
     headers,
     method: 'DELETE'
    })
   .then(res => res.json())

export const fetchAddPost = (id, timestamp, title, body, author, category) =>
  fetch(`${url}/posts`, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      id,
      timestamp,
      title,
      body,
      author,
      category
    })
  })


//COMMENTS
export const fetchAllComments = (id) =>
  fetch(`${url}/posts/${id}/comments`, { headers })
  .then(res => res.json())

export const fetchAddComment = (id, timestamp, body, author, parentId) =>
  fetch(`${url}/comments`, { 
    headers,
    method: 'POST',
    body: JSON.stringify({
      id,
      timestamp,
      body,
      author,
      parentId
    })
   });

export const fetchDeleteComment = (id) =>
   fetch(`${url}/comments/${id}`, { headers, method: 'DELETE' })
   .then(res => res.json())

export const sendVoteComment = (id, vote) =>
  fetch(`${url}/comments/${id}`, {
    headers,
    method: 'POST',
    body: JSON.stringify({ option: vote})
  })
  .then(res => res.json())

export const fetchEditComment = (id, timestamp, body) =>
  fetch(`${url}/comments/${id}`, { 
    headers,
    method: 'PUT',
    body: JSON.stringify({ body, timestamp }),
   })
  .then(res => res.json())

export const fetchSingleComment = (id) =>
  fetch(`${url}/comments/${id}`, { headers })
  .then(res => res.json())