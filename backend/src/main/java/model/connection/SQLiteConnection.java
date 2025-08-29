package model.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class SQLiteConnection {
    public static Connection sqliteConnection(String url) throws SQLException {
        try {
            return DriverManager.getConnection("jdbc:sqlite:" + url);
        } catch (SQLException e) {
            throw new SQLException(e);
        }
    }
}