package model.classes;

public class Project {
    private String  project_id;
    private String title;
    private String description;

    public Project(String project_id, String title, String description){
        this.project_id = project_id;
        this.title = title;
        this.description = description;
    }

    public String getProject_id() {
        return project_id;
    }

    public void setProject_id(String project_id) {
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