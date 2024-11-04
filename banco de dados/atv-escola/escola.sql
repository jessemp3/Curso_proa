create database db_escola;
use db_escola;

create table tb_aluno(
id_aluno int auto_increment primary key,
nome_aluno varchar(50) not null,
idade_aluno int not null,
cpf_aluno char(11) not null,
email_aluno varchar(50),
datanasc_aluno date,
genero_paciente enum('femenino','masculino','outro') 
);

alter table tb_aluno
modify column genero_paciente enum('feminino','masculino','outro');



insert into tb_aluno (nome_aluno, idade_aluno, cpf_aluno, email_aluno, datanasc_aluno, genero_paciente) values
('Guilherme Martins', '18', '57891149895', 'guillherme10mar@gmail.com', 20060415, 'masculino'),
('Eduarda Da Silva', '18', '59895043391', 'eduardasilva@gmail.com', 20060520, 'feminino'),
('Daniela Santos', '17', '51100047891', 'daniela@gmail.com', 20071025, 'feminino'),
('Fernando Soares', '18', '52300577808', 'soares@gmail.com', 20061010, 'masculino'),
('Julia Souza', '16', '57689512843', 'jusouza@gmail.com', 20080310, 'feminino'),
('Helena Souza', '16', '58989512944', 'helsouza@gmail.com', 20080310, 'feminino'),
('Igor Rocha', '17', '56789543976', 'igorr@gmail.com', 20070517, 'masculino'),
('Ana Luiza', '18', '48989577342', 'analu@gmail.com', 20060717, 'feminino'),
('Andrey Miranda', '19', '76899524300', 'mandrey@gmail.com', 20050520, 'masculino'),
('Jacinto Freitas', '18', '00052376000', 'jacifre@gmail.com', 20060707, 'outro');

describe tb_aluno;
select * from tb_aluno;

create table tb_professor(
id_prof int auto_increment primary key,
nome_prof varchar(50) not null,
idade_prof int not null,
cpf_prof char(11) not null,
email_prof varchar(50),
disciplina_prof varchar(50),
endereco_prof varchar(70)
);




insert into tb_professor(nome_prof, idade_prof, cpf_prof, email_prof, disciplina_prof, endereco_prof) values
('Marcos Ribeiro', 45, '00052376000', 'marcosribeiro@gmail.com', 'Matemática', 'Rua A, 123'),
('Roberta Silva', 39, '48989577342', 'robertasilva@gmail.com', 'Português', 'Rua B, 456'),
('Paulo Almeida', 42, '76899524300', 'pauloalmeida@gmail.com', 'Biologia', 'Rua C, 789'),
('Camila Mendes', 37, '57891149895', 'camilamendes@gmail.com', 'Geografia', 'Rua D, 101'),
('Rodrigo Ferreira', 40, '51100047891', 'rodrigoferreira@gmail.com', 'Educação Física', 'Rua F, 202'),
('Simone Souza', 43, '59895043391', 'simonesouza@gmail.com', 'Inglês', 'Rua G, 303'),
('Luciana Costa', 41, '57689512843', 'lucianacosta@gmail.com', 'Biologia', 'Rua H, 404'),
('Fernando Rocha', 38, '52300577808', 'fernandorocha@gmail.com', 'Inglês', 'Rua I, 505'),
('Patrícia Lima', 36, '58989512944', 'patricialima@gmail.com', 'Educação Física', 'Rua J, 606'),
('André Santos', 44, '56789543976', 'andresantos@gmail.com', 'Geografia', 'Rua K, 707');

describe tb_professor;
select * from tb_professor;





create table tb_aula(
id_aula int auto_increment primary key,
nome_aula varchar(50),
data_aula date,
horario_aula time,
professor_id int,
sala_aula varchar(15),
materia_aula varchar(50)
);

insert tb_aula (nome_aula, data_aula, horario_aula, professor_id, sala_aula, materia_aula) values
('Aula 1', '2024-11-01', '08:00:00', 1, 'Sala 1', 'Introdução'),
('Aula 2', '2024-11-02', '09:15:00', 2, 'Sala 2', 'Capítulo 1'),
('Aula 3', '2024-11-03', '10:30:00', 3, 'Sala 3', 'Capítulo 2'),
('Aula 4', '2024-11-04', '11:00:00', 4, 'Sala 4', 'Capítulo 3'),
('Aula 5', '2024-11-05', '12:20:00', 5, 'Sala 5', 'Capítulo 4'),
('Aula 6', '2024-11-06', '13:10:00', 6, 'Sala 6', 'Capítulo 5'),
('Aula 7', '2024-11-07', '14:45:00', 7, 'Sala 7', 'Capítulo 6'),
('Aula 8', '2024-11-08', '15:00:00', 8, 'Sala 8', 'Capítulo 7'),
('Aula 9', '2024-11-09', '16:35:00', 9, 'Sala 9', 'Capítulo 8'),
('Aula 10', '2024-11-10', '17:00:00', 10, 'Sala 10', 'Capítulo 9');

describe tb_aula;
select * from tb_aula;



alter table tb_professor
add estado_civil enum('casado','solteiro','namorando'), add nome_mae varchar(50);

alter table tb_professor modify cpf_prof varchar(14);

insert into tb_professor(nome_prof, idade_prof, cpf_prof, email_prof, disciplina_prof, endereco_prof, estado_civil, nome_mae) values
('Kelvin Latos', 45, '000.523.760-00', 'kekel@gmail.com', 'Educaçao Física', 'Rua O, 684', 'casado', 'Sueli Latos'),
('Kerolay Lima', 26, '853.808.922-13', 'kerolima@gmail.com', 'Química', 'Rua P, 241', 'solteiro', 'Karminha Silva' ),
('Jailso Santos', 52, '589.895.129-44', 'jaja@gmail.com', 'Geografica', 'Rua Q, 259', 'namorando', 'Nair Santos' );

alter table tb_professor drop column endereco_prof;

update tb_professor set disciplina_prof = 'Educaçao Física' where id_prof in (1, 2, 3, 4, 5);

delete from tb_professor where id_prof in (7, 10, 12);

alter table tb_professor add email2_prof varchar(50) default 'solicitação em andamento';

alter table tb_professor modify estado_civil char(10);

commit;




