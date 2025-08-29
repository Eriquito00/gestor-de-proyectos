package model.classes;

public class Task {
    int task_id;
    String title;
    String description;
    int list_id;

    public Task(int task_id, String title, String description, int list_id){
        this.task_id = task_id;
        this.title = title;
        this.description = description;
        this.list_id = list_id;
    }

    public Task(String title, String description, int list_id){
        this.title = title;
        this.description = description;
        this.list_id = list_id;
    }

    public int getTask_id() {
        return task_id;
    }

    public void setTask_id(int task_id) {
        this.task_id = task_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getList_id() {
        return list_id;
    }

    public void setList_id(int list_id) {
        this.list_id = list_id;
    }

    @Override
    public String toString() {
        return "Task_id: " + task_id + "\n" +
                "Title: " + title + "\n" +
                "Description: " + description + "\n" +
                "List_id: " + list_id;
    }
}