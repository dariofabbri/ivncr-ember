DROP DATABASE IF EXISTS ivncr;
DROP ROLE IF EXISTS ivncr;

CREATE USER ivncr PASSWORD 'ivncr' NOSUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION;

CREATE DATABASE ivncr
  WITH OWNER = ivncr
  ENCODING = 'UTF8'
  TABLESPACE = pg_default
  LC_COLLATE = 'en_US.UTF-8'
  LC_CTYPE = 'en_US.UTF-8'
  CONNECTION LIMIT = -1;
