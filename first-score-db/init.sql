create table games (
    id int generated always as identity primary key,
    nome varchar(60) not null
);

create table equipes (
    id int generated always as identity primary key,
    nome varchar(50) not null,
    id_game int not null,
    constraint fk_games_to_equipes foreign key (id_game) references games (id)
);

create table jogadores (
    id int generated always as identity primary key,
    nome varchar(120) not null,
    nick varchar(50) not null,
    email varchar(200) not null
);

create table equipe_jogadores (
    id int generated always as identity primary key,
    id_equipe int not null,
    id_jogador int not null,
    constraint fk_equipes_to_equipe_jogadores foreign key (id_equipe) references equipes (id),
    constraint fk_jogadores_to_equipe_jogadores foreign key (id_jogador) references jogadores (id)
);

create table torneios (
    id int generated always as identity primary key,
    nome varchar(100) not null,
    data_inicio date,
    data_final date,
    id_game int not null,
    equipe_vencedora int,
    constraint fk_games_to_torneios foreign key (id_game) references games (id),
    constraint fk_equipes_to_torneios foreign key (equipe_vencedora) references equipes (id)
);

create table torneio_partidas (
    id int generated always as identity primary key,
    descricao text not null,
    id_torneio int not null,
    datahora timestamp not null,
    equipe_1 int,
    pontos_equipe_1 int,
    equipe_2 int,
    pontos_equipe_2 int,
    constraint fk_torneio_to_torneio_partidas foreign key (id_torneio) references torneios (id),
    constraint fk_equipe1_to_torneio_partidas foreign key (equipe_1) references equipes (id),
    constraint fk_equipe2_to_torneio_partidas foreign key (equipe_2) references equipes (id)
);