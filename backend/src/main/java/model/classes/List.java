package model.classes;

public class List {
    private String project_id;
    private String list_id;
    private String title;

    public List(String project_id, String list_id, String title){
        this.project_id = project_id;
        this.list_id = list_id;
        this.title = title;
    }

    public String getProject_id() {
        return project_id;
    }

    public void setProject_id(String project_id) {
        this.project_id = project_id;
    }

    public String getList_id() {
        return list_id;
    }

    public void setList_id(String list_id) {
        this.list_id = list_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Project_id: " + project_id + "\n" +
                "List_id: " + list_id + "\n" +
                "Title: " + title;
    }
}