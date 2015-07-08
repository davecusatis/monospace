CREATE DATABASE `monospace`;
CREATE TABLE  `monospace`.`users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `salt` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `email` (`email`)
);

CREATE TABLE `monospace`.`user_scripts`(
  `script_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `script_text` LONGTEXT COMMENT 'actual code of a script',
  PRIMARY KEY (`script_id`),
  UNIQUE KEY (`script_id`),
  INDEX `fk_user_id_idx` (`user_id` ASC) ,
    CONSTRAINT `fk_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `monospace`.`users` (`user_id`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);