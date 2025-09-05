package model.dao.sqlite;

import model.classes.Task;
import model.dao.interfaces.TaskDAO;
import model.exceptions.EmptyTitle;
import model.test.TestData;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class SQLiteTask implements TaskDAO {
    Connection connection = null;

    public SQLiteTask(Connection connection) { this.connection = connection; }

    @Override
    public void create(Task object) throws SQLException, EmptyTitle {
        TestData.nonTitleCheck(object.getTitle());
        TestData.nonTitleCheck(object.getDescription());

        String input = "INSERT INTO tasks(task_id, title, description, list_id) VALUES(?, ?, ?, ?)";
        PreparedStatement pstmt = connection.prepareStatement(input);

        pstmt.setString(1,object.getTask_id());
        pstmt.setString(2, object.getTitle().trim());
        pstmt.setString(3, object.getDescription().trim());
        pstmt.setString(4, object.getList_id());

        pstmt.execute();
    }

    @Override
    public ArrayList<Task> read() throws SQLException {
        String select = "SELECT * FROM tasks";

        PreparedStatement pstmt = connection.prepareStatement(select);

        ResultSet rs = pstmt.executeQuery();

        ArrayList<Task> tasks = new ArrayList<>();

        while (rs.next()){
            tasks.add(new Task(rs.getString("task_id"), rs.getString("title"), rs.getString("description"), rs.getString("list_id")));
        }

        return tasks;
    }

    @Override
    public void update(Task object, String... info) throws SQLException, EmptyTitle {
        TestData.nonTitleCheck(info[0]);
        TestData.nonTitleCheck(info[1]);

        String update = "UPDATE tasks SET title = ?, description = ? WHERE task_id = ?";

        PreparedStatement pstmt = connection.prepareStatement(update);

        pstmt.setString(1, info[0].trim());
        pstmt.setString(2, info[1].trim());
        pstmt.setString(3, object.getTask_id());

        pstmt.execute();
    }

    @Override
    public void delete(Task object) throws SQLException {
        String delete = "DELETE FROM tasks WHERE task_id = ?";

        PreparedStatement pstmt = connection.prepareStatement(delete);

        pstmt.setString(1, object.getTask_id());

        pstmt.execute();
    }
}