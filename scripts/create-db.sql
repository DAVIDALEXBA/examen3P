
drop table producto;
drop table categoria;


create table categoria(
    id integer auto_increment primary key,
    nombre varchar(32) not null

);

create table producto(
    id integer auto_increment primary key,
    nombre varchar(64) not null,
    categoria_id integer not null,
    foreign key (categoria_id) references categoria(id)
);



create table examen(
    id integer auto_increment primary key,
    id_materia varchar(32) not null,
    preguntas varchar(100) null
    foreign key (categoria_materia)
);
create table materia(
    id integer auto_increment primary key,
    nombre varchar(32) not null

);
insert into materia(nombre) values('Historia');
insert into materia(nombre) values('Ciencias Naturales');
insert into materia(nombre) values('Geografia');
insert into materia(nombre) values('Matematicas');