CREATE DATABASE HCSDL;
GO 
USE HCSDL
CREATE TABLE Employee 
(employee_id			CHAR(8)			NOT NULL,
 name			        VARCHAR(30)             NOT NULL,
 phone_number			CHAR(10),
 email 				VARCHAR(30),
 status                         CHAR, 
 birth_date                     DATE,
 start_date                     DATE,
 end_date                       DATE,
 address                        VARCHAR(30),   
 employee_id_super               CHAR(8),
 shop_id                        CHAR(8),
 C_ID                           CHAR(12)               NOT NULL,
 Image_C_ID                     VARBINARY(MAX),
 Sex                            CHAR,  
 PRIMARY KEY (employee_id),
 UNIQUE(C_ID),
 CHECK (start_date < end_date));



CREATE TABLE Part_time
(employee_id			CHAR(8)			NOT NULL,
 pay_scale                      DECIMAL(10,2),            
 PRIMARY KEY (employee_id));

CREATE TABLE Full_time
(employee_id			CHAR(8)			NOT NULL,
 position                       VARCHAR(20),
 salary                         DECIMAL(10,2),
 contract                       VARBINARY(MAX),                 
 PRIMARY KEY (employee_id));

CREATE TABLE Manager_shop
(employee_id			CHAR(8)			NOT NULL,
 start_date_manage              DATE,
 KPI                            INT,
 AFF                            DECIMAL(10,2),
 shop_id                        CHAR(8),                 
 PRIMARY KEY (employee_id));

CREATE TABLE Manager_inventory
(employee_id			CHAR(8)  		NOT NULL,
 start_date_manage              DATE,
 inventory_id                   CHAR(8),                 
 PRIMARY KEY (employee_id));

CREATE TABLE Product_issue
(product_id                     CHAR(8)                 NOT NULL,
 ID_issue_bill                  CHAR(8)                 NOT NULL,
 quantity_issue                 CHAR(8)                 NOT NULL,              
 PRIMARY KEY (product_id, ID_issue_bill, quantity_issue));

CREATE TABLE Issue_bill
(product_id                     CHAR(8)                 NOT NULL,
 ID_issue_bill                  CHAR(8)                 NOT NULL,
 shop_id                        CHAR(8),                
 Time_issue                     TIMESTAMP,
 PRIMARY KEY (product_id, ID_issue_bill));

CREATE TABLE Sales
(shop_id                        CHAR(8)                 NOT NULL,
 Year                           CHAR(8)                 NOT NULL,
 Month                          CHAR(8)                 NOT NULL,
 Sale_per_month                 INT,             
 PRIMARY KEY (shop_id, Year, Month));

CREATE TABLE Customer
(customer_id                    CHAR(8)                 NOT NULL,
 name                           VARCHAR(30)             NOT NULL,
 phone_number                   CHAR(10),               
 point                          INT,  
 birth_date                     DATE,
 sex                            CHAR,
 purchase_history               VARBINARY(MAX),
 PRIMARY KEY (customer_id));

CREATE TABLE Product
(product_id                     CHAR(8)                 NOT NULL,
 describle                      VARCHAR(500)            NOT NULL,
 status                         CHAR,               
 sell_price_per_product         DECIMAL(10,3),  
 name                           VARCHAR(100),
 kind                           VARCHAR(50),
 import_price_per_product       DECIMAL(10,3),
 inventory_id                   CHAR(8),
 PRIMARY KEY (product_id));

CREATE TABLE Image
(product_id                     CHAR(8)                 NOT NULL,
 image_id                       CHAR(4)                 NOT NULL, 
 image                          VARBINARY(MAX),        
 PRIMARY KEY (product_id, image_id));

CREATE TABLE Supplier
(supplier_id                    CHAR(8)                 NOT NULL,
 name                           VARCHAR(50),
 location                       VARCHAR(30),
 email                          VARCHAR(30),
 status                         CHAR,
 phone_number                   CHAR(10),                                          
 PRIMARY KEY (supplier_id));

CREATE TABLE Shop
(shop_id			CHAR(8)			NOT NULL,
location			VARCHAR(50),
hotline				CHAR(10),
status				CHAR,
PRIMARY KEY (shop_id));

CREATE TABLE Marketing_Campaign
(marketing_id			CHAR(8)			NOT NULL,
budget				DECIMAL(12,2),
objective_customer		VARCHAR(50),
status				CHAR,
content				VARCHAR(50),
start_date			DATE,
end_date			DATE,
PRIMARY KEY (marketing_id),
CHECK (start_date <= end_date));

CREATE TABLE Belong_to
(shop_id			CHAR(8)			NOT NULL,
marketing_id			CHAR(8)			NOT NULL,
PRIMARY KEY (shop_id, marketing_id));

CREATE TABLE Online
(marketing_id			CHAR(8)			NOT NULL,
traffic				INT,
PRIMARY KEY (marketing_id));


CREATE TABLE Promotion
(marketing_id			CHAR(8)			NOT NULL);

CREATE TABLE Voucher
(voucher_id			CHAR(8)			NOT NULL,
status				CHAR,
price_discount			DECIMAL(10,2),
name				VARCHAR(50)
PRIMARY KEY (voucher_id));

CREATE TABLE Condition
(voucher_id			CHAR(8)			NOT NULL,
condition			CHAR,
PRIMARY KEY (voucher_id));

CREATE TABLE Promotion_has_voucher
(voucher_id			CHAR(8)			NOT NULL,
marketing_id			CHAR(8)			NOT NULL,
quantity			INT			NOT NULL,
PRIMARY KEY (voucher_id, marketing_id, quantity));

CREATE TABLE Order_Bill
(customer_id			CHAR(8)			NOT NULL,
order_id			CHAR(8)			NOT NULL,
create_date			DATE,
voucher_used			CHAR,
total_price			DECIMAL(12,2),
shop_id				CHAR(8)			NOT NULL,
employee_create			CHAR(8)			NOT NULL,
payment				VARCHAR(8),
PRIMARY KEY (customer_id, order_id));

CREATE TABLE Product_buy
(customer_id			CHAR(8)			NOT NULL,
order_id			CHAR(8)			NOT NULL,
quantity			INT			NOT NULL,
sum_price			DECIMAL(12,2),
PRIMARY KEY (customer_id, order_id, quantity));


CREATE TABLE Check_condition
(customer_id			CHAR(8)			NOT NULL,
order_id			CHAR(8)			NOT NULL,
voucher_id			CHAR(8)			NOT NULL,
PRIMARY KEY (customer_id, order_id, voucher_id));

CREATE TABLE id_voucher_can_use
(voucher_id			CHAR(8)			NOT NULL,
order_id			CHAR(8)			NOT NULL,
customer_id			CHAR(8)			NOT NULL,
id_voucher_can_use		CHAR(8)			NOT NULL,
PRIMARY KEY (voucher_id, order_id, customer_id, id_voucher_can_use));

CREATE TABLE Check_inventory
(customer_id			CHAR(8)			NOT NULL,
order_id			CHAR(8)			NOT NULL,
product_id			CHAR(8)			NOT NULL,
PRIMARY KEY (customer_id, order_id, product_id));


CREATE TABLE Classify
(product_id			CHAR(8)			NOT NULL,
size				VARCHAR(5),
color				VARCHAR(8),
SKU				VARCHAR(8)		NOT NULL		UNIQUE,
stock				INT,
image				VARBINARY(MAX),
PRIMARY	KEY (product_id));

CREATE TABLE Inventory
(inventory_id			CHAR(8)			NOT NULL,
location			VARCHAR(50),
PRIMARY KEY (inventory_id));


CREATE TABLE Import_bill
(supplier_id			CHAR(8)			NOT NULL,
inventory_id			CHAR(8)			NOT NULL,
ID_import_bill			CHAR(8)			NOT NULL,
time_import			TIMESTAMP,
total_bill			DECIMAL(12,2),
PRIMARY KEY (supplier_id, inventory_id));

CREATE TABLE Product_import
(supplier_id			CHAR(8)			NOT NULL,
ID_import_bill			CHAR(8)			NOT NULL,
quantity_import			INT			NOT NULL,
price_import			DECIMAL(12,2)		NOT NULL,
inventory_id			CHAR(8),
PRIMARY KEY (supplier_id, ID_import_bill, quantity_import, price_import));

INSERT INTO Employee
VALUES ('00000001', 'Tran Thi Thuy Duong', '0254678123', 'btttttdttd@gmail.com', '1', '2004-05-25', '2024-01-24', NULL, '232 ký túc xá', '10000001', '00000001', '045304002780',NULL ,'1');  
INSERT INTO Employee
VALUES ('00000002', 'Vu Duc Duy', '0528047507', 'abchwuh@gmail.com', '1', '2004-05-24', '2024-01-24', NULL, '22 ký túc xá', '10000001', '00000001', '045549895627',NULL ,'0');  
INSERT INTO Employee
VALUES ('00000003', 'Nguyen Tran Thi Lan Huong', '0254878711', 'hhuong@gmail.com', '1', '2004-05-27', '2024-01-24', NULL, '22 ký túc xá', '10000001', '00000001', '045487856512',NULL ,'1');  
INSERT INTO Employee
VALUES ('10000001', 'Nguyen Vu Hoan', '0544545154', 'vuhoan@gmail.com', '1', '2004-07-27', '2024-01-01', NULL, 'Ký túc xá khu B', NULL, '00000001', '045315689814',NULL ,'0');  
INSERT INTO Employee
VALUES ('10000002', 'Nguyen Vu Hoan', '0544545154', 'vuhoan@gmail.com', '1', '1900-07-27', '2024-01-01', NULL, 'Ký túc xá khu B', NULL, '00000001', '045314544414',NULL ,'0');  


WITH   Sup_emp(employee_id_super, employee_id) AS
    (SELECT     E.employee_id_super, S.employee_id
    FROM        Employee AS E, Full_time AS S
    UNION

    SELECT       E.employee_id_super, S.employee_id
    FROM         Employee AS E, Full_time AS S
    WHERE        E.employee_id_super = S.employee_id)
SELECT*
 FROM  Sup_emp;

GO
ALTER TRIGGER AbortYoungerThan18_InsertEmployee
ON Employee
FOR INSERT, UPDATE
AS
BEGIN
    DECLARE @Count INT = 0

    SELECT @Count = COUNT (*) FROM Inserted
    WHERE YEAR(GETDATE()) - YEAR(Inserted.birth_date ) < 18
    IF (@Count > 0)
    BEGIN
     PRINT N'Nhân viên không đủ tuổi'
        ROLLBACK TRAN
    END
END
GO

GO
CREATE TRIGGER AborOlderThan35_InsertPartTime
ON Part_time
FOR INSERT
AS
BEGIN
    DECLARE @Count INT = 0

    SELECT @Count = COUNT (*) FROM Inserted, Employee
    WHERE YEAR(GETDATE()) - YEAR(Employee.birth_date) > 35
    IF (@Count > 0)
    BEGIN
        PRINT N'Nhân viên vượt số tuổi cho phép'
        ROLLBACK TRAN
    END
END
GO

GO
CREATE TRIGGER AborOlderThan55_InsertFullTime
ON Full_time
FOR INSERT
AS
BEGIN
    DECLARE @Count INT = 0

    SELECT @Count = COUNT(*) FROM Inserted, Employee
    WHERE YEAR(GETDATE()) - YEAR(Employee.birth_date ) > 55
    IF (@Count > 0)
    BEGIN
        PRINT N'Nhân viên vượt số tuổi cho phép'
        ROLLBACK TRAN
    END
END
GO

GO
ALTER TRIGGER AborYoungerThan22_InsertManagerShop
ON Manager_shop
FOR INSERT
AS
BEGIN
    DECLARE @Count INT = 0

    SELECT @Count = COUNT(*) FROM Inserted, Employee
    WHERE YEAR(GETDATE()) - YEAR(Employee.birth_date ) < 22
    IF (@Count > 0)
    BEGIN
        PRINT N'Nhân viên vượt số tuổi cho phép'
        ROLLBACK TRAN
    END
END
GO

INSERT INTO Part_time
VALUES ('00000001', 12000000.00)
INSERT INTO Full_time
VALUES ('00000002','Nhan vien ban hang', 24000000.00, NULL)
INSERT INTO Full_time
VALUES ('10000001','Quan ly', 36000000.00, NULL)
INSERT INTO Full_time
VALUES ('00000003','Quan ly kho', 25000000.00, NULL)

ALTER TABLE Part_time
ADD CONSTRAINT map_employee
	FOREIGN KEY (employee_id) 
	REFERENCES Employee(employee_id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE Full_time
ADD CONSTRAINT fulltime_employee
	FOREIGN KEY (employee_id) 
	REFERENCES Employee(employee_id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;

INSERT INTO Manager_shop
VALUES ('00000002', '2024-1-25', 100, 12000000.00, '00000001')

ALTER TABLE Manager_shop
ADD CONSTRAINT fulltime_managershop
	FOREIGN KEY (employee_id)
	REFERENCES Full_time (employee_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

INSERT INTO Manager_inventory
VALUES('00000003', '2024-1-25', '00000001')

ALTER TABLE Manager_inventory
ADD CONSTRAINT fulltime_managerinventory
	FOREIGN KEY (employee_id)
	REFERENCES Full_time (employee_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

INSERT INTO Shop
VALUES ('00000001', 'Quan 1, Thanh pho Ho Chi Minh', '0123456789', '1')
INSERT INTO Shop
VALUES ('00000002', 'Quan 8, Thanh pho Ho Chi Minh', '0455676289', '1')

ALTER TABLE Employee
ADD CONSTRAINT shop_employee
	FOREIGN KEY (shop_id)
	REFERENCES Shop (shop_id)
	ON DELETE SET NULL
	ON UPDATE CASCADE;

INSERT INTO Inventory
VALUES ('00000001', 'Quan 1, Thanh pho Ho Chi Minh')
INSERT INTO Inventory
VALUES ('00000002', 'Thanh pho Da Nang')

ALTER TABLE Manager_inventory
ADD CONSTRAINT managerinventory_inventory
	FOREIGN KEY (inventory_id)
	REFERENCES Inventory (inventory_id)
	ON DELETE SET NULL
	ON UPDATE CASCADE;


INSERT INTO Customer
VALUES ('00000001', 'Nguyen Thi Thuong', '0325201416', 25, '1987-11-12', '1', NULL)
INSERT INTO Customer
VALUES ('00000002', 'Nguyen Thuy Phuong', '0721524578', 100, '1999-10-10', '1', NULL)

INSERT INTO Sales
VALUES ('00000001', '2024', '12', 250)
INSERT INTO Sales
VALUES ('00000002', '2024', '12', 200)

ALTER TABLE Sales
ADD CONSTRAINT sale_shop
	FOREIGN KEY (shop_id)
	REFERENCES Shop (shop_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

INSERT INTO Product
VALUES ('00000001', 'Ao mua thu dong 2 lop am ap', '1', 155.456, 'Ao phong baby tee nu theu chu FEARLESSLY', 'ao phong nu', 75.451, '00000001')
INSERT INTO Product
VALUES ('00000002', 'Quan ong rong nu vai dui ', '1', 250.456, 'Quan ong rong MH211', 'quan nu', 100.51, '00000001')

ALTER TABLE Product
ADD CONSTRAINT product_inventory
	FOREIGN KEY (inventory_id)
	REFERENCES Inventory (inventory_id)
	ON DELETE SET NULL
	ON UPDATE CASCADE;

GO
CREATE TRIGGER AbortSellPrice_InsertAndUpdateProduct
ON Product
FOR INSERT, UPDATE
AS
BEGIN
    DECLARE @Count INT = 0

    SELECT @Count = COUNT(*) FROM  Inserted
    WHERE Inserted.sell_price_per_product > 2.5*Inserted.import_price_per_product 
            OR Inserted.sell_price_per_product < 5/3 * Inserted.import_price_per_product
    IF (@Count > 0)
    BEGIN
        PRINT N'Giá bán không hợp lệ'
        ROLLBACK TRAN
    END
END
GO

INSERT INTO Supplier
VALUES ('00000001', 'Cong ty TNHH Thinh Phat', 'Quan 1, Thanh pho Ho Chi Minh', 'thinhphat@gmail.com', '1', '0124564578')
INSERT INTO Supplier
VALUES ('00000002', 'Cong ty TNHH Cong Thuon', 'Quan 8, Thanh pho Ho Chi Minh', 'congthuon@gmail.com', '1', '0124554878')

INSERT INTO Import_bill (supplier_id, inventory_id, ID_import_bill, total_bill)
VALUES ('00000001', '00000001', '00000001', 100000000.00)
INSERT INTO Import_bill (supplier_id, inventory_id, ID_import_bill, total_bill)
VALUES ('00000002', '00000002', '00000002', 200000000.00)

ALTER TABLE Import_bill
ADD CONSTRAINT importbill_supplier
	FOREIGN KEY (supplier_id)
	REFERENCES Supplier (supplier_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

EXEC sp_configure 'show advanced options', 1;
RECONFIGURE;
EXEC sp_configure 'Ad Hoc Distributed Queries', 1;
RECONFIGURE;

INSERT INTO Image 
VALUES ('00000001','0001',(SELECT * FROM OPENROWSET(BULK N'C:\\Users\\LENOVO\\Pictures\\16.png', SINGLE_BLOB) AS image_data));
INSERT INTO Image 
VALUES ('00000001','0002',(SELECT * FROM OPENROWSET(BULK N'C:\\Users\\LENOVO\\Pictures\\16.png', SINGLE_BLOB) AS image_data));        
INSERT INTO Image 
VALUES ('00000002','0001',(SELECT * FROM OPENROWSET(BULK N'C:\\Users\\LENOVO\\Pictures\\16.png', SINGLE_BLOB) AS image_data));     

INSERT INTO Issue_bill (product_id, ID_issue_bill, shop_id)
VALUES ('00000001', '00000001', '00000001')
INSERT INTO Issue_bill (product_id, ID_issue_bill, shop_id)
VALUES ('00000001', '00000002', '00000001')

SELECT * FROM Issue_bill











