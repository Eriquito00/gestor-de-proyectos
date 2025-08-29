package controller;

import model.connection.SQLiteConnection;
import view.View;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Main {
    public static void main(String[] args) {
        String url = "bbdd/database.db";

        try (Connection connection = SQLiteConnection.sqliteConnection(url);
             Statement stmt = connection.createStatement()) {

            ResultSet rs = stmt.executeQuery("SELECT * FROM projects;");
            View.executeSelect(rs);

        } catch (SQLException e) {
            View.viewMsg(e.getMessage());
        }
    }
}