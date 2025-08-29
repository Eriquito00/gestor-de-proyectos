package model.classes;

public class List {
    int list_id;
    String title;
    int project_id;

    public List(int list_id_id, String title, int project_id){
        this.list_id = list_id_id;
        this.title = title;
        this.project_id = project_id;
    }

    public List(String title, int project_id){
        this.title = title;
        this.project_id = project_id;
    }

    public int getList_id() {
        return list_id;
    }

    public void setList_id(int list_id) {
        this.list_id = list_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getProject_id() {
        return project_id;
    }

    public void setProject_id(int project_id) {
        this.project_id = project_id;
    }

    @Override
    public String toString() {
        return "List_id: " + list_id + "\n" +
                "Title: " + title + "\n" +
                "Project_id: " + project_id;
    }
}