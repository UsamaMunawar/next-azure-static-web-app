export async function getAllTasks() {
  const response = await fetch('/api/todos');
  return await response.json();
}
