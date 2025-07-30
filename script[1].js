function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    // ✅ Remove task on click
    li.addEventListener("click", () => {
      li.remove();
    });

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}
