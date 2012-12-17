INSERT INTO sec_user (username, firstname, lastname, description, digest, salt, iterations)
  VALUES (
    'admin', 
    'Administrator', 
    'Administrator', 
    null,
    'bcb1e28282e7bab07fbe4191662f7c0bfca5426471f929b307e1353665466d0d0293437b9b2302678397bd0c5167049f79bf1facb0b652c73ab337f283c8f780',
    '8521903395d92a798dfe4972867e8aead2861a458abc5fb488bde37825890d6b2ac1300b7cfce53020a1dbb1f3bbacc74b7410fab45b38b14d8990d2b673d8a5',
    50000
  );

INSERT INTO sec_role (rolename, description)
  VALUES ('admin', 'Ruolo di amministrazione');

INSERT INTO sec_permission (permstring)
  VALUES ('*');

INSERT INTO sec_user_role (userid, roleid)
  VALUES (
	(select id from sec_user where username = 'admin'), 
	(select id from sec_role where rolename = 'admin')
  );

INSERT INTO sec_role_permission (roleid, permissionid)
  VALUES (
	(select id from sec_role where rolename = 'admin'), 
	(select id from sec_permission where permstring = '*')
  );
