package model.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class SQLiteConnection {
    public static Connection sqliteConnection() throws SQLException {
        try {
            return DriverManager.getConnection("jdbc:sqlite:bbdd/database.db");
        } catch (SQLException e) {
            throw new SQLException(e);
        }
    }
}