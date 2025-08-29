package model.classes;

public class Project {
    int project_id;
    String title;
    String description;

    public Project(int project_id, String title, String description){
        this.project_id = project_id;
        this.title = title;
        this.description = description;
    }

    public Project(String title, String description){
        this.title = title;
        this.description = description;
    }

    public int getProject_id() {
        return project_id;
    }

    public void setProject_id(int project_id) {
        this.project_id = project_id;
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
        return "Project_id: " + project_id + "\n" +
                "Title: " + title + "\n" +
                "Description: " + description;
    }
}