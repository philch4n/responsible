DROP SCHEMA public cascade; 
CREATE SCHEMA public;  

CREATE TABLE IF NOT EXISTS "users" (
  "users_id" SERIAL NOT NULL,
  "users_username" varchar(25) NOT NULL,
  "users_password" varchar(25) NOT NULL, 
  "users_first_name" varchar(25) NOT NULL,
  "users_last_name" varchar(25) NOT NULL,
  "users_address" varchar(50) NOT NULL,
  "users_phone_number" varchar(20) NOT NULL,
  "users_email" varchar(50) NOT NULL,
  "users_emergency_contact" varchar(50) NOT NULL,
  "users_avatar" binary(50) NOT NULL,
  CONSTRAINT users_pk PRIMARY KEY ("users_id")
);


CREATE TABLE IF NOT EXISTS "friends" (
  "friends_id" SERIAL NOT NULL,
  CONSTRAINT friends_pk PRIMARY KEY ("friends_id"),
  CONSTRAINT users_fk FOREIGN KEY ("users_id")

);


CREATE TABLE IF NOT EXISTS "car" (
  "car_id" SERIAL NOT NULL,
  "car_brand" varchar(255) NOT NULL,
  "car_capacity" integer,
  "car_color" varchar,
  CONSTRAINT car_pk PRIMARY KEY ("car_id"),
  CONSTRAINT users_fk FOREIGN KEY ("users_id")

);


CREATE TABLE IF NOT EXISTS "chat" (
  "chat_id" SERIAL NOT NULL,
  CONSTRAINT chat_pk PRIMARY KEY ("chat_id"),
  CONSTRAINT users_fk FOREIGN KEY ("users_id")

);