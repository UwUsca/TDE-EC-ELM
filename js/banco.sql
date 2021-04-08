CREATE DATABASE 'banco';

CREATE TABLE 'bancodados'.'USUARIO'(
    'nome' varchar(200) NOT NULL default '',
    'email' varchar(200) NOT NULL default '',
    'senha' varchar(45) NOT NULL default '',
    PRIMARY KEY ('email') 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    