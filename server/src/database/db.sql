CREATE TABLE Client (
    Id Serial PRIMARY KEY,
    Name VARCHAR(25) NOT NULL,
    LastName VARCHAR(25) NOT NULL,
    Phone CHAR(13) NOT NULL,
    Address VARCHAR(100) NOT NULL
);

CREATE TABLE Invoice (
    Id Serial PRIMARY KEY,
    TotalPrice NUMERIC(10, 2) NOT NULL,
    Requisites NUMERIC(10) NOT NULL,
    IsPaid BOOLEAN NOT NULL,
    FinalOrderId INTEGER NOT NULL
);

CREATE UNIQUE INDEX invoice__idx ON
    Invoice (
    FinalOrderId
    ASC );


CREATE TABLE Item (
    Id Serial PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Image VARCHAR(100),
    Description VARCHAR(300) NOT NULL,
    Price NUMERIC(10, 3) NOT NULL
);

CREATE TABLE Manager (
    Id Serial PRIMARY KEY,
    Name VARCHAR(25) NOT NULL,
    LastName VARCHAR(25) NOT NULL,
    Phone CHAR(13)
);


CREATE TABLE FinalOrder (
    Id Serial PRIMARY KEY,
    Address VARCHAR(100) NOT NULL,
    Status VARCHAR(15),
    HasInvoice BOOLEAN NOT NULL,
    ClientId INTEGER NOT NULL,
    ManagerId INTEGER NOT NULL
);


CREATE TABLE OrderLine (
    Quantity NUMERIC(5) NOT NULL,
    FinalOrderId INTEGER NOT NULL,
    ItemId INTEGER NOT NULL
);

ALTER TABLE OrderLine ADD CONSTRAINT orderline_pk PRIMARY KEY ( FinalOrderId,
ItemId );

ALTER TABLE Invoice
ADD CONSTRAINT invoice_finalorder_fk FOREIGN KEY ( FinalOrderId )
REFERENCES FinalOrder ( Id );

ALTER TABLE FinalOrder
ADD CONSTRAINT finalorder_client_fk FOREIGN KEY ( ClientId )
REFERENCES Client ( Id );

ALTER TABLE FinalOrder
ADD CONSTRAINT finalorder_manager_fk FOREIGN KEY ( ManagerId )
REFERENCES Manager ( Id );

ALTER TABLE OrderLine
ADD CONSTRAINT orderline_item_fk FOREIGN KEY ( ItemId )
REFERENCES Item ( Id );

ALTER TABLE OrderLine
ADD CONSTRAINT orderline_order_fk FOREIGN KEY ( FinalOrderId )
REFERENCES FinalOrder ( Id );