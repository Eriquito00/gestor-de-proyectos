package model.classes;

public class Task {
    private String list_id;
    private String task_id;
    private String title;
    private String description;

    public Task(String list_id, String task_id, String title, String description) {
        this.list_id = list_id;
        this.task_id = task_id;
        this. title = title;
        this.description = description;
    }

    public String getList_id() {
        return list_id;
    }

    public void setList_id(String list_id) {
        this.list_id = list_id;
    }

    public String getTask_id() {
        return task_id;
    }

    public void setTask_id(String task_id) {
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

    @Override
    public String toString() {
        return "List_id: " + list_id + "\n" +
                "Task_id: " + task_id + "\n" +
                "Title: " + title + "\n" +
                "Description: " + description;
    }
}