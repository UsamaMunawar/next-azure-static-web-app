export async function getAllTasks() {
  const response = await fetch('/api/dummy-func');
  return await response.json();
}
