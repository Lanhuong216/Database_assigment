use railway;
CREATE TABLE `Product_import` (
  `supplier_id` INT NOT NULL,
  `inventory_id` char(8) DEFAULT NULL,
  `ID_import_bill`  char(8) NOT NULL,
  `quantity_import` int NOT NULL,
  `price_import` decimal(12,2) NOT NULL,
  `product_id` char(8) NOT NULL,
  `remain_quantity` int DEFAULT NULL,
  PRIMARY KEY (`supplier_id`,`ID_import_bill`,`product_id`)
);
CREATE TABLE Employee 
( employee_id         VARCHAR(8)             NOT NULL,
 name			        NVARCHAR(30)             NOT NULL,
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
 Image_C_ID                     BLOB,
 Sex                            CHAR,  
 PRIMARY KEY (employee_id),
 UNIQUE(C_ID),
 CHECK (start_date < end_date));
 CREATE TABLE `Part_time` (
  `employee_id` char(8) NOT NULL,
  `pay_scale` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`employee_id`)
);
  INSERT INTO `Part_time` 
 VALUES ('EM1',12000000),('EM2',10000000);
CREATE TABLE `Full_time` (
  `employee_id` char(8) NOT NULL,
  `position` varchar(20) DEFAULT NULL,
  `salary` decimal(10,2) DEFAULT NULL,
  `contract` varbinary(1024) DEFAULT NULL,
  PRIMARY KEY (`employee_id`)
);
CREATE TABLE `Manager_shop` (
  `employee_id` char(8) NOT NULL,
  `start_date_manage` date DEFAULT NULL,
  `KPI` int DEFAULT NULL,
  `AFF` decimal(10,2) DEFAULT NULL,
  `shop_id` char(8) DEFAULT NULL,
  PRIMARY KEY (`employee_id`)
);
CREATE TABLE `Import_bill` (
  `supplier_id` INT NOT NULL,
  `inventory_id` char(8) NOT NULL,
  `ID_import_bill` char(8) NOT NULL,
  `time_import` timestamp NULL DEFAULT NULL,
  `total_bill` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`supplier_id`,`inventory_id`,`ID_import_bill`)
);
CREATE TABLE `Product_issue` (
  `product_id` char(8) NOT NULL,
  `ID_issue_bill` char(8) NOT NULL,
  `quantity_issue` char(8) NOT NULL,
  PRIMARY KEY (`product_id`,`ID_issue_bill`,`quantity_issue`)
);
CREATE TABLE `Issue_bill` (
  `product_id` char(8) NOT NULL,
  `ID_issue_bill` char(8) NOT NULL,
  `shop_id` char(8) DEFAULT NULL,
  `inventory_id` char(8) DEFAULT NULL,
  `import_date` datetime DEFAULT NULL,
  `export_date` datetime DEFAULT NULL,
  `total_product` int DEFAULT NULL,
  PRIMARY KEY (`product_id`,`ID_issue_bill`),
  KEY `issuebill_shop` (`shop_id`),
  KEY `FK_inventory` (`inventory_id`)
);
CREATE TABLE `Sales` (
  `shop_id` char(8) NOT NULL,
  `Year` char(8) NOT NULL,
  `Month` char(8) NOT NULL,
  `Sale_per_month` int DEFAULT NULL,
  PRIMARY KEY (`shop_id`,`Year`,`Month`)
);
CREATE TABLE `Customer` (
  `customer_id` char(8) NOT NULL,
  `name` varchar(30) NOT NULL,
  `phone_number` char(10) DEFAULT NULL,
  `point` int DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `sex` char(1) DEFAULT NULL,
  `purchase_history` varbinary(1024) DEFAULT NULL,
  email char(30) default NULL,
  address char(150) default null,
  PRIMARY KEY (`customer_id`)
);
CREATE TABLE `Product` (
  `product_id` char(8) NOT NULL,
  `describle` varchar(500) NOT NULL,
  `status` char(1) DEFAULT NULL,
  `sell_price_per_product` decimal(10,3) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `kind` varchar(50) DEFAULT NULL,
  `import_price_per_product` decimal(10,3) DEFAULT NULL,
  `inventory_id` char(8) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `product_inventory` (`inventory_id`)
);
CREATE TABLE `Image` (
  `product_id` char(8) NOT NULL,
  `image_id` char(4) NOT NULL,
  `image` longblob,
  PRIMARY KEY (`product_id`,`image_id`)
);
CREATE TABLE `Supplier` (
  `supplier_id` INT AUTO_INCREMENT NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `location` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `phone_number` char(10) DEFAULT NULL,
  PRIMARY KEY (`supplier_id`)
);
CREATE TABLE `Shop` (
  `shop_id` char(8) NOT NULL,
  `location` varchar(50) DEFAULT NULL,
  `hotline` char(10) DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  PRIMARY KEY (`shop_id`)
);
CREATE TABLE `Marketing_Campaign` (
  `marketing_id` char(8) NOT NULL,
  `budget` decimal(12,2) DEFAULT NULL,
  `objective_customer` varchar(50) DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `content` varchar(50) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`marketing_id`)
);
CREATE TABLE `Belong_to` (
  `shop_id` char(8) NOT NULL,
  `marketing_id` char(8) NOT NULL,
  PRIMARY KEY (`shop_id`,`marketing_id`),
  KEY `belongto_marketingcampaign` (`marketing_id`)
);
CREATE TABLE `Online_marketing` (
  `marketing_id` char(8) NOT NULL,
  `traffic` int DEFAULT NULL,
  PRIMARY KEY (`marketing_id`)
);
CREATE TABLE `Promotion_has_voucher` (
  `voucher_id` char(8) NOT NULL,
  `marketing_id` char(8) NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`voucher_id`,`marketing_id`,`quantity`),
  KEY `hasvoucher_marketing` (`marketing_id`)
);
CREATE TABLE `Condition_voucher` (
  `voucher_id` char(8) NOT NULL,
  `condition_use` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`voucher_id`)
);
CREATE TABLE `Voucher` (
  `voucher_id` char(8) NOT NULL,
  `status` char(1) DEFAULT NULL,
  `price_discount` decimal(10,2) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `customer_id` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`voucher_id`),
  KEY `customer_voucher` (`customer_id`)
);
CREATE TABLE `Order_Bill` (
  `customer_id` char(8) NOT NULL,
  `order_id` INT AUTO_INCREMENT NOT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `voucher_used` char(1) DEFAULT NULL,
  `total_price` decimal(12,2) DEFAULT NULL,
  `shop_id` char(8) NOT NULL,
  `employee_create` char(8) DEFAULT NULL,
  `payment` varchar(8) DEFAULT NULL,
  `status` varchar(50) DEFAULT 'pending',
  PRIMARY KEY (`order_id`),
  KEY `orderbill_shop` (`shop_id`)
);

CREATE TABLE `Product_buy` (
  `customer_id` char(8) NOT NULL,
  `order_id` INT NOT NULL,
  `quantity` int NOT NULL,
  `product_id` char(8) NOT NULL,
  `size` char(8) default null, 
  `color`char(8) default null,
  PRIMARY KEY (`product_id`,`order_id`,`customer_id`)
);
CREATE TABLE `Manager_inventory` (
  `employee_id` char(8) NOT NULL,
  `start_date_manage` date DEFAULT NULL,
  `inventory_id` char(8) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  KEY `managerinventory_inventory` (`inventory_id`)
);
CREATE TABLE `Check_condition` (
  `customer_id` char(8) NOT NULL,
  `order_id` INT NOT NULL,
  `voucher_id` char(8) NOT NULL,
  PRIMARY KEY (`customer_id`,`order_id`,`voucher_id`),
  KEY `check_voucher` (`voucher_id`)
);
CREATE TABLE `id_voucher_can_use` (
  `customer_id` char(8) NOT NULL,
  `order_id` INT NOT NULL,
  `voucher_id` char(8) NOT NULL,
  `id_voucher_can_use` char(8) NOT NULL,
  PRIMARY KEY (`voucher_id`,`order_id`,`customer_id`,`id_voucher_can_use`),
  KEY `checkcondition_canuse` (`customer_id`,`order_id`,`voucher_id`)
);
CREATE TABLE `Check_inventory` (
  `customer_id` char(8) NOT NULL,
  `order_id` INT NOT NULL,
  `product_id` char(8) NOT NULL,
  PRIMARY KEY (`customer_id`,`order_id`,`product_id`),
  KEY `checkinven_product` (`product_id`)
);
CREATE TABLE `Classify` (
  `product_id` char(8) NOT NULL,
  `size` varchar(5) NOT NULL,
  `color` varchar(8) NOT NULL,
  `SKU` varchar(8) NOT NULL,
  `stock` int NOT NULL,
  `image` longblob,
  PRIMARY KEY (`product_id`,`size`,`color`,`SKU`,`stock`),
  UNIQUE KEY `SKU` (`SKU`)
);
CREATE TABLE `Inventory` (
  `inventory_id` char(8) NOT NULL,
  `location` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`inventory_id`)
);

-- Các trigger phục vụ chèn ký tự mặc định cho các id

DELIMITER $$
CREATE TRIGGER before_insert_employee_code
BEFORE INSERT ON Employee
FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(10);

    SELECT COALESCE(MAX(CAST(SUBSTRING(employee_id, 3) AS UNSIGNED)), 0) INTO max_id FROM Employee;
    SET new_id = CONCAT('EM', max_id + 1);
    SET NEW.employee_id = new_id;
END$$
DELIMITER ;
SELECT *FROM Employee;
DELIMITER $$
CREATE TRIGGER before_insert_customer
BEFORE INSERT ON Customer
FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(10);

    SELECT COALESCE(MAX(CAST(SUBSTRING(customer_id, 3) AS UNSIGNED)), 0) INTO max_id FROM Customer;
    SET new_id = CONCAT('CT', max_id + 1);
    SET NEW.customer_id = new_id;
END$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER before_insert_product
BEFORE INSERT ON Product
FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(10);

    SELECT COALESCE(MAX(CAST(SUBSTRING(product_id, 3) AS UNSIGNED)), 0) INTO max_id FROM Product;
    SET new_id = CONCAT('PD', max_id + 1);
    SET NEW.product_id = new_id;
END$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER before_insert_shop
BEFORE INSERT ON Shop
FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(10);

    SELECT COALESCE(MAX(CAST(SUBSTRING(shop_id, 3) AS UNSIGNED)), 0) INTO max_id FROM Shop;
    SET new_id = CONCAT('BR', max_id + 1);
    SET NEW.shop_id = new_id;
END$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER before_insert_marketing
BEFORE INSERT ON Marketing_Campaign
FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(10);

    SELECT COALESCE(MAX(CAST(SUBSTRING(marketing_id, 3) AS UNSIGNED)), 0) INTO max_id FROM Marketing_Campaign;
    SET new_id = CONCAT('MK', max_id + 1);
    SET NEW.marketing_id = new_id;
END$$
DELIMITER ;
 DELIMITER $$
CREATE TRIGGER before_insert_voucher
BEFORE INSERT ON Voucher
FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(10);

    SELECT COALESCE(MAX(CAST(SUBSTRING(voucher_id, 3) AS UNSIGNED)), 0) INTO max_id FROM Voucher;
    SET new_id = CONCAT('VC', max_id + 1);
    SET NEW.voucher_id = new_id;
END$$
DELIMITER ;
 DELIMITER $$
CREATE TRIGGER before_insert_inventory
BEFORE INSERT ON Inventory
FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(10);

    SELECT COALESCE(MAX(CAST(SUBSTRING(inventory_id, 3) AS UNSIGNED)), 0) INTO max_id FROM Inventory;
    SET new_id = CONCAT('IN', max_id + 1);
    SET NEW.inventory_id = new_id;
END$$
DELIMITER ;

-- Insert data

INSERT INTO `Product_import` 
VALUES (1,'IN1','1',5000,2000000,'PD1',4990),
(2,'IN2','2',10000,500000,'PD2',10000);

 INSERT INTO `Employee` (name, phone_number, email, status, birth_date, start_date, end_date, address, employee_id_super, shop_id, C_ID, Image_C_ID, Sex)
 VALUES ('Trần Thị Thùy Dương','0254678123','btttttdttd@gmail.com','1','2004-05-25','2024-01-24',NULL,'232 ký túc xá','EM4','BR1','045304002780',NULL,'F'),
 ('Vũ Đức Duy','0528047507','abchwuh@gmail.com','1','2004-05-24','2024-01-24',NULL,'22 ký túc xá','EM4','BR1','045549895627',NULL,'M'),
 ('Nguyễn Trần Thị Lan Hương','0254878711','hhuong@gmail.com','1','2004-05-27','2024-01-24',NULL,'22 ký túc xá','EM4','BR1','045487856512',NULL,'F'),
 ('Nguyễn Vũ Hoan','0544545154','vuhoan@gmail.com','1','2004-07-27','2024-01-01',NULL,'Ký túc xá khu B',NULL,'BR1','045315689814',NULL,'M'),
  ('Hoàng Lê Đông Hà','0254878751','dongha45@gmail.com','1','2004-09-27','2024-01-24',NULL,'Quận Bình Thanh','EM4','BR2','045487876512',NULL,'F');

INSERT INTO `Full_time` VALUES 
('EM3','Quản lý kho',25000000,NULL),
('EM4','Quản lý nhân viên',36000000,NULL),
('EM5','Nhân viên bán hàng',15000000,NULL);

INSERT INTO `Manager_shop` VALUES ('EM4','2024-01-25',100,12000000,'BR1');


INSERT INTO `Manager_inventory` VALUES ('EM3','2024-01-25','IN1');

INSERT INTO `Import_bill` 
VALUES (1,'IN1','1',NULL,100000000),
(2,'IN2','2',NULL,200000000);

INSERT INTO `Product_issue` 
VALUES ('PD1','1','25'),('PD1','2','5');

INSERT INTO `Issue_bill` 
VALUES ('PD1','1','BR1','IN1','2023-03-12 15:47:23','2023-03-14 10:30:45',120),
('PD1','2','BR1','IN1','2023-06-01 08:12:34','2023-06-03 14:22:10',200),
('PD2','1','BR1','IN2','2023-09-19 09:00:12','2023-09-22 18:45:55',150);

INSERT INTO `Sales` VALUES ('BR1','2024','12',250),('BR2','2024','12',200);

INSERT INTO `Customer` (name, phone_number, point, birth_date, sex, purchase_history, email, address)
 VALUES ('Nguyễn Thị Thương','0325201416',25,'1987-11-12','F',NULL, 'thuongnguyen@gmail.com', 'Vĩnh Sơn - Vĩnh Linh - Quảng Trị'),
 ('Nguyễn Thúy Phương','0721524578',100,'1999-10-10','F',NULL, 'phuongphuong15@gmail.com', 'Quận 12 - Thành phố Hồ Chí Minh'),
 ('Hoàng Thị Thu Hoài','0792030112',125,'2004-11-11','F',NULL, 'thuhoaihoangthi@gmail.com', 'Mỏ Cày Nam - Tỉnh Bến Tre'),
 ('Phan Kim Tuyến','0232039910',150,'2003-12-11','F',NULL, 'phankimtuyen1525@gmail.com', 'Thị trấn Hồ Xá - Vĩnh Linh - Quảng Trị');
 
INSERT INTO `Product` (`describle`, `status`,   `sell_price_per_product`, name, kind, import_price_per_product, inventory_id)
VALUES ('Áo mùa thu đông 2 lớp ấm áp','1',155.456,'Áo phông baby tee nữ thêu FEARLESSLY','áo phông nữ',75.451,'IN1'),
('Quần ống rộng nữ vải đủi ','1',250.456,'Quần ống rộng MH211','quần nữ',100.510,'IN1');

INSERT INTO `Image` VALUES 
('PD1','0001',NULL),('PD1','0002',NULL),('PD2','0001',NULL);

INSERT INTO `Supplier` (name, location, email, status, phone_number)
VALUES ('Công ty TNHH Thịnh Phát','Quận 1 - Thành phố Hồ Chí Minh','thinhphat@gmail.com','1','0124564578'),
('Công ty TNHH Công Thương','Quận 8 - Thành phố Hồ Chí Minh','congthuong@gmail.com','1','0124554878');

INSERT INTO `Shop` (location, hotline, status)
VALUES ('Quận 1 - Thành phố Hồ Chí Minh','0123456789','1'),
('Quận 8 - Thành phố Hồ Chí Minh','0455676289','1'),
('Quận Phú Nhuận - Thành phố Hồ Chí Minh','0349832985','1'),
('Quận Nam Từ Liên - Hà Nội','0982847201','1');

INSERT INTO `Marketing_Campaign` (budget, objective_customer,status,content,start_date,end_date)
VALUES (50000000.00,'new','1','Attract new customers','2024-12-01','2024-12-30'),
(10000000.00,'women','0','Happy Vietnamese Womens Day','2024-10-16','2024-10-21');

INSERT INTO `Belong_to` 
VALUES ('BR1','MK1'),
('BR2','MK2'),
('BR1','MK2');

INSERT INTO `Online_marketing` VALUES ('MK1',1500);

INSERT INTO `Promotion_has_voucher` VALUES ('VC2','MK2',500);

INSERT INTO `Condition_voucher` 
VALUES ('VC1','Đơn từ 300k'),
('VC2','Đơn từ 250k');

INSERT INTO `Voucher` (status,price_discount,name,customer_id)
 VALUES ('1',20000.00,'voucher giảm 20k','CT1'),
 ('1',15000.00,'voucher giảm 20k','CT2');
 
INSERT INTO `Order_Bill` (customer_id,create_date,voucher_used,total_price,shop_id,employee_create,payment,status)
VALUES ('CT1',NULL,'0',500000.00,'BR1','EM1','1','done'),
('CT2',NULL,'0',200000.00,'BR1','EM2','1','error'),
('CT3',NULL,'0',700000.00,'BR1','EM1','1','done'),
('CT4',NULL,'0',800000.00,'BR2','EM2','1','done');

INSERT INTO `Product_buy`
 VALUES ('CT1',1,1,'PD1','L','green'),
 ('CT1',2,2,'PD1','XL','red'),
 ('CT1',3,10,'PD2','L', 'blue'),
 ('CT1',4,10,'PD2','M','red');

INSERT INTO `Check_condition` 
VALUES ('CT1',1,'VC1'),
('CT2',2,'VC2');

INSERT INTO `id_voucher_can_use` 
VALUES ('CT1',1,'VC1','1'),
('CT2',2,'VC2','2');

INSERT INTO `Check_inventory` VALUES
 ('CT1',1,'PD1'),
 ('CT2',2,'PD1');

INSERT INTO `Classify`
 VALUES ('PD1','L','green','AB000002',39,NULL),
 ('PD1','XL','red','AB000001',45,NULL),
  ('PD2','L','blue','BB000001',45,NULL),
 ('PD2','M','Red','BB000002',50,NULL);
 
INSERT INTO `Inventory` (location)
VALUES
 ('Quận 1 - Thành phố Hồ Chí Minh'),
 ('Thành phố Đà Nẵng');

-- Liên kết khóa ngoại 

 ALTER TABLE Part_time
ADD CONSTRAINT part_employee
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
    
ALTER TABLE Manager_shop
ADD CONSTRAINT fulltime_managershop
	FOREIGN KEY (employee_id)
	REFERENCES Full_time (employee_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;
    
ALTER TABLE Manager_inventory
ADD CONSTRAINT fulltime_managerinventory
	FOREIGN KEY (employee_id)
	REFERENCES Full_time (employee_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE Employee
ADD CONSTRAINT shop_employee
	FOREIGN KEY (shop_id)
	REFERENCES Shop (shop_id)
    ON DELETE SET NULL
	ON UPDATE CASCADE;

ALTER TABLE Manager_inventory
ADD CONSTRAINT managerinventory_inventory
	FOREIGN KEY (inventory_id)
	REFERENCES Inventory (inventory_id)
	ON DELETE SET NULL
	ON UPDATE CASCADE;

ALTER TABLE Sales
ADD CONSTRAINT sale_shop
	FOREIGN KEY (shop_id)
	REFERENCES Shop (shop_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE Product
ADD CONSTRAINT product_inventory
	FOREIGN KEY (inventory_id)
	REFERENCES Inventory (inventory_id)
	ON DELETE SET NULL
	ON UPDATE CASCADE;

ALTER TABLE Order_Bill
ADD CONSTRAINT order_employee
	FOREIGN KEY (employee_create)
	REFERENCES Employee (employee_id)
	ON DELETE NO ACTION
	ON UPDATE CASCADE; 
    
ALTER TABLE Import_bill
ADD CONSTRAINT importbill_supplier
	FOREIGN KEY (supplier_id)
	REFERENCES Supplier (supplier_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

ALTER TABLE Issue_bill
ADD CONSTRAINT issuebill_product
	FOREIGN KEY (product_id)
	REFERENCES Product (product_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

ALTER TABLE Issue_bill
ADD CONSTRAINT issuebill_shop
	FOREIGN KEY (shop_id)
	REFERENCES Shop (shop_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

ALTER TABLE Classify
ADD CONSTRAINT classify_product
	FOREIGN KEY (product_id)
	REFERENCES Product (product_id)
	ON UPDATE CASCADE
	ON DELETE CASCADE;

ALTER TABLE Product_issue
ADD CONSTRAINT issuebill_productissue
	FOREIGN KEY (product_id,ID_issue_bill)
	REFERENCES Issue_bill (product_id,ID_issue_bill)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

ALTER TABLE Belong_to
ADD CONSTRAINT belongto_shop
	FOREIGN KEY (shop_id)
	REFERENCES Shop (shop_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;
    
ALTER TABLE Belong_to
ADD CONSTRAINT belongto_marketingcampaign
	FOREIGN KEY (marketing_id)
	REFERENCES Marketing_Campaign (marketing_id)
	ON UPDATE CASCADE
	ON DELETE CASCADE;

ALTER TABLE Image
ADD CONSTRAINT image_product
	FOREIGN KEY (product_id)
	REFERENCES Product (product_id)
	ON UPDATE CASCADE
	ON DELETE CASCADE;
    
ALTER TABLE Online_marketing
ADD CONSTRAINT online_marketing
	FOREIGN KEY (marketing_id)
	REFERENCES Marketing_Campaign (marketing_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

ALTER TABLE Promotion_has_voucher
ADD CONSTRAINT hasvoucher_marketing
	FOREIGN KEY (marketing_id)
	REFERENCES Marketing_Campaign (marketing_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;
    
ALTER TABLE Promotion_has_voucher
ADD CONSTRAINT hasvoucher_voucher
	FOREIGN KEY (voucher_id)
	REFERENCES Voucher (voucher_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

ALTER TABLE Product_import
ADD CONSTRAINT productimport_importbill
	FOREIGN KEY (supplier_id, inventory_id,ID_import_bill) 
	REFERENCES Import_bill (supplier_id, inventory_id,ID_import_bill) 
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

ALTER TABLE Order_Bill 
ADD CONSTRAINT orderbill_shop
	FOREIGN KEY (shop_id)
	REFERENCES Shop (shop_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;
    
ALTER TABLE Order_Bill 
ADD CONSTRAINT orderbill_customer
	FOREIGN KEY (customer_id)
	REFERENCES Customer (customer_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

ALTER TABLE Check_inventory
ADD CONSTRAINT checkinven_product
	FOREIGN KEY (product_id)
	REFERENCES Product (product_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;
    
ALTER TABLE id_voucher_can_use
ADD CONSTRAINT checkcondition_canuse
	FOREIGN KEY (`customer_id`,`order_id`,`voucher_id`)
	REFERENCES Check_condition (`customer_id`,`order_id`,`voucher_id`)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

ALTER TABLE Product_buy
ADD CONSTRAINT productbuy_orderbill
	FOREIGN KEY (order_id )
	REFERENCES Order_Bill (order_id )
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

ALTER TABLE Condition_voucher
ADD CONSTRAINT condition_voucher
	FOREIGN KEY (voucher_id)
	REFERENCES Voucher (voucher_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

ALTER TABLE Check_condition
ADD CONSTRAINT check_orderbill
	FOREIGN KEY (order_id)
	REFERENCES Order_Bill (order_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

ALTER TABLE Check_condition
ADD CONSTRAINT checkcondition_canuse
	FOREIGN KEY (order_id)
	REFERENCES Order_Bill (order_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;
    
ALTER TABLE Check_condition
ADD CONSTRAINT check_voucher
	FOREIGN KEY (voucher_id)
	REFERENCES Voucher (voucher_id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

-- Trigger cho hệ thống

DELIMITER $$
CREATE TRIGGER AbortYoungerThan18_InsertEmployee
BEFORE INSERT ON Employee
FOR EACH ROW
BEGIN
     IF TIMESTAMPDIFF(YEAR, NEW.birth_date, CURDATE()) < 18 THEN
         SIGNAL SQLSTATE '45000'
         SET MESSAGE_TEXT = 'Employees must be older than 18 years old';
     END IF;
END;

CREATE TRIGGER AbortOlderThan55_FullTime
BEFORE INSERT ON Full_time
FOR EACH ROW
BEGIN
     -- Kiểm tra tuổi nhân viên trong bảng Employee
     IF EXISTS (
         SELECT 1
         FROM Employee
         WHERE Employee.employee_ID = NEW.employee_id
           AND TIMESTAMPDIFF(YEAR, Employee.birth_date, CURDATE()) > 55
     ) THEN
         SIGNAL SQLSTATE '45000'
         SET MESSAGE_TEXT = 'Full_time employees must be younger than 55 years old';
     END IF;
 END;

CREATE TRIGGER Check_Insert_full_time
BEFORE INSERT ON Full_time
FOR EACH ROW
BEGIN
     -- Kiểm tra nếu nhân viên đã tồn tại trong bảng Part_time
     IF EXISTS (SELECT 1 FROM Part_time WHERE employee_id = NEW.employee_ID) THEN
         SIGNAL SQLSTATE '45002'
         SET MESSAGE_TEXT = 'Employee already existed in Part_time';
     END IF;
 END;

CREATE TRIGGER AbortYoungerThan22_ManagerShop
BEFORE INSERT ON Manager_shop
FOR EACH ROW
BEGIN
     -- Kiểm tra tuổi nhân viên trong bảng Employee
     IF EXISTS (
         SELECT 1
         FROM Employee
         WHERE Employee.employee_ID = NEW.employee_id
           AND TIMESTAMPDIFF(YEAR, Employee.birth_date, CURDATE()) < 22
     ) THEN
         SIGNAL SQLSTATE '45000'
         SET MESSAGE_TEXT = 'Managers must be older than 22 years old';
     END IF;
 END;


CREATE TRIGGER AbortOlderThan35_PartTime
BEFORE INSERT ON Part_time
FOR EACH ROW
BEGIN
     -- Kiểm tra tuổi nhân viên trong bảng Employee
     IF EXISTS (
         SELECT 1
         FROM Employee
         WHERE Employee.employee_ID = NEW.employee_id
           AND TIMESTAMPDIFF(YEAR, Employee.birth_date, CURDATE()) > 35
     ) THEN
         SIGNAL SQLSTATE '45000'
         SET MESSAGE_TEXT = 'Part_time employees must be younger than 35 years old';
     END IF;
 END;


CREATE TRIGGER Check_Insert_part_time
BEFORE INSERT ON Part_time
FOR EACH ROW
BEGIN
     -- Kiểm tra nếu nhân viên đã tồn tại trong bảng Full_time
     IF EXISTS (SELECT 1 FROM Full_time WHERE employee_id = NEW.employee_ID) THEN
         SIGNAL SQLSTATE '45002'
         SET MESSAGE_TEXT = 'Employee already existed in Full_time';
     END IF;
 END;

CREATE TRIGGER AbortSellPrice_Insert_Product
BEFORE INSERT ON Product
FOR EACH ROW
BEGIN
 	IF EXISTS (
         SELECT 1
         FROM Product
         WHERE NEW.sell_price_per_product > 2.5 * NEW.import_price_per_product 
             OR NEW.sell_price_per_product < (5/3) * NEW.import_price_per_product
     ) THEN
         SIGNAL SQLSTATE '45001'
         SET MESSAGE_TEXT = 'The price is invalid';
     END IF;
END;

CREATE TRIGGER AbortSellPrice_Update_Product
BEFORE UPDATE ON Product
FOR EACH ROW
BEGIN
 	IF EXISTS (
         SELECT 1
         FROM Product
         WHERE NEW.sell_price_per_product > 2.5 * NEW.import_price_per_product 
             OR NEW.sell_price_per_product < (5/3) * NEW.import_price_per_product
     ) THEN
         SIGNAL SQLSTATE '45001'
         SET MESSAGE_TEXT = 'The price is invalid';
     END IF;
 END; 

CREATE TRIGGER reduce_quantity
AFTER INSERT ON Product_buy
FOR EACH ROW
BEGIN
     Update Product_import
     set remain_quantity = remain_quantity - NEW.quantity
     where (NEW.product_id = Product_import.product_id);
 END $$
 DELIMITER ;



