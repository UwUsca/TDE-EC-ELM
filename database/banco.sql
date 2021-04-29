CREATE DATABASE banco;

CREATE TABLE login(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50),
    senha VARCHAR(50)
;

INSERT INTO login (id, usuario, senha) 
VALUES 
    (NULL, 'uwusca', MD5('123456789')) 