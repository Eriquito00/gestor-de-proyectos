package model.test;

import model.exceptions.EmptyTitle;

public class TestData {
    public static void nonTitleCheck (String title) throws EmptyTitle {
        if (title.trim().isEmpty()) throw new EmptyTitle("El titulo introducido esta vacio.");
    }
}