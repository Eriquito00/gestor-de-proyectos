package controller;

import model.connection.SQLiteConnection;
import model.classes.Project;
import model.classes.List;
import model.classes.Task;
import model.dao.sqlite.SQLiteProject;
import view.View;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

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