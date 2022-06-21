CREATE DATABASE server;

create extension if not exists "uuid-ossp";

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

INSERT INTO users (user_name, user_email, user_password) VALUES ('Test', 'test@gmail.com', 'test123');

/* job_employment == fulltime/parttime */
CREATE TABLE joboffers(
  job_id SERIAL PRIMARY KEY,
  user_id uuid NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  job_description VARCHAR(255) NOT NULL,
  job_salary VARCHAR(255) NOT NULL,
  job_city VARCHAR(255) NOT NULL,
  job_employment VARCHAR(255) NOT NULL,
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE likedjobs(
  likedjob_id SERIAL PRIMARY KEY,
  user_id uuid NOT NULL,
  job_id SERIAL NOT NULL,
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id),
  CONSTRAINT fk_job_id FOREIGN KEY(job_id) REFERENCES joboffers(job_id) 
);

CREATE TABLE CHAT (
    chat_id serial PRIMARY KEY,
    username_1 uuid not null,
    username_2 uuid not null,
    CONSTRAINT fk_user FOREIGN KEY(username_1) REFERENCES users(user_id),
    CONSTRAINT fk_user1 FOREIGN KEY(username_2) REFERENCES users(user_id)
);

CREATE TABLE message (
    message_id serial PRIMARY KEY,
    message_text varchar(1000) not null,
    chat_id serial not null,
    username_sender uuid NOT NULL,
    username_receiver uuid NOT NULL,
    time_message TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_chat FOREIGN KEY(chat_id) REFERENCES CHAT(chat_id),
    CONSTRAINT fk_user_sender FOREIGN KEY(username_sender) REFERENCES users(user_id),
    CONSTRAINT fk_user_receiver FOREIGN KEY(username_receiver) REFERENCES users(user_id)
);



CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  is_company bool NOT NULL,
  user_firstname varchar(255) NOT NULL,
  user_lastname varchar(255) NOT NULL,
  user_phonenumber varchar(255) NOT NULL,
  user_city varchar(255) NOT NULL,
  user_street varchar(255) NOT NULL,
  user_postalcode varchar(255) NOT NULL
);

  -- verzorger_firstname varchar(255),
  -- verzorger_lastname varchar(255),
  -- verzorger_email varchar(255),
  -- verzorger_password varchar(255),
  -- verzorger_phonenumber varchar(255)

