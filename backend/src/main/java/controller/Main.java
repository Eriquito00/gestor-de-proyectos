package controller;

import model.connection.SQLiteConnection;
import model.classes.Project;
import model.classes.List;
import model.classes.Task;
import model.dao.sqlite.SQLiteList;
import model.dao.sqlite.SQLiteProject;
import model.dao.sqlite.SQLiteTask;
import model.exceptions.EmptyTitle;
import view.View;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

    }

    private static void testTask(){
        Connection connection = null;
        try {
            connection = SQLiteConnection.sqliteConnection();

            SQLiteTask sqLiteTask = new SQLiteTask(connection);

            Task p = new Task("24bb362b-db2b-4a27-b9ef-0df634e00f65","61bb932b-db2b-4a73-b9ef-0df783e00f65", "Prueba tareaa", "Descripcion prueba tarea");

            ArrayList<Task> tasks;

            tasks = sqLiteTask.read();
            System.out.println("1 initial" + "\n");
            View.showObjectsFromArray(tasks);

            sqLiteTask.update(p,"Prueba cascar", "Descripcion polla");
            tasks = sqLiteTask.read();
            System.out.println("2 edited" + "\n");
            View.showObjectsFromArray(tasks);

            sqLiteTask.delete(p);
            tasks = sqLiteTask.read();
            System.out.println("3 deleted" + "\n");
            View.showObjectsFromArray(tasks);

            sqLiteTask.create(p);
            tasks = sqLiteTask.read();
            System.out.println("4 created" + "\n");
            View.showObjectsFromArray(tasks);

            connection.close();
        }
        catch (SQLException | EmptyTitle e) {
            View.viewMsg(e.getMessage());
        }
    }

    private static void testList(){
        Connection connection = null;
        try {
            connection = SQLiteConnection.sqliteConnection();

            SQLiteList sqLiteList = new SQLiteList(connection);

            List p = new List("98bb136b-db2b-4a27-b9ef-0df046e00f65","24bb362b-db2b-4a27-b9ef-0df634e00f65", "Pendientes");

            ArrayList<List> lists;

            lists = sqLiteList.read();
            System.out.println("1 initial" + "\n");
            View.showObjectsFromArray(lists);

            sqLiteList.update(p,"En proceso");
            lists = sqLiteList.read();
            System.out.println("2 edited" + "\n");
            View.showObjectsFromArray(lists);

            sqLiteList.delete(p);
            lists = sqLiteList.read();
            System.out.println("3 deleted" + "\n");
            View.showObjectsFromArray(lists);

            sqLiteList.create(p);
            lists = sqLiteList.read();
            System.out.println("4 created" + "\n");
            View.showObjectsFromArray(lists);

            connection.close();
        }
        catch (SQLException | EmptyTitle e) {
            View.viewMsg(e.getMessage());
        }
    }

    private static void testProject(){
        Connection connection = null;
        try {
            connection = SQLiteConnection.sqliteConnection();

            SQLiteProject sqLiteProject = new SQLiteProject(connection);

            Project p = new Project("98bb136b-db2b-4a27-b9ef-0df046e00f65","Proyecto 1", "Descripcion de proyecto 1");

            ArrayList<Project> projects;

            projects = sqLiteProject.read();
            System.out.println("1 initial" + "\n");
            View.showObjectsFromArray(projects);

            sqLiteProject.update(p,"Proyecto edit", "Descripcion de proyecto edit");
            projects = sqLiteProject.read();
            System.out.println("2 edited" + "\n");
            View.showObjectsFromArray(projects);

            sqLiteProject.delete(p);
            projects = sqLiteProject.read();
            System.out.println("3 deleted" + "\n");
            View.showObjectsFromArray(projects);

            sqLiteProject.create(p);
            projects = sqLiteProject.read();
            System.out.println("4 created" + "\n");
            View.showObjectsFromArray(projects);

            connection.close();
        }
        catch (SQLException | EmptyTitle e) {
            View.viewMsg(e.getMessage());
        }
    }

    private static void testConnection(){
        Connection connection = null;
        try {
            connection = SQLiteConnection.sqliteConnection();
            Statement stmt = connection.createStatement();

            ResultSet rs = stmt.executeQuery("SELECT * FROM projects;");
            View.executeSelect(rs);

            connection.close();

        } catch (SQLException e) {
            View.viewMsg(e.getMessage());
        }
    }
}