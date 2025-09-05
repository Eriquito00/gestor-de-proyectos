package model.dao.sqlite;

import model.dao.interfaces.ListDAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import model.classes.List;
import model.exceptions.EmptyTitle;
import model.test.TestData;

public class SQLiteList implements ListDAO {
    private Connection connection = null;

    public SQLiteList (Connection connection) { this.connection = connection; }

    @Override
    public void create(List object) throws SQLException, EmptyTitle {
        TestData.nonTitleCheck(object.getTitle());

        String input = "INSERT INTO lists(list_id, title, project_id) VALUES(?, ?, ?)";
        PreparedStatement pstmt = connection.prepareStatement(input);

        pstmt.setString(1,object.getList_id());
        pstmt.setString(2, object.getTitle().trim());
        pstmt.setString(3, object.getProject_id());

        pstmt.execute();
    }

    @Override
    public ArrayList<List> read() throws SQLException {
        String select = "SELECT * FROM lists";

        PreparedStatement pstmt = connection.prepareStatement(select);

        ResultSet rs = pstmt.executeQuery();

        ArrayList<List> lists = new ArrayList<>();

        while (rs.next()){
            lists.add(new List(rs.getString("list_id"), rs.getString("title"), rs.getString("project_id")));
        }

        return lists;
    }

    @Override
    public void update(List object, String... info) throws SQLException, EmptyTitle {
        TestData.nonTitleCheck(info[0]);

        String update = "UPDATE lists SET title = ? WHERE list_id = ?";

        PreparedStatement pstmt = connection.prepareStatement(update);

        pstmt.setString(1, info[0].trim());
        pstmt.setString(2, object.getList_id());

        pstmt.execute();
    }

    @Override
    public void delete(List object) throws SQLException {
        String delete = "DELETE FROM lists WHERE list_id = ?";

        PreparedStatement pstmt = connection.prepareStatement(delete);

        pstmt.setString(1, object.getList_id());

        pstmt.execute();
    }
}