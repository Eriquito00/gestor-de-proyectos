package model.dao;

import java.sql.SQLException;
import java.util.ArrayList;

public interface DAO<T> {
    void create(T object) throws SQLException;
    ArrayList<T> read() throws SQLException;
    void update(T object, String ... info) throws SQLException;
    void delete(T object) throws SQLException;
}