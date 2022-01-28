/*
Created: 02/02/2018
Modified: 02/02/2018
Model: RE MySQL 5.5
Database: MySQL 5.5
*/


-- Create tables section -------------------------------------------------

-- Table develop_ipefh.alumno

CREATE TABLE `develop_ipefh`.`alumno`
(
  `id_alumno` Int NOT NULL AUTO_INCREMENT,
  `nombre` Varchar(100) NOT NULL,
  `apellidoP` Varchar(100) NOT NULL,
  `apellidoM` Varchar(100) NOT NULL,
  `fecha_nacimineto` Date NOT NULL,
  `genero` Varchar(10) NOT NULL,
  `nacionalidad` Varchar(100) NOT NULL,
  `curp` Varchar(200) NOT NULL,
  `clave_unam` Varchar(100),
  `clave_sep` Varchar(100),
  `fecha_ingreso` Date NOT NULL,
  `fecha_graduacion` Date NOT NULL,
  `np` Varchar(100) NOT NULL,
  `datos_padres` Text NOT NULL,
  `matricula` Varchar(100) NOT NULL,
  `grupo_unam` Varchar(100) NOT NULL,
  `grupo_segem` Varchar(100) NOT NULL,
  `grupo_idiomas` Varchar(100) NOT NULL,
  `grupo_academicas` Varchar(100) NOT NULL,
  `escuela` Varchar(50) NOT NULL,
  `semestre` Int NOT NULL,
  `estado` Varchar(20) NOT NULL DEFAULT "Activo",
  `deuda` Int NOT NULL DEFAULT 0,
  `id_plantel` Int NOT NULL,
  `id_ciclo` Int NOT NULL,
  PRIMARY KEY (`id_alumno`,`id_plantel`,`id_ciclo`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 5
  ROW_FORMAT = Compact
;

-- Table develop_ipefh.ciclo

CREATE TABLE `develop_ipefh`.`ciclo`
(
  `id_ciclo` Int NOT NULL AUTO_INCREMENT,
  `nombre` Varchar(100) NOT NULL,
  `monto_prescolar` Int NOT NULL,
  `monto_primaria` Int NOT NULL,
  `monto_secundaria` Int NOT NULL,
  `monto_preparatoria` Int NOT NULL,
  PRIMARY KEY (`id_ciclo`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 6
  ROW_FORMAT = Compact
;

-- Table develop_ipefh.clase

CREATE TABLE `develop_ipefh`.`clase`
(
  `id_clase` Int NOT NULL AUTO_INCREMENT,
  `nombre` Varchar(100) NOT NULL,
  `codigo` Varchar(50) NOT NULL,
  `descripcion` Text NOT NULL,
  PRIMARY KEY (`id_clase`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 7
  ROW_FORMAT = Compact
;

CREATE UNIQUE INDEX `codigo` USING BTREE ON `develop_ipefh`.`clase` (`codigo`)
;

-- Table develop_ipefh.concepto

CREATE TABLE `develop_ipefh`.`concepto`
(
  `id_concepto` Int NOT NULL AUTO_INCREMENT,
  `nombre` Varchar(50) NOT NULL,
  `descripcion` Text NOT NULL,
  `precio` Int NOT NULL,
  `fecha_creacion` Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_edicion` Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_concepto`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 3
  ROW_FORMAT = Compact
;

-- Table develop_ipefh.grupo

CREATE TABLE `develop_ipefh`.`grupo`
(
  `id_grupo` Int NOT NULL AUTO_INCREMENT,
  `id_clase` Int NOT NULL,
  `id_ciclo` Int NOT NULL,
  `id_profesor` Int NOT NULL,
  `escuela` Enum('Primaria','Secundaria','Preparatoria UNAM','Preparatoria SEGEM') NOT NULL,
  `semestre` Int NOT NULL,
  `estado` Int NOT NULL DEFAULT 1,
  `id_plantel` Int,
  PRIMARY KEY (`id_grupo`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 7
  ROW_FORMAT = Compact
;

CREATE INDEX `id_clase` USING BTREE ON `develop_ipefh`.`grupo` (`id_clase`)
;

CREATE INDEX `id_ciclo` USING BTREE ON `develop_ipefh`.`grupo` (`id_ciclo`)
;

CREATE INDEX `id_profesor` USING BTREE ON `develop_ipefh`.`grupo` (`id_profesor`)
;

CREATE INDEX `IX_Relationship17` ON `develop_ipefh`.`grupo` (`id_plantel`)
;

-- Table develop_ipefh.ingreso

CREATE TABLE `develop_ipefh`.`ingreso`
(
  `id_ingreso` Int NOT NULL AUTO_INCREMENT,
  `productos` Text NOT NULL,
  `id_alumno` Int NOT NULL,
  `forma_pago` Varchar(50),
  `fecha` Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `monto` Int NOT NULL,
  `pagado` Int NOT NULL,
  `id_plantel` Int,
  `id_ciclo` Int,
  `id_usuario` Int NOT NULL,
  PRIMARY KEY (`id_ingreso`,`id_usuario`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 14
  ROW_FORMAT = Compact
;

CREATE INDEX `id_alumno` USING BTREE ON `develop_ipefh`.`ingreso` (`id_alumno`,`id_plantel`,`id_ciclo`)
;

-- Table develop_ipefh.inscripcion

CREATE TABLE `develop_ipefh`.`inscripcion`
(
  `id_inscripcion` Int NOT NULL AUTO_INCREMENT,
  `id_alumno` Int NOT NULL,
  `id_grupo` Int NOT NULL,
  `calificaciones` Text NOT NULL,
  `promedio` Int NOT NULL,
  `id_plantel` Int,
  `id_ciclo` Int,
  PRIMARY KEY (`id_inscripcion`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 46
  ROW_FORMAT = Compact
;

CREATE INDEX `id_alumno` USING BTREE ON `develop_ipefh`.`inscripcion` (`id_alumno`,`id_plantel`,`id_ciclo`)
;

CREATE INDEX `id_grupo` USING BTREE ON `develop_ipefh`.`inscripcion` (`id_grupo`)
;

-- Table develop_ipefh.logro

CREATE TABLE `develop_ipefh`.`logro`
(
  `id_logro` Int NOT NULL AUTO_INCREMENT,
  `id_alumno` Int NOT NULL,
  `fecha` Date NOT NULL,
  `comentario` Text NOT NULL,
  `id_plantel` Int,
  `id_ciclo` Int,
  PRIMARY KEY (`id_logro`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 6
  ROW_FORMAT = Compact
;

CREATE INDEX `id_alumno` USING BTREE ON `develop_ipefh`.`logro` (`id_alumno`,`id_plantel`,`id_ciclo`)
;

-- Table develop_ipefh.pago

CREATE TABLE `develop_ipefh`.`pago`
(
  `id_pago` Int NOT NULL AUTO_INCREMENT,
  `productos` Text NOT NULL,
  `comentarios` Text NOT NULL,
  `forma_pago` Varchar(50),
  `fecha` Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total` Int NOT NULL,
  `id_usuario` Int,
  PRIMARY KEY (`id_pago`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 10
  ROW_FORMAT = Compact
;

CREATE INDEX `IX_Relationship19` ON `develop_ipefh`.`pago` (`id_usuario`)
;

-- Table develop_ipefh.pagos

CREATE TABLE `develop_ipefh`.`pagos`
(
  `id_pagos` Int NOT NULL AUTO_INCREMENT,
  `id_alumno` Int NOT NULL,
  `escuela` Varchar(50) NOT NULL,
  `semestre` Int NOT NULL,
  `total` Int NOT NULL,
  `descuento` Int NOT NULL,
  `fecha` Date NOT NULL,
  `saldo_pendiente` Int NOT NULL,
  `pagos` Text NOT NULL,
  `estado` Int NOT NULL DEFAULT 0,
  `fecha_edicion` Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_plantel` Int,
  `id_ciclo` Int,
  PRIMARY KEY (`id_pagos`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 35
  ROW_FORMAT = Compact
;

CREATE INDEX `id_alumno` USING BTREE ON `develop_ipefh`.`pagos` (`id_alumno`,`id_plantel`,`id_ciclo`)
;

-- Table develop_ipefh.producto

CREATE TABLE `develop_ipefh`.`producto`
(
  `id_producto` Int NOT NULL AUTO_INCREMENT,
  `nombre` Varchar(50) NOT NULL,
  `descripcion` Text NOT NULL,
  `precio` Int NOT NULL,
  `fecha_creacion` Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_edicion` Timestamp NOT NULL DEFAULT "0000-00-00 00:00:00",
  PRIMARY KEY (`id_producto`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 4
  ROW_FORMAT = Compact
;

-- Table develop_ipefh.profesor

CREATE TABLE `develop_ipefh`.`profesor`
(
  `id_profesor` Int NOT NULL AUTO_INCREMENT,
  `nombre` Varchar(100) NOT NULL,
  `curp` Varchar(200) NOT NULL,
  `profesion` Varchar(200) NOT NULL,
  `celular` Varchar(100) NOT NULL,
  `correo` Varchar(200) NOT NULL,
  `pass` Varchar(200) NOT NULL,
  PRIMARY KEY (`id_profesor`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 4
  ROW_FORMAT = Compact
;

CREATE UNIQUE INDEX `curp` USING BTREE ON `develop_ipefh`.`profesor` (`curp`)
;


-- Create foreign keys (relationships) section -------------------------------------------------


ALTER TABLE `develop_ipefh`.`grupo` ADD CONSTRAINT `grupo_ibfk_1` FOREIGN KEY (`id_clase`) REFERENCES `develop_ipefh`.`clase` (`id_clase`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `develop_ipefh`.`grupo` ADD CONSTRAINT `grupo_ibfk_2` FOREIGN KEY (`id_ciclo`) REFERENCES `develop_ipefh`.`ciclo` (`id_ciclo`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `develop_ipefh`.`grupo` ADD CONSTRAINT `grupo_ibfk_3` FOREIGN KEY (`id_profesor`) REFERENCES `develop_ipefh`.`profesor` (`id_profesor`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `develop_ipefh`.`ingreso` ADD CONSTRAINT `ingreso_ibfk_2` FOREIGN KEY (`id_alumno`, `id_plantel`, `id_ciclo`) REFERENCES `develop_ipefh`.`alumno` (`id_alumno`, `id_plantel`, `id_ciclo`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `develop_ipefh`.`inscripcion` ADD CONSTRAINT `inscripcion_ibfk_1` FOREIGN KEY (`id_alumno`, `id_plantel`, `id_ciclo`) REFERENCES `develop_ipefh`.`alumno` (`id_alumno`, `id_plantel`, `id_ciclo`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `develop_ipefh`.`inscripcion` ADD CONSTRAINT `inscripcion_ibfk_2` FOREIGN KEY (`id_grupo`) REFERENCES `develop_ipefh`.`grupo` (`id_grupo`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `develop_ipefh`.`logro` ADD CONSTRAINT `logro_ibfk_1` FOREIGN KEY (`id_alumno`, `id_plantel`, `id_ciclo`) REFERENCES `develop_ipefh`.`alumno` (`id_alumno`, `id_plantel`, `id_ciclo`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `develop_ipefh`.`pagos` ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`id_alumno`, `id_plantel`, `id_ciclo`) REFERENCES `develop_ipefh`.`alumno` (`id_alumno`, `id_plantel`, `id_ciclo`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `develop_ipefh`.`alumno` ADD CONSTRAINT `Relationship15` FOREIGN KEY (`id_plantel`) REFERENCES `plantel` (`id_plantel`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `develop_ipefh`.`grupo` ADD CONSTRAINT `Relationship17` FOREIGN KEY (`id_plantel`) REFERENCES `plantel` (`id_plantel`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `develop_ipefh`.`alumno` ADD CONSTRAINT `Relationship18` FOREIGN KEY (`id_ciclo`) REFERENCES `develop_ipefh`.`ciclo` (`id_ciclo`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `develop_ipefh`.`pago` ADD CONSTRAINT `Relationship19` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `develop_ipefh`.`ingreso` ADD CONSTRAINT `Relationship21` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


