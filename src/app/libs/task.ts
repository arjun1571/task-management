export async function deletePost(id: any) {
  const response = await fetch(`http://localhost:3000/api/task?id=${id}`, {
    method: "DELETE",
  });

  return response.json();
}

export async function fetchSinglePost(id: any) {
  const response = await fetch(`http://localhost:3000/api/task/${id}`);
  return response.json();
}

export async function createPost(newPost: any) {
  console.log("this is data", newPost);
  const response = await fetch(`http://localhost:3000/api/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  return response.json();
}
