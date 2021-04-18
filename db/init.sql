DROP TABLE IF EXISTS Customer;
CREATE TABLE Customer (
  customerID CHAR(2) NOT NULL,
  customerName VARCHAR(25) NOT NULL,
  PRIMARY KEY (customerID)
);

INSERT INTO Customer VALUES ('1', 'ELizabeth'), ('2', 'Alexander'), ('3', 'Emira'), ('4', 'LC'), ('5', 'Armand'), ('6', 'Elizabeth');

DROP TABLE IF EXISTS Sale;
CREATE TABLE Sale (
  orderID CHAR(2) NOT NULL,
  orderDate DATE NOT NULL,
  total FLOAT NOT NULL,
  customerID CHAR(2) NOT NULL,
  PRIMARY KEY (orderID),
  FOREIGN KEY (customerID) REFERENCES Customer(customerID)
);

INSERT INTO Sale VALUES ('1', '2021-02-01 08:30:00.000', '30.00', '1'), ('2', '2021-02-02 10:00:00.000', '52.50', '2'), ('3', '2021-02-02 12:46:00.000', '6.00', '1'), ('4', '2021-02-03 15:25:00.000', '30.50', '3'), ('5', '2021-02-04 18:50:00.000', '36.00', '4'), ('6', '2021-02-04 08:05:00.000', '52.50', '5'), ('7', '2021-02-06 17:30:00.000', '30.50', '6'), ('8', '2021-02-08 16:30:00.000', '18', '3');

DROP TABLE IF EXISTS Item;
CREATE TABLE Item (
  itemID CHAR(2) NOT NULL,
  itemName VARCHAR(25) NOT NULL,
  price FLOAT NOT NULL,
  PRIMARY KEY (itemID)
);

INSERT INTO Item VALUES ('1', 'Candle', '3.00'), ('2', 'Book', '15.00'), ('3', 'Pen', '0.75'), ('4', 'Paper', '5.25'), ('5', 'Jar', '12.50'), ('6', 'Movie', '18.00');

DROP TABLE IF EXISTS Cart;
CREATE TABLE Cart (
  quantity INT NOT NULL,
  orderID CHAR(2) NOT NULL,
  itemID CHAR(2) NOT NULL,
  PRIMARY KEY (orderID, itemID),
  FOREIGN KEY (orderID) REFERENCES Sale(orderID),
  FOREIGN KEY (itemID) REFERENCES item(itemID)
);

INSERT INTO Cart VALUES ('3', '1', '1'), ('1', '1', '2'), ('1', '1', '3'), ('1', '1', '4'), ('1', '2', '2'), ('3', '2', '5'), ('1', '3', '3'), ('1', '3', '4'), ('1', '4', '1'), ('1', '4', '2'), ('1', '4', '5'), ('1', '5', '3'), ('2', '5', '2'), ('1', '5', '4'), ('1', '6', '2'), ('3', '6', '5'), ('1', '7', '6'), ('1', '7', '5'), ('1', '8', '6');
