create table users(
user_id serial primary key,
name_first varchar(20),
name_last varchar(25)
);

create table posts(
post_id serial primary key,
message text,
u_id integer references users(user_id)
)