INSERT INTO Item (Name, Image, Description, Price)
VALUES
    ('tv', null,  'really good', 15.5),
    ('iphone', 'path/to/image' 'nice one', 16.7),
    ('chair', 'path/to/image' 'nice one', 66),
    ('desk', 'path/to/image' 'nice one', 120),
    ('big desk', 'path/to/image' 'nice one', 150);

INSERT INTO Manager (Name, LastName, Phone)
VALUES
    ('Ivan', 'Stepanenko', '3809811195533'),
    ('Denys', 'Bulava', '3809811144444');

INSERT INTO Client (Name, LastName, Phone, Address)
VALUES
    ('Alexei', 'Garagan', '3809811192222', 'yanhelia 20'), 
    ('Arthur', 'Ryzhyy ', '3809811192333', 'yanhelia 50');


INSERT INTO FinalOrder (Address, Status, HasInvoice, ClientId, ManagerId)
VALUES
    ('yanhelia 15', 'Not paid', 'true', 1, 1),
    ('yanhelia 15', 'Delivered', 'true', 2, 2);


INSERT INTO OrderLine (Quantity, FinalOrderId, ItemId) 
VALUES
    (5, 0, 3),
    (1, 0, 2),
    (6, 1, 3);