package model.dao.sqlite;

import model.classes.Project;
import model.dao.interfaces.ProjectDAO;
import model.exceptions.EmptyTitle;
import model.test.TestData;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class SQLiteProject implements ProjectDAO {
    private Connection connection = null;

    public SQLiteProject (Connection connection) { this.connection = connection; }

    @Override
    public void create(Project object) throws SQLException, EmptyTitle {
        TestData.nonTitleCheck(object.getTitle());
        TestData.nonTitleCheck(object.getDescription());

        String input = "INSERT INTO projects(project_id, title, description) VALUES(?, ?, ?)";
        PreparedStatement pstmt = connection.prepareStatement(input);

        pstmt.setString(1,object.getProject_id());
        pstmt.setString(2, object.getTitle().trim());
        pstmt.setString(3, object.getDescription().trim());

        pstmt.execute();
    }

    @Override
    public ArrayList<Project> read() throws SQLException {
        String select = "SELECT * FROM projects";

        PreparedStatement pstmt = connection.prepareStatement(select);

        ResultSet rs = pstmt.executeQuery();

        ArrayList<Project> projects = new ArrayList<>();

        while (rs.next()){
            projects.add(new Project(rs.getString("project_id"),rs.getString("title"),rs.getString("description")));
        }

        return projects;
    }

    @Override
    public void update(Project object, String... info) throws SQLException, EmptyTitle {
        TestData.nonTitleCheck(info[0]);
        TestData.nonTitleCheck(info[1]);

        String update = "UPDATE projects SET title = ?, description = ? WHERE project_id = ?";

        PreparedStatement pstmt = connection.prepareStatement(update);

        pstmt.setString(1, info[0].trim());
        pstmt.setString(2, info[1].trim());
        pstmt.setString(3, object.getProject_id());

        pstmt.execute();
    }

    @Override
    public void delete(Project object) throws SQLException {
        String delete = "DELETE FROM projects WHERE project_id = ?";

        PreparedStatement pstmt = connection.prepareStatement(delete);

        pstmt.setString(1, object.getProject_id());

        pstmt.execute();
    }
}