package model.dao;

import model.exceptions.EmptyTitle;

import java.sql.SQLException;
import java.util.ArrayList;

public interface DAO<T> {
    void create(T object) throws SQLException, EmptyTitle;
    ArrayList<T> read() throws SQLException;
    void update(T object, String ... info) throws SQLException, EmptyTitle;
    void delete(T object) throws SQLException;
}