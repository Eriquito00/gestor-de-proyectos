package view;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

public class View {
    public static void viewMsg(String msg) {
        System.out.println(msg);
    }

    public static void executeSelect(ResultSet rs) throws SQLException {
        ResultSetMetaData md = rs.getMetaData();
        int numColumnes = md.getColumnCount();

        System.out.println(md.getTableName(1).toUpperCase());
        for (int i = 1; i <= numColumnes; i++) {
            System.out.print(md.getColumnName(i).toUpperCase() + "\t");
        }
        System.out.println();

        while (rs.next()) {
            for (int i = 1; i <= numColumnes; i++) {
                System.out.print(rs.getString(i) + "     " + "\t");
            }
            System.out.println();
        }
        System.out.println();
    }
}