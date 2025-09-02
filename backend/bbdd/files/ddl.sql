DROP TABLE tasks;
DROP TABLE lists;
DROP TABLE projects;

CREATE TABLE projects (
	project_id		INTEGER,
	title			VARCHAR(25) NOT NULL UNIQUE,
	description		VARCHAR(150),
	CONSTRAINT pk_projects PRIMARY KEY (project_id AUTOINCREMENT)
);

CREATE TABLE lists (
	list_id			INTEGER,
	title			VARCHAR(15) UNIQUE,
	project_id		INT NOT NULL,
	CONSTRAINT pk_lists PRIMARY KEY (list_id AUTOINCREMENT),
	CONSTRAINT fk_lists_projects FOREIGN KEY (project_id)
		REFERENCES projects (project_id)
);

CREATE TABLE tasks (
	task_id			INTEGER,
	title			VARCHAR(15) NOT NULL UNIQUE,
	description		VARCHAR(150),
	list_id			INT UNSIGNED,
	CONSTRAINT pk_tasks PRIMARY KEY (task_id AUTOINCREMENT),
	CONSTRAINT fk_tasks_lists FOREIGN KEY (list_id)
		REFERENCES lists (list_id)
);


INSERT INTO projects(title, description)
	VALUES("Proyecto de prueba", "Hola soy una descripcion de prueba");
	
INSERT INTO lists(title, project_id)
	VALUES("Lista de prueba", 1);
	
INSERT INTO tasks(title, description, list_id)
	VALUES("Tarea de prueba", "Hola soy una description de prueba", 1);