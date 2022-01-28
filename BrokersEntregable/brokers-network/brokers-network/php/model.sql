
-- Table develop_ipefh.ciclo

CREATE TABLE ciclo
(
  id_ciclo           INT          NOT NULL AUTO_INCREMENT,
  nombre             VARCHAR(100) NOT NULL,
  monto_prescolar    INT          NOT NULL,
  monto_primaria     INT          NOT NULL,
  monto_secundaria   INT          NOT NULL,
  monto_preparatoria INT          NOT NULL,
  PRIMARY KEY (id_ciclo)
);

-- Table plantel

CREATE TABLE plantel
(
  id_plantel INT          NOT NULL AUTO_INCREMENT,
  plantel    VARCHAR(100) NOT NULL UNIQUE,
  otro       TEXT,
  PRIMARY KEY (id_plantel)
);

-- Table develop_ipefh.alumno

CREATE TABLE alumno
(
  id_alumno        INT          NOT NULL AUTO_INCREMENT,
  nombre           VARCHAR(100) NOT NULL,
  apellidoP        VARCHAR(100) NOT NULL,
  apellidoM        VARCHAR(100) NOT NULL,
  fecha_nacimineto DATE         NOT NULL,
  genero           VARCHAR(10)  NOT NULL,
  nacionalidad     VARCHAR(100) NOT NULL,
  curp             VARCHAR(200) NOT NULL,
  clave_unam       VARCHAR(100),
  clave_sep        VARCHAR(100),
  fecha_ingreso    DATE         NOT NULL,
  fecha_graduacion DATE         NOT NULL,
  np               VARCHAR(100) NOT NULL,
  datos_padres     TEXT         NOT NULL,
  matricula        VARCHAR(100) NOT NULL,
  grupo_unam       VARCHAR(100) NOT NULL,
  grupo_segem      VARCHAR(100) NOT NULL,
  grupo_idiomas    VARCHAR(100) NOT NULL,
  grupo_academicas VARCHAR(100) NOT NULL,
  escuela          VARCHAR(50)  NOT NULL,
  semestre         INT          NOT NULL,
  estado           VARCHAR(20)  NOT NULL DEFAULT "Activo",
  deuda            INT          NOT NULL DEFAULT 0,
  id_plantel       INT          NOT NULL,
  id_ciclo         INT          NOT NULL,
  PRIMARY KEY (id_alumno),
  FOREIGN KEY (id_plantel) REFERENCES plantel (id_plantel),
  FOREIGN KEY (id_ciclo) REFERENCES ciclo (id_ciclo)
);

-- Table develop_ipefh.clase

CREATE TABLE clase
(
  id_clase    INT          NOT NULL AUTO_INCREMENT,
  nombre      VARCHAR(100) NOT NULL,
  codigo      VARCHAR(50)  NOT NULL,
  descripcion TEXT         NOT NULL,
  PRIMARY KEY (id_clase)
);

-- Table develop_ipefh.concepto

CREATE TABLE concepto
(
  id_concepto    INT         NOT NULL AUTO_INCREMENT,
  nombre         VARCHAR(50) NOT NULL,
  descripcion    TEXT        NOT NULL,
  precio         INT         NOT NULL,
  fecha_creacion TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_edicion  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_concepto)
);

-- Table usuario

CREATE TABLE usuario
(
  id_usuario INT          NOT NULL AUTO_INCREMENT,
  usuario    VARCHAR(100) NOT NULL UNIQUE,
  pass       VARCHAR(200) NOT NULL,
  permisos   TEXT         NOT NULL,
  token      VARCHAR(200) NOT NULL UNIQUE,
  id_plantel INT          NOT NULL,
  PRIMARY KEY (id_usuario),
  FOREIGN KEY (id_plantel) REFERENCES plantel(id_plantel)
);

-- Table develop_ipefh.grupo

CREATE TABLE grupo
(
  id_grupo    INT                                                                                     NOT NULL AUTO_INCREMENT,
  id_clase    INT                                                                                     NOT NULL,
  id_ciclo    INT                                                                                     NOT NULL,
  id_profesor INT                                                                                     NOT NULL,
  escuela     ENUM ('Prescolar', 'Primaria', 'Secundaria', 'Preparatoria UNAM', 'Preparatoria SEGEM') NOT NULL,
  semestre    INT                                                                                     NOT NULL,
  estado      INT                                                                                     NOT NULL DEFAULT 1,
  id_plantel  INT,
  PRIMARY KEY (id_grupo),
  FOREIGN KEY (id_plantel) REFERENCES plantel (id_plantel)
);

-- Table develop_ipefh.ingreso

CREATE TABLE ingreso
(
  id_ingreso INT       NOT NULL AUTO_INCREMENT,
  productos  TEXT      NOT NULL,
  id_alumno  INT       NOT NULL,
  forma_pago VARCHAR(50),
  fecha      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  monto      INT       NOT NULL,
  pagado     INT       NOT NULL,
  id_ciclo   INT       NOT NULL,
  id_usuario INT       NOT NULL,
  id_plantel INT       NOT NULL,
  PRIMARY KEY (id_ingreso),
  FOREIGN KEY (id_alumno) REFERENCES alumno (id_alumno),
  FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
  FOREIGN KEY (id_plantel) REFERENCES plantel (id_plantel),
  FOREIGN KEY (id_ciclo) REFERENCES ciclo (id_ciclo)
);

-- Table develop_ipefh.inscripcion

CREATE TABLE inscripcion
(
  id_inscripcion INT  NOT NULL AUTO_INCREMENT,
  id_alumno      INT  NOT NULL,
  id_grupo       INT  NOT NULL,
  calificaciones TEXT NOT NULL,
  promedio       INT  NOT NULL,
  id_plantel     INT  NOT NULL,
  id_ciclo       INT  NOT NULL,
  PRIMARY KEY (id_inscripcion),
  FOREIGN KEY (id_alumno) REFERENCES alumno (id_alumno),
  FOREIGN KEY (id_grupo) REFERENCES grupo (id_grupo),
  FOREIGN KEY (id_plantel) REFERENCES plantel (id_plantel),
  FOREIGN KEY (id_ciclo) REFERENCES ciclo (id_ciclo)
);

-- Table develop_ipefh.logro

CREATE TABLE logro
(
  id_logro   INT  NOT NULL AUTO_INCREMENT,
  id_alumno  INT  NOT NULL,
  fecha      DATE NOT NULL,
  comentario TEXT NOT NULL,
  id_plantel INT  NOT NULL,
  id_ciclo   INT  NOT NULL,
  PRIMARY KEY (id_logro),
  FOREIGN KEY (id_alumno) REFERENCES alumno (id_alumno),
  FOREIGN KEY (id_plantel) REFERENCES plantel (id_plantel),
  FOREIGN KEY (id_ciclo) REFERENCES ciclo (id_ciclo)
);

-- Table develop_ipefh.pago

CREATE TABLE pago
(
  id_pago     INT       NOT NULL AUTO_INCREMENT,
  productos   TEXT      NOT NULL,
  comentarios TEXT      NOT NULL,
  forma_pago  VARCHAR(50),
  fecha       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  total       INT       NOT NULL,
  id_usuario  INT       NOT NULL,
  PRIMARY KEY (id_pago),
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- Table develop_ipefh.pagos

CREATE TABLE pagos
(
  id_pagos        INT         NOT NULL AUTO_INCREMENT,
  id_alumno       INT         NOT NULL,
  escuela         VARCHAR(50) NOT NULL,
  semestre        INT         NOT NULL,
  total           INT         NOT NULL,
  descuento       INT         NOT NULL,
  fecha           DATE        NOT NULL,
  saldo_pendiente INT         NOT NULL,
  pagos           TEXT        NOT NULL,
  estado          INT         NOT NULL DEFAULT 0,
  fecha_edicion   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  id_plantel      INT         NOT NULL,
  id_ciclo        INT         NOT NULL,
  PRIMARY KEY (id_pagos),
  FOREIGN KEY (id_plantel) REFERENCES plantel (id_plantel),
  FOREIGN KEY (id_ciclo) REFERENCES ciclo (id_ciclo)
);

-- Table develop_ipefh.producto

CREATE TABLE producto
(
  id_producto    INT         NOT NULL AUTO_INCREMENT,
  nombre         VARCHAR(50) NOT NULL,
  descripcion    TEXT        NOT NULL,
  precio         INT         NOT NULL,
  fecha_creacion TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_edicion  TIMESTAMP   NOT NULL DEFAULT "0000-00-00 00:00:00",
  PRIMARY KEY (id_producto)
);

-- Table develop_ipefh.profesor

CREATE TABLE profesor
(
  id_profesor INT          NOT NULL AUTO_INCREMENT,
  nombre      VARCHAR(100) NOT NULL,
  curp        VARCHAR(200) NOT NULL,
  profesion   VARCHAR(200) NOT NULL,
  celular     VARCHAR(100) NOT NULL,
  correo      VARCHAR(200) NOT NULL,
  pass        VARCHAR(200) NOT NULL,
  id_plantel  INT          NOT NULL,
  PRIMARY KEY (id_profesor),
  FOREIGN KEY (id_plantel) REFERENCES plantel(id_plantel)
);



-- Insertar planteles

INSERT INTO plantel (plantel, otro) VALUES ('Toluca', '');
INSERT INTO plantel (plantel, otro) VALUES ('Metepec', '');
INSERT INTO plantel (plantel, otro) VALUES ('Aeropuerto', '');
INSERT INTO plantel (plantel, otro) VALUES ('Calimaya', '');
INSERT INTO plantel (plantel, otro) VALUES ('global', '');