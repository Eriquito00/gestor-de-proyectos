DROP TABLE tasks;
DROP TABLE lists;
DROP TABLE projects;

CREATE TABLE projects (
	project_id		CHAR(36),
	title			VARCHAR(25) NOT NULL,
	description		VARCHAR(150),
	CONSTRAINT pk_projects PRIMARY KEY (project_id)
);

CREATE TABLE lists (
	list_id			CHAR(36),
	title			VARCHAR(15) NOT NULL,
	project_id		CHAR(36),
	CONSTRAINT pk_lists PRIMARY KEY (list_id),
	CONSTRAINT fk_lists_projects FOREIGN KEY (project_id)
		REFERENCES projects (project_id)
);

CREATE TABLE tasks (
	task_id			CHAR(36),
	title			VARCHAR(15) NOT NULL,
	description		VARCHAR(150),
	list_id			CHAR(36),
	CONSTRAINT pk_tasks PRIMARY KEY (task_id),
	CONSTRAINT fk_tasks_lists FOREIGN KEY (list_id)
		REFERENCES lists (list_id)
);


INSERT INTO projects(project_id, title, description)
	VALUES("f47ac10b-58cc-4372-a567-0e02b2c3d479", "Proyecto de prueba", "Hola soy una descripcion de prueba");
	
INSERT INTO lists(list_id, title, project_id)
	VALUES("f36ac09b-47cc-3261-a456-9e91b1c2d368", "Lista de prueba", "f47ac10b-58cc-4372-a567-0e02b2c3d479");
	
INSERT INTO tasks(task_id, title, description, list_id)
	VALUES("f25ac98b-36cc-2150-a345-8e80b0c1d257", "Tarea de prueba", "Hola soy una description de prueba", "f36ac09b-47cc-3261-a456-9e91b1c2d368");